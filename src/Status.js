
import React from 'react';

const Status = ({ isPlaying, currentSelection }) => {
    let statusText = '';

    if (isPlaying) {
        if (currentSelection) {
            statusText = currentSelection.hasOwnProperty('title')
                ? 'Player: ' + currentSelection.title
                : 'Player: ' + currentSelection.episodeTitle;
        }
    } else if (currentSelection === null) {
        statusText = '';
    } else {
        statusText = 'Paused';
    }

    return (
        <div>
            <p>Status: {statusText}</p>
        </div>
    );
};

export default Status;

