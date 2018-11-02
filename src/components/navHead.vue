<template>
    <div id="app">
        <div class="top">
            <div class="header">
                <div class="nav">
                    <div class="nav-logo">
                        <router-link to="/">
                            <h1>Games
                                <img src="../../public/images/c1.png" alt="">
                                Zone
                            </h1>
                        </router-link>
                    </div>
                    <div class="nav-list">
                        <ul>
                            <li><router-link to="/">主页</router-link></li>
                            <li><router-link to="/about">关于</router-link></li>
                            <li><router-link to="/games">游戏</router-link></li>
                            <li><router-link to="/news">新闻</router-link></li>
                            <li><router-link to="/contact">联系</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
   export default{
       data(){
           return{}
       } 
   }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #fff;
        font-family: 'open Sans', sans-serif
    }
    a{
        text-decoration:none;
        color: #fff;
    }
    ul{
        list-style: none;
    }
    .header{
        width:100%;
        height: 80px;
        position: relative;
        background:url('../../public/images/banner3.jpg') no-repeat;
        background-size:cover;
    }
    .header>.nav{
        width: 1140px;
        height: 120px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        position: absolute;
        right: 140px;
        top: 15px;
        z-index: 1000;
    }
    .header>.nav>.nav-logo{
        width: 320px;
        height: 120px;
        text-align: center;
    }
    .header>.nav>.nav-logo>a>h1{
        color: #fff;
        font-size: 40px;
        text-align: center;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
    }
    .header>.nav>.nav-logo>a>h1>img{
        width: 22%;
        vertical-align: middle;
        border: 0;
    }
    .header>.nav>.nav-list>ul{
        display: flex;
        justify-content: space-between;
        width: 500px;
    }
    .header>.nav>.nav-list>ul>li{
        height: 50px;
        padding: 10px 20px;
        border: 2px solid transparent;
        line-height:25px;
    }
    .header>.nav>.nav-list>ul>li:hover{
        border-top: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transition: 0.5s;
    }
</style>