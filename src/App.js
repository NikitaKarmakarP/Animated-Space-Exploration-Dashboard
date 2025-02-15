import React from 'react';
import RocketAnimation from './components/RocketAnimation';
import PlanetInfo from './components/PlanetInfo';
import StarMap from './components/StarMap';
import './styles.css';

function App() {
    return (
        <div className="app">
            <h1>🚀 Animated Space Exploration Dashboard</h1>
            <StarMap />
            <RocketAnimation />
            <PlanetInfo />
        </div>
    );
}

export default App;
