import { useState, useEffect } from 'preact/hooks'
// import logo from '/logo.png'
import './style/app.css'
const App = () => {
  const [status, setPageStatus] = useState("Home")
  useEffect(()=>{ document.title=`Snack Central - ${status}`; })
  return (
    <>
      <header id='pageheader'>
        {/* <div id="logo"></div> */}
        <div id="ph_hwrapper">
          <div className="left">
            <h1>Your Favorite Gum for Cheap</h1>
            <p>
              Do you like deals, but hate the toll? Us too! That's why we
              started Snack Central. We aim to fix the overpriced tax on
              gum so everyone can enjoy it for a reasonable price.
            </p>
            <div id="ph_buttonWrapper">
              <button className='button_style1'>Check Us Out</button>
              <button className='button_style1'>Contact Us</button>
            </div>
          </div>
          <div className="right" id="ph_mockup"></div>
        </div>
      </header>
      <div className="sect_style1" id="1">
        <div className="sect_contentWrapper">
          <h1 className="sect_h1">Why Us?</h1>
        </div>
      </div>
    </>
  )
}
export default App;