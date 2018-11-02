<template>
    <div id="games">
        <navHead></navHead>
        <div class="gallery">
            <div class="container">
                <h2>Exclusive Games</h2>
                <div class="gallery-grids">
                    <div class="gallery-grid">
                        <a href="#"><img src="../../public/images/g1.jpg"></a>
                        <a href="#"><img src="../../public/images/g2.jpg"></a>
                    </div>
                    <div class="gallery-grid">
                        <a href="#"><img src="../../public/images/g3.jpg"></a>
                        <a href="#"><img src="../../public/images/g5.jpg"></a>
                    </div>
                    <div class="gallery-grid">
                        <a href="#"><img src="../../public/images/g6.jpg"></a>
                        <a href="#"><img src="../../public/images/g7.jpg"></a>
                    </div>
                    <div class="gallery-grid">
                        <a href="#"><img src="../../public/images/g4.jpg"></a>
                        <a href="#"><img src="../../public/images/g8.jpg"></a>
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
    #games .gallery{
        width:100%;
        padding:50px 0;
        background:#f7f7f7;
    }
    #games .gallery>.container{
        width:1170px;
        padding:0 15px;
        text-align:center;
        margin:0 auto;
    }
    #games .gallery>.container>h2{
        font-size: 40px;
        color: #e91e63;
        margin-bottom: 40px;
        font-family: 'Josefin Sans', sans-serif;
        font-weight:500;
    }
    #games .gallery>.container>.gallery-grids{
        width:100%;
        display:flex;
        justify-content:space-between;
    }
    #games .gallery-grid{
        width:24%;
    }
    #games .gallery-grid img{
        width:100%;
    }
    #games .gallery-grid a{
        display:block;
        transition:all .8s linear;
    }
    #games .gallery-grid a:nth-child(2n){
        padding-top:12px;
    }
    #games .gallery-grid a:hover{
        transform:scale(0.9);
    }
</style>