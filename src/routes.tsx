import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VerifyCompost from './pages/VerfifyCompost';

const AppRoutes: React.FC = () => {
    return (
        <Routes>

            {/* Routes publiques */}
            <Route path="/" element={<Home />} />
            <Route path="/verifycompost" element={<VerifyCompost />} />

        </Routes>
    );
};

export default AppRoutes;