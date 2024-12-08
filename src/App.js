import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/foot/Footer';
import Main from './components/main/Main';
import About from './components/about/About';
import Call from './components/call/Call';
import Azbuka from './components/azbuka/Azbuka';
import Privacy from './components/privacy/Privacy';
import reportWebVitals from './reportWebVitals';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Main />} />
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
