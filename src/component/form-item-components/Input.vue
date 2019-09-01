<template>
    <div id="inputComponent">
        <el-input v-model="inputData" :style="propList.class" @change="sendDataBack" :show-password="isShowPassWord()"></el-input>
    </div>
</template>
<script>
export default {
    props:{
        propList: Object,
        extraOperation:Object
    },
    watch: {
    },  
    mounted:function(){
    },
    data(){
        return{
            inputData:this.propList.data,
        }
    },
    methods:{
        sendDataBack(){
            let tmp = {}
            tmp[this.propList.itemName] = this.inputData;
            this.$emit("getDataBack",tmp);
        },
        isShowPassWord(){
           if(this.extraOperation!=undefined){
               if(this.extraOperation.hasOwnProperty("showPassword")){
                   return true;
               }
           }else{
               return false;
           }  
        }
    }
}
</script>
<style>
#inputComponent {
    display:inline-block;
}
</style>