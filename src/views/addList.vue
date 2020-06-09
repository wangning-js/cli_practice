<template>
    <div>
        <form>
            <div class="form-group">
                <label for="exampleInputPassword1">英雄姓名</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="请输入英雄姓名..." v-model.trim="heroName">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">英雄性别</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="请输入英雄性别..." v-model.trim="heroGender">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="addHero">确认添加</button>
        </form>
    </div>
</template>

<script>
// import axios from 'axios';
export default {
    data(){
        return{
            heroName:'',
            heroGender:''
        }
    },
    methods:{
        addHero(){
            if(this.heroName===''||this.heroGender==='')  return  alert('英雄信息不能为空');
            // 发添加请求    http://localhost:3000/hero
                this.axios.post('/hero',{
                    // 注意key参照后台 id自增
                    name:this.heroName,
                    gender:this.heroGender,
                    time:new Date()
                }).then(()=>{
                    alert('添加成功')
                    this.$router.push('/hero')
                })
        }
    }
}
</script>