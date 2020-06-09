<template>
    <div>
         <form>
            <div class="form-group">
                英雄姓名
                <input type="text" class="form-control" value=""  v-model.trim="heroName">
            </div>
            <div class="form-group">
                英雄性别
                <input type="text" class="form-control"   v-model.trim="heroGender">
            </div>
            <div class="form-group">
                编辑时间
                <input type="text" class="form-control"  v-model.trim="heroTime">
            </div>
            <button type="submit" class="btn btn-info" @click.prevent="editHero">确认修改</button>
        </form>
    </div>
</template>
<script>
    // import axios from 'axios';
export default {
    data(){
        return{
            heroName:'',
            heroGender:'',
            heroTime:''
        }
    },
    methods:{
        // 通过id获取英雄详情信息并展示
            shouHeroInfo(){
                let id = this.$route.query.id;
                this.axios.get('/hero/'+id)
                .then(res=>{
                    this.heroName=res.data.name;
                    this.heroGender=res.data.gender;
                    this.heroTime=res.data.time;
                })
            },
        // 发送修改请求
        editHero(){
            let id = this.$route.query.id;
            this.axios.patch('/hero/'+id,{
                id,
                name:this.heroName,
                gender:this.heroGender,
                time:new Date() || this.heroTime ,
            }).then((res)=>{
                console.log(res);
                
                alert('编辑成功')
                this.$router.push('/hero')
            }).catch(err=>{
                console.log(err)
            })
        }
    },
    created(){
        this.shouHeroInfo()
    }
}
</script>