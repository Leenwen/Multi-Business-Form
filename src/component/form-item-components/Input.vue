<template>
    <div id="inputComponent">
        <el-input v-model="inputData" :style="propList.class" @change="sendDataBack"></el-input>
    </div>
</template>
<script>
export default {
    props:{
        propList: Object
    },
    watch: {
    },  
    mounted:function(){
    },
    data(){
        return{
            inputData:this.propList.data
        }
    },
    methods:{
        sendDataBack(){
            let tmp = {}
            tmp[this.propList.itemName] = this.inputData;
            this.$emit("getDataBack",tmp);
        }
    }
}
</script>
<style>
#inputComponent {
    display:inline-block;
}
</style>