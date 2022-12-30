import './footer.scss'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";



export default function Footer(){
    return(
        <footer className="col-12 footer bg-dark d-flex justify-content-center align-items-center">

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h3 className='text-light col-12'>شبکه اجتماعی</h3>
                
                        <div className="icons row">

                            <a className='col-1' target='_blank' href="https://github.com/humayb"><FaGithub/></a>
                            <a className='col-1' target='_blank' href="https://www.instagram.com/humayb.web"><FaInstagram/></a>
                            <a className='col-1' target='_blank' href="https://www.instagram.com/humayb.web"><FaLinkedin/></a>
                            <a className='col-1 ' target='_blank' href="https://www.instagram.com/humayb.web"><FaDribbbleSquare/></a>

                        </div>
                        
                        <h4 className='text-light'>
                        طراحی و فرانت: 
                            <a href="http://humayb.com/">
                                هما بهرام پرور 
                            </a>
                        </h4>
                    </div>

                <div className=' row contact col-sm-6'>
                    <h3 className='col-12 text-light'>تماس با من:</h3>
                    <a className='col-12 ' href="tel:09305818703">
                        <FaPhoneSquare/> 

                        09305818703
                        </a>
                    <a className='col-12' href="mailto:humay.b@gmail.com">
                        <FaEnvelope/>
                        humay.b@gmail.com
                        </a>
                </div>

            </div>

                </div>
        </footer>
    )
}