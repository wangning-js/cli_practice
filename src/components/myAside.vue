<template>
    <div class="list-group">
        <router-link to="/hero" class="list-group-item ">英雄列表</router-link>
        <router-link to="/zhuang" class="list-group-item">装备列表</router-link>
        <router-link to="/skill" class="list-group-item">技能列表</router-link>
    </div>
</template>


<style>
/* 激活路由样式  还可以通过路由对象配置选项 likeExactActiveClass
    .list-group-item.router-link-exact-active 
     .list-group-item.router-link-exact-active:hover, 
     .list-group-item.router-link-exact-active:focus {
    z-index: 2;
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
} */
</style>