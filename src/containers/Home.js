import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to <br/> the jungle.</h1>
    {/* <img src={logoImg} alt="" /> */}
    <div class="testUpload">
      <h2>testing</h2>
    </div>
  </div>
))
