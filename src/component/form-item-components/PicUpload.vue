<template>
    <div style="display:inline-block;">
        <el-upload
            style="display:inline-block"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="extraOperation.beforeUpload!=''?beforeUpload:()=>{}">
            <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
        <span v-if="wrongMsg!=''&&src==''">{{wrongMsg}}</span>
        <img v-if="src!=''" :src="src" class="avatar">
    </div>
</template>
<script>
export default {
    props:{
        propList: Object,
        extraOperation: Object,
    },
    data(){
        return{
            src:this.propList.data,
            wrongMsg:'',
            Functions:{
                beforeUpload:'',
            }
        }
    },
    watch:{
        extraOperation: function (val){
            if(val){
                Object.assign(this.Functions,val);
            }
        }
    },
    methods:{
        handleAvatarSuccess(res, file) {
            let self = this;
            this.src = URL.createObjectURL(file.raw);
            let tmp = {};
            tmp[this.propList.itemName] = this.src
            this.$emit("getDataBack",tmp);
        },
        beforeUpload(file){
            // console.log(file);
            let wrongMsg = this.extraOperation.beforeUpload(file);
            // console.log(wrongMsg);
            if(wrongMsg==''){
                return true;
            }else{
                this.wrongMsg = wrongMsg;
                this.src = '';
                return false;
            }
        }
    }
}
</script>
<style>
  .avatar {
    width: 178px;
    height: 178px;
    display: inline-block;
  }
</style>