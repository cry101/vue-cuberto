<template>
	<div class="cb-intro-bg-audio">
	    <audio autoplay="autoplay" loop="" id="intro-audio">
	        <source src="/static/Media/intro.mp3" type="audio/mpeg">
	    </audio>
	    <div class="cb-intro-controls"><!--intro-audio-btn 加上-off为音乐关闭-->
	        <button id="intro-audio-btn" class="cb-btn -audio" :class="state == 1?'':'-off'" v-on:click="play()"><span></span><span></span><span></span><span></span><span></span><span></span>
	        </button>
	    </div>
	</div>
</template>

<script>
export default {
  name: 'player',
  data () {
    return {
      state : 1
    }
  },
  methods : {
  	play: function(){
        if(this.state == 1){
					document.getElementById('intro-audio').pause();
					this.state = 2
        }else{
        	document.getElementById('intro-audio').play();
        	this.state = 1
        }
  	}

  }
}
</script>