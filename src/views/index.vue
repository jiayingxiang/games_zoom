<template>
    <div id="app">
        <div class="top">
            <navHead></navHead>
            <indexSwiper></indexSwiper>
        </div>
        <div class="container">
            <div class="container-one">
                <h2>Trending Games</h2>
                <div class="contain">
                        <ul>
                            <li class="subs">
                                <h4>Racing Games</h4>
                                <img src="../../public/images/tg1.jpg" alt="">
                            </li>
                            <li class="subs">
                                <h4>3D Games</h4>
                                <img src="../../public/images/tg2.jpg" alt="">
                            </li>
                            <li class="subs">
                                <h4>Action Games</h4>
                                <img src="../../public/images/tg3.jpg" alt="">
                            </li>
                            <li class="subs">
                                <h4>Toy Games</h4>
                                <img src="../../public/images/tg4.jpg" alt="">
                            </li>
                        </ul>
                    </div>
            </div>
            <div class="container-two">
                <div class="contain">
                    <h3>Services</h3>
                    <div class="contain-list">
                        <div class="list-item">
                            <span class="glyphicon glyphicon-sort-by-attributes" aria-hidden="true"></span>
                            <h4>Quis tortor</h4>
                            <p>Curabitur suscipit porttitor aliquam. Etiam id placerat purus. Integer sodales elit eget arcu placerat.</p>
                            <router-link to="/single">Read More</router-link>
                        </div>
                        <div class="list-item">
                            <span class="glyphicon glyphicon-sort-by-attributes" aria-hidden="true"></span>
                            <h4>Eget arcu</h4>
                            <p>Curabitur suscipit porttitor aliquam. Etiam id placerat purus. Integer sodales elit eget arcu placerat.</p>
                            <router-link to="/single">Read More</router-link>
                        </div>
                        <div class="list-item">
                            <span class="glyphicon glyphicon-sort-by-attributes" aria-hidden="true"></span>
                            <h4>Risus porta</h4>
                            <p>Curabitur suscipit porttitor aliquam. Etiam id placerat purus. Integer sodales elit eget arcu placerat.</p>
                            <router-link to="/single">Read More</router-link>
                        </div>
                        <div class="list-item">
                            <span class="glyphicon glyphicon-sort-by-attributes" aria-hidden="true"></span>
                            <h4>Proin sapien</h4>
                            <p>Curabitur suscipit porttitor aliquam. Etiam id placerat purus. Integer sodales elit eget arcu placerat.</p>
                            <router-link to="/single">Read More</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-three">
                <div class="contain">
                    <h3>New Games</h3>
                    <div class="view">
                        <div class="view-eight">
                            <img src="../../public/images/ng1.jpg" alt="">
                            <div class="mask">
                                <router-link to="/single">
                                    <h4>Click here</h4>
                                </router-link>
                                <p>To learn more about this</p>
                            </div>
                        </div>
                        <div class="view-eight">
                            <img src="../../public/images/ng2.jpg" alt="">
                            <div class="mask">
                                <router-link to="/single">
                                    <h4>Click here</h4>
                                </router-link>
                                <p>To learn more about this</p>
                            </div>
                        </div>
                        <div class="view-eight">
                            <img src="../../public/images/ng3.jpg" alt="">
                            <div class="mask">
                                <router-link to="/single">
                                    <h4>Click here</h4>
                                </router-link>
                                <p>To learn more about this</p>
                            </div>
                        </div>
                        <div class="view-eight">
                            <img src="../../public/images/ng4.jpg" alt="">
                            <div class="mask">
                                <router-link to="/single">
                                    <h4>Click here</h4>
                                </router-link>
                                <p>To learn more about this</p>
                            </div>
                        </div>
                        <div class="view-eight">
                            <img src="../../public/images/ng5.jpg" alt="">
                            <div class="mask">
                                <router-link to="/single">
                                    <h4>Click here</h4>
                                </router-link>
                                <p>To learn more about this</p>
                            </div>
                        </div>
                        <div class="view-eight">
                            <img src="../../public/images/ng6.jpg" alt="">
                            <div class="mask">
                                <router-link to="/single">
                                    <h4>Click here</h4>
                                </router-link>
                                <p>To learn more about this</p>
                            </div>
                        </div>
                        <div class="view-eight">
                            <img src="../../public/images/ng7.jpg" alt="">
                            <div class="mask">
                                <router-link to="/single">
                                    <h4>Click here</h4>
                                </router-link>
                                <p>To learn more about this</p>
                            </div>
                        </div>
                        <div class="view-eight">
                            <img src="../../public/images/ng8.jpg" alt="">
                            <div class="mask">
                                <router-link to="/single">
                                    <h4>Click here</h4>
                                </router-link>
                                <p>To learn more about this</p>
                            </div>
                        </div>
                    </div>         
                </div>
            </div>
            <div class="container-four">
                <swiper class="swiper" :options="swiperOption" ref="mySwiper">
                    <swiper-slide>
                        <div class="info">
                            <h3>Quis autem vel eum iure ea</h3>
                            <p>Phasellus ornare consectetur erat, eu vehicula orci finibus at.</p>
                            <a href="#">Learn More</a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="info">
                            <h3>Duis aute dolor reprehenderit</h3>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt officia.</p>
                            <a href="#">Learn More</a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="info">
                            <h3>Aliquip commodo consequat</h3>
                            <p>Curabitur lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a href="#">Learn More</a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="info">
                            <h3>Quis autem vel eum iure ea</h3>
                            <p>Phasellus ornare consectetur erat, eu vehicula orci finibus at.</p>
                            <a href="#">Learn More</a>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="info">
                            <h3>Duis aute dolor reprehenderit</h3>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt officia.</p>
                            <a href="#">Learn More</a>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <Infoot></Infoot>
    </div>
</template>
<script>
   import indexSwiper from '@/components/indexSwiper.vue';
   import navHead from '@/components/navHead.vue';
   import Infoot from '@/components/Infoot.vue';
   export default{
       data(){
           return{
            swiperOption:{
                notNextTick:true,
                autoplay:{
                    delay:4000
                },
                loop:true
            }
           }
       },
        components:{
            indexSwiper,
            navHead,
            Infoot
        },
        computed:{
            mySwiper(){
                return this.$refs.mySwiper.swiper
            }
        }
   }
</script>
<style scoped>
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
    #app .top{
        height: 667px;
        overflow:hidden;
    }
    #app .container{
        padding: 50px 0;
    }
    #app .container>.container-one{
        width: 1170px;
        height: 575px;
        padding: 0 15px;
        text-align: center;
        margin: 0 auto
    }
    #app .container>.container-one>h2{
        font-size: 40px;
        color: #e91e63;
        margin-bottom: 40px;
        font-family: 'Josefin Sans', sans-serif;
    }
    #app .container>.container-one>.contain>ul{
        display: flex;
        justify-content: space-between;
    }
    #app .container>.container-one>.contain>ul>li>h4{
        font-size: 27px;
        color: #000;
        margin-bottom: 20px;
        font-family: 'Josefin Sans', sans-serif;
    }
    #app .container>.container-one>.contain>ul>li>img{
        width: 255px;
        height: 340px;
    }
    #app .container-two{
        width: 100%;
        height: 453px;
        padding: 50px 0;
        text-align: center;
    }
    #app .container-two>.contain{
        width: 1170px;
        padding: 0 15px;
        margin: 0 auto;
    }
    #app .container-two>.contain>h3{
        color: #071ea0;
        font-size: 40px;
        margin-bottom: 40px;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
    }
    #app .container-two>.contain>.contain-list{
        display: flex;
        justify-content: space-between;
    }
    #app .container-two>.contain>.contain-list>.list-item{
        width: 270px;
        height: 285px;
        padding: 0 15px;
        font-size: 14px;
        line-height: 27px;
        color: #999;
    }
    #app .container-two>.contain>.contain-list>.list-item>span{
        background: #E91E63;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-bottom: 15px;
        display: inline-block;
    }
    #app .container-two>.contain>.contain-list>.list-item>h4{
        font-size: 27px;
        color: #000;
        margin-bottom: 20px;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
        font-weight: 500;
        line-height: 1.1;
    }
    #app .container-two>.contain>.contain-list>.list-item>a{
        color: #E91E63;
        border: 2px solid #E91E63;
        font-size: 15px;
        margin-top: 15px;
        padding: 7px 15px;
        display: inline-block;
        transition: 0.5s all;
    }
    #app .container-two>.contain>.contain-list>.list-item:hover a,
    #app .container-two>.contain>.contain-list>.list-item:hover span
    {
        background-color: #071ea0;
        color: #fff;
        border: 2px solid #071ea0;
    }
    #app .container-three{
        width: 100%;
        height: 750px;
        padding: 50px 0;
        text-align: center;
    }
    #app .container-three>.contain{
        width: 1170px;
        height: 750px;
        padding: 0 15px;
        margin: 0 auto;
    }
    #app .container-three>.contain>h3{
        font-size: 40px;
        color: #e91e63;
        margin-bottom: 40px;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
        font-weight: 500;
        line-height: 1.1;
    }
    #app .container-three>.contain>.view{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    #app .container-three>.contain>.view>div{
        width: 285px;
        height: 255px;
        margin-top: 2em;
        padding: 0 15px;
        position: relative;
    }
    #app .container-three>.contain>.view>div>img{
        width: 255px;
        height: 255px;
    }
    #app .container-three>.contain>.view>div>.mask{
        background-color: rgba(0, 0, 0, 0.67);
        width: 90%;
        position: absolute;
        overflow: hidden;
        padding: 6.5em 0 ;
        top: -40px;
        opacity: 0;
        transition: all 0.3s ease-out 0.5s;
        height:255px;
    }
    #app .view h4{
        text-transform: capitalize;
        color: #fff;
        text-align: center;
        position: relative;
        font-size: 2.5em;
        letter-spacing: 2px;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 500;
        line-height: 1.1;
    }
    #app .view p{
        font-size: 1em;
        position: relative;
        color: #fff !important;
        padding: 0.5em 0;
        text-align: center;
        margin: 0;
    }
    #app .container-three>.contain>.view>.view-eight:hover .mask{
        top: 0;
        opacity: 1;
        transition-delay: 0s;
    }
    #app .container-four{
        background:url(../../public/images/sbbg.jpg) no-repeat 0 0;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
        height: 400px;
        padding: 100px 0px;
        text-align: center;
    }
    #app .container-four>.swiper .info>h3{
        color: #fff;
        margin-bottom: 10px;
        font-size: 40px;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
        font-weight: 500;
        line-height: 1.1;
    }
    #app .container-four>.swiper .info>p{
        text-transform: capitalize;
        color: #fff;
        letter-spacing: 2px;
        font-style: italic;
        font-size: 16px;
    }
    #app .container-four>.swiper .info>a{
        color: #fff;
        border: 2px solid #fff;
        font-size: 14px;
        padding: 7px 15px;
        display: inline-block;
        margin-top: 50px;
    }
    #app .container-four>.swiper .info>a:hover{
        color: #fff;
        border: 2px solid #e91e63;
        background: #e91e63;
    }
</style>