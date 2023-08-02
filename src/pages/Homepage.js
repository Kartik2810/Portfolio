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
      
      <section id='homepage'>
      <div id='box'>
      
      
    <div className='left-side'>
      <h1>Hy !  I Am <br/><h1 className='name'>Kartik Panchal</h1></h1>
      <p>I am a full-stack web developer,i passionate about everything the world of website and contributing towards making a social impact on my users.
      </p>
      <a href="mailto:kartikpanchal0463@gmail.com"><button className='btn'>Hire me</button></a>
      
      <div className='icon-menu'>
        <a href='https://linkedin.com/in/kartik-panchal-' target='_blanck'><i class="icon fa-brands fa-linkedin"></i></a>
        <a href='https://github.com/Kartik2810/' target='_blanck'><i class="icon fa-brands fa-github"></i></a>
        
        
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
    </section>
    
    <Services/>
    <Projects/>
    <Footer/>
    </Layout>
    
  )
}

export default Homepage
