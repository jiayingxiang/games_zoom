<template>
    <div id="about">
        <navHead></navHead>
        <div class="about-agileinfo">
            <div class="container">
                <h2>About Us</h2>
                <div class="about-grids-w3-agileits">
                    <div>
                        <ul>
                            <li><em>1.</em><a href="#"><span>Qui ratione voluptatem dolores</span></a></li>
                            <li><em>2.</em><a href="#"><span>Dolores eos qui ratione volu</span></a></li>
                            <li><em>3.</em><a href="#"><span>Voluptatem quia voluptas sit asper</span></a></li>
                            <li><em>4.</em><a href="#"><span>Consectetur adipiscing elit, incid</span></a></li>
                            <li><em>5.</em><a href="#"><span>Quia voluptas sit aspernatur aut</span></a></li>
                            <li><em>6.</em><a href="#"><span>Eos qui ratione voluptatem sequi</span></a></li>
                        </ul>
                    </div>
                    <div>
                        <figure class="effect-zoe">
                            <img src="../../public/images/about.jpg">
                            <figcaption>
                                <h3>Games<span>Zone</span></h3>
                                <p></p>
                                <p class="description">Suspendisse convallis malesuada libero, non rutrum arcu pellentesque lacinia.</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <div class="collection-agileits">
            <div class="collection-left"></div>
            <div class="collection-right">
                <div>
                    <img src="../../public/images/c1.png" alt="">
                    <h3>Convallis</h3>
                    <p>A elementum ligula lacus ac quam ultrices a scelerisque praesent vel suspendisse scelerisque.</p>
                </div>
                <div></div>
                <div>
                    <img src="../../public/images/c2.png" alt="">
                    <h3>Lacinia</h3>
                    <p>A elementum ligula lacus ac quam ultrices a scelerisque praesent vel suspendisse scelerisque.</p>
                </div>
                <div></div>
                <div>
                    <img src="../../public/images/c3.png" alt="">
                    <h3>Sapien</h3>
                    <p>A elementum ligula lacus ac quam ultrices a scelerisque praesent vel suspendisse scelerisque.</p>
                </div>
                <div></div>
            </div>
        </div>
        <div class="team">
            <div class="container">
                <h3>Our Team</h3>
                <div class="content">
                    <div class="view">
                        <img src="../../public/images/t1.jpg">
                        <h4>Mariya Thomas</h4>
                        <p>Games Designer</p>
                    </div>
                    <div class="view">
                        <img src="../../public/images/t2.jpg">
                            <h4>Dino Jass</h4>
                            <p>Games Designer</p>
                        </div>
                    <div class="view">
                        <img src="../../public/images/t3.jpg">
                        <h4>Michael Doe</h4>
                        <p>Games Designer</p>
                    </div>
                    <div class="view">
                        <img src="../../public/images/t4.jpg">
                        <h4>Rita James</h4>
                        <p>Games Designer</p>
                    </div>
                </div>
            </div>
        </div>
        <Infoot></Infoot>
    </div>
</template>
<script>
import navHead from '@/components/navHead.vue';
import Infoot from '@/components/Infoot.vue';
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
    #about .about-agileinfo{
        width:100%;
        background:#fff;
    }
    #about .about-agileinfo>.container{
        width:1170px;
        margin:0 auto;
        padding:30px 15px;
    }
    #about .about-agileinfo>.container>h2{
        font-size: 40px;
        color: #e91e63;
        margin-bottom: 40px;
        text-align: center;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
        font-weight:500;
    }
    #about .about-grids-w3-agileits{
        display:flex;
        justify-content:space-between;
    }
    #about .about-grids-w3-agileits>div:first-child>ul{
        list-style:none;
        line-height:60px;
    }
    #about .about-grids-w3-agileits>div:first-child>ul>li>em{
        padding: .7em 1em;
        background: #E91E63;
        color: #fff;
        margin-right: 2em;
        border-radius: 60%;
        font-style: normal;
    }
    #about .about-grids-w3-agileits>div:first-child>ul>li>a{
        text-decoration:none;
        color:#999;
        font-size:14px;
        position:relative;
        overflow: hidden;
        line-height: 1;
        z-index: 9999;
        padding: 10px;
        display: inline-flex;
    }
    #about .about-grids-w3-agileits>div:first-child>ul>li>a::after{
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
        z-index: -1;
        background: #0b219d;
        transform: translate3d(101%,0,0);
        transition: transform 0.5s;
    }
    #about .about-grids-w3-agileits>div:first-child>ul>li>a:hover{
        color: #fff;
        outline: none;
    }
    #about .about-grids-w3-agileits>div:first-child>ul>li>a:hover::after{
        transform:translate3d(0,0,0);
    }
    #about .about-grids-w3-agileits>div:last-child{
        width:570px;
        padding:0 15px;
    }
    #about figure{
        position: relative;
        overflow: hidden;
        margin: 0;
        width: 100%;
        background: transparent;
        text-align: center;
    }
    #about figure>img{
        position: relative;
        display: block;
        width: 100%;
        opacity: 0.8;
        padding: .5em;
        border: 1px dotted #999;
    }
    #about figure.effect-zoe h3{
        font-size: 1.3em;
        color: #fff;
        float: left;
        text-align: center;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
        font-weight: 500;
        line-height: 1.1;
    }
    #about figure.effect-zoe h3>span{
        color: #0c1e81;
        margin-left: 15px;
    }
    #about figure.effect-zoe p.description{
        position: absolute;
        bottom: 8em;
        padding: 2em;
        color: #fff;
        font-size: .8em;
        line-height: 1.8em;
        background: rgba(53, 53, 53, 0.25);
        opacity: 1;
    }
    #about figure.effect-zoe figcaption{
        bottom: 9px;
        top: auto;
        padding: 1em;
        height: 3.3em;
        background: #E91E63;
        color: #212121;
        position: absolute;
        left: 9px;
        width: 96.7%;
    }
    #about .collection-agileits{
        width: 100%;
        height: 726px;
        padding: 50px 0;
        display: flex;
        justify-content: space-between;
    }
    #about .collection-agileits>.collection-left{
        width: 34%;
        height: 626px;
        background: url("../../public/images/c1.jpg") no-repeat 0px 0px ;
        background-size: cover;
    }
    #about .collection-agileits>.collection-right{
        width: 66%;
        height: 626px;
        float: right;
    }
    #about .collection-agileits>.collection-right>div{
        width: 33.3%;
        height: 313px;
        float: left;
    }
    #about .collection-agileits>.collection-right>div:nth-child(2n-1){
        background:#000;
        text-align:center;
        color:#fff;
        padding-top:50px;
    }
    #about .collection-agileits>.collection-right>div:nth-child(2n-1)>img{
        width:50px;
        height:50px;
    }
    #about .collection-agileits>.collection-right>div:nth-child(2n-1)>h3{
        margin: 30px 0 20px;
        font-family: 'Josefin Sans', sans-serif;
        font-size:24px;
        font-weight:500;
    }
    #about .collection-agileits>.collection-right>div:nth-child(2n-1)>p{
        font-size: 14px;
        font-weight: 600;
        color: #999;
        line-height: 30px;
        padding: 0 30px;
    }
    #about .collection-agileits>.collection-right>div:nth-child(2){
        background:url("../../public/images/c4.jpg") no-repeat 0px 0px;
        background-size:cover;
    }
    #about .collection-agileits>.collection-right>div:nth-child(4){
        background:url("../../public/images/c3.jpg") no-repeat 0px 0px;
        background-size:cover;
    }
    #about .collection-agileits>.collection-right>div:nth-child(6){
        background:url("../../public/images/c2.jpg") no-repeat 0px 0px;
        background-size:cover;
    }
    #about .team{
        width:100%;
        background:#e8e8e8;
        padding:50px 0;
        text-align:center;
    }
    #about .team>.container{
        width:1170px;
        height:445px;
        margin:0 auto;
    }
    #about .team>.container>h3{
        font-size: 40px;
        color: #e91e63;
        margin-bottom: 40px;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
        font-weight: 500;
    }
    #about .team>.container>.content{
        width:100%;
        display:flex;
        justify-content:space-between;
        padding:0 15px;
    }
    #about .team>.container>.content>.view{
        width:23%;
    }
    #about .view>img{
        width:100%;
    }
    #about .view>h4{
        font-size: 1.6em;
        color: #E91E63;
        margin: 1em 0 .5em;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 500;
    }
    #about .view>p{
        font-size:14px;
        text-align:center;
        color: #999;
    }
</style>