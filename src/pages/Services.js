import React from 'react'
import "../css/services.css"
import CV from "../img/resume.pdf"
function Services() {
    return (
        <>  
        <section id='services'>
            <div className='services-box'>
                <div id='content'>
                    <h1 id='heading'>My Awesime <br/><span id='service'>Services</span></h1>
                    <p>I have very good knowledge of forntend and backend technology,i believe in evolving my knowledge and learning continuocusly with everyday.
                    i wish to utilize my skills learn and grow together with your company 
                    sience it's only mission is to create simplified hi-tech website and i believe i can be part of that mission.</p>
                    <a href={CV} download="CV.pdf">
                        <button id='btncv'>
                            Download CV
                        </button>
                    </a> 
                </div>
                <div id='cards'>
                    <h3 id='heading1'>Frontend</h3>
                    <div className="card1">
                        <img id='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="" />
                        <img id='logo' src="https://img.freepik.com/free-icon/css_318-698167.jpg?size=626&ext=jpg&ga=GA1.1.1392409633.1688788994&semt=ais" alt="" />
                        <img id='logo' src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png" alt="" />
                        <img id='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF20uKDQ_TQG6VmTq4ZzjbzvVpNtl7N4TWAdWiytLePw&s" alt="" />
                        <img id='logo' src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*tOI6UC5EaS2fPItCesI-AQ.png" alt="" />
                        <img id='logo' src="https://static-00.iconduck.com/assets.00/ant-design-icon-512x512-ncocfg8e.png" alt="" />
                        <img id='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStbYI3-PL9x6s_Z2KZy639Oqvgnud1jhHDdWBMutnoMQ&s" alt="" />
                        {/* <img id='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxbwJa92tFpU4ZCZ4MLBvaAZSW3oLLKdsxi0xpYXiqdFGL1fLJsNG_gVTEfY2Y-MZPig&usqp=CAU" alt="" /> */}
                        <img id='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jy1nSST3VvNskE1NM613-sUPsxuQkES_0Q&usqp=CAU" alt="" />
                    </div>
                    
                    <div className="card2">
                        <h3 id='backend'>Backend</h3>
                        <img id='logo' src="https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg" alt="" />
                        <img id='logo' src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="" />
                        <img id='logo' src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Services
