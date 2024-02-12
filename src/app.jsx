import { useState, useEffect } from 'preact/hooks';
// import logo from '/logo.png';
// import Aos from "aos";
import './style/app.css';
const App = () => {
  // useEffect(()=>{ Aos.init() },[])
  return (
    <>
      <header id='pageheader'>
        {/* <div id="logo"></div> */}
        <div id="ph_hwrapper">
          <div className="ph_left">
            <h1>Your Favorite Gum for Cheap</h1>
            <p>
              Do you like deals, but hate the toll? Us too! That's why we
              started Snack Central. We aim to fix the overpriced tax on
              gum so everyone can enjoy it for a reasonable price.
            </p>
            <div id="ph_buttonWrapper">
              <a href="#"><button className='button_style1'>Check Us Out</button></a>
              <a href="/contactus"><button className='button_style1'>Contact Us</button></a>
            </div>
          </div>
          <div className="ph_right">
            <div id="ph_mockup"></div>
          </div>
        </div>
      </header>
      <div className="sect_style1" id="1">
        <div className="sect_contentWrapper">
          <div className="left" id="sect1_left">
            <div className="sect1_contentbox">
              <h1 className="sect_h1">Our Mission</h1>
              <p className='sect_p'>
                Nowadays, it's hard to get gum as a kid. You can bike to a store
                or get some with your parents. This can be hard sometimes, and we
                all know your struggle. We aim to fix that. Out candy is super cheap,
                and available to everyone at West Essex Middle School.
              </p>
            </div>
          </div>
          <div className="right" id="sect1_right">
            <div className="sect1_contentbox">
              <h1 className="sect_h1">Why Us?</h1>
              <p className='sect_p'>
                Our prices are super cheap. We have 25%, sometimes 50% markdowns on our 
                prices compared to big retail stores like Walgreens, Target, and Walmart.
                We always have your favorite gums in stock, and we add any gum we don't have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;