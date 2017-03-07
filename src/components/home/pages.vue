<template>
	 <div class="cb-slider-item swiper-slide" >
      <header class="cb-project" :class="item.title | addClass">
          <div class="cb-project-wrap">
              <div class="cb-project-bg">
                  <div class="cb-project-bg-splitter"></div>
                  <div class="cb-project-bg-inner">
                      <div class="cb-project-bg-video">
                          <video  autoplay="autoplay" loop="loop">
                              <source :src="item.title | addMedia" type="video/mp4" />
                              <!--<source src="/assets/video/yolla.webm" type="video/webm">-->
                              <!--<source src="/assets/video/yolla.ogv" type="video/ogg">-->
                          </video>
                      </div>
                      <div class="cb-project-bg-photo"></div>
                  </div>
              </div>
              <div class="cb-project-fill"></div>
              <div class="cb-project-body">
                  <div class="cb-project-body-inner">
                      <div class="cb-container">
                          <div class="cb-project-header animated">
                              <h2>{{item.title | toUpperCase}}</h2>
                              <hr>
                          </div>
                          <div class="cb-project-description animated">
                              <p>{{item.line1}}</p>
                              <p>{{item.line2}}</p>
                              <p>{{item.line3}}</p>
                              <p class="-more"><a href="#" class="cb-btn -flat">View Case</a></p>
                          </div>
                      </div>
                  </div>
              </div>
              <Letter :letter="item.letter" :state="item.state"></Letter>
          </div>
      </header>
      <div class="cb-slider-item-article"></div>
  </div>
</template>

<script>

import Letter from './letter'

export default {
  name: 'pages',
  props : ['item'],
  filters: {
  	addClass : function(value){
  		if (!value) return '';
      value = value.toString();
      return "cb-"+ value +"-project"
  	},
  	addMedia : function(value){
  		if (!value) return '';
      value = value.toString();
      return "/static/Media/"+ value +".mp4"
  	},
  	toUpperCase : function(value){
  		if (!value) return '';
      value = value.toString();
      var str = value.toLowerCase();
			var strarr = str.split(' ');
			var result = '';
			for(var i in strarr){
			result += strarr[i].substring(0,1).toUpperCase()+strarr[i].substring(1)+' ';
			}
			return result;
  	}
  },
  components: {
    Letter
  }
}
</script>

<style>

@keyframes moveStart
{
from {width: 0;}
to {width: 50%;}
}
@-moz-keyframes moveStart /* Firefox */
{
from {width: 0;}
to {width: 50%;}
}
@-webkit-keyframes moveStart /* Safari 和 Chrome */
{
from {width: 0;}
to {width: 50%;}
}
@-o-keyframes moveStart /* Opera */
{
from {width: 0;}
to {width: 50%;}
}

@keyframes moveEnd
{
0% {width: 50%;}
50% {width: 100%;transform:translateX(0%);}
100%{transform:translateX(100%)}
}
@-moz-keyframes moveEnd /* Firefox */
{
0% {width: 50%;}
50% {width: 100%;transform:translateX(0%);}
100%{transform:translateX(100%)}
}
@-webkit-keyframes moveEnd /* Safari 和 Chrome */
{
0% {width: 50%;}
50% {width: 100%;transform:translateX(0%);}
100%{transform:translateX(100%)}
}
@-o-keyframes moveEnd /* Opera */
{
0% {width: 50%;}
50% {width: 100%;transform:translateX(0%);}
100%{transform:translateX(100%)}
}
.cb-project-fill.moveS
{
  animation:moveStart .5s;
  -webkit-animation:moveStart .5s; /* Safari 和 Chrome */
}
.cb-project-fill.moveE
{
  animation:moveEnd 1.5s;
  -webkit-animation:moveEnd 1.5s; /* Safari 和 Chrome */
}
</style>