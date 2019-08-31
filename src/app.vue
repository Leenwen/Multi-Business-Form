<template>
    <div id="main">
        <div id="buttonList" style="margin-bottom:10px">
            <el-button type="primary" @click="allData = source[0]">游戏一</el-button>
            <el-button type="success" @click="allData = source[1]">游戏二</el-button>
            <el-button type="info" @click="allData = source[2]">游戏三</el-button>
        </div>
        <formComponent :currentForm="allData" @getForm="getFormFunc"></formComponent>
        <div>
            <el-button type="prmary" @click="printFormData">打印数据</el-button>
            <el-input type="textarea" :value="dataPrint"></el-input>
        </div>
    </div>
</template>
<script>
import formComponent from "./component/renderForm.vue"
export default {
    components:{
        formComponent
    },
    mounted(){
        this.allData = this.source[0];
        this.fetchData();
    },
    data() {
        return {
            dataPrint:"",
            formInfo:"",
            source:[
                [{
                name:"游戏一测试输入框",
                props:{
                    itemName:"userName",
                    data: "测试啊测试",
                    class:{
                       display:"inline-block",
                       width:"120px",
                       "background-color":"#E7E7E7"
                    }
                },
                component:"InputItem",
            },{
                name:"游戏一第二个测试输入框",
                props:{
                    itemName:"passWord",
                    data: "测试啊测试",
                    class:{
                       display:"inline-block",
                       width:"120px",
                       "background-color":"#E7E7E7"
                    }
                },
                component:"InputItem",
            },{
                name:"png图片上传",
                props:{
                    itemName:"picUpload",
                    data:"",
                    class:{
                    }
                },
                component:"PicUploadItem",
                extra:{
                    beforeUpload:function(file){
                        let type = file.type.split('/');
                        console.log(type);
                        let reg = /(png)/i;
                        console.log(reg);
                        if(type[type.length-1].match(reg)==null){
                            return "png is the only type allowed";
                        }else{
                            return '';
                        }
                    }
                }
            }],
            [{
                name:"游戏二测试输入框",
                props:{
                    itemName:"userName",
                    data: "测试啊测试",
                    class:{
                       display:"inline-block",
                       width:"120px",
                       "background-color":"#E7E7E7"
                    }
                },
                component:"InputItem",
            },{
                name:"游戏二第二个测试输入框",
                props:{
                    itemName:"passWord",
                    data: "测试啊测试",
                    class:{
                       display:"inline-block",
                       width:"120px",
                       "background-color":"#E7E7E7"
                    }
                },
                component:"InputItem",
            },{
                name:"jpg图片上传",
                props:{
                    itemName:"picUpload",
                    data:"",
                    class:{
                    }
                },
                component:"PicUploadItem",
                extra:{
                    beforeUpload:function(file){
                        let type = file.type.split('/');
                        let reg = /(jpg|jpeg)/i;
                        console.log(reg);
                        if(type[type.length-1].match(reg)==null){
                            return "jpg is the only type allowed";
                        }else{
                            return '';
                        }
                    }
                }
            }],[{
                name:"测试输入框",
                props:{
                    itemName:"userName",
                    data: "测试啊测试",
                    class:{
                       display:"inline-block",
                       width:"120px",
                       "background-color":"#E7E7E7"
                    }
                },
                component:"InputItem",
            },{
                name:"第二个测试输入框",
                props:{
                    itemName:"passWord",
                    data: "测试啊测试",
                    class:{
                       display:"inline-block",
                       width:"120px",
                       "background-color":"#E7E7E7"
                    }
                },
                component:"InputItem",
            },{
                name:"jpg图片上传",
                props:{
                    itemName:"picUpload",
                    data:"",
                    class:{
                    }
                },
                component:"PicUploadItem",
                extra:{
                    beforeUpload:function(file){
                        let type = file.type.split('/');
                        console.log(type);
                        let reg = /(jpg|jpeg)/i;
                        if(type[type.length-1].match(reg)==null){
                            return "jpg is the only type allowed";
                        }else{
                            return '';
                        }
                    }
                }
            }]],
            allData:[]
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
        },
        printFormData(){
            this.dataPrint = JSON.stringify(this.formInfo);
        },
        getFormFunc(val){
            this.formInfo = val;
        }
    }
    
}
</script>
<style>
#main{
    width: 100%;
    text-align: center;
}
</style>