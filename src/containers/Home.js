import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'

function changeToBlack(){
  console.log('changed')
  document.body.style.backgroundColor = "#f2f2f2"
}
changeToBlack()

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to <br/> the jungle.</h1>
    {/* <img src={logoImg} alt="" /> */}
    <div class="testUpload">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sapien commodo, eleifend ante id, viverra mi. Proin tincidunt arcu lorem, at elementum justo luctus id. Pellentesque suscipit accumsan est in blandit. Suspendisse suscipit tempor augue. Phasellus eget dolor nec quam elementum volutpat eget sit amet justo. Quisque gravida, tortor id fermentum pulvinar, odio quam blandit elit, ac vehicula leo urna vitae justo. Etiam quis viverra libero, vel mattis quam. Nullam gravida, est vitae dignissim viverra, nisi libero convallis elit, a laoreet orci eros in magna. Nunc auctor, sem in euismod eleifend, libero dui mattis sapien, a gravida tortor ex tristique quam. Suspendisse interdum, massa in gravida luctus, purus turpis elementum lacus, id fermentum libero enim id orci.</p>
    </div>
  </div>
))
