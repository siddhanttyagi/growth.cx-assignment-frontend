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
    <>
    <div className='flexing'>
      <div className='textify'>Webpage Scrapper</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Website URL' className='down-margin' />
          </div>
          <button type="submit" className='btn btn-primary'>Get Insights</button>
        </form>
      </div>
      
    </div>
    <Result data={responsedata} setresponsedata={setresponsedata}/>
    </>
  );
}

export default App;
