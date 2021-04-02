import React, { useEffect, useState } from 'react';
import './Main.css';
import loading from '../../images/icons/loading.gif';
import AllBooks from '../AllBooks/AllBooks';
import { Grid } from '@material-ui/core';

const Main = () => {

  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch('https://the-book-haven.herokuapp.com/allbooks')
    .then((res) => res.json())
    .then(data => setAllBooks(data));
  },[]);


  return (
    <div className="main-body">
      <div className="search">
        <div className="input-group mb-5">
          <input type="text" className="form-control" placeholder="Search for Your Desire BOOK" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
      </div>

      {
        allBooks.length === 0 ? <div className="loadingImg"> <img src={loading} alt=""/> </div> : 
                    
            <Grid className='books' container spacing={4}>
              {
                allBooks.map(singleBook => <AllBooks singleBook={singleBook} key={singleBook._id} /> )
              }
            </Grid>
      }

    </div>
  );
};

export default Main;