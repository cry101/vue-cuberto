<template>
	<div class="cb-loader -hidden" ><!--加载loading，-hidden控制显示与隐藏-->
    <div class="cb-loader-img"><img src="static/image/C-tru-2.gif" alt=""></div>
	</div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style>
.cb-loader.-hidden {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
}
.cb-loader {
    z-index: 999;
    -webkit-transition: -webkit-transform 1.2s cubic-bezier(1,0,.24,1) .3s;
    transition: -webkit-transform 1.2s cubic-bezier(1,0,.24,1) .3s;
    transition: transform 1.2s cubic-bezier(1,0,.24,1) .3s;
    transition: transform 1.2s cubic-bezier(1,0,.24,1) .3s,-webkit-transform 1.2s cubic-bezier(1,0,.24,1) .3s;
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
}
.cb-loader, .cb-loader-img {
    position: fixed;
    left: 0;
    right: 0;
}
.cb-loader, .cb-wrap {
    top: 0;
    height: 100%;
    width: 100%;
}
.cb-loader, .cb-project-bg {
    background: #fff;
    bottom: 0;
    overflow: hidden;
}
.cb-loader-img {
    top: 50%;
    margin: -40px 0 0;
    text-align: center;
    opacity: 1;
    -webkit-transition: opacity .4s ease-in-out;
    transition: opacity .4s ease-in-out;
}
.cb-loader-img img {
    width: 80px;
}
@media (min-width: 768px){
    .cb-loader-img {
        margin: -75px 0 0;
    }
    .cb-loader-img img {
        width: 150px;
    }
}

</style>