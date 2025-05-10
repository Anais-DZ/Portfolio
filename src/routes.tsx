import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VerifyCompost from './pages/VerfifyCompost';
import TicTacToe from './pages/TicTacToe';
import VerifyAdmin from './pages/VerifyAdmin';
import ApiWaste from './pages/ApiWaste';
import PortfolioPage from './pages/PortfolioPage';
import Gryphiq from './pages/Gryphiq';
import CV from './pages/CV';

const AppRoutes: React.FC = () => {
    return (
        <Routes>

            {/* Routes publiques */}
            <Route path="/" element={<Home />} />
            <Route path="/verifycompost" element={<VerifyCompost />} />
            <Route path="/verifyadmin" element={<VerifyAdmin />} />
            <Route path="/apiwaste" element={<ApiWaste />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/gryphiq" element={<Gryphiq />} />
            <Route path="/cv" element={<CV/>} />

        </Routes>
    );
};

export default AppRoutes;