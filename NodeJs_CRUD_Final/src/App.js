// Import React
import React from "react";
  
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";
  
// Import from react-router-dom
import { BrowserRouter as Router, Routes,
    Route, Link } from "react-router-dom";
  
// Import other React Component
import CreateBlog from 
    "./Components/create-blog.component";
import EditBlog from 
    "./Components/edit-blog.component";
import BlogList from 
    "./Components/blog-list.component";
  
// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-blog"} 
                  className="nav-link">
                  My blog app
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-blog"} 
                    className="nav-link">
                   Create Blog
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/blog-list"} 
                    className="nav-link">
                    List Blog
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" 
                    element={<CreateBlog />} />
                  <Route path="/create-blog" 
                    element={<CreateBlog />} />
                  <Route path="/edit-blog/:id" 
                    element={<EditBlog />} />
                  <Route path="/blog-list" 
                    element={<BlogList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
  
export default App;
