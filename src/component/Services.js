import React from "react";
import "../component/css/navbar.css";
import Servicebody from "./Servicebody";

const Services = () => {
  return (

    <div className='service-container'>
    <h1> Our Services</h1>

    <div className="service">

<Servicebody title= "Medallia" image="./images/bg.jpg" />
<Servicebody title= "Hortonworks" image="./images/bg.jpg" />
<Servicebody title= "Achievers" image="./images/bg.jpg" />
<Servicebody title= "Arcurve" image="./images/bg.jpg" />
<Servicebody title= "Hootsuite" image="./images/bg.jpg" />
<Servicebody title= "Domo" image="./images/bg.jpg" />

     </div>
     </div>

  )
}

export default Services
  