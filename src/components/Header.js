import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {useForm} from "react-hook-form"

export default function Header() {

 
  
 
  return (
    <>
    <form>
      <div id='headers'data-aos="fade-right" data-aos-duration="1200" className='header'>
        <div className='form'>
          <div className="mb-3" data-aos="fade-up"  data-aos-delay="300" data-aos-duration="1200">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control"   id="exampleInputEmail1" aria-describedby="emailHelp" name="requiredField" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3"data-aos="fade-up"  data-aos-delay="100" data-aos-duration="1200">
            <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3"data-aos="fade-up"  data-aos-delay="100" data-aos-duration="1200">
            <label htmlFor="exampleInputPassword1" className="form-label">Moblie Number</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3"data-aos="fade-up"  data-aos-delay="100" data-aos-duration="1200">
            <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          
         
                     <button type="button" onClick="routePath()" class="btn btn-warning btn-rounded">Submit</button>
         
            
       

          
        </div>
        
      </div>
    </form>
</>
  )
  }


function Home() {
  return <h2>Home</h2>;
}
