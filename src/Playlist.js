
import React, { useEffect, useState } from 'react';
import Song from './Song';
import Podcast from './Podcast';
import './style.css';

const Playlist = ({ playlistData }) => {
    const [shuffledPlaylist, setShuffledPlaylist] = useState([]);

    // Function to shuffle the playlist data
    const shufflePlaylist = (data) => {
        const shuffledData = [...data];
        for (let i = shuffledData.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
        }
        return shuffledData;
    };

    const handleShuffle = () => {
       
        setShuffledPlaylist(shufflePlaylist(playlistData));
    };

    useEffect(() => {
        
        setShuffledPlaylist(shufflePlaylist(playlistData));
    }, [playlistData]);

    const renderSongs = () => (
        <div>
            <h2>Songs</h2>
            {shuffledPlaylist
                .filter((item) => item.type === 'song')
                .map((song) => (
                    <Song key={song.id} song={song} />
                ))}
        </div>
    );

    const renderPodcasts = () => (
        <div>
            <h2>Podcasts</h2>
            {shuffledPlaylist
                .filter((item) => item.type === 'podcast')
                .map((podcast) => (
                    <Podcast key={podcast.id} podcast={podcast} />
                ))}
        </div>
    );

    return (
        <div>
            <button className="outlined-dark-button" onClick={handleShuffle}>Shuffle Playlist</button>
            {renderSongs()}
            {renderPodcasts()}
        </div>
    );
};

export default Playlist;
