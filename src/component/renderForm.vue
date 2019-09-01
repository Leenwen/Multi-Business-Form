<template>
    <div id="renderForm">
        <div class="itemDiv" :key="item.name" v-for="item in currentForm" >
            <div style="height:100%;vertical-align:middle;display:inline-block">
                <span >{{item.name}}：</span>
            </div>
            <component  
                :is="item.component"
                :propList="item.props" 
                :extraOperation="item.extra"
                v-on:getDataBack="getData">
            </component>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        currentForm: Array
    },
    data(){
        return{
            formInfo:{},
        }
    },
    computed:{

    },
    watch:{
        currentForm:{
            handler:function(val){
                let self  = this;
                // console.log(val);
                val.forEach(element => {
                    let tmp = {};
                    tmp[element.props.itemName] = element.props.data;
                    Object.assign(self.formInfo,tmp); 
                });
                this.$emit("getForm",this.formInfo);
            }
        }
    },
    mounted(){
        // console.log(this.currentForm);
    },
    methods:{
        getData(val){
            //收取子组件中的数据的最新状态
            Object.assign(this.formInfo, val);
            // console.log(this.formInfo);
            this.$emit("getForm",this.formInfo);
        },
    }
}
</script>
<style>
#renderForm{
    width: 50%;
    display: inline-block;
    border: 1px solid #E7E7E7;
    height: auto;
}

#renderForm .itemDiv{
    margin:10px;
}
</style>