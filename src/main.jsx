import { render } from 'preact'
import App from './app.jsx'
import ContactUs from './contact.jsx'
import Router from 'preact-router';
import { Link } from 'preact-router/match';
import { h } from 'preact';
import './style/index.css'

const Home=()=>{
    return(<>
    <nav>
        <div id="logo"></div>
        <Link className="navlink" activeClassName="active" href="/">Home</Link>
        <Link className="navlink" activeClassName="active" href="/contactus">Contact Us</Link>
    </nav>
    <Router>
        <App path="/" />
        <ContactUs path="/contactus" />
    </Router>
    </>)
}

render(<Home/>,document.getElementById('app'))