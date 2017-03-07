<template>
		<div>
        <div class="cb-projects-menu-year"><span>{{item.year}}</span></div>
        <template v-for="item,index in item.data">
        <div :data-project-target="item.name" class="cb-projects-menu-item">
            <div class="cb-projects-menu-item-num"><span>{{index<10?'0'+index:index}}</span></div>
            <div class="cb-projects-menu-item-arr"><i class="cb-icon -pointer"></i></div>
            <div class="cb-projects-menu-item-title">{{item.name | toUpperCase}}</div>
        </div>
        </template>
    </div>
</template>

<script>

export default {
  name: 'menus',
  props: ["item"],
	filters: {
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