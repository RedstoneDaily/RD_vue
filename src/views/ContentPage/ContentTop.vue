<script setup>
</script>

<template>
    <div class="content-top">
        <!-- 盒子黑色滤镜 -->
        <div class="shadow"></div>

        <!-- 底部灰色块阴影 -->
        <!-- <div class="bottom_gray_shadow"></div> -->
        <!-- 底部灰色块 -->
        <div class="bottom_gray_piece">
            <div class="bottom_gray_piece2"></div>
        </div>

        <!-- 左边红色块阴影 -->
        <div class="left_red_shadow"></div>
        <!-- 左边红色块 -->
        <div class="left_red_piece">
            <div class="left_red_piece2"></div>
        </div>
        <!-- 左边标题 -->
        <h1 class="title">红石日报</h1>

        <!-- 右边黑色块 -->
        <div class="right_black_piece">
            <!-- 块1 -->
            <div class="right_black_piece1"></div>
            <!-- 块2 -->
            <div class="right_black_piece2"></div>
            <!-- 块3 -->
            <div class="right_black_piece3"></div>
        </div>

        <!-- 右边日期块 -->
        <span class="date">[24.08.08]</span>
    </div>
</template>

<style scoped>
.content-top {
    position: relative;
    width: 100%;
    height: 206px;
    background-image: url(/src/assets/background/rd-nn.png);
    background-size: 100%;
    background-position: 0% 70%;
    box-shadow: 0px 2px 6px 2px #00000080;
    /* overflow: hidden; */
}

.title {
    margin: 0;
    font-size: 80px;
    color: var(--RD-color-white);
    font-weight: normal;

    position: absolute;
    transform: translateY(50%);
    bottom: 85px;
    left: 15px;

    transition: all 0.5s ease-out;
}

.shadow {
    width: 100%;
    height: 100%;
    background-color: #0000005b;
}

.left_red_shadow {
    width: 40%;
    height: 50px;
    background-color: #0000005b;
    transform: skewX(-22deg);

    position: absolute;
    bottom: 40px;

    filter: blur(3px);
}

.left_red_piece {
    /* 宽高、背景颜色、路径切割 */
    width: 40%;
    height: 50px;
    background-color: var(--RD-color-red-50);
    clip-path: polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%);
    filter: drop-shadow(8px 10px 15px #000000);

    /* 定位布局 */
    position: absolute;
    bottom: 50px;
}

.left_red_piece2 {
    filter: drop-shadow(8px 10px 15px #000000);
    width: calc(100% - 20px);
    height: 100%;
    background-color: var(--RD-color-red);
    clip-path: polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%);
}

.right_black_piece {
    width: 60%;
    height: 60px;
    /* background-color: aqua; */

    position: absolute;
    right: 0;
    bottom: 20px;
}

.right_black_piece1 {
    width: calc(100% - 5px);
    height: 50px;
    background-color: var(--RD-color-black);
    clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%);

    position: absolute;
    right: 0;
}

.right_black_piece2 {
    width: calc(100% - 3px);
    height: 2px;
    background-color: var(--RD-color-black);

    position: absolute;
    right: 0;
    bottom: 5px;
}

.right_black_piece3 {
    width: 100%;
    height: 2px;
    background-color: var(--RD-color-black-50);

    position: absolute;
    right: 0;
    bottom: 0;
}

.date {
    color: var(--RD-color-text-white);
    font-size: 40px;

    position: absolute;
    right: 0;
    bottom: 70px;
}

.bottom_gray_shadow {
    width: 75%;
    height: 62px;
    background-color: #0000005b;
    transform: skewX(-22deg);
    filter: blur(3px);

    position: absolute;
    right: 0;
    bottom: -4px;
}

.bottom_gray_piece {
    width: 75%;
    height: 62px;
    background-color: var(--RD-color-gray-50);
    clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%);

    position: absolute;
    right: 0;
    bottom: -2px;
}

.bottom_gray_piece2 {
    width: calc(100% - 20px);
    height: 100%;
    background-color: var(--RD-color-gray);
    clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%);

    position: absolute;
    right: 0;
}

@media screen and (max-width: 1024px) {
    .title {
        font-size: 50px;
        bottom: 100px;
    }
}
</style>