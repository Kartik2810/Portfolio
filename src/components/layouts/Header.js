import React,{useState}from 'react'
import {Link} from "react-scroll"
import {Modal} from "antd";
import Resume from "../../img/myResume.jpeg"


function Header() {
    const [model,setModel] = useState(false)
    const clickHandler = () =>{
        setModel(true)
    }
    
    return (
        <>
            <section className='navbaar'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="link navbar-brand" to="homepage"><h1 id='headingg'>My Portfolio</h1></Link>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="link nav-link active" aria-current="page" to="homepage" spy={true} smooth={true}><h5>Home</h5></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="link nav-link active " to="services"  spy={true} smooth={true}><h5>Services</h5></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="link nav-link active " to="projects"  spy={true} smooth={true}><h5>Projects</h5></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="link nav-link active" to="resume"  spy={true} smooth={true} onClick={clickHandler}><h5>Resume</h5></Link>
                            </li>
                            
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
            <Modal
                title="My Resume"
                centered
                open={model}
                onOk={() => setModel(false)}
                onCancel={() => setModel(false)}
                width={750}
            >
                <div id='photo'>
                <img  src={Resume} alt="" />
                </div>
                
            </Modal>
            </section>
        </>
    )
}

export default Header
