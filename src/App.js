import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Call from './components/Call';
import Azbuka from './components/Azbuka';
import Privacy from './components/Privacy';
import reportWebVitals from './reportWebVitals';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/Main" element={<Main />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/call" element={<Call />} />
                        <Route path="/azbuka" element={<Azbuka />} />
                        <Route path="/privacy" element={<Privacy />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
