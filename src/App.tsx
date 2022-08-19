import { Routes, Route, Link } from 'react-router-dom';
import { createContext,useState } from 'react';

import { StoreContext } from './components/StoreContext';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';

import Home from './views/Home';
import About from './views/About';
import PokemonView from './views/PokemonView';
import CreatePost from './views/CreatePost';

import Header from '@/components/Header';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

import './styles/main.scss';
const App = () => {
    return (
        <div className="App p-2 h-screen flex flex-col justify-between overflow-x-hidden overflow-y-scroll">
            <Header className={'h-fit'} />
            <div className={'h-full w-fit pb-10'}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/pokemon/:name" element={<PokemonView />} />
                    <Route path="/post" element={<CreatePost />} />
                </Routes>
            </div>
        </div>
    )
};

export default App;