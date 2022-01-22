import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import NotFound from './pages/404';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col justify-between h-screen">
                <Navbar />
                <main className="container px-3 pb-12 mx-auto">
                    <Routes>
                        {/* Home page route */}
                        <Route exact path="/" element={<Home />} />

                        {/* About page route */}
                        <Route path="/about" element={<About />} />

                        {/* 404 page route */}
                        <Route path="/not-found" element={<NotFound />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
