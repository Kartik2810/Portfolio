import React from 'react';
import "../css/project.css";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles 
import 'swiper/css';


function Projects() {
    return (
        <>
        <section id='projects'>
            <h1 className='projects'>My Projects</h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                 <SwiperSlide>
                <div className="card" >
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&w=1000&q=80" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">RealEstate</h3>
                        <p className="card-text">React base static website and desugn only on css base and we give you best user experience.</p>
                        <a href="https://realestate-dkx5.onrender.com" target='_blanck' className="btn btn-primary">view-Site</a>
                    </div>
                </div>
                </SwiperSlide>   
                
                <SwiperSlide>
                <div className="card" >
                    <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/idKyaV_2aidc/v0/1200x801.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">Spotify-Clone</h3>
                        <p className="card-text">spotify clone website using HTML and CSS and JAVASCRIPT this is simple website.</p>
                        <a href="https://spotify-clone-wvyr.onrender.com" target='_blanck' className="btn btn-primary">view-Site</a>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card" >
                    <img src="https://s40424.pcdn.co/in/wp-content/uploads/2022/10/What-is-M.Tech-in-Artificial-Intelligence_AI.jpg.optimal.jpg" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">Chat Gtp-Clone</h3>
                        <p className="card-text"> MERN-STACK website and chat-gtp api used and designed with material UI.</p>
                        <a href="https://chatgtp-k7k3.onrender.com" target='_blanck' className="btn btn-primary">view-Site</a>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu93gxvuQIEN8EGB9M7GdvvvEtjGDzDu0IA&usqp=CAU" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">ExpenseTracker</h3>
                        <p className="card-text">MERN-STACK website used to track your expense.design with Ant-Design.</p>
                        <a href=" https://jealous-sandals-seal.cyclic.app" target='_blanck' className="btn btn-primary">view-Site</a>
                    </div>
                </div>
                </SwiperSlide>
                
                <SwiperSlide>
                
                <div className="card-4" >
                
                    <img src="https://wallpaperaccess.com/full/1940051.jpg" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">E-commerce website</h3>
                        
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Comming Soon</a>
                    </div>
                    
                </div>
                
                </SwiperSlide>
                ...
            </Swiper>
            
            </section>
        </>
    )
}

export default Projects
