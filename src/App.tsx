import { Routes, Route, Link } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import PokemonView from './views/PokemonView';
import CreatePost from './views/CreatePost';

import './styles/main.scss';

const App = () => {
    return (
        <div className="App p-2">
            <h1 className={'mb-4'}>Welcome to React Router !</h1>
            <div className={'mb-2'}>
                <Link to="/">Home</Link> | <Link to="/about">Search by Name</Link> | <Link to="/post">Create a post</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="/pokemon/:name" element={<PokemonView />} />
                <Route path="/post" element={<CreatePost />} />
            </Routes>
        </div>
    )
};

export default App;