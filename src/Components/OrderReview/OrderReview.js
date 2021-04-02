import React from 'react';
import { useHistory } from 'react-router';

const OrderReview = (props) => {
  const {bookName, authore, price} = props.checkOutBook;
  
  let history =useHistory();
  const bakeToHome = () => {
    history.push('/home');
  };

  return (
    <div className="chkOut-container">
    <div className="rightbox">
      <div className="rb-container">
        <ul className="rb">
          <li className="rb-item" ng-repeat="itembx">
            <div className="timestamp">
              3rd May 2021
            </div>
            <div className="item-title">Hand over to our delivery-team.</div>

          </li>
          <li className="rb-item" ng-repeat="itembx">
            <div className="timestamp">
              19th May 2021 
            </div>
            <div className="item-title">About to Reach your destination.</div>

          </li>

          <li className="rb-item" ng-repeat="itembx">
            <div className="timestamp">
              17st June 2021
            </div>
              <div className="item-title">You will get your book- <br/> 
              `{bookName}`.</div>
          </li>
        </ul>
      </div>
    </div>

    <div className="order-confirm">
      <h1>
        Your Current Order
      </h1>
      <div className="order-review">
        <p>
          <span>Book name</span>: {bookName}
        </p>
        <p>
          <span>Author</span>: {authore}
        </p>
        <p>
          <span>Price</span>: ${price}
        </p>
        <button onClick={bakeToHome}>
          Back to Home
        </button>
      </div>
    </div>

  </div>
  );
};

export default OrderReview;