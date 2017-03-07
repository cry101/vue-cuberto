<template>
	<div v-if="item.type == 1" :data-project-name="item.name" class="cb-projects-item">
      <div :data-project-name="item.name" class="cb-project -half" :class="item.name | addClass">
          <div class="cb-project-wrap">
              <div class="cb-project-bg">
                  <div class="cb-project-bg-inner">
                      <div class="cb-project-bg-photo"></div>
                  </div>
              </div>
              <div class="cb-project-fill"></div>
              <div class="cb-project-body">
                  <div class="cb-project-body-inner">
                      <div class="cb-container">
                          <div class="cb-project-header">
                              <h2>{{item.name | toUpperCase}}</h2>
                              <hr>
                          </div>
                          <div class="cb-project-description">
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
      </div>
  </div>
  <div v-else :data-project-name="item.name" class="cb-projects-item">
      <div :data-project-name="item.name" class="cb-project -half -simple">
          <div class="cb-project-wrap">
              <div :style="item.bgcolor | addBgColor" class="cb-project-fill"></div>
              <div class="cb-project-body">
                  <div class="cb-project-body-inner">
                      <div class="cb-container">
                          <div class="cb-project-header">
                              <h2>{{item.name | toUpperCase}}</h2>
                          </div>
                          <div class="cb-project-brief">
                              <div class="cb-project-brief-img">
                                  <div :style="item.name | addBgImg" class="cb-project-brief-img-bg"></div>
                              </div>
                              <div class="cb-project-brief-line"></div>
                              <div class="cb-project-brief-text">
                                  <p>Polymaze is a digital platform capable of connecting media companies, brands, and publishers with the best content creators on the planet. Our task was to develop a website and branding strategy reflective of the company’s innovative approach to media generation.</p>
                              </div>
                              <div class="cb-project-brief-store"><a href="#" target="_blank" class="cb-project-brief-store-item"><span class="cb-project-brief-store-item-icon"><i class="cb-icon -web"></i></span><span class="cb-project-brief-store-item-text"><span data-text="Web">Web</span></span></a></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>


<script>
import Letter from '../../components/home/letter'

export default {
  name: 'items',
  props: ["item"],
  components: {
    Letter
  },
  filters: {
  	addClass : function(value){
  		if (!value) return '';
      value = value.toString();
      return "cb-"+ value +"-project"
  	},
  	addBgColor: function(value){
  		if (!value) return '';
      value = value.toString();
      return "background:" + value
  	},
  	addBgImg: function(value){
  		if (!value) return '';
      value = value.toString();
      return "background-image:url(/static/image/projects/"+value+".jpg);"
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
	}
}

</script>