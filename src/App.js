import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Result from './Result';
function App() {
  const [title, setTitle] = useState('');
  const [responsedata,setresponsedata]=useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('/website-info', {
        title: title
      });
      setresponsedata(response.data);

    }
    catch(error)
    {
      console.log('Error', error);
    }
  }
  async function settodefault(){
    const msg_for_default=await axios.get('/settodefault');
    console.log(msg_for_default);
  }
  useEffect(()=>{
    settodefault();
  },[])

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
      <Result data={responsedata} setresponsedata={setresponsedata}/>
    </div>
  );
}

export default App;
