import React from "react";
import "./App.css";
import {
    HashRouter,
    Route,
    Routes,
} from "react-router-dom"; /* v6.0 Route in Routes */
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/movie-detail" element={<Detail />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
