import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './images/marijuana.png';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import THCPage from './pages/THCPage';
import CBDPage from './pages/CBDPage';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
              />{' '}
              Cannabis Culture
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/thc">THC</Nav.Link>
                <Nav.Link as={Link} to="/cbd">CBD</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Content */}
        <Container style={{ minHeight: '80vh', paddingTop: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thc" element={<THCPage />} />
            <Route path="/cbd" element={<CBDPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </Container>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3">
          <Container>
            <p>&copy; 2024 Your Brand. All Rights Reserved.</p>
            <Nav className="justify-content-center">
              <Nav.Link as={Link} to="/privacy" className="text-white">Privacy Policy</Nav.Link>
              <Nav.Link as={Link} to="/terms" className="text-white">Terms of Service</Nav.Link>
            </Nav>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;
