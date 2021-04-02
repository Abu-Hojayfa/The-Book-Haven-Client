import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import './Orders.css';

const Orders = () => {
  const [loggedIn] = useContext(userContext);
  const {email} = loggedIn;
  
  const [orderedBook, setOrderedBook] = useState([]);
  useEffect(() => {
    fetch(`https://the-book-haven.herokuapp.com/allOrderBooks/${email}`)
    .then((res) => res.json())
    .then((data) => setOrderedBook(data));
  },[email]);
  return (
    <div className="showOrdersBody">
      <ol start="1">
      {
        orderedBook.map(book =>
          <li start='1' key={book._id}>
            <div className='ordersInfo' >
              <div className="ordr-img">
                <img src={book.img} alt=""/>
              </div>
              <div className="order-info">
                <p>
                  <span>Book Name:</span> {book.bookName}
                </p>
                <p>
                  <span>Author:</span> {book.authore}
                </p>
                <p>
                  <span>Price:</span> ${book.price}
                </p>
                <p>
                  <span>Order Date:</span> 23 May, 2021
                </p>
              </div>
            </div>
          </li>          
        )
      }
      </ol>
    </div>
  );
};

export default Orders;