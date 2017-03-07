<template>
	<div class="cb-project-bg">
	    <div class="cb-project-bg-inner">
	        <div class="cb-intro-bg">
	            <div class="cb-intro-bg-photo"></div>
	            <div class="cb-intro-bg-sky">
	                <canvas id="intro-sky" width="100%" height="100%" style="opacity: 1;"></canvas>
	            </div>
	        </div>
	        <div class="cb-intro-bg-landscape"><img src="/static/image/landscape.svg" alt="landscape"></div>
	    </div>
	</div>
</template>

<script>
//星空组件  拼出来的。。
import $ from "jquery"

export default {
  name: 'sky',
  data : function(){
     return {
     	 freezed:"",
     	 centerX:"",
     	 centerY:"",
     	 canvas : "",
     	 ctx : "",
     	 popularity: .8,
     	 speedOffset : 0,
     	 freezedRollupSpeed: .015,
	     speedMin: .05,
	     maxTrailLength: .2,
     	 stars : [],
     	 paused : !1,
    	 animated : !1,
     }
  },
  mounted : function(){
  	this.init();
  	this.drawStars();
  	this.playAnimate();
  	this.registerHandler(".cb-intro");
  },
  methods: {
  	init: function(){
  			return this.freezed = !1,
        this.speedOffset = 0,
        this.canvas = document.getElementById("intro-sky"),
        !!this.canvas && (this.ctx = this.canvas.getContext("2d"),
        this.stars = [],
        this.canvas.width = window.innerWidth,
        this.canvas.height = window.innerHeight,
        this.centerX = this.canvas.width / 2,
        this.centerY = this.canvas.height / 2,
        //this.audio = t.soundId ? document.getElementById(t.soundId) : null,
        void this.populateSky())
  	},
  	random : function(t, e, a) {
        return parseFloat(Math.min(t + Math.random() * (e - t), e).toFixed(a || 4))
    },
    randomInt : function(t, e) {
        var a = t + Math.random() * (e + 1 - t);
        return a = Math.floor(a)
    },
    randomDistribution : function() {
        return arguments[Math.floor(Math.random() * arguments.length)]
    },
    toRad : function(t) {
        return t * (Math.PI / 180)
    },
  	populateSky : function() {
	      var e = Math.round(Math.sqrt(Math.pow(this.centerY, 2) + Math.pow(this.centerX, 2)))
	        , a = Math.floor(this.canvas.width * this.popularity);
	      this.stars = [];
	      for (var r = 0; r < a; r++) {
	          var n = {};
	          n.color = [255, 255, 255],
	          n.angle = Math.ceil(360 * Math.random()),
	          n.opacity = this.random(.15, .85),
	          n.width = this.randomDistribution(3, 2, 2, 2, 2, 1),
	          n.length = n.width / 2e3,
	          n.trailLength = 0,
	          n.radius = this.randomDistribution(this.randomInt(0, e), this.randomInt(25, e), this.randomInt(45, e), this.randomInt(50, e)),
	          n.speed = Math.abs((20 / n.radius + Math.random()) / 10),
	          this.stars.push(n)
	      }
    },
    clearCtx : function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
  	drawStars: function(){
  		 this.clearCtx();
  		 for (var e = 0; e < this.stars.length; e++) {
          var a = this.stars[e];
          a.angleRad = this.toRad(a.angle),
          a.angleRadEnd = a.angleRad + a.length,
          a.angleRadStart = a.angleRadStart ? a.angleRadStart : a.angleRad,
          this.freezed ? a.trailLength > this.maxTrailLength && (a.angleRadStart = a.angleRadEnd - a.trailLength) : a.angleRadStart = Math.min(a.angleRadStart + (this.freezedRollupSpeed + a.trailLength / 30), a.angleRad),
          a.trailLength = a.angleRadEnd - a.angleRadStart;
          var r = -Math.min(a.trailLength, .6);
          this.ctx.beginPath(),
          this.ctx.strokeStyle = "rgba(" + a.color[0] + "," + a.color[1] + "," + a.color[2] + "," + Math.max(a.opacity + r, .1) + ")",
          this.ctx.lineCap = "round",
          this.ctx.lineWidth = a.width,
          this.ctx.arc(this.centerX, this.centerY, a.radius, a.angleRadStart, a.angleRadEnd, !1),
          this.ctx.stroke(),
          a.angle += Math.max(a.speed + this.speedOffset, this.speedMin),
          360 == a.angle && (a.angle = 0)
      }
  	},
  	registerHandler : function(t) {
        var e = this;
        t = t ? document.querySelector(t) : this,
        t.addEventListener("mousemove", function(t) {
            var a = Math.abs(e.centerX - t.clientX)
              , r = Math.abs(e.centerY - t.clientY)
              , n = Math.max(a, r)
              , o = Math.abs(e.centerX - a)
              , i = Math.abs(e.centerY - r)
              , s = Math.min(o, i);
            n < 150 ? (e.freezed = !0,
            e.speedOffset = Math.min(.2, s / 13e3)) : (e.freezed = !1,
            e.speedOffset = Math.min(.2, s / 5e3))
        })
    },
    animateSky : function() {
          function t() {
              e = Date.now(),
              a = e - o,
              a > i && (o = e - a % i,
              r.drawStars()),
              r.paused ? r.animated = !1 : requestAnimationFrame(t)
          }
          var e, a, r = this, n = 351, o = Date.now(), i = 1e3 / n;
          t()
	   },
	   playAnimate : function() {
	        this.paused = !1,
	        this.speedOffset = 0,
	        this.freezed = !1,
	        this.animated || (this.animateSky(),
	        this.animated = !0),
	        $(this.canvas).animate({
	            opacity: 1
	        })
	        //this.playAudio()
	    },
	    pauseAnimate : function() {
	        this.paused = !0,
	        this.freezed ? $(this.canvas).animate({
	            opacity: .2
	        }) : $(this.canvas).animate({
	            opacity: .5
	        })
	       // this.pauseAudio()
	    }
  }
}
</script>