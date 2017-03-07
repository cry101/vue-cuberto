<template>
    <div id="wrap-projects" class="cb-wrap" data-page-title="Projects — Cuberto" >
        <div class="cb-projects">
            <div class="cb-projects-left" >
                <div class="cb-projects-bg"></div>
                <div class="cb-projects-header">
                    <h1>Projects</h1>
                </div>
                <div class="cb-projects-items">
                		<template v-for="items in items">
												<Items :item="item" v-for="item in items.data"></Items>
									  </template>
                </div>
            </div>
            <div class="cb-projects-right">
                <div class="cb-projects-line"></div>
                <div class="cb-projects-menu" style="height: 100vh;">
                		<div class="cb-projects-menu-inner" id="projectsMenuList">
                    		<Menus :item="item" v-for="item in items"></Menus>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery"

import Items from '../components/projects/items'
import Menus from '../components/projects/menus'

export default {
  name: 'project',
  components: {
    Items,Menus
  },
  data : function(){
     return this.$store.state.projectsData
  },
  mounted : function(){
  	$(".cb-navbar").addClass('-bw');
  	$(".cb-projects-item").eq(0).addClass('-active');
  	$(".cb-project-letter").delay(1000).trigger('immediateSplit');
  	var projectsMenuList=$('#projectsMenuList div .cb-projects-menu-item');
    var projectsItem=$('.cb-projects-items .cb-projects-item');
    for(var i=0;i<projectsMenuList.length;i++){
        projectsMenuList[i].onmouseover=function(){
            $('#projectsMenuList .cb-projects-menu-item.-active').removeClass('-active');
            $(this).addClass('-active');
            var target=$(this).data('project-target');
            //console.log(target);
            for(var i=0;i<projectsItem.length;i++){
                var str=$(projectsItem[i]).data('project-name');
                if(str==target){
                    $('.cb-projects-items').find('.-active').removeClass('-active');
                    $('.cb-projects-items').find('.bounceInLeft').removeClass('animated bounceInLeft');
                    $('.cb-projects-items').find('.fadeInUp').removeClass('animated fadeInUp');
                    var $this=$(projectsItem[i]);
                    $this.addClass('-active');
                    $this.find('.cb-project-header').addClass('animated bounceInLeft');
//                    setTimeout(function(){
                        $this.find('.cb-project-description').addClass('animated fadeInUp');
                        $this.find('.cb-project-brief').addClass('animated fadeInUp');
//                    },500)
                }
            }
        }
    }
  }
}
</script>


<style>
.cb-navbar.-bw .cb-navbar-nav-item, .cb-navbar.-inverse-force .cb-navbar-back, .cb-navbar.-inverse-force .cb-navbar-nav-item {
    color: #000;
}
.cb-raiffeisen-brief .cb-brief-header, .cb-raiffeisen-project .cb-project-fill {
    background: #F2DF07;
}
.cb-polymatica-brief .cb-brief-header, .cb-polymatica-project .cb-project-fill {
    background: #5475d9;
}
.cb-ibox-brief .cb-brief-header, .cb-ibox-project .cb-project-fill {
    background: #00A0E1;
}
.cb-project-brief-img {
    margin: 20px -20px;
}
.cb-project-brief-img-bg {
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.cb-project-brief-img-bg:after {
    content: "";
    display: block;
    padding-top: 50%;
}
.cb-project.-simple .cb-project-brief-line {
    display: none;
}
.cb-project-brief-line {
    display: block;
    margin: 45px 0 20px;
    width: 4%;
    min-width: 54px;
    border: 0;
    background: #fff;
    -webkit-transform-origin: right center;
    transform-origin: right center;
}
.cb-project-brief-text {
    font-family: "Source Code Pro",sans-serif;
    font-size: 12px;
    letter-spacing: .51px;
    line-height: 23px;
}
.cb-project-brief-text p {
    margin: 0;
    padding: 0;
}

.cb-btn.-flat.-dark {
    border-color: #000;
}
@media (min-width: 375px){
	.cb-project-brief-img {
    margin: 22px -25px;
	}
}

@media (min-width: 768px){
	.cb-project-brief-img {
    margin: 0 0 30px;
	}
	.cb-project.-simple .cb-project-brief-line {
    display: block;
	}
	.cb-project-brief-text {
    font-size: 14px;
    letter-spacing: .6px;
    line-height: 28px;
	}
}

</style>