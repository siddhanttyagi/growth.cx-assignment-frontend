import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Result from './Result';
function App() {
  const [title, setTitle] = useState('');
  const [responsedata,setresponsedata]=useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('/member', {
        title: title
      });
      setresponsedata([...responsedata,response.data]);
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
      <Result data={responsedata}/>
    </div>
  );
}

export default App;
