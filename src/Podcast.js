

import React from 'react';
import './style.css'; 

class Podcast extends React.Component {
  render() {
    
    const { podcast } = this.props;
    const { season, episode, episodeTitle,title } = podcast;

    return (
      <div className="entry-container podcast-container">
        <h2 className="title">{title}</h2>
        {season !== undefined && episode !== undefined ? (
          <p className="details">Season {season} Episode {episode}</p>
        ) : (
          <p className="details">Episode {episode}</p>
        )}
        {episodeTitle && <p className="episode-title">Episode Title: {episodeTitle}</p>}
      </div>
    );
  }
}

export default Podcast;
