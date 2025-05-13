import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import ScrollToHash from './componants/ScrollToHash';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
