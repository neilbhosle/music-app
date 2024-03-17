
import React from 'react';



const Song = ({ title, artist, year, onItemClick }) => {
    return (
        <div onDoubleClick={onItemClick}>
            <h2>Title: {title}</h2>
            <p>Artist: {artist}</p>
            <p>Year: {year}</p>
        </div>
    );
};

export default Song;