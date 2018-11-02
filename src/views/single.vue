<template>
    <div id="single">
        <navHead></navHead>
        <div class="agileits_breadcrumbs">
            <div class="container">
                <div class="agileits_breadcrumbs_left">
                    <ul>
                        <li>
                            <a href="#">HOME</a>
                            <em>|</em>
                        </li>
                        <li>SINGLE</li>
                    </ul>
                </div>
                <div class="agileits_breadcrumbs_right">
                    <h3>single</h3>
                </div>
            </div>
        </div>
        <div class="blog">
            <div class="container">
                <div class="wthree_blog_left">
                    <div class="wthree_blog_left_grid">
                        <div class="wthree_blog_left_grid_slider">
                            <img src="../../public/images/s1.jpg">
                        </div>
                        <h4>Games Zone</h4>
                        <h3>facilisis velit vitae gravida imperdiet</h3>
                        <ul>
                            <li>
                                <span><img src="../../public/images/ren.png"></span>
                                <a href="#">Jan Mark</a>
                                <i>|</i>
                            </li>
                            <li>
                                <span>❤</span>
                                <a href="#">20</a>
                                <i>|</i>
                            </li>
                            <li>
                                <span><img src="../../public/images/note.png"></span>
                                <a href="">5</a>
                                <i>|</i>
                            </li>
                            <li>
                                <span><img src="../../public/images/write18.png"></span>
                                <a href="#">Voluptatibus</a>
                            </li>
                        </ul>
                        <p>
                            Duis venenatis, mi quis malesuada ultricies, nisi nisl posuere sapien,
						id egestas lectus urna et massa. Morbi mauris turpis, posuere auctor auctor 
						ornare, auctor nec lectus. Class aptent taciti sociosqu ad litora torquent 
						per conubia nostra, per inceptos himenaeos.
						<em>
                            Nulla faucibus, arcu at consequat vulputate, turpis metus blandit urna, 
						quis suscipit orci nibh nec est. Phasellus tempus augue turpis. Fusce nec 
						tellus blandit, ullamcorper sapien vel, placerat erat. Nam non massa elit. 
						Morbi placerat molestie felis. Integer facilisis velit leo, vitae gravida 
						elit fringilla nec.
                        </em>
                            Quisque id nunc nec risus molestie aliquam. 
						Donec ex eros, lobortis et lorem quis, sagittis malesuada lectus. 
						Suspendisse ornare sed purus a imperdiet. Integer viverra nisi orci, 
						in volutpat leo ornare vitae.
                        </p>
                    </div>
                    <div class="agileits_share">
                        <ul>
                            <li><a href="#" class="linkto"></a></li>
                            <li><a href="#" class="google"></a></li>
                            <li><a href="#" class="twitter"></a></li>
                            <li><a href="#" class="facebook"></a></li>
                        </ul>
                    </div>
                    <div class="agileits_reply">
                       <h3>Leave a reply</h3>
                       <form action="#" method="post">
                            <input type="text" name="Name" placeholder="Name" required>
                            <input type="email" name="Email" placeholder="Email" required>
                            <input type="text" name="Subject" placeholder="Subject" required>
                            <textarea name="Message" placeholder="Type your comment..." required></textarea>
                            <input type="submit" value="提交">
                       </form> 
                    </div>
                </div>
                <div class="wthree_blog_right">
                    <div class="w3ls_search">
                        <form action="#" method="post">
                            <input type="text" name="Search" placeholder="Search on our blog" required>
                            <input type="submit" value="">
                        </form>
                    </div>
                    <div class="w3l_categories">
                        <h3>Categories</h3>
                        <ul>
                            <li><a href="#">Vitae gravida elit fringilla nec sociosqu</a></li>
                            <li><a href="#">Morbi mauris turpis, posuere auctor auctor</a></li>
                            <li><a href="#">Class aptent taciti sociosqu litora torquent</a></li>
                            <li><a href="#">Duis venenatis, mi quis malesuada ultricies</a></li>
                            <li><a href="#">Egestas lectus urna et massa morbi mauris</a></li>
                            <li><a href="#">Torquent conubia nostra inceptos himenaeos</a></li>
                            <li><a href="#">Urna et massa morbi mauris turpis, posuere</a></li>
                        </ul>
                    </div>
                    <div class="w3l_archives">
                        <h3>Archives</h3>
                        <ul>
                            <li>2 August 2017</li>
                            <li>14 August 2017</li>
                            <li>23 August 2017</li>
                            <li>8 September 2017</li>
                            <li>18 September 2017</li>
                        </ul>
                    </div>
                    <div class="w3agile_flickr_posts">
                        <h3>Flickr Posts</h3>
                        <div><a href="#"><img src="../../public/images/ng1.jpg"></a></div>
                        <div><a href="#"><img src="../../public/images/ng2.jpg"></a></div>
                        <div><a href="#"><img src="../../public/images/ng3.jpg"></a></div>
                        <div><a href="#"><img src="../../public/images/ng4.jpg"></a></div>
                        <div><a href="#"><img src="../../public/images/ng5.jpg"></a></div>
                        <div><a href="#"><img src="../../public/images/ng6.jpg"></a></div>
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
    #single .agileits_breadcrumbs{
        width:100%;
        padding:1em 0;
        background-color:#dfdc00;
    }
    #single .agileits_breadcrumbs>.container{
        width:1170px;
        padding:0 15px;
        margin:0 auto;
    }
    #single .agileits_breadcrumbs>.container::after{
        display:block;
        content:"";
        clear:both;
    }
    #single .agileits_breadcrumbs_left{
        width:70%;
        float:left;
        font-size:14px;
    }
    #single .agileits_breadcrumbs_left>ul{
        list-style:none;
        margin-top:5px;
    }
    #single .agileits_breadcrumbs_left>ul>li{
        display: inline-block;
        color: #212121;
        text-transform:uppercase;
    }
    #single .agileits_breadcrumbs_left>ul>li>a{
        text-decoration:none;
        color:#337ab7;
    }
    #single .agileits_breadcrumbs_left>ul>li>em{
        font-style:normal;
        padding:0 5px;
    }
    #single .agileits_breadcrumbs_right{
        width:30%;
        float:left;
    }
    #single .agileits_breadcrumbs_right>h3{
        font-size: 2em;
        color: #212121;
        font-weight: 700;
        text-align: center;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
    }
    #single .blog{
        width:100%;
        background:#f4f4f4;
        padding:50px 0;
    }
    #single .blog>.container{
        width:1170px;
        padding: 0 15px;
        margin:0 auto;
    }
    #single .blog>.container::after{
        display:block;
        content:"";
        clear:both;
    }
    #single .blog>.container>.wthree_blog_left{
        width:58.333%;
        float:left;
        position:relative;
        padding:0 15px;
        font-size:14px;
    }
    #single .wthree_blog_left_grid>.wthree_blog_left_grid_slider>img{
        width:100%;
        height:auto;
    }
    #single .wthree_blog_left_grid>h4{
        font-size: 1.5em;
        color: #e91e63;
        margin: 1em 0 0;
        font-weight: 700;
        text-align: left;
        font-family: 'Josefin Sans', sans-serif;
    }
    #single .wthree_blog_left_grid>h3{
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.5em!important;
        color: #212121;
        font-weight: 700;
        margin-bottom: 1em;
        text-align: left;
        text-transform: capitalize;
        margin-top: 10px;
    }
    #single .wthree_blog_left_grid>ul{
        list-style:none;
        padding: 0 0 1em 0;
        text-align:left;
    }
    #single .wthree_blog_left_grid>ul>li{
        display: inline-block;
        color: #8a8a8a;
        line-height: 30px;
        padding-right:20px;
    }
    #single .wthree_blog_left_grid>ul>li a{
        text-decoration:none;
        color:#212121;
    }
    #single .wthree_blog_left_grid>ul>li span{
        padding-right:8px;
    }
    #single .wthree_blog_left_grid>ul>li i{
        font-style:normal;
        padding-left:20px;
    }
    #single .wthree_blog_left_grid>ul img{
        width:14px;
        height:16px;
    }
    #single .wthree_blog_left_grid p{
        text-align: left;
        line-height: 27px;
        color: #999;
        font-size: 14px;
    }
    #single .wthree_blog_left_grid p em{
        display: block;
        margin: 1em 0;
        color: #999;
        text-align: left;
    }
    #single .agileits_share>ul{
        list-style:none;
        text-align:left;
    }
    #single .agileits_share>ul>li{
        display:inline-block;
    }
    #single .agileits_share>ul>li>a.linkto{
        display:inline-block;
        width:35px;
        height:35px;
        background:url(../../public/images/img-sprite.png) no-repeat -7px -4px;
        border:none;
        transition:all 0.5s;
    }
    #single .agileits_share>ul>li>a.linkto:hover{
        background:url(../../public/images/img-sprite.png) no-repeat -7px -47px;
    }
    #single .agileits_share>ul>li>a.google{
        display:inline-block;
        width:35px;
        height:35px;
        background:url(../../public/images/img-sprite.png) no-repeat -55px -4px;
        border:none;  
        transition:all 0.5s;
    }
    #single .agileits_share>ul>li>a.google:hover{
        background:url(../../public/images/img-sprite.png) no-repeat -55px -47px;
    }
    #single .agileits_share>ul>li>a.twitter{
        display:inline-block;
        width:35px;
        height:35px;
        background:url(../../public/images/img-sprite.png) no-repeat -108px -4px;
        border:none;
        transition:all 0.5s;
    }
    #single .agileits_share>ul>li>a.twitter:hover{
        background:url(../../public/images/img-sprite.png) no-repeat -108px -47px;
    }
    #single .agileits_share>ul>li>a.facebook{
        display:inline-block;
        width:35px;
        height:35px;
        background:url(../../public/images/img-sprite.png) no-repeat -159px -4px;
        border:none;
        transition:all 0.5s;
    }
    #single .agileits_share>ul>li>a.facebook:hover{
        background:url(../../public/images/img-sprite.png) no-repeat -159px -47px;
    }
    #single .agileits_reply{
        text-align:left;
    }
    #single .agileits_reply>h3{
        font-size: 1.5em!important;
        color: #212121;
        font-weight: 700;
        margin-bottom: 1em;
        text-align: left;
        margin-top:30px;
        text-transform: capitalize;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
        line-height: 1.5em;
    }
    #single .agileits_reply input{
        width: 100%;
        padding: 13px;
        border: 1px solid #000;
        margin-bottom: 30px;
        background: transparent;
        outline: none;
    }
    #single .agileits_reply textarea{
        width: 100%;
        padding: 10px;
        border: 1px solid #000;
        margin-bottom: 15px;
        height: 150px;
        resize: none;
        background: transparent;
        outline: none;
    }
    #single .agileits_reply input[type="submit"]{
        width:120px;
        height:44px;
        padding: 10px 35px;
        border: 2px solid rgb(2, 24, 136);
        color: rgb(2, 24, 136);
        outline: none;
        background: transparent;
        transition: 0.5s all;
    }
    #single .agileits_reply input[type="submit"]:hover{
        border: 2px solid #E91E63;
        color: #fff;
        background: #E91E63;
    }
    #single .wthree_blog_right{
        width:41.667%;
        padding:0 15px;
        float:left;
    }
    #single .wthree_blog_right .w3ls_search input[type="text"]{
        outline: none;
        padding: 10px;
        background: #f5f5f5;
        border: 1px solid #E1E1E1;
        color: #212121;
        font-size: 14px;
        width: 80%;
    }   
    #single .wthree_blog_right .w3ls_search input[type="submit"]{
        outline: none;
        padding: 9px 0 14px;
        background: url(../../public/images/img-sp.png) no-repeat 26px -392px rgb(2, 24, 136);
        border: none;
        width: 19%;
    }
    #single .w3l_categories{
        margin:3em 0;
    }
    #single .w3l_categories>h3{
        font-size: 1.5em!important;
        color: #212121;
        font-weight: 700;
        margin-bottom: 1em;
        text-align: left;
    }
    #single .w3l_categories>ul>li{
        list-style:none;
        margin-bottom: 1.5em;
        background: url(../../public/images/img-sp.png) no-repeat 0px -183px;
        padding-left: 2.5em;
        text-transform: capitalize;
        font-family: 'Poppins', sans-serif;
        text-align: left;
        color: #999;
        font-size: 14px;
    }
    #single .w3l_categories>ul>li>a{
        color: #999;
        text-decoration: none;
        line-height: 1.8em;
        font-size: 14px;
        transition: 0.5s all;
    }
    #single .w3l_categories>ul>li>a:hover{
        color: #e91e63;
    }
    #single .w3l_archives{
        margin:3em 0;
    }
    #single .w3l_archives h3{
        font-size: 1.5em!important;
        color: #212121;
        font-weight: 700;
        margin-bottom: 1em;
        text-align: left;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
    }
    #single .w3l_archives ul>li{
        margin-bottom: 1.5em;
        background: url(../../public/images/img-sp.png) no-repeat 0px -183px;
        padding-left: 2.5em;
        list-style: none;
        text-transform: capitalize;
        font-family: 'Poppins', sans-serif;
        text-align: left;
        color: #999;
        font-size: 14px;
    }
    #single .w3agile_flickr_posts>h3{
        font-size: 1.5em!important;
        color: #212121;
        font-weight: 700;
        margin-bottom: 1em;
        text-align: left;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 1px;
    }
    #single .w3agile_flickr_posts>div{
        width:48%;
        float:left;
        margin:1%;
    }
    #single .w3agile_flickr_posts::after{
        display:block;
        content:"";
        clear:both;
    }
    #single .w3agile_flickr_posts>div img{
        width:100%;
        height:auto;
    }
</style>