<template>
    <div>
        <div :key="item.name" v-for="item in currentForm" >
             <span>{{item.name}}：</span>
            <component  
                :is="item.component"
                :propList="item.props" 
                :extraOperation="item.extra">
            </component>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        currentForm:Array
    },
    data(){
        return{
            
        }
    },
    methods:{

    }
}
</script>
<style>

</style>