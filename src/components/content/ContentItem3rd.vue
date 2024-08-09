<script setup>
</script>

<template>
    <div class="news-module2">
        <!-- 封面图 -->
        <img height="100%" src="/3.png" alt="">
        <!-- 排名3 -->
        <div class="rank-third">
            <div class="text">
                <h1>3</h1>
                <span>rd</span>
            </div>
        </div>
        <!-- 内容 -->
        <div class="content">
            <div class="content_block1">
                <div class="content_block3"></div>
            </div>
            <div class="content_block2"></div>
            <div class="title">【新世界记录】高速2x2玻璃门</div>
            <!-- 械电图标 -->
            <div class="icon">
                <img src="/src/assets/icon/xiedian.svg" alt="">
            </div>
            <div class="synopsis">
                作者：cc_charlie（我） <br>
                体积：288blocks <br>
                关门：0s（0.15s无痕处理）开门：0.15
            </div>
            <div class="author">
                <img src="/src/assets/icon/bilibili.svg" alt="">
                <span>CC-Charlie</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.news-module2 {
    flex: 1;
    position: relative;
    --text-height: 50px;
}

/* ========排名3样式======== */
.rank-third {
    width: 80px;
    height: 80px;
    color: var(--RD-color-white);
    background-color: var(--RD-color-red-50);
    clip-path: polygon(0 0, 100% 100%, 0 100%);

    position: absolute;
    left: -4px;
    bottom: -4px;
}

.rank-third .text {
    position: absolute;
    bottom: 2px;
    left: 2px;
}

.rank-third h1 {
    display: inline;
    font-size: 46px;
}

/* ========具体内容样式======== */
.content {
    min-width: 360px;
    width: calc(100% - 160px);
    height: calc(100% + 6px);
    clip-path: polygon(40px 0, 100% 0, 100% 100%, 0 100%);
    background-color: var(--RD-color-white-50);

    position: absolute;
    right: 0;
    bottom: 0;
}
.content .icon {
    position: absolute;
    right: 0;
    width: 40px;
    height: var(--text-height);
    background-color: var(--RD-color-red);
}
.content img {
    position: absolute;
    right: 6px;
    top: calc((var(--text-height)/2) - 12px);
}

/* 第一层白色块 */
.content_block1 {
    width: calc(100% - 20px);
    height: 100%;
    clip-path: polygon(40px 0, 100% 0, 100% 100%, 0 100%);
    background-color: var(--RD-color-white);

    position: absolute;
    right: 0;
    bottom: 0;
}

/* 第二层透明红色块 */
.content_block2 {
    width: 100%;
    height: var(--text-height);
    background-color: var(--RD-color-red-50);

    position: absolute;
    right: 0;
    top: 0;
}

/* 第三层红色块 */
.content_block3 {
    width: 100%;
    height: var(--text-height);
    background-color: var(--RD-color-red);

    position: absolute;
    right: 0;
    top: 0;
}

.title {
    line-height: var(--text-height);
    font-size: 26px;
    color: var(--RD-color-white);
    position: absolute;
    top: 0px;
    left: 60px;
}

.synopsis {
    font-size: 15px;
    color: var(--RD-color-black);
    position: absolute;
    top: var(--text-height);
    left: 60px;
}
/* 底部作者标签 */
.content .author {
    width: 100%;
    height: 24px;
    position: absolute;
    bottom: 0;
    left: 40px;
}

.content .author img {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0;
    left: 0;
}

.content .author span {
    position: absolute;
    left: 24px;
    top: 0;
}
</style>