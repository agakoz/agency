import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'

class App extends Component {
  render() {
    return(
      <Router>
        <PageWrapper>
        
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />

            <Route 
              path="/about"
              element={<About/>}
            />

            <Route 
              path="/contact"
              element={<Contact/>}
            />

            </Routes>
        </PageWrapper>
      </Router>
    )

  }
}

export default App;
