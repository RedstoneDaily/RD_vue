<script setup lang="ts">
/**
 * A demo of Redstone Search page.
 *
 * @component RDSerachView
 * @description AcaciaMC Demo 页面
 * @props ???
 * @event ???
 *
 * know problems:
 * - 真的应该用url-polyfill吗？
 */

import { ref, Ref, inject, onMounted } from "vue";
import "url-polyfill";

import ToolTop from "@/components/toolbar/ToolTop.vue";

import { loadPyodide, PyodideInterface } from "pyodide";
const pyodide : Ref<PyodideInterface> = ref(null);
const micropip = ref(null);

type OutputFile = {["name"]: string, ["content"]: string};
const sourceCode = ref("");
const outputs : Ref<OutputFile[]> = ref(null);

const pyEnvSetup = async () => {
	const _pyodide = await loadPyodide();
	// 神必东西自带的micropip自己装不了还要我手动装
	await _pyodide.loadPackage("micropip-0.6.0-py3-none-any.whl");
	await _pyodide.loadPackage("packaging-24.1-py3-none-any.whl");
	const _micropip = _pyodide.pyimport("micropip");
	await _micropip.install("acaciamc");
	pyodide.value = _pyodide;
	micropip.value = _micropip;
}

const compileAcacia = async () => {
	const _pyodide = pyodide.value;
	const _micropip = micropip.value;
	const srcPath = "src.aca";
	const outDirPath = "build";
	let _outputs : OutputFile[] = [];

	// 将源代码写入文件
    _pyodide.FS.writeFile(srcPath, sourceCode);
	_pyodide.FS.mkdir(outDirPath);

    // 运行 Acacia 编译器
    try {
        _pyodide.runPython(`
import sys
from acaciamc import cli
cli.run(cli.build_argparser().parse_args(["src.aca", "-o", "build"]))
        `);
		// 读取build文件夹下的文件
		const entries = _pyodide.FS.readdir(outDirPath);
		for (const entry in entries) {
			const fullPath = `${outDirPath}/${entry}`;
			if(!_pyodide.FS.isFile(fullPath)) continue;
            const content = _pyodide.FS.readFile(fullPath, { encoding: 'utf8' });
            _outputs.push({ name: entry, content: content });
		}
        outputs.value = _outputs;
    } catch (err) {
		console.error(err);
		outputs.value = [{ name: "error", content: err }];
    }
};

onMounted(() =>
	Promise.all([
		pyEnvSetup(),
	]),
);
</script>

<template>
  <div id="page">
    <ToolTop />
    <div id="container">
      <h1>Acacia编译器 demo</h1>
      <!-- <div
        style="
          width: 90vw;
          height: 30vw;
          font-size: 5vw;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        To be continued...
      </div> -->
      <h2>源代码</h2>
      <textarea
        id="source-code"
        v-bind:value="sourceCode"
        rows="15"
        cols="60"
      ></textarea>
      <button @click="compileAcacia">编译</button>
      <pre class="output" v-for="output in outputs">{{ output.content }}</pre>
    </div>
  </div>
</template>

<style scoped>
#page {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  color: white;
  background: #202020;
}

#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

#source-code {
  font-size: 1.2em;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.output {
  font-size: 1.2em;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: black;
  width: 50%;
  height: 40vh;
}
</style>
