import React from 'react';
import { Grid } from '@material-ui/core';
import './AllBooks.css';
import cart from '../../images/icons/shopping-cart 1.png';
import { useHistory } from 'react-router';

const AllBooks = (props) => {
  const {_id, bookName, authore, imgURL, price} = props.singleBook;

  let history = useHistory();

  const buyProduct = () => {
    history.push(`/checkout/${_id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <div  className="bookContainer">
        <div className="bookImg">
          <img src={imgURL} alt=""/>
        </div>
        <div className="bookDes">
          <h2>{bookName}</h2>
          <p>{authore}</p>
          <div className="bookPrice">
            <h3>${price}</h3>
            <button onClick={buyProduct}>
              <img src={cart} alt=""/>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default AllBooks;