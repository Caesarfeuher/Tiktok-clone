import React,{useRef, useState} from 'react';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import './Video.css';




function Video(props) {
    const {url, channel, description, song, likes, messages, shares} = props
    const [play,setPlay] = useState(false)
    const videoRef = useRef(null)
  
    const onVideoPress = () => {
      if (play){
        videoRef.current.pause();
        setPlay(false);
      } else {
        videoRef.current.play();
        setPlay(true);
      } 
    };




  return (
    
    <div key={props.key} className='video'>

      <video
      className='video__player'
       loop
      onClick={onVideoPress}
      ref={videoRef}
      src={url}
      >
      </video>
      <VideoFooter 
       channel={channel} 
       description={description} 
       song={song}
       />
       <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  )
}

export default Video
