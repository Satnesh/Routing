import logo from './logo.svg';
import './App.css';
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Header from './Header';
import Menu from './Menu';
import Content from './Content';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      {/* <Router>
      <li>
        <Link to="">Home</Link>
        </li>
        <li>

        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/dashboard">Dashboard</Link>
        </li>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/dashboard" component={Dashboard}/>






      
      </Router> */}
      <Header/>
      <Menu/>
      <Content/>
      <Footer/>
      
    </div>
  );
}

export default App;
