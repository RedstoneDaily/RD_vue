<script setup>
import ContentTop from './ContentPage/ContentTop.vue';
import ContentList from './ContentPage/ContentList.vue';

</script>

<template>
    <div class="content-page">
        <ContentTop></ContentTop>
        <ContentList></ContentList>
    </div>
</template>

<style scoped>
.content-page {
    width: 100%;
    min-height: 100vh;
    background-color: #d9d9d9;
}
</style>