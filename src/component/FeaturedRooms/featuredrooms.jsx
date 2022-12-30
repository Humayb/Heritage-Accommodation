import Jangel from "../../img/jangel.jpg"
import Sea from "../../img/torang.webp"
import Desert from "../../img/desert.jpg"

import './featuredrooms.scss'

export default function FeaturedRooms(){
    return(
       <section className="feature-rooms row">

                <div className="section-h2 text-center">
                    <h2 className="col-12 ">بوم گردی کجا بریم</h2>
                    <div className="col-12"></div>
                </div>

                <div className="box row col-12">
                    
                <figure className="col-3 p-0 border">
                    <img className="col-12" src={Jangel} alt="" />
                    <figcaption className="col-12 p-1 text-center">جنگل</figcaption>
                </figure>

                <figure className="col-3 p-0 border">
                    <img  className="col-12" src={Sea} alt="" />
                    <figcaption className="col-12 p-1  text-center">دریا</figcaption>
                </figure>

                <figure className="col-3 p-0 border">
                    <img  className="col-12" src={Desert} alt="" />
                    <figcaption className="col-12 p-1  text-center">کویر</figcaption>
                </figure>
                </div>

       </section>
    )
}

