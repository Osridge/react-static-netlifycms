import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'


export default withSiteData(() => (
  <div>
    <section id="header" class="parallax-window" data-parallax="scroll" data-image-src="/wp-content/uploads/2017/08/hero-lobaugh.jpg" data-position-y="top" data-speed="0.5">
      <div class="container">
        <div class="row">
          <div class="col-xs-9 col-xs-push-1 col-sm-8 col-sm-push-2 text-center">
            <h2>If You're hurt and</h2>
            <h2 class="large">Need Help</h2>
            <h2>We Will Fight For Your Rights</h2>
            <p><a href="/contact" class="btn btn-primary">Free Consultation</a></p>
          </div>
        </div>
      </div>
    </section>
    <section id="about">
    </section>
    <section id="experience">
    </section>
    <section id="areas">
    </section>
    <section id="action">
    </section>
    <section id="videos">
    </section>
    <section id="contact">
    </section>
    <section id="blogs">
    </section>
  </div>
))


$( document ).ready(function() {
console.log( "ready!" );
});
