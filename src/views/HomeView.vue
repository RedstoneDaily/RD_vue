<script setup>
import { ref } from 'vue'
import TitlePage from './HomeView/TitlePage.vue'
import BlurbPage from './HomeView/BlurbPage.vue'

// 捕获鼠标上下滚动事件
const pages = ref(0)
const totalPages = 5
let isThrottled = false

window.addEventListener('mousewheel', function (e) {
  e.preventDefault();
  if (isThrottled) return;

  isThrottled = true;
  const delta = e.wheelDelta || -e.detail;

  if (delta > 0) {
    // 向上滚动
    pages.value = pages.value === 0 ? totalPages - 1 : (pages.value - 1) % totalPages;
  } else if (delta < 0) {
    // 向下滚动
    pages.value = (pages.value + 1) % totalPages;
  }

  setTimeout(() => {
    isThrottled = false;
  }, 500); // 0.5秒的延迟
}, false);
</script>

<template>
  <!-- <button style="position: relative;z-index: 999;" @click="pages = pages == 0 ? 5 : pages-1">点击{{ pages }}</button> -->
  <TitlePage class="page" :pages-num="pages" />
  <BlurbPage class="page" :pages-num="pages" />
</template>

<style scoped>
.page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  right: 0;
  bottom: 0;
  overflow: hidden;

  transition: all 0.3s;
}
</style>
