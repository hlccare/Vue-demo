<!-- vueloader将此文件变成一个对象 单文件组件-->
<template>
<div class="red">
    demo
</div>    
</template>
<!-- 除了视图之外其他的选项 -->
<!-- 使用vueloader，则只支持函数 -->
<script>
export default {
    data(){
        return{
            n: 0
        }
    },
    methods:{
        add(){
            this.n += 1
        }
    }
}
</script>

<style scoped>
.red{
    color: red;
    }
</style>