<template>
    <div class="footer">
        <div class="footer-contain">
            <div class="view-item">
                <h4>Contact</h4>
                <p>
                    <img src="../../public/images/mail.svg" alt="">
                    <a href="mailto:ex@mail.com">ex@mail.com</a>
                </p>
                <p>
                    <img src="../../public/images/tel.svg" alt="">
                    +18045678834
                </p>
                <p>
                    <img src="../../public/images/address.svg" alt="">
                    4th Avenue,London
                </p>
                <p>
                    <img src="../../public/images/phone.svg" alt="">
                    (0033)6544 5453 644
                </p>
            </div>
            <div class="view-item">
                <h4>Latest Games</h4>
                <div class="footer-view">
                    <div><a href="#"><img src="../../public/images/ng1.jpg" alt=""></a></div>
                    <div><a href="#"><img src="../../public/images/ng2.jpg" alt=""></a></div>
                    <div><a href="#"><img src="../../public/images/ng3.jpg" alt=""></a></div>
                    <div><a href="#"><img src="../../public/images/ng4.jpg" alt=""></a></div>
                    <div><a href="#"><img src="../../public/images/ng5.jpg" alt=""></a></div>
                    <div><a href="#"><img src="../../public/images/ng6.jpg" alt=""></a></div>
                    <div><a href="#"><img src="../../public/images/ng7.jpg" alt=""></a></div>
                    <div><a href="#"><img src="../../public/images/ng8.jpg" alt=""></a></div>
                </div>
            </div>
            <div class="view-item">
                <h4>
                    Games
                    <img src="../../public/images/f1.png" alt="">
                    Zone
                </h4>
                <p>Donec lobortis diam eu auctor porta. Phasellus in elementum tortor, sit amet imperdiet urna pellentesque non risus porta.</p>
                <p>Suspendisse convallis malesuada libero, non rutrum arcu pellentesque lacinia.</p>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright © 2017.Company name All rights reserved.More Templates </p>
        </div>
    </div>
</template>
<script>
    
</script>
<style scoped>
    .footer{
        width: 100%;
        padding-top:30px;
    }
    .footer>.footer-contain{
        width: 1140px;
        height: 280px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto 40px;;
    }
    .footer>.footer-contain>.view-item:first-child{
        width: 285px;
        height: 280px;
        padding: 0 15px;
    }
    .footer>.footer-contain>.view-item:first-child img{
        width: 20px;
        height: 20px;
    }
    .footer>.footer-contain>.view-item:first-child>h4{
        text-align: left;
        color: #000;
        font-size: 27px;
        margin-bottom: 30px;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
        font-weight: 500;
    }
    .footer>.footer-contain>.view-item:first-child>p{
        margin-bottom: 35px;
        text-align: left;
    }
    .footer>.footer-contain>.view-item:first-child>p>a{
        font-size: 16px;
        color: #000;
        margin-left: 10px;
        text-decoration: none;
    }
    .footer>.footer-contain>.view-item:nth-child(2){
        width: 475px;
        height: 250px;
        padding: 0 15px;
    }
    .footer>.footer-contain>.view-item:nth-child(2)>h4{
        text-align: left;
        color: #000;
        font-size: 27px;
        margin-bottom: 30px;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
        font-weight: 500;
    }
    .footer>.footer-contain>.view-item:nth-child(2)>.footer-view{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .footer>.footer-contain>.view-item:nth-child(2) img{
        padding-top: 15px;
        width: 90px;
        height: 105px;
    }
    .footer>.footer-contain>.view-item:last-child{
        width: 350px;
        height: 245px;
        padding: 0 15px;
    }
    .footer>.footer-contain>.view-item:last-child>h4{
        text-align: left;
        color: #E91E63;
        font-size: 27px;
        margin-bottom: 30px;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
        font-weight: 500;
    }
    .footer>.footer-contain>.view-item:last-child>h4>img{
        width: 42px;
        height: 30px;
        vertical-align: middle;
    }
    .footer>.footer-contain>.view-item:last-child>p{
        font-size: 14px;
        color: #000;
        line-height: 30px;
    }
    .footer>.footer-contain>.view-item:last-child>p:last-child{
        padding-top: 60px;
    }
    .footer>.copyright{
        width: 1140px;
        margin: 0 auto;
    }
    .footer>.copyright>p{
        text-align: center;
        font-size: 14px;
        color: #000;
        border-top: 1px dotted #000;
        padding: 30px 0px 30px 0px;
    }
</style>