import React from 'react';

const planets = [
    { name: "Earth", texture: "/planet-textures/earth.jpg" },
    { name: "Mars", texture: "/planet-textures/mars.jpg" },
    { name: "Jupiter", texture: "/planet-textures/jupiter.jpg" },
    { name: "Saturn", texture: "/planet-textures/saturn.jpg" },
    { name: "Venus", texture: "/planet-textures/venus.jpg" },
    { name: "Mercury", texture: "/planet-textures/mercury.jpg" },
    { name: "Neptune", texture: "/planet-textures/neptune.jpg" },
    { name: "Uranus", texture: "/planet-textures/uranus.jpg" }
];

const PlanetInfo = () => {
    return (
        <div className="planet-gallery">
            {planets.map((planet, index) => (
                <div key={index} className="planet-card">
                    <h3>{planet.name}</h3>
                    <img src={planet.texture} alt={planet.name} />
                </div>
            ))}
        </div>
    );
};

export default PlanetInfo;
