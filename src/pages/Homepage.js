import React from 'react'
import Layout from '../components/layouts/Layout';
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png"
import Myimage from "../img/myimage.png"
import Crown from "../img/crown.png"
import glasses from "../img/glasses.png"
import Services from './Services';
import Projects from './Projects';
import Footer from '../components/layouts/Footer';
function Homepage() {
  return (
    <Layout>
      
      
      <div id='box'>
      
      
    <div className='left-side'>
      <h1>Hy !  I Am <br/><h1 className='name'>Kartik Panchal</h1></h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, nostrum mollitia velit beatae illo consequatur.
      </p>
      <button className='btn'>Hire me</button>
      <div className='icon-menu'>
        <i class="icon fa-brands fa-linkedin"></i>
        <i class="icon fa-brands fa-github"></i>
        <i class="icon fa-brands fa-instagram"></i>
      </div>
    </div>
    
    <div className='write-side'>
      <img id='v1' src={Vector1} alt="" />
      <img id='v2' src={Vector2} alt="" />
      <img id='v3' src={Myimage} alt="" />
      
      <div className='mytitle'>
        <img id='crown' src={Crown}alt="" />
        <h3 id='title'>Full Stack Developer</h3>
      </div>
      
      <div className='mytitle2'>
        <img id='glasses' src={glasses}alt="" />
        <h3 id='title2'>Hard Working</h3>
      </div>
    </div>
    </div>
    
    
    <Services/>
    <Projects/>
    <Footer/>
    </Layout>
    
  )
}

export default Homepage
