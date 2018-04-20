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
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="embed-container"><iframe src="https://player.vimeo.com/video/219154341" width="300" height="150" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
          </div>
          <div class="col-sm-6">
            <h2>We Don’t Get Paid <strong>Unless You Win!</strong></h2>
            <p>The Ponca City based law firm of Lobaugh Law has been representing the rights of Oklahomans for over 30 years. Our team is always uniquely positioned to offer strong representation and we’re an easy conversation away from forthright legal advice for your situation.Many clients have remarked that the way we treat our clients is not the same as many attorneys. We say putting people first is simply the way it should be.If you or someone you love has been involved in an auto accident, don’t waste another moment. Enlistthe advocacy of Lobaugh Law Firm.</p>
              <p><a class="btn btn-primary" href="/contact">Free Consultation</a> <a class="btn btn-hollow" href="/about-the-firm">Learn More</a></p>
            </div>
          </div>
        </div>
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



console.log( "ready!" );

