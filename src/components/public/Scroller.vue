<template>
<div class="cb-scroller">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 40" style="enable-background:new 0 0 25 40;" xml:space="preserve"><path d="M11,39.5C5.2,39.5,0.5,34.8,0.5,29V11C0.5,5.2,5.2,0.5,11,0.5h3c5.8,0,10.5,4.7,10.5,10.5v18c0,5.8-4.7,10.5-10.5,10.5H11z"></path><circle cx="12.5" cy="11.5" r="1.5"></circle></svg>
</div>
</template>

<script>
export default {
  name: 'scroll'
}
</script>

<style>
.cb-scroller {
    display: none;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}
.cb-scroller.-hidden {
    cursor: default;
    display: none;
}
.cb-scroller svg {
    height: 41px;
    -webkit-transition: opacity .4s ease-in-out .9s;
    transition: opacity .4s ease-in-out .9s;
}
svg:not(:root) {
    overflow: hidden;
}
.cb-scroller svg path {
    fill: rgba(255,255,255,0);
    stroke: #FFF;
    stroke-dasharray: 51,0;
    stroke-dashoffset: 109;
    -webkit-transition: stroke-dasharray 1.3s cubic-bezier(.74,.05,.12,.99) .9s;
    transition: stroke-dasharray 1.3s cubic-bezier(.74,.05,.12,.99) .9s;
}
.cb-scroller svg circle {
    fill: #FFF;
    -webkit-animation: cb-scroller-mouse-circle ease-in-out 1.9s infinite;
    animation: cb-scroller-mouse-circle ease-in-out 1.9s infinite;
}
@-webkit-keyframes cb-scroller-mouse-circle{
    0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:0}
    40%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}
    70%{opacity:1}
    100%{-webkit-transform:translateY(12px);transform:translateY(12px);opacity:0}
}
@keyframes cb-scroller-mouse-circle{
    0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:0}
    40%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}
    70%{opacity:1}
    100%{-webkit-transform:translateY(12px);transform:translateY(12px);opacity:0}
}
@media (min-width: 1025px){
    .cb-scroller {
        display: block;
        position: absolute;
        left: 50%;
        bottom: 45px;
        width: 66px;
        margin: 0 0 -2px -33px;
        z-index: 20;
        cursor: pointer;
        text-align: center;
        -webkit-transition: opacity .2s;
        transition: opacity .2s;
    }
}
</style>