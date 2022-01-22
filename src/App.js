import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col justify-between h-screen">
                <Navbar />
                <main className="container px-3 pb-12 mx-auto">Content</main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
