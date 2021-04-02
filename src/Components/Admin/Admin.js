import React, { useEffect, useState } from 'react';
import './Admin.css';
import manage from '../../images/icons/grid 1.png';
import add from '../../images/icons/plus 1.png';
import edit from '../../images/icons/edit 1.png';
import dlt from '../../images/icons/Group 33150.png';
import edt from '../../images/icons/Group 307.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddBook from '../AddBook/AddBook';


const Admin = () => {

  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch('https://the-book-haven.herokuapp.com/allbooks')
      .then((res) => res.json())
      .then(data => setAllBooks(data));
  }, []);

  const deletBook = (props, event) =>{
    fetch(`https://the-book-haven.herokuapp.com/removebook/${props}`,{
      method:'DELETE'
    })
    .then((res) => res.json())
    .then(data =>{
      if(data){
        event.target.parentNode.parentNode.style.display = 'none' ;
      }
    });
  };

  return (
    <div className="adminBody">
      <Router>
        <div className="controlAdmin">
          <h1>
            Book HAven
          </h1>
          <Link to="/admin">
            <div>
              <img src={manage} alt="" />
              <p>Manage Books</p>
            </div>
          </Link>

          <Link to="/addbook">
            <div>
              <img src={add} alt="" />
              <p>Add Book</p>
            </div>
          </Link>
          <div>
            <img src={edit} alt="" />
            <p>Edit Book</p>
          </div>
        </div>

        <Switch>
          <Route path="/admin">
            <div className="allBooksInfo">
              <h1>
                Manage Books
              </h1>

              <table className="table table-borderless mng-book">
                <thead>
                  <tr className='tableHeader'>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>price</th>
                    <th style={{textAlign:'center'}}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    allBooks.map(data =>
                      <tr key={data._id}>
                        <td>{data.bookName}</td>
                        <td>{data.authore}</td>
                        <td>${data.price}</td>
                        <td className="tableImg">
                          <img src={edt} alt="" />
                          <img onClick={(event)=>deletBook(data._id , event)} src={dlt} alt="" />
                        </td>
                      </tr>

                    )
                  }
                </tbody>
              </table>

            </div>
          </Route>

          <Route path="/addbook">
            <AddBook />
          </Route>

        </Switch>
      </Router>

    </div>
  );
};

export default Admin;