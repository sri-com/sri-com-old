import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PageNotFound from './PageNotFound';

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
}

export default App
