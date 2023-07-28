import React from 'react';
import "../css/project.css";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles 
import 'swiper/css';


function Projects() {
    return (
        <>
            <h1 className='projects'>My Projects</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                <div className="card" >
                    <img src="https://wallpaperaccess.com/full/1940051.jpg" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">News App</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">view</a>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card" >
                    <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/idKyaV_2aidc/v0/1200x801.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Spotify-Clone</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">view</a>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card" >
                    <img src="https://s40424.pcdn.co/in/wp-content/uploads/2022/10/What-is-M.Tech-in-Artificial-Intelligence_AI.jpg.optimal.jpg" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Chat Gtp-Clone</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">view</a>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu93gxvuQIEN8EGB9M7GdvvvEtjGDzDu0IA&usqp=CAU" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Expense Tracker-App</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">view</a>
                    </div>
                </div>
                </SwiperSlide>
                ...
            </Swiper>
            
        </>
    )
}

export default Projects
