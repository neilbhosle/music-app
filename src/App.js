

// import React from 'react';
// import Playlist from './Playlist'; 
// import './App.css'; 

// function App() {
  
//   const playlistData = [
//     {
//       id: 1,
//       title: 'I wanna be yours',
//       artist: 'Arctic Monkeys',
//       year: 2013,
//       type: 'song',
//     },
//     {
//       id: 2,
//       title: 'Thriller',
//       artist: 'Michael Jackson',
//       year: 1982,
//       type: 'song',
//     },
//     {
//       id: 3,
//       title: 'Katy Perry',
//       artist: 'Dark Horse',
//       year: 2013,
//       type: 'song',
//     },
//     {
//       id: 4,
//       title: 'The American Life',
//       host: 'Sean Cole, Sara Koenig',
//       type: 'podcast',
//       season: 1,
//       episode: 821,
//       episodeTitle: 'Embrace the suck',
//     },
//     {
//       id: 5,
//       title: 'How I Built This',
//       host: 'Guy Raz',
//       type: 'podcast',
//       season: 3,
//       episode: 15,
//       episodeTitle: 'Building a Tech Startup',
//     },
//     {
//       id: 6,
//       title: 'Science Vs',
//       host: 'Wendy Zukerman',
//       type: 'podcast',
//       episode: 25,
//       episodeTitle: 'Debunking Myths About Diet',
//     },
//     {
//       id: 7,
//       title: 'The Ranveer Show',
//       host: 'Ranveer Allahbadia',
//       type: 'podcast',
//       episode: 96,
//       episodeTitle: 'Sudha Murthy - So What If I Lost The Battle, I Lived The War ',
//     },
//     {
//       id: 8,
//       title: 'Geeta for the young and restless',
//       host: 'Jaya Row',
//       type: 'podcast',
//       episode: 13,
//       episodeTitle: 'How to overcome overthinking ',
//     },
//     {
//       id: 9,
//       title: 'Stairway to Heaven',
//       artist: 'Led Zepplin',
//       year: 1971,
//       type: 'song',
//     },
//     {
//       id: 10,
//       title: 'Chaiyya Chaiyya',
//       artist: 'Sapna Awasthi, Sukhwinder Singh',
//       year: 1998,
//       type: 'song',
//     },
    
//   ];

//   return (
//     <div className="App">
//       <Playlist playlistData={playlistData} />
//     </div>
//   );
// }

// export default App;

// App.js
import React from 'react';
import Playlist from './Playlist'; 
import './App.css'; 

function App() {
  
  return (
    <div className="App">
      <Playlist />
    </div>
  );
}

export default App;