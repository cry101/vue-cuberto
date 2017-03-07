<template>
<div id="wrapper">
  <nav class="cb-navbar">
      <div class="cb-container">
          <div class="cb-navbar-left">
            <router-link to="/" class="cb-navbar-back"><i class="cb-icon -long-arrow-left"></i></router-link>
            <router-link to="/" class="cb-navbar-logo"></router-link>
          </div>
          <div class="cb-navbar-right">
              <div class="cb-navbar-nav">
                  <router-link to="/projects" id="navbar-projects" class="cb-navbar-nav-item">
                      <span class="cb-navbar-nav-item-icon"><i class="cb-icon -bars"></i></span>
                      <span class="cb-navbar-nav-item-text">Projects</span>
                  </router-link>
                  <router-link to="/contacts" id="navbar-contacts" class="cb-navbar-nav-item">
                      <span class="cb-navbar-nav-item-icon"><i class="cb-icon -contacts"></i></span>
                      <span class="cb-navbar-nav-item-text">Contacts</span>
                  </router-link>
              </div>
          </div>
      </div>
  </nav>
  <Loading></Loading>
  <Scroller></Scroller>
  <div class="cb-content">
      <router-view></router-view>
  </div>
</div>
</template>

<script>
import Loading from './components/public/Loading'
import Scroller from './components/public/Scroller'

export default {
  name: 'app',
  components: {
    Loading,Scroller
  }
}
</script>

<style>
body {
    background: #fff;
    font-family: "Theano Didot",serif;
    font-size: 14px;
    letter-spacing: .4px;
    color: #000;
}
body, html {
    height: 100%;
}
body,html,a, abbr, acronym, address, applet, article, aside, audio, big, blockquote, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, ul, var, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}

*, :after, :before {
    box-sizing: border-box;
}
article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
    display: block;
}
.cb-btn.-flat, .cb-carousel-caption-item, .cb-carousel-paginator-item, .cb-navbar, .cb-slider-nav-item {
    font-family: Montserrat,"Open Sans",sans-serif;
}
a {
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
    color:#fff
}
.btn, .btn-group, .btn-group-vertical, .caret, img {
    vertical-align: middle;
}
hr, img {
    border: 0;
}
hr {
    box-sizing: content-box;
    height: 0;
}
hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border-top: 1px solid #eee;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}
.h1, .h2, .h3, h1, h2, h3 {
    margin-top: 20px;
    margin-bottom: 10px;
}
.h1, h1 {
    font-size: 36px;
}
.h2, h2 {
    font-size: 30px;
}
.cb-btn.-flat:after, .cb-carousel-nav-item:before, .cb-carousel-paginator-item:after, .cb-contacts-right-text-phone a:before, .cb-intro-awards-item:after, .cb-iphone.-six .cb-iphone-screen:before, .cb-iphone.-six:after, .cb-navbar-nav-item-text:after, .cb-navbar:after, .cb-project.-simple .cb-project-header h1:before, .cb-project.-simple .cb-project-header h2:before, .cb-project.-simple .cb-project-header h3:before {
    content: "";
}
.btn-toolbar:after, .cb-navbar:after, .clearfix:after, .container-fluid:after, .container:after, .dropdown-menu>li>a, .form-horizontal .form-group:after, .modal-footer:after, .modal-header:after, .nav:after, .owl-carousel .owl-stage:after, .row:after {
    clear: both;
}

.cb-btn.-flat, .cb-carousel-caption-item, .cb-carousel-paginator-item, .cb-navbar, .cb-slider-nav-item {
    font-family: Montserrat,"Open Sans",sans-serif;
}
.cb-icon, body {
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.cb-icon {
    font-family: Cuberto-Icons!important;
    /*speak: none;*/
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
}
audio, canvas, progress, video {
    display: inline-block;
    vertical-align: baseline;
}
audio:not([controls]) {
    display: none;
    height: 0;
}
.cb-navbar {
    position: fixed;
    top: 25px;
    right: 0;
    left: 0;
    z-index: 100;
}
.cb-navbar:after {
    display: block;
}
.cb-container {
    margin: 0 20px;
}
.cb-navbar-left {
    float: left;
}
.cb-navbar-back {
    display: none;
    height: 12px;
    width: 0;
    overflow: hidden;
    font-size: 44px;
    color: #fff;
    line-height: 1;
    vertical-align: middle;
    -webkit-transition: width .3s ease-in-out,color 0s,-webkit-transform .15s ease-in-out;
    transition: width .3s ease-in-out,color 0s,-webkit-transform .15s ease-in-out;
    transition: width .3s ease-in-out,transform .15s ease-in-out,color 0s;
    transition: width .3s ease-in-out,transform .15s ease-in-out,color 0s,-webkit-transform .15s ease-in-out;
}
.cb-navbar-back i {
    display: block;
    margin: -15px 0 0 130px;
    -webkit-transition: margin .5s ease-in-out;
    transition: margin .5s ease-in-out;
}
.cb-icon.-long-arrow-left:before {
    content: "\e90e";
}
.cb-navbar-logo {
    display: inline-block;
    width: 129px;
    height: 10px;
    vertical-align: middle;
    background-image: url(/static/image/logo.svg);
    background-position: top left;
    background-size: 100%;
    background-repeat: no-repeat;
    opacity: 1;
    -webkit-transition: opacity .15s;
    transition: opacity .15s;
}
.cb-navbar-logo:hover{
    filter:alpha(opacity=50);
    -moz-opacity:0.5;
    -khtml-opacity: 0.5;
    opacity: 0.5;
}
.cb-navbar-right {
    float: right;
    text-align: right;
}
.cb-navbar-nav {
    display: inline-block;
    vertical-align: middle;
    margin: 0 -15px;
    padding: 0;
}
.cb-navbar-nav-item {
    position: relative;
    display: inline-block;
    margin: 0 10px;
    padding: 0 5px;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-align: right;
    -webkit-transition: all .3s,color 0s;
    transition: all .3s,color 0s;
}
.cb-navbar-nav-item-icon {
    font-size: 16px;
    -webkit-transition: all .2s;
    transition: all .2s;
}
.cb-navbar-nav-item-text {
    display: none;
}
.cb-navbar-nav-item-text:after {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    width: 0;
    margin: -1px 0 0;
    border-top: 1px #fff solid;
    -webkit-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;
}
.cb-navbar-nav-item.-active .cb-navbar-nav-item-text:after,.cb-navbar-nav-item:hover .cb-navbar-nav-item-text:after{width:100%}
@media (min-width: 375px){
    .cb-navbar {
        top: 27px;
    }
    .cb-container {
        margin: 0 25px;
    }
}

@media (min-width: 768px){
    .cb-navbar {
        top: 55px;
    }
    .cb-container {
        margin: 0 50px;
    }
    .cb-navbar-back {
        display: inline-block;
    }
    .cb-navbar-logo {
        width: 155px;
        height: 12px;
    }
    .cb-navbar-nav-item-icon {
        display: none;
    }
    .cb-navbar-nav-item-text {
        display: inline-block;
    }
}
</style>
