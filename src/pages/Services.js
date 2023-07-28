import React from 'react'
import "../css/services.css"
function Services() {
    return (
        <>
        
        <div className='services-box'>
            
            <div id='content'>
                <h1 id='heading'>My Awesime <br/><span id='service'>Services</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat corporis expedita ratione est minus fuga velit commodi vitae quo! Minima magnam voluptatem non totam hic iste nam tempora, ea officiis.</p>
                <button id='btncv'>
                    Download CV
                </button>
            </div>
            
            <div id='cards'>
                <h3 id='heading'>Frontend</h3>

                <div className="card1">
                    <img id='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="" />

                    <img id='logo' src="https://img.freepik.com/free-icon/css_318-698167.jpg?size=626&ext=jpg&ga=GA1.1.1392409633.1688788994&semt=ais" alt="" />
                    <img id='logo' src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png" alt="" />

                    <img id='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF20uKDQ_TQG6VmTq4ZzjbzvVpNtl7N4TWAdWiytLePw&s" alt="" />

                    <img id='logoo' src="https://w7.pngwing.com/pngs/720/46/png-transparent-jquery-plain-wordmark-logo-icon-thumbnail.png" alt="" />
                    
                    <img id='logoo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxbwJa92tFpU4ZCZ4MLBvaAZSW3oLLKdsxi0xpYXiqdFGL1fLJsNG_gVTEfY2Y-MZPig&usqp=CAU" alt="" />
                    
                </div>
                <div className="card2">
                <h3 id='backend'>Backend</h3>
                    <img id='logo' src="https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg" alt="" />
                    <img id='logo' src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="" />
                    <img id='logo' src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="" />
                </div>
                
            </div>
            
        </div>
        
        </>
    )
}

export default Services
