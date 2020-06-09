<template>
  <div id="app" class="container">
      <nav-bar></nav-bar>
      <div class="row">
        <div class="col-md-2 col-lg-2">
          <my-aside></my-aside>
        </div>
        <div class="col-md-10 col-lg-10">
          <!-- 路由占位符 -->
         <transition name="box">
            <router-view></router-view>
         </transition>
        </div>
      </div>
  </div>
</template>

<script>
import navBar from './components/navBar.vue'
import myAside from './components/myAside.vue'
export default {
  name: 'App',
  components: {
    navBar,
    myAside
  }
}
</script>

<style >
  .box-enter{
    transform: translateY(20px);
    opacity: 0;
  }
  .box-enter-active{
    transition: all 2s;
  }
  .box-enter-to{
      opacity: 1;
  }

</style>


