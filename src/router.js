// 引入vue
import Vue from 'vue'

// 引入vue-router路由第三方包
import VueRouter from 'vue-router';
Vue.use(VueRouter);// 使用vue路由  

// 引入路由
import heroList from './views/heroList';
import zhuangList from './views/zhuangList';
import skillList from './views/skillList';
import addList from './views/addList';
import editList from './views/editList'
// 配置路由
let routes = [
  {path:'/',redirect:'/hero'},
  {path:'/hero',component:heroList},
  {path:'/zhuang',component:zhuangList},
  {path: '/skill', component: skillList },
  {path: '/add', component: addList },
  {path: '/edit', component: editList },
  
];

// 初始化路由
let router = new VueRouter({ routes,linkExactActiveClass:'active' })

// 导出路由对象
export default router