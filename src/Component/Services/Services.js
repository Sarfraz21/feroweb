import React from 'react'
import './Services.css'


const Services = () => {
    return (
        <>
           <div className="container" id="service">
            <div className="row" style={{marginBottom:'50px'}}>
                <div className="col-md-4 col-sm-6">
                 <div className="service-box">
                   <i class="fas fa-coffee"></i>
                   <h3>Breakfast</h3>
                   <p>I'm a paragraph. Click here to add your own text and edit me</p>
                 </div>
                </div>
                <div className="col-md-4 col-sm-6">
                 <div className="service-box">
                 <i class="fas fa-chair"></i>
                   <h3>Garden</h3>
                   <p>I'm a paragraph. Click here to add your own text and edit me</p>
                 </div>
                </div><div className="col-md-4 col-sm-6">
                 <div className="service-box">
                 <i class="fas fa-swimming-pool"></i>
                   <h3>Pool</h3>
                   <p>I'm a paragraph. Click here to add your own text and edit me</p>
                 </div>
                </div>
            </div>
            <div className="row"  style={{marginBottom:'80px'}} >
                <div className="col-md-4 col-sm-6">
                 <div className="service-box">
                 <i class="fas fa-wifi"></i>
                   <h3>Wifi</h3>
                   <p>I'm a paragraph. Click here to add your own text and edit me</p>
                 </div>
                </div>
                <div className="col-md-4 col-sm-6">
                 <div className="service-box">
                 <i class="fas fa-tshirt"></i>
                   <h3>Daily Housekeeping </h3>
                   <p>I'm a paragraph. Click here to add your own text and edit me</p>
                 </div>
                </div><div className="col-md-4 col-sm-6">
                 <div className="service-box">
                 <i class="fas fa-utensils"></i>
                   <h3>In room diening service</h3>
                   <p>I'm a paragraph. Click here to add your own text and edit me</p>
                 </div>
                </div>
            </div>
           </div>
        </>
    )
}

export default Services
