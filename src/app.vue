<template>
    <div>
        <formComponent :currentForm="allData"></formComponent>
    </div>
</template>
<script>
import formComponent from "./component/renderForm.vue"
export default {
    components:{
        formComponent
    },
    mounted(){
        this.fetchData();
    },
    data() {
        return {
            allData:[{
                name:"测试输入框",
                props:{
                    data: "测试啊测试",
                    class:{
                       display:"inline-block",
                       width:"70px"
                    }
                },
                component:"InputItem",
            }]      
        }
    },
    methods:{
        fetchData(){
            // let self = this;
            // request.post().then(res=>{
            //     self.allData = self.mapToSchema()
            // }).catch(()=>{});
        },
        mapToSchema(){
            //business-schema映射文件，有余时间就补上
        }
    }
    
}
</script>
<style>

</style>