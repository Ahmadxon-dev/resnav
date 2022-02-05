import './App.css';
import { Nav, Navbar, Container, } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Resume } from './components/Resume/Resume';
import { Home } from './components/Home/Home';
import { Contact } from './components/Contact/Contact';



function App() {
  return (

    <BrowserRouter>

    <div className='App'>
    <>
  <Navbar className='container-fluid' expand='sm' bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Navbar.Toggle aria-controls="h" />
    <Navbar.Collapse id="h">
    <Nav className='justify-content-end'  style={{ width: "100%" }}>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
      <Nav.Link as={Link} to="/resume">Portfolio</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>

  </>
  <div>
<Routes>
  <Route path='/resume' element={<Resume/>}/>
  <Route path='/' element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
  </div>


  </div>
  </BrowserRouter>
  );
}

export default App;
