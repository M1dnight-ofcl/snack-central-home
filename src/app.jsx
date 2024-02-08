import { useState, useEffect } from 'preact/hooks'
// import logo from '/logo.png'
import './style/app.css'
const App = () => {
  const [status, setPageStatus] = useState("Home")
  useEffect(()=>{ document.title=`Snack Central - ${status}`; })
  return (
    <>
      <header id='pageheader'>
        <div id="logo"></div>
      </header>
      <div class="sect_style1" id="1">
        <h1>Why Us?</h1>
      </div>
    </>
  )
}
export default App;