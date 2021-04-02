import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import OrderReview from '../OrderReview/OrderReview';
import './Checkout.css';

const Checkout = () => {
  let { _id } = useParams();

  const[loggedIn] = useContext(userContext);
  const [checkOutBook, setcheckOutBook] = useState();
  const [proceed, setProceed] =useState(true);

  useEffect(() => {
    fetch(`https://the-book-haven.herokuapp.com/checkOut/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setcheckOutBook(data);
      });
  }, [_id]);

  const checkOut = () => {
    setProceed(false);
    const {email} = loggedIn;
    const oldOrder = {...checkOutBook};
    const{bookName, authore,imgURL ,price} = oldOrder;
    const addToOrder ={
      email: email,
      bookName: bookName,
      authore: authore,
      price: price,
      img: imgURL
    };
    
    fetch('https://the-book-haven.herokuapp.com/orderedbook',{
      method:'Post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(addToOrder)
    });
  };

  return (
    <>
    { proceed ?
      <div className="checkoutBody">
        <h1>
          Checkout
        </h1>
        <div className="checkout">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th>Description</th>
                <th>Author</th>
                <th style={{textAlign:'center'}}>Quantity</th>
                <th style={{textAlign:'right'}}>price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{checkOutBook? checkOutBook.bookName : 'Book Name'}</td>
                <td>{checkOutBook ? checkOutBook.authore : 'Authore Name'}</td>
                <td style={{textAlign:'center'}}>1</td>
                <td style={{textAlign:'right'}}>${checkOutBook?checkOutBook.price : '$0'}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan='3'>Total</td>
                <td style={{textAlign:'right'}}>${checkOutBook? checkOutBook.price : '$0'}</td>
              </tr>
            </tfoot>
          </table>
          <button onClick={checkOut}>
            Checkout
          </button>
        </div>
      </div> :
      <OrderReview checkOutBook={checkOutBook} />
    }
    </>
  );
};

export default Checkout;