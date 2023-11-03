import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('/member', {
        title: title
      });
      console.log(response);
    }
    catch(error)
    {
      console.log('Error', error);
    }
  }

  return (
    <div>
      <div><h1>Webpage scrapper</h1></div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Term:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
