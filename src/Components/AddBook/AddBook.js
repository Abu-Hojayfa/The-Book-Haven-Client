import axios from 'axios';
import React, { useState } from 'react';
import upld from '../../images/icons/cloud-upload-outline 1.png';


const AddBook = () => {

  const [newBook, setNewBook] = useState({});

  const readInputValue = (e) => {
    const bookInfo = { ...newBook };
    bookInfo[e.target.name] = e.target.value;
    setNewBook(bookInfo);
  };

  const uploadImg = e => {
    const ImgData = new FormData();
    ImgData.set('key', '8825c73827437be57b27988af9d20788');
    ImgData.append('image', e.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload', ImgData)
      .then(function (response) {
        const bookInfo = { ...newBook };
        bookInfo[e.target.name] = response.data.data.display_url;
        setNewBook(bookInfo);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  const addABook = () => {
    fetch('http://localhost:5000/addnewbook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
      .then(res => res.json())
      .then(data => {
      });
  };
  return (
    <div className="addbook">
      <h1>
        Add Book
        </h1>
      <div className="inputGrp">
        <div className="grp1">
          <div>
            <p>Book Name</p>
            <input onBlur={readInputValue} type="text" placeholder="Enter Book Name" name="bookName" />
          </div>
          <div>
            <p>Author</p>
            <input onBlur={readInputValue} type="text" placeholder="Enter Author Name" name="authore" />
          </div>
        </div>

        <div className="grp2">
          <div>
            <p>Price</p>
            <input onBlur={readInputValue} placeholder="Enter Price" type="text" name="price" />
          </div>
          <div>
            <p>Add Book Cover Photo</p>
            <label className="fileUpload">
              <img src={upld} alt="" />
              <input onChange={uploadImg} name="imgURL" className="upload" type="file" />
              <span>Upload Photo</span>
            </label>
          </div>
        </div>

        <button onClick={addABook} className="addABook">
          Add a Book
            </button>

      </div>
    </div>
  );
};

export default AddBook;