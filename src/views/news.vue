<template>
    <div id="news">
        <navHead></navHead>
        <div class="events">
            <h2>News</h2>
            <a href="#">
                <div class="events-left">
                    <div class="events-text">
                        <h4>June 20, 2018</h4>
                        <p>Phasellus faucibus semper eros, quis mauris </p>
                        <ul>
                            <li>by Admin</li>
                            <li>
                                <span>❤</span>
                                <span>10</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
            <div class="events-right">
                <a href="#">
                    <div class="events-right-top">
                        <div class="events-text1">
                            <h4>July 20, 2018</h4>
                            <p>Aenean imperdiet volutpat tortor </p>
                            <ul>
                                <li>by Admin</li>
                                <li>
                                    <span>❤</span>
                                    <span>20</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div class="events-right-bottom">
                        <div class="events-text2">
                            <h4>aug 20, 2018</h4>
                            <p>Fusce aliquam purus  consectetur</p>
                            <ul>
                                <li>by Admin</li>
                                <li>
                                    <span>❤</span>
                                    <span>15</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="events-section">
            <div class="container">
                <div class="blog1">
                    <div class="blog-img">
                        <a href="#">
                            <img src="../../public/images/ng1.jpg">
                        </a>
                    </div>
                    <div class="blog-text">
                        <a href="#">
                            <h4>Quisque in lectus erat</h4>
                        </a>
                        <div class="item_info">
                            <ul>
                                <li>
                                    <img src="../../public/images/ren.png">&nbsp;&nbsp;Admin
                                </li>
                                <li>
                                    <img src="../../public/images/hotel.png">&nbsp;&nbsp;14.May.2018
                                </li>
                                <li>
                                    <img src="../../public/images/mes.png">&nbsp;&nbsp;20 Comments
                                </li>
                                <li>
                                    <span>❤</span>&nbsp;&nbsp;<span>300 Likes</span>
                                </li>
                            </ul>
                        </div>
                        <p>Aliquam suscipit neque massa, eu maximus felis gravida vel. Vestibulum lacinia risus risus, ut iaculis felis fermentum id. Cras at vulputate velit, vitae vestibulum augue. Etiam lorem nunc, mattis ac dignissim sit amet, varius et ex. Phasellus eleifend nibh justo, pulvinar cursus sapien commodo non.</p>
                        <a href="#" class="blog-read">Read More</a>
                    </div>
                </div>
                <div class="blog1">
                    <div class="blog-img">
                        <a href="#">
                            <img src="../../public/images/ng2.jpg">
                        </a>
                    </div>
                    <div class="blog-text">
                        <a href="#">
                            <h4>In finibus vel metus</h4>
                        </a>
                        <div class="item_info">
                            <ul>
                                <li>
                                    <img src="../../public/images/ren.png">&nbsp;&nbsp;Admin
                                </li>
                                <li>
                                    <img src="../../public/images/hotel.png">&nbsp;&nbsp;17.Aug.2018
                                </li>
                                <li>
                                    <img src="../../public/images/mes.png">&nbsp;&nbsp;20 Comments
                                </li>
                                <li>
                                    <span>❤</span>&nbsp;&nbsp;<span>300 Likes</span>
                                </li>
                            </ul>
                        </div>
                        <p>Aliquam suscipit neque massa, eu maximus felis gravida vel. Vestibulum lacinia risus risus, ut iaculis felis fermentum id. Cras at vulputate velit, vitae vestibulum augue. Etiam lorem nunc, mattis ac dignissim sit amet, varius et ex. Phasellus eleifend nibh justo, pulvinar cursus sapien commodo non.</p>
                        <a href="#" class="blog-read">Read More</a>
                    </div>
                </div>
                <div class="blog1">
                    <div class="blog-img">
                        <a href="#">
                            <img src="../../public/images/ng3.jpg">
                        </a>
                    </div>
                    <div class="blog-text">
                        <a href="#">
                            <h4>Nam eget ligula eu</h4>
                        </a>
                        <div class="item_info">
                            <ul>
                                <li>
                                    <img src="../../public/images/ren.png">&nbsp;&nbsp;Admin
                                </li>
                                <li>
                                    <img src="../../public/images/hotel.png">&nbsp;&nbsp;24.Aug.2015
                                </li>
                                <li>
                                    <img src="../../public/images/mes.png">&nbsp;&nbsp;20 Comments
                                </li>
                                <li>
                                    <span>❤</span>&nbsp;&nbsp;<span>300 Likes</span>
                                </li>
                            </ul>
                        </div>
                        <p>Aliquam suscipit neque massa, eu maximus felis gravida vel. Vestibulum lacinia risus risus, ut iaculis felis fermentum id. Cras at vulputate velit, vitae vestibulum augue. Etiam lorem nunc, mattis ac dignissim sit amet, varius et ex. Phasellus eleifend nibh justo, pulvinar cursus sapien commodo non.</p>
                        <a href="#" class="blog-read">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <Infoot></Infoot>
    </div>
</template>
<script>
    import navHead from "@/components/navHead.vue"
    import Infoot from "@/components/Infoot.vue"
    export default{
        data(){
            return{}
        },
        components:{
            navHead,
            Infoot
        }
    }
</script>
<style scoped>
    #news a{
        text-decoration:none;
        color: #337ab7;
    }
    #news .events{
        width:100%;
        padding:50px 0;
    }
    #news .events::after{
        display:block;
        content:"";
        clear:both;
    }
    #news .events>h2{
        font-size: 40px;
        color: #e91e63;
        margin-bottom: 40px;
        text-align: center;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
        font-weight:500;
    }
    #news .events .events-left{
        width:58.333%;
        background:url("../../public/images/e1.jpg") no-repeat 0px 0px;
        background-size:cover;
        height:400px;
        float:left;
        position:relative;
    }
    #news .events .events-left>.events-text{
        padding: 20px 0px 0px 30px;
    }
    #news .events .events-left>.events-text>h4{
        background: #dfdc00;
        padding: 10px 0px;
        color: #000;
        width: 24%;
        font-size: 17px;
        text-align: center;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 500;
        line-height: 1.1;
    }
    #news .events .events-left>.events-text>p{
        font-size: 30px;
        color: #dfdc00;
        padding: 250px 0px 6px 0px;
        font-weight: 600;
    }
    #news .events .events-left>.events-text>ul{
        list-style:none;
    }
    #news .events .events-left>.events-text>ul>li{
        display:inline;
        color:#fff;
        font-size:14px;
    }
    #news .events .events-left>.events-text>ul>li:nth-child(2){
        margin-left:20px;
    }
    #news .events .events-right{
        width:41.666%;
        height:400px;
        float:left;
    }
    #news .events-right-top{
        width:100%;
        height:200px;
        background:url("../../public/images/e2.jpg") no-repeat 0px 0px;
        background-size:cover;
    }
    #news .events-right-bottom{
        width:100%;
        height:200px;
        background:url("../../public/images/e3.jpg") no-repeat 0px 0px;
        background-size:cover;
    }
    #news .events-right-top>.events-text1,#news .events-right-bottom>.events-text2{
        padding: 20px 0px 0px 30px;
    }
    #news .events-text1>h4,#news .events-text2>h4{
        background: #dfdc00;
        padding: 10px 0px;
        color: #000;
        width: 24%;
        font-size: 17px;
        text-align: center;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 500;
        line-height: 1.1;
    }
    #news .events-text1>p,#news .events-text2>p{
        font-size: 30px;
        color: #dfdc00;
        padding: 54px 0px 6px 0px;
        font-weight: 600;
    }
    #news .events-text1>ul,#news .events-text2>ul{
        list-style:none;
    }
    #news .events-text1>ul>li,#news .events-text2>ul>li{
        display:inline;
        color:#fff;
        font-size:14px;
    }
    #news .events-text1>ul>li:nth-child(2),#news .events-text2>ul>li:nth-child(2){
        margin-left:20px;
    }
    #news .events-section{
        background:#f4f4f4;
        padding:50px 0;
        width:100%;
        height:1210px;
    }
    #news .container{
        width:1170px;
        padding:0 15px;
        height:1110px;
        margin:0 auto;
    }
    #news .blog1{
        width:1140px;
        height:350px;
        margin-bottom:30px;
    }
    #news .blog1::after{
        display:block;
        content:"";
        clear:both;
    }
    #news .blog1>.blog-img{
        width:33.333%;
        float:left;
    }
    #news .blog1>.blog-img img{
        width:350px;
        height:350px;
    }
    #news .blog1>.blog-text{
        width:66.666%;
        float:left;
        position:relative;
        padding:0 15px;
    }
    #news .blog1>.blog-text>a>h4{
        color: #333;
        font-size: 35px;
        text-align: left;
        font-weight: 400;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
    }
    #news .blog1>.blog-text>.item_info{
        border: 1px solid #ddd;
        padding: 0.5em 2em;
        margin: 2.2em 0;
    }
    #news .item_info>ul{
        list-style:none;
    }
    #news .item_info>ul>li{
        display: inline-block;
        font-size: 1.1em;
        margin-right: 27px;
        vertical-align: middle;
        color: #777;
    }
    #news .item_info>ul>li:hover{
        cursor:pointer;
        color:#E91E63;
    }
    #news .item_info>ul img{
        width:15px;
        height:19px;
    }
    #news .blog1>.blog-text>p{
        color: #999;
        font-size: 14px;
        text-align: left;
        line-height: 30px;
        font-family: 'open Sans', sans-serif;
    }
    #news .blog1>.blog-text>.blog-read{
        color: #001fcc;
        border: 2px solid #001fcc;
        font-size: 15px;
        margin-top: 30px;
        padding: 7px 15px;
        display: inline-block;
        text-decoration:none;
    }
    #news .blog1>.blog-text>.blog-read:hover{
        color: #fff;
        background: #E91E63;
        border: 2px solid #E91E63;
    }   
</style>