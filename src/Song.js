

import React from 'react';
import './style.css'; 

const Song = ({ song }) => {
    const { title, artist, year } = song;

    return (
        <div className="entry-container song-container">
            <h2 className="title">{title}</h2>
            <p className="artist">Artist: {artist}</p>
            {year && <p className="details">Year: {year}</p>}
        </div>
    );
};

export default Song;
