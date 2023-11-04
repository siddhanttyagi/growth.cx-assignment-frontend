import React from "react";
import axios from "axios";
import './Result.css'
const Result = (props) => {
  console.log("mai result hoon");
  console.log(props.data);
  async function handledelete(index){
    try {
      // Make the DELETE request to your Flask server with the index as a parameter
      const response = await axios.delete('/delete/' + index);
      
      // Check the response and handle it as needed
      if (response.status === 200) {
        // Successful delete
        props.setresponsedata(response.data);
        console.log('Item at index', index, 'deleted successfully');
      } else {
        console.error('Delete request failed');
      }
    } catch (error) {
      console.error('Error during delete request:', error);
    }
    
  }
  async function handlefav(index){
    const response=await axios.put('/updatefav/'+ index);
    if (response.status === 200) {
      // Successful delete
      props.setresponsedata(response.data);
      console.log('Item at index', index, 'deleted successfully');
    } else {
      console.error('Delete request failed');
    }
  }
  

  
  
  return (
    <div className="wrappingup">
      <table className="table second" >
        <thead>
          <tr>
            <th scope="col" className="sizing">Domain Name</th>
            <th scope="col" className="sizing">Word Count</th>
            <th scope="col" className="sizing">favourite</th>
            <th scope="col" className="sizing">Web-Links</th>
            <th scope="col"className="sizing">Media-Links</th>
            <th scope="col" className="sizing">Actions</th>
          </tr>
        </thead>
        <tbody>
          
             {
                props.data.map((item,index) =>
                <tr key={index}>
                    <td style={{color:'red', maxWidth:"200px"}}><div style={{wordWrap:"break-word"}}><b>{item.domain}</b></div></td>
                    <td>{item.word_count}</td>
                    <td><b>{item.favourite}</b></td>
                    
                    <td style={{maxWidth:"200px"}}>
                      {
                        item.web_links.slice(0,5).map((weblink,indexlink)=>(
                        <div style={{wordWrap:"break-word"}}> <p key={indexlink}><b>{indexlink}</b>.{weblink}</p></div>
                          ))
                      }
                    </td>
                    <td style={{maxWidth:'200px'}}>
                      {
                        item.media_links.slice(0,5).map((medialink,indexlink)=>(
                        <div style={{wordWrap:"break-word"}}><p key={indexlink}><b>{indexlink}</b>.{medialink}</p></div>
                        ))
                      }
                    </td>
                    <td>
                      <img src="./delete.png" alt="delete" height="30vh" onClick={() =>handledelete(index)} style={{ cursor: 'pointer' }}></img>
                      <hr></hr>
                      {item.favourite=== "false" && <img src="./favorite.png" alt="open fav" height="30vh" onClick={() =>handlefav(index)} style={{ cursor: 'pointer' }}></img>}
                      {item.favourite=== "true" && <img src="./gold_favorite.png" alt="fav" height="30vh" onClick={() =>handlefav(index)} style={{ cursor: 'pointer' }}></img>}
                    </td>
                    
                </tr>
                )
            }
            
          
          
        </tbody>
      </table>
    </div>
  );
};

export default Result;
