import {useState, useEffect} from 'react'
import Player from './components/Player' 

function App() {
  //Array stored details of music
  const [songs] = useState([
    {
      title:"Angel",
      artist: "Shaggy",
      img_src: "./images/Shaggy(1).jpg",
      src: "./music/Angel.mp3"
    },
    {
      title:"Beautiful Girls",
      artist: "Sean Kingston",
      img_src: "./images/Sean-Kingston.jpg",
      src: "./music/Beautiful-Girls.mp3"
    },
    {
      title:"Low",
      artist: "Flo-Rida Ft. T.Pain",
      img_src: "./images/Flo-Rida.jpg",
      src: "./music/Low.mp3"
    },
    {
      title:"It Wasn't Me",
      artist: "Shaggy",
      img_src: "./images/Shaggy(2).jpg",
      src: "./music/It-Wasnt-Me.mp3"
    },
    {
      title:"Smack That",
      artist: "Akon Ft. Eminem",
      img_src: "./images/Akon.jpg",
      src: "./music/Smack-That.mp3"
    },
    

  ]);

  const[currentSongIndex, setCurrentSongIndex] = useState(0);
  const[nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      //if statement when the song is at the end of the list and the user hit next, it goes back to the top of the list
      if(currentSongIndex + 1 > songs.length - 1){
        return 0;
      }
      else{
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex])

  return (
    <div className="App">
      Components here
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
      App
    </div>
  );
}

export default App;
