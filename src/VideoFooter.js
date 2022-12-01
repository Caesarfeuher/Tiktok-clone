import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
 import Ticker,{NewsTicker} from 'nice-react-ticker';


function VideoFooter({channel,description,song}) {
  return (
    
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@{channel}</h3>
        <p> {description}</p>
         
        <div className='videoFooter__ticker'>
        <MusicNoteIcon className='videoFooter__icon'/>
        <div className="news__ticker">
           <Ticker className='ticker' isNewsTicker={true} slideSpeed='10' mode='smooth' > 
            <NewsTicker classname="NewsTicker" title={song} />  
            <NewsTicker classname="NewsTicker" title={song} /> 
            <NewsTicker classname="NewsTicker" title={song} /> 
            <NewsTicker classname="NewsTicker" title={song} /> 
            <NewsTicker classname="NewsTicker" title={song} /> 
          </Ticker>
           
        </div> 
        </div>
        
        

        
      </div>
      <img className='videoFooter__record' src='https://static.thenounproject.com/png/934821-200.png' alt='' />
    </div>
  )
}

export default VideoFooter
