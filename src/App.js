
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/hero"
import About from './components/about';
import Reviews from './components/Reviews';
import Contact from './components/feedback';
import Allqueries from './components/Allqueries';
  import Signin from './components/signin';
  import Added from './components/Added';
import Form from './components/Header';


function App() {
  return (

    <BrowserRouter>
     <Routes>
     <Route path="/" element={<><Navbar /> <Header></Header></>}></Route>
     <Route path="/about" element={<><Navbar /><Reviews/><About/></>}></Route>
     <Route path="/Contact" element={<><Navbar/> <Contact/></>}></Route>
      
      <Route path='/added' element={<Added/>}></Route>
      <Route path="/admin" element={<><Signin/></>}></Route>
      
    
     </Routes>

    </BrowserRouter>

    
  );
}

export default App;
