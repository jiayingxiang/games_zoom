<template>
    <div id="contact">
        <navHead></navHead>
        <div class="contact-agileinfo">
            <div class="container">
                <h2>Reach Us</h2>
                <div class="container-left">
                    <div class="address">
                        <h4>Address</h4>
                        <address>
                            <ul>
                                <li>
                                    <img src="../../public/images/address.svg"><span> Parma Via Modena</span>
                                </li>
                                <li>
                                    <img src="../../public/images/address.svg"><span> Sant'Agata Bolognese</span>
                                </li>
                                <li>
                                    <img src="../../public/images/address.svg"><span> BO, Italy</span>
                                </li>
                            </ul>
                        </address>
                    </div>
                    <div class="phone">
                        <h4>Phone</h4>
                        <p>
                            <img src="../../public/images/tel.svg"><span> +1 (734) 123-4567</span>
                        </p>
                        <p>
                            <img src="../../public/images/tel.svg"><span> +1 (739) 648-7114</span>
                        </p>
                    </div>
                    <div class="email">
                        <h4>Email</h4>
                        <p>
                            <img src="../../public/images/mail.svg"><span> info@example.com</span>
                        </p>
                    </div>
                </div>
                <div class="container-right">
                    <form action="#" method="post">
                        <input type="text" class="text" name="Name" placeholder="名称" required>
                        <input type="text" class="text" name="Name" placeholder="邮箱" required>
                        <input type="text" class="text" name="Name" placeholder="电话" required>
                        <input type="text" class="text" name="Name" placeholder="地址" required>
                        <textarea name="message" placeholder="信息内容" required></textarea>
                        <input type="submit" class="more_btn" value="提交信息">
                    </form>
                </div>
            </div>
        </div>
        <div id="allmap" ref="allmap"></div>
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
        },
        methods:{
            map(){
                let map =new BMap.Map(this.$refs.allmap); // 创建Map实例
                map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);// 初始化地图,设置中心点坐标和地图级别
                map.addControl(new BMap.MapTypeControl({//添加地图类型控件
                mapTypes:[
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                ]}));
                map.setCurrentCity("北京");// 设置地图显示的城市 此项是必须设置的
                map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
            }
    },
    mounted() {
        this.map()
    }
    }
</script>
<style scoped>
    #contact .contact-agileinfo{
        width:100%;
        padding:50px 0;
    }  
    #contact .container{
        width:1170px;
        padding:0 15px;
        margin:0 auto;
        text-align:center;
    }
    #contact .container>h2{
        font-size: 40px;
        color: #e91e63;
        margin-bottom: 40px;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
        font-weight: 500;
    }
    #contact .container-left{
        width:33.333%;
        float:left;
        padding:0 15px;
        text-align:left;
    }
    #contact .container-left h4{
        font-size: 21px;
        text-align: left;
        margin-bottom: 13px;
        color: #E91E63;
        font-weight: 700;
    }
    #contact .container-left img{
        width:15px;
        height:15px;
    }
    #contact .container-left address>ul{
        list-style:none;
    }
    #contact .container-left address>ul>li{
        display: block;
        font-size: 14px;
        line-height: 25px;
        color: #999;
    }
    #contact .address,#contact .phone{
        margin-bottom:20px;
    }
    #contact .email span,#contact .phone span{
        font-size: 14px;
        line-height: 25px;
        color: #999;
    }
    #contact .container-right{
        width:66.666%;
        float:left;
        padding:0 15px;
    }
    #contact .container-right .text{
        width: 48.2%;
        float: left;
        margin: 0 10px 25px 0;
        padding: 15px 10px;
        background-color: transparent;
        border: none;
        border-left: 1px solid rgb(2, 24, 136);
        border-bottom: 1px solid rgb(2, 24, 136);
        outline: transparent;
    }
    #contact .container-right textarea{
        width: 100%;
        height: 125px;
        float: left;
        margin: 0 10px 25px 0;
        padding: 15px 10px;
        background-color: transparent;
        border: none;
        border-left: 1px solid rgb(2, 24, 136);
        border-bottom: 1px solid rgb(2, 24, 136);
        outline: transparent;
    }
    #contact .container-right .more_btn{
        float: right;
        padding: 7px 15px;
        background-color: transparent;
        border: 2px solid rgb(2, 24, 136);
        outline: transparent;
        color: rgb(2, 24, 136);
    }
    #contact .container-right .more_btn:hover{
        color: #FFf;
        border: 2px solid #FF166D;
        background: #FF166D;
    }
    #contact .container::after{
        display:block;
        content:"";
        clear:both;
    }
    #contact #allmap{
        width:100%;
        height:400px;
        margin:50px 0;
    }
</style>