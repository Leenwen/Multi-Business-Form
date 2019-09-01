<template>
    <div id="main">
        <div id="buttonList" style="margin-bottom:10px">
            <el-button type="primary" @click="allData = source[0]">游戏一</el-button>
            <el-button type="success" @click="allData = source[1]">游戏二</el-button>
            <el-button type="info" @click="allData = source[2]">游戏三</el-button>
        </div>
        <formComponent :currentForm="allData" @getForm="getFormFunc"></formComponent>
        <div style="margin:10px">
            <el-button type="prmary" @click="printFormData">打印数据</el-button>
            <el-input type="textarea" :value="dataPrint" style="width:50%"></el-input>
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
        let self = this;
        this.fetchData().then(()=>{
            self.mapToSchema();
        });
    },
    data() {
        return {
            dataPrint:"",
            formInfo:"",
            //source为测试用的表单数据对象数组源
            source:[
                [{
                name:"游戏一的用户名",
                props:{
                    itemName:"userName",
                    data: "甲的游戏A账户名",
                    class:{
                       display:"inline-block",
                       width:"160px",
                       "background-color":"#E7E7E7"
                    }
                },
                component:"InputItem",
            },{
                name:"游戏一的密码",
                props:{
                    itemName:"passWord",
                    data: "123456",
                    class:{
                       display:"inline-block",
                       width:"160px",
                       "background-color":"#E7E7E7"
                    }
                },
                component:"InputItem",
                extra:{
                    showPassword:true,
                }
            },{
                name:"游戏一的头像（仅支持png上传）",
                props:{
                    itemName:"avatar",
                    data:"",
                    class:{
                    }
                },
                component:"PicUploadItem",
                extra:{
                    beforeUpload:function(file){
                        let type = file.type.split('/');
                        let reg = /(png)/i;
                        if(type[type.length-1].match(reg)==null){
                            return "png is the only type allowed";
                        }else{
                            return '';
                        }
                    }
                }
            }],
            [{
                name:"游戏二的用户名",
                props:{
                    itemName:"userName",
                    data: "乙的游戏B账户名",
                    class:{
                       display:"inline-block",
                       width:"240px",
                       "background-color":"#E7E7E7"
                    }
                },
                component:"InputItem",
            },{
                name:"游戏二的密码",
                props:{
                    itemName:"passWord",
                    data: "234567",
                    class:{
                       display:"inline-block",
                       width:"120px",
                       "background-color":"#E7E7E7"
                    }
                },
                component:"InputItem",
                extra:{
                    showPassword:true,
                }
            },{
                name:"游戏二的头像（仅支持JPG）",
                props:{
                    itemName:"avatar",
                    data:"",
                    class:{
                    }
                },
                component:"PicUploadItem",
                extra:{
                    beforeUpload:function(file){
                        let type = file.type.split('/');
                        let reg = /(jpg|jpeg)/i;
                        if(type[type.length-1].match(reg)==null){
                            return "jpg is the only type allowed";
                        }else{
                            return '';
                        }
                    }
                }
            }],[{
                name:"游戏三的用户名",
                props:{
                    itemName:"userName",
                    data: "丙的游戏C账户名",
                    class:{
                       display:"inline-block",
                       width:"120px",
                       "background-color":"#E7E7E7"
                    }
                },
                component:"InputItem",
            },{
                name:"游戏三的密码",
                props:{
                    itemName:"passWord",
                    data: "345678",
                    class:{
                       display:"inline-block",
                       width:"120px",
                       "background-color":"#E7E7E7"
                    }
                },
                component:"InputItem",
                extra:{
                    showPassword:true,
                }
            },{
                name:"游戏三的头像（仅支持jpg）",
                props:{
                    itemName:"avatar",
                    data:"",
                    class:{
                    }
                },
                component:"PicUploadItem",
                extra:{
                    beforeUpload:function(file){
                        let type = file.type.split('/');
                        let reg = /(jpg|jpeg)/i;
                        if(type[type.length-1].match(reg)==null){
                            return "jpg is the only type allowed";
                        }else{
                            return '';
                        }
                    }
                }
            }]],
            allData:[],

            //demoData尚未使用
            demoData:[{
                biz:"GameA",
                type:"Text",
                Name:"甲的游戏A账户名",
                PassWord:"123456",
                Avatar:""
            },{
                biz:"GameB",
                type:"Text",
                Name:"乙的游戏B账户名",
                PassWord:"234567",
                Avatar:""
            }]
        }
    },
    methods:{
        fetchData(){
            //获取源数据,未完成
            return new Promise((resolve,reject)=>{
                resolve();
            })
        },
        mapToSchema(){
            //处理源数据根据business-schema文件映射到表单数据,未完成。
            this.$http.get("src/config/business-schema.json").then((res) => {
                //这里处理源数据，未完成
            }, (response) => {
                //处理错误
            });
        },
        printFormData(){
            this.dataPrint = JSON.stringify(this.formInfo);
        },
        getFormFunc(val){
            //接受表单变化后传来的源数据
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