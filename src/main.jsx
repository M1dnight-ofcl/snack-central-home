import { render } from 'preact';
// Pages ----------------
import App from './app.jsx';
import ContactUs from './contact.jsx';
import Menu from './menu.jsx';
// ----------------------
import Router from 'preact-router';
import { Link } from 'preact-router/match';
import { h } from 'preact';
import './style/index.css';

const Home=()=>{
    return(<>
    <nav>
        <div id="logo"></div>
        <Link className="navlink" activeClassName="active" href="/">Home</Link>
        <Link className="navlink" activeClassName="active" href="/contactus">Contact Us</Link>
        <Link className="navlink" activeClassName="active" href="/menu">Menu</Link>
    </nav>
    <Router>
        <App path="/" />
        <ContactUs path="/contactus" />
        <Menu path="/menu" />
    </Router>
    </>);
}

render(<Home/>,document.getElementById('app'));