<template>
    <div id="wrap-contacts" data-navbar-class="!-default" class="cb-wrap">
      <div class="cb-contacts">
        <div class="cb-contacts-wrap">
          <div class="cb-contacts-left">
            <div class="cb-contacts-left-fill">
              <div class="cb-contacts-left-fill-inner"></div>
            </div>
            <div class="cb-contacts-left-body">
              <div class="cb-contacts-left-body-inner">
                <div class="cb-container">
                  <div class="cb-contacts-left-text">
                    <p>We make</p>
                    <p>mobile and</p>
                    <p>web apps</p>
                  </div>
                  <div class="cb-contacts-left-social"><a href="//www.facebook.com/Cuberto.design" title="Facebook" target="_blank" class="cb-contacts-left-social-item"><span><span><i class="cb-icon -facebook"></i></span><i class="cb-icon -facebook"></i></span></a><a href="//www.behance.net/khramov" title="Behance" target="_blank" class="cb-contacts-left-social-item"><span><span><i class="cb-icon -behance"></i></span><i class="cb-icon -behance"></i></span></a><a href="//twitter.com/cuberto" title="Twitter" target="_blank" class="cb-contacts-left-social-item"><span><span><i class="cb-icon -twitter"></i></span><i class="cb-icon -twitter"></i></span></a><a href="//dribbble.com/cuberto" title="Dribbble" target="_blank" class="cb-contacts-left-social-item"><span><span><i class="cb-icon -dribbble"></i></span><i class="cb-icon -dribbble"></i></span></a><a href="//www.instagram.com/cubertodesign/" title="Instagram" target="_blank" class="cb-contacts-left-social-item"><span><span><i class="cb-icon -instagram"></i></span><i class="cb-icon -instagram"></i></span></a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="cb-contacts-center">
            <div id="contacts-bg" class="cb-contacts-center-bg">
              <div data-depth="1.00" class="layer">
                <div class="cb-contacts-center-bg-img"></div>
              </div>
            </div>
          </div>
          <div class="cb-contacts-right">
            <div class="cb-contacts-right-fill"></div>
            <div class="cb-contacts-right-body">
              <div class="cb-contacts-right-body-inner">
                <div class="cb-container">
                  <address class="cb-contacts-right-container">
                    <div class="cb-contacts-right-email"><a href="mailto:info@cuberto.com">info@cuberto.com</a>
                      <hr>
                    </div>
                    <div class="cb-contacts-right-text">
                      <div class="cb-contacts-right-text-address">
                        <p>Suite 1, 5 Percy Street London</p>
                        <p>W1T 1DG United Kingdom</p>
                      </div>
                      <div class="cb-contacts-right-text-phone">
                        <p>+44 (203) 769-1952</p>
                      </div>
                    </div>
                    <div class="cb-contacts-right-button">
                      <p>
                        <button id="contacts-request-open" class="cb-btn -flat">Request a quote</button>
                      </p>
                    </div>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import $ from "jquery"

export default {
  name: 'contacts',
  mounted : function(){
  	$(".cb-navbar").removeClass('-bw');
  }
}

</script>

<style>
.cb-contacts-right-button .cb-btn {
    color: #fff;
}
.cb-contacts-right-button .cb-btn:hover {
    color: #004bd3;
}
</style>