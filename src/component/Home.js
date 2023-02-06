import React from 'react';
import Contact from "./Contact";
import Services from "./Services";

const Home = () => {
  return (<>
    <div className='home'>
    <div className="container">
      <div className="heading">
        <h1>Company Best Management </h1>
        <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisi ipsum dolor sit amet consectetur adipisi   Quisquam nam praesentium fugiat</p>
        <button type="button" className="btn btn-warning">Hiring</button>
      </div>
    </div>
    </div>
   <Services/>
   <Contact/>

    </>
  )
} 

export default Home
