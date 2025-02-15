import React, { useState, useEffect } from 'react';
import { fetchNasaData } from '../api/nasaService';

const PlanetInfo = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const response = await fetchNasaData();
            setData(response);
        };
        getData();
    }, []);

    return (
        <div className="planet-info">
            {data ? (
                <>
                    <h2>{data.title}</h2>
                    <img src={data.url} alt={data.title} />
                    <p>{data.explanation}</p>
                </>
            ) : (
                <p>Loading NASA data...</p>
            )}
        </div>
    );
};

export default PlanetInfo;
