<template>
    <div>
         <button class="btn btn-info" @click.prevent="toAdd">添加英雄</button>
                <hr>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>英雄姓名</th>
                            <th>英雄性别</th>
                            <th>创建时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in heroList" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.gender}}</td>
                            <td>{{item.time | newTime}}</td>
                            <td>
                                <button class="btn btn-success" style="margin-right:10px;" @click.prevent="toEdit(item.id)">编辑</button>
                                <button class="btn btn-danger" @click.prevent="remove(item.id)">删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
    </div>
</template>

<script>
// 导入axios第三方包
import axios from 'axios';
// 导入moment
import moment from 'moment'
export default {
    data(){
        return{
            heroList:''
        }
    },
    // 配置顾虑器过滤时间
    filters:{
        newTime:time=>{
            // 参数是管道符前边的数
            return moment(time).format('YYYY-DD-MM HH:mm:ss'); 
        }
    },
    methods:{
        getHeroList(){
            // 发送请求json-server模拟的接口   http://localhost:3000/hero 
            axios.get('http://localhost:3000/hero')
            .then(res=>{
                this.heroList=res.data
            })
        },
        remove(id){
                if(confirm('是否确认删除')){
                        axios.delete('http://localhost:3000/hero/'+id)
                .then(()=>{
                    alert('删除成功')
                    this.getHeroList()
                })
            }
        },
        // 添加英雄切换路由
        toAdd(){
            // 编程式链接
            this.$router.push('/add')
        },
        toEdit(id){
            this.$router.push({path:'/edit',query:{id}})
        }

           
    },
    created(){
        // 组件加载完毕渲染页面
        this.getHeroList()
    }
}
</script>