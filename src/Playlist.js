
import React, { useEffect, useState } from 'react';
import Song from './Song';
import Podcast from './Podcast';
import Status from './Status';
import tracksData from './db.json'; // Import the JSON file directly

const Playlist = () => {
    const [currentTracks, setCurrentTracks] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSelection, setCurrentSelection] = useState(null);
    const [isInitial, setIsInitial] = useState(true);

    useEffect(() => {
        console.log('Fetched data:', tracksData);
        updateTracks(tracksData);
    }, []);

    function updateTracks(newTracks) {
        
        if (typeof newTracks === 'object' && Array.isArray(newTracks.tracks)) {
            let updatedTracks = newTracks.tracks.map((track, index) => {
                return {
                    ...track,
                    id: index
                };
            });
            setCurrentTracks(updatedTracks);
        } else {
            console.error('Expected an object with a tracks array but received:', newTracks);
        }
    }
    

    function shuffleTracks() {
        let shuffledTracks = [...currentTracks].sort(() => Math.random() - 0.5);
        setIsPlaying(false);
        setCurrentTracks(shuffledTracks);
        setCurrentSelection({});
        setIsInitial(true);
    }


    function playPreviousTrack() {
        let newIndex = currentTracks.findIndex(track => track.id === currentSelection.id);
        newIndex -= 1;
        if (newIndex < 0) {
            newIndex = currentTracks.length - 1; 
        }
        let newTrack = currentTracks[newIndex];
        setIsPlaying(true);
        setCurrentSelection(newTrack);
    }
    

    function playNextTrack() {
        let newIndex = 0; 
        if (currentSelection !== null) {
            newIndex = currentTracks.findIndex(track => track.id === currentSelection.id);
            newIndex += 1;
            if (newIndex >= currentTracks.length) {
                newIndex = 0; 
            }
        }
        let newTrack = currentTracks[newIndex];
        setIsPlaying(true);
        setCurrentSelection(newTrack);
    }
    
    
    function handleTrackClick(track, index) {
        setIsInitial(false);
        setIsPlaying(true);
        setCurrentSelection(track);
    }

    function togglePlayPause() {
        setIsPlaying(!isPlaying);
    }

    return (
        <div>
            <h2>Playlist</h2>
            {currentTracks.length > 0 ? (
                currentTracks.map((track, index) => {
                    if (track.title && track.artist && track.year) {
                        return (
                            <Song
                                key={index}
                                title={track.title}
                                artist={track.artist}
                                year={track.year}
                                onItemClick={() => handleTrackClick(track, index)} // Changed prop name
                            />

                        );
                    } else if (track.episodeTitle) {
                        return (
                            <Podcast
                                key={index}
                                episodeTitle={track.episodeTitle}
                                episode={track.episode}
                                onItemClick={() => handleTrackClick(track, index)}
                            />
                            

                            
                        );
                    } else {
                        return null;
                    }
                })
            ) : (
                <p>No items in the playlist</p>
            )}
            <div>
                <button onClick={playPreviousTrack}>Prev</button>
                <button onClick={togglePlayPause}>Play/Pause</button>
                <button onClick={playNextTrack}>Next</button>
                <button onClick={shuffleTracks}>Shuffle</button>
            </div>
            {/* <Status status={isPlaying} currentSelection={currentSelection} isInitial={isInitial} /> */}
            <Status isPlaying={isPlaying} currentSelection={currentSelection} isInitial={isInitial} />

        </div>
    );
};

export default Playlist;

