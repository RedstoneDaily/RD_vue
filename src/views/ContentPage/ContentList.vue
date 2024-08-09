<script setup>
import ContentItem1st from '@/components/content/ContentItem1st.vue';
import ContentItem2nd from '@/components/content/ContentItem2nd.vue';
import ContentItem3rd from '@/components/content/ContentItem3rd.vue';

import ContentItem from '@/components/content/ContentItem.vue';
</script>

<template>
    <div class="content-list">
        <!-- 头部三个 -->
        <div class="content-list-top">
            <!-- 左边 -->
            <div class="item_1st">
                <ContentItem1st></ContentItem1st>
            </div>
            <!-- 右边 -->
            <div class="item_right">
                <div class="item item_2nd">
                    <ContentItem2nd></ContentItem2nd>
                </div>
                <div class="item item_3rd">
                    <ContentItem3rd></ContentItem3rd>
                </div>
            </div>
        </div>
        <!-- 其他 -->
        <div class="content-list-other">
            <ContentItem></ContentItem>
            <ContentItem></ContentItem>
            <ContentItem></ContentItem>
        </div>
    </div>
</template>

<style scoped>
/* div {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .1);
} */

/* 宽度最大为1280px */
.content-list {
    max-width: 1280px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* 头部布局，flex，横向布局，间距20px */
.content-list-top {
    display: flex;
    gap: 20px;
    flex-direction: row;
}

/* 各种块item的初始值，宽度最小500px 高度最小120px  */
.item {
    min-width: 500px;
    min-height: 120px;
    box-shadow: 0 2px 6px 1px #00000020;
    /* 暂时显示一下 */
    /* background-color: var(--RD-color-white); */
}

/* 头条块的基本样式，默认宽度500px 高度280px，根据宽度比例分配 */
.item_1st {
    flex: 1 0 480px;
    height: 300px;
    display: flex;
    box-shadow: 0 2px 6px 1px #00000040;

    transition: all 0.5s ease-out;
}

/* 右边块的基本样式，默认宽度500px(跟头条块实现平均分配空间)，并设置flex布局，使子元素间隔20px */
.item_right {
    flex: 1 0 480px;
    display: flex;
    gap: 20px;
    flex-direction: column;
}

/* 子元素基本样式，默认高度120px */
.item_2nd {
    flex: 1 0 120px;
    display: flex;
}

.item_3rd {
    flex: 1 0 120px;
    display: flex;
}


.content-list-other{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}


/* 当页面宽度小于1024px时的样式 */
@media screen and (max-width: 1024px) {
    .content-list {
        padding: 0 14px;
        max-width: 560px;
    }

    .item_right {
        flex: 1 0 240px;
    }

    .item_1st {
        flex: 1 0 240px;
        height: 200px;
    }

    .content-list-top {
        flex-direction: column;
    }
}
</style>