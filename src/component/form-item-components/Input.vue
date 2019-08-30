<template>
    <div id="inputComponent">
        <el-input v-model="value" v-bind:style="classObject"></el-input>
    </div>
</template>
<script>
export default {
    props:{
        propList:Object
    },
    watch: {
        propList:{
            handler(val){
                this.value = val.data
                if(val.class!=''){
                    Object.assign(this.classObject,val.class);
                }
            },
            deep:true
        }
    },  
    mounted:function(){
    },
    data(){
        return{
            value:'',
            classObject:{},
        }
    },
    methods:{
        
    }
}
</script>
<style>
#inputComponent {
    display:inline-block;
}
</style>