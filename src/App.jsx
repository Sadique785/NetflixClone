import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { action, horror, originals } from './urls'
import YouTube from 'react-youtube'

function App() {

  const [urlId, setUrlId] = useState(null);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
<div>
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals' setUrlId={setUrlId} urlId={urlId} />
    {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    <RowPost url={action} title='Action' isSmall setUrlId={setUrlId} urlId={urlId} />
    <RowPost url={horror} title='Horror' isSmall setUrlId={setUrlId} urlId={urlId} />
    
</div>
  )
}

export default App
