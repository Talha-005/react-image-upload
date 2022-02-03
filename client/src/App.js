import './App.css';
import React, { useState } from 'react';
import { singleFileUpload } from './services/imageAPI';

function App() {
  const [image, setImage] = useState('');
  const [url, setURL] = useState('');

  const uploadImage = async (data) => {

    const res = await singleFileUpload(data);
    if (parseInt(res.status) === 201) {
      console.log('Data ', res.data);
      setURL(res.data);
    } else if (parseInt(res.status) === 500) {
      console.log('Error ', res.message);
    }
  }

  const submitHandle = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', image);
    uploadImage(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form encType='multipart/form-data' onSubmit={submitHandle}>
          <input type={'file'} name='file' onChange={(e) => setImage(e.target.files[0])} />
          <button type='submit'>UPLOAD</button>
        </form>
        <img src={`https://react-image-upload-opal.vercel.app${url}`} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
