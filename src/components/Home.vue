<template>
<div id="wrap-main" data-navbar-class="-default"  class="cb-wrap wrap-main" >
        <div class="cb-slider -done swiper-container" tabindex="0" style="width: 100%;height:100vh">
            <div class="cb-slider-control">
                <a class="cb-slider-control-item -prev">
                    <i class="cb-icon -arrow-up"></i>
                </a>
                <a class="cb-slider-control-item -next">
                    <i class="cb-icon -arrow-down"></i>
                </a>
            </div>
            <div class="cb-slider-nav"><!-- -visible去掉，slider-nav为不可见-->
                <div class="cb-slider-nav-inner"><!-- -active，表明cb-slider-items中哪个为激活状态-->
                    <a class="cb-slider-nav-item -active"><span>Y</span><span>O</span><span>L</span><span>L</span><span>A</span></a>
                    <a class="cb-slider-nav-item"><span>H</span><span>Y</span><span>P</span><span>H</span><span>E</span><span>N</span></a>
                    <a class="cb-slider-nav-item"><span>N</span><span>E</span><span>E</span><span>M</span><span>B</span><span>L</span><span>E</span></a>
                    <a class="cb-slider-nav-item"><span>B</span><span>O</span><span>R</span><span>O</span><span>U</span><span>G</span><span>H</span></a>
                    <a class="cb-slider-nav-item"><span>T</span><span>R</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></a>
                </div>
            </div>
            <div class="cb-slider-items swiper-wrapper" style="width: 100%;height:100vh">
                <!---out -next  -in-->
                <div data-slide-name="intro" class="cb-slider-item swiper-slide">
                    <header class="cb-project cb-intro">
                        <div class="cb-project-wrap">

                            <Sky></Sky>
                            
                            <div class="cb-project-body -full">
                                <div class="cb-project-body-inner">
                                    <div class="cb-container ">
                                        <div class="cb-intro-container">
                                            <div class="cb-intro-header">
                                                <hr>
                                                <h1><span>{{first.title}}</span><span>{{first.line1}}</span>
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Player></Player>
                            
                            <div class="cb-intro-awards">
                                <div class="cb-intro-awards-inner"><a href="http://www.awwwards.com/sites/cuberto-3" target="_blank" class="cb-intro-awards-item -awwwards"></a><a href="http://thefwa.com/cases/cuberto" target="_blank" class="cb-intro-awards-item -fwa"></a></div>
                            </div>
                            <!--data-letter-state的值‘show,immediateSplit,hide-->
                            <Letter :letter="first.letter" :state="first.state"></Letter>
                        </div>
                    </header>
                </div>

                <Pages :item="item" v-for="item in arr"></Pages>

            </div>
        </div>
    </div>
</template>


<script>
import $ from "jquery"
import swiper from "swiper"
import animate from "animate.css"
//import snap from "snapsvg"
//import "../../static/script/letter.js"

import Sky from '../components/home/sky'
import Player from '../components/public/player'
import Letter from '../components/home/letter'
import Pages from '../components/home/pages'


export default {
  name: 'home',
  components: {
    Letter,Pages,Player,Sky
  },
  data : function(){
     return this.$store.state.homeDate
  },
  mounted : function(){
    var _this = this;
    _this.$store.dispatch('deleteLetter');
    $(".cb-navbar").removeClass('-bw');
    var Pswitch=$('.cb-slider-nav .cb-slider-nav-item');
    var pLetter=$('#wrap-main .cb-project-letter');
    var cbHeader = $('.cb-project-header');
    var cbDesc = $('.cb-project-description');
    var cbFill = $('.cb-project-fill');
    var mySwiper = new Swiper('.swiper-container',{
        speed: 2000,
        effect: "fade",
        fade: false,
        //loop: true,
        direction: "horizontal",
        keyboardControl: true,
        mousewheelControl: true,
        onInit: function(swiper){ //Swiper3.x的初始化是onInit
            _this.$store.dispatch('addFirstLetter')
            $(pLetter[0]).trigger('show').trigger('immediateSplit');
        },
        onSlidePrevStart: function(swiper){
            //往前
            if(swiper.activeIndex == 0){
                _this.$store.dispatch('addFirstLetter');
                $(pLetter[0]).trigger('show').trigger('immediateSplit');
            }
            $(pLetter[swiper.activeIndex+1]).trigger('hide');
            $(pLetter[swiper.activeIndex]).trigger('show').trigger('immediateSplit');
            cbFill.removeClass('moveS').eq(swiper.activeIndex).addClass('moveS');
            cbFill.removeClass('moveE').eq(swiper.activeIndex+1).addClass('moveE');
        },
        onSlideNextStart: function(swiper){
            //往后
            $(pLetter[swiper.activeIndex-1]).trigger('hide');
            _this.$store.dispatch('addLetter',swiper.activeIndex-1)
            $(pLetter[swiper.activeIndex]).trigger('show').trigger('immediateSplit');
            cbFill.removeClass('moveS').eq(swiper.activeIndex-1).addClass('moveS');
            cbFill.removeClass('moveE').eq(swiper.activeIndex-2).addClass('moveE');
        },
        onSlideChangeStart: function(swiper){
            cbHeader.removeClass('bounceInLeft').eq(swiper.activeIndex-1).addClass('bounceInLeft');
            cbDesc.removeClass('fadeInUp').eq(swiper.activeIndex-1).addClass('fadeInUp');
            
            if(swiper.activeIndex==0){
                $('.cb-scroller').removeClass('-hidden');
                $('.cb-slider-nav').removeClass('-visible');
            }else{
                $('.cb-scroller').addClass('-hidden');
                $('.cb-slider-nav').addClass('-visible');
                $('.cb-slider-nav .-active').removeClass('-active');
                $(Pswitch[swiper.activeIndex-1]).addClass('-active');

            }
        }
    });

    for(var i=0;i<Pswitch.length;i++){
        Pswitch[i].index=i;
        Pswitch[i].onclick=function(){
            mySwiper.slideTo(this.index+1, 1000, true);
            $('.cb-slider-nav .-active').removeClass('-active');
            $(Pswitch[this.index]).addClass('-active');
        }
    }
   

    var projectsMenuList=$('#projectsMenuList .cb-projects-menu-item');
    for(var i=0;i<projectsMenuList.length;i++){
        projectsMenuList[i].onmouseover=function(){
            $('#projectsMenuList .cb-projects-menu-item.-active').removeClass('-active');
            $(this).addClass('-active');
        }
    }
  }
}
    

</script>

<style>

</style>