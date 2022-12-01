import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';
import db from './firebase';
import {collection, getDocs } from 'firebase/firestore/lite';

function App() {
  // const [videos, setVideos] = useState([])
  const [reelVideo, setReelVideo] = useState([])


  async function getData() {
    //Set a variable to hold the array of the data fetched
    let Arr = []

    const dataCollections = collection(db, 'videos')
    const data = await getDocs(dataCollections)

    const result = data.docs.map(doc => doc.data())

    result.forEach((data) => {
      Arr.push(data)
    })

    setReelVideo(Arr)
  }

  useEffect(() => {
    // db.collection('videos').onSnapshot(snapshot => (
    // setVideos(snapshot.docs.map(doc => doc.data()))
    getData()
  }, [])
  
  function createVideo(data, index) {
    return <Video key={index} id={index} url={data.url} channel={data.channel} description={data.description} song={data.song} likes={data.likes} messages={data.messages} shares={data.shares}/>
  }

  /* {videos.map(
          ({url, channel, description, song, likes, messages, shares}) => (
          <Video
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}
          />
        )
        )} */
        /* <Video
        url='https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcR1WC-RN5pMNS4eCaGmBsGTql3pv_Xuw7NuCw'
        channel='caesarkrasi'
        description='mercedes launch s580 AMG'
        song='Trabaye'
        likes={869}
        messages={651}
        shares={237}
         /> */

        /* <Video />
        <Video />
        <Video />
        <Video /> */



  return (
    <div className="app">
      <div className="app__videos">
        {reelVideo.map(createVideo)}
      </div>
      
    </div>
  );
}

export default App;





       