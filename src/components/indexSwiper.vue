<template>
    <div id="app">
        <div class="swiper-box" ref="swiperBox">
            <swiper class="swiper" :options="swiperOption" ref="mySwiper">
                <swiper-slide><img src="../../public/images/banner1.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../../public/images/banner2.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../../public/images/banner3.jpg" alt=""></swiper-slide>
            </swiper>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </div>
    </div>
</template>
<script>
   import { swiper, swiperSlide } from 'vue-awesome-swiper';
   export default{
        data(){
            return{
                swiperOption:{
                    notNextTick:true,
                    autoplay:true,
                    loop:true,
                    autoplayDisableOninteraction:true, //和loop联合实现无缝轮播
                    grabCursor:true,
                    setWrapperSize: true,
                    mousewheelControl: true,
                    observeParents: true,
                    pagination:{
                        el: ".swiper-pagination",
                        bulletClass: "my-bullet",
                        bulletActiveClass: "my-bullet-active"
                    },
                    navigation:{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                }
            }
        },
        components:{
            swiper,
            swiperSlide
        },
        computed:{
            mySwiper(){
                return this.$refs.mySwiper.swiper
            }
        },
        methods:{
            
        }
   } 
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .swiper-box{
        width:100%;
        position:absolute;
        top:0;
        left:0;
    }
    .swiper-box>.swiper img{
        width:100%;
    }
    .swiper-button-white{
        position:absolute;
        top:330px;
        right:0;
    }
    .swiper-button-next{
        margin-right:10px;
    }
</style>