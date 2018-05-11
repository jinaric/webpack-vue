<template>
    <div>  
        <img src="dist/img/pic.png" width="200px" >
         <h1 class="headpic">{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style>
    .headpic{
        border-top:1px solid #ccc;
        color: red;
    }
</style>
