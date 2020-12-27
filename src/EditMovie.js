import React, { useEffect, useState } from 'react'
import './EditMovie.css'
import { useStateValue } from './StateProvider'
import axios from './axios'
import requests from './requests';
import { useHistory } from 'react-router-dom';


function EditMovie() {
    const [{movies}, dispatch] = useStateValue();
    
    const [title, setTitle] = useState('');
    const [category, setcategory] = useState('');
    const [rate, setRate] = useState('');
    const [description, setDescription] = useState('');
    const [poster, setPoster] = useState('');
    const [background, setBackground] = useState('');

    const history = useHistory();
    useEffect(() => {
        console.log('setting state')
        setTitle(movies?.movie?.title);
        setcategory(movies?.movie?.category);
        setRate(movies?.movie?.rate);
        setDescription(movies?.movie?.description);
        setPoster(movies?.movie?.poster);
        setBackground(movies?.movie?.background);
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        const data ={
            id: movies.movie.id,
            title: title,
            category: category,
            rate: rate,
            description: description,
            poster: poster,
            background: background,
        }
console.log('id: ', data.id)
        axios.put(requests(movies.movie.id).EditMovie, data)
        .then(res => {
            console.log('updated');
            history.push('/');
          })
    }
    return (
        <div className='edit'>
                <h1 className='edit__title'>Edit Movie</h1>
                <div className='edit__container'>
                    
                <form className='edit__form' onSubmit={handleSubmit}>
                    <h5>Title</h5>
                    <input type='text'  value={title}  onChange={e=> setTitle(e.target.value)} />
                    <h5>Category</h5>
                    <input type='text' value={category} onChange={e=> setcategory(e.target.value)} />
                    <h5>Rate</h5>
                    <input type='text' value={rate} onChange={e=> setRate(e.target.value)} />
                    <h5>Description</h5>
                    <textarea type='text' value={description} onChange={e=> setDescription(e.target.value)} />
                    <h5>Poster</h5>
                    <input type='text' value={poster} onChange={e=> setPoster(e.target.value)} />
                    <h5>Background</h5>
                    <input type='text' value={background} onChange={e=> setBackground(e.target.value)} />
                    <button className='edit__submitButton' type='submit' >Submit</button>
                </form>
                <div className="edit__sideBar">
                        <img src='https://www.flaticon.com/svg/static/icons/svg/870/870910.svg' alt='' />
                    </div>
                </div>
            </div>
    )
}

export default EditMovie

// {'id': 2,
//  'title': 'Locked Up',
//   'category': 'TV Sci-Fi & Horror', 
//    'rate': 8.0,
//     'poster': 'https://occ-0-4490-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf2xCLzwrJA4dgxIvOMux6We0OpCHJi0M1MCTwASu6BImMPDLBl_spJPi9KVmPqUic8ciA-pcpGv7wKx1s_uiuBOh_wV-MydqtJJH5Uukc7seyyGLRqm9ryrFeG-.jpg?r=d76', 
//     'background': 'https://occ-0-4490-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYpbZ-NQPbosrkrcDwYhR6S5owxZEuYySF37cRn1XiTQw9KN373dFVfPN2mEUtpYarCUTIJqu3mRWob-pnPNpX-mAwiT.jpg',
//      'description': 'Manipulated into embezzling funds for her boyfriend and sentenced to prison, a naïve young woman must quickly learn to survive in a harsh new world.'},
