import logo from './logo.svg';
import './App.css';
import MoviesComponent from "./component/MoviesComponent" //default
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Row, Col, Form, Alert, NavDropdown, Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from "axios"
import HomeComponent from './pages/HomeComponent';
import { Routes, Route, Link } from "react-router-dom";
import LatestComponent from './pages/LatestComponent';
import TitleTypeComponent from './pages/TitleTypeComponent';

function App() {
  return (
<>
    <div className="App"> 
      <Container fluid>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            
            <Navbar.Brand ><Link to="/" className="blank">KatMovies HD</Link>  </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                 <Link to="/latest" className="blank">LATEST MOVIE</Link> 

                 </Nav.Link>

                <NavDropdown title="Title Type" id="collasible-nav-dropdown">
                  <NavDropdown.Item><Link to="titleType/tvEpisode">tvEpisode</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="titleType/video">video</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="titleType/videoGame">videoGame</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="titleType/movie">movie</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="titleType/tvMiniSeries">tvMiniSeries</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="titleType/tvSeries">tvSeries</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="titleType/tvMovie">tvMovie</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="titleType/tvSpecial">tvSpecial</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="titleType/tvShort">tvShort</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="titleType/short">short</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="latest" element={<LatestComponent />} />
          <Route path="titleType/:type" element={<TitleTypeComponent />} /> //colen used for type / API /?filter[where][titleType]=tvSeries
    
        </Routes>
        
      </Container>
    </div>

    </>
  );
}


export default App;
