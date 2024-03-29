import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../Utilities/fetchFromAPI';


const ChannelDetail = ({channelDetail}) => {


const [channelDetails, setChannelDetails] = useState(null)
const [videos, setVideos] = useState([])

const {id} = useParams();


useEffect(() => {
fetchFromAPI(`channels?part=snippet&id=${id}`)
.then((data)=> setChannelDetails(data?.items[0]));

fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
.then((data)=> setVideos(data?.items));
}, [id])

  return (
    <Box minHeight='95vh'>
        <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(51,51,223,1) 35%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
        height: '300px'
        }}/>
            <ChannelCard channelDetails={channelDetails}  marginTop='-125px'/>
         
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm: '0px'}}}/>
          <Videos videos={videos}/>
       
      </Box>
    </Box>
  )
}

export default ChannelDetail