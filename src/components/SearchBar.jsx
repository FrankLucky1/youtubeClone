import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import { Paper, IconButton } from '@mui/material';
import {Search} from '@mui/icons-material';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  console.log(searchTerm)

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`);

      
    }
  }
  return (
    <Paper 
    component='form'
    onSubmit = {handleSubmit} 
    sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        backgroundColor: '#e3e3e3',
        color: '#fff',
        pl:3,
        mr: {sm: 5}
    }}>
        <input 
         className='search-bar'
         placeholder='Search...'
         sx={{color: '#fff'}}
         value={searchTerm}
         onChange = {(e) => setSearchTerm(e.target.value)}/>

         <IconButton type='submit' sx={{p: '10px', color: 'red'}}>
            <Search/>
         </IconButton>
    </Paper>
  )
}

export default SearchBar