import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VerifyCompost from './pages/VerfifyCompost';
import TicTacToe from './pages/TicTacToe';
import VerifyAdmin from './pages/VerifyAdmin';

const AppRoutes: React.FC = () => {
    return (
        <Routes>

            {/* Routes publiques */}
            <Route path="/" element={<Home />} />
            <Route path="/verifycompost" element={<VerifyCompost />} />
            <Route path="/verifyadmin" element={<VerifyAdmin />} />
            <Route path="/tictactoe" element={<TicTacToe />} />

        </Routes>
    );
};

export default AppRoutes;