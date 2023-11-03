import React from "react";
import axios from "axios";
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
  
  return (
    <div>
      <table className="table" style={{width:"70vw"}}>
        <thead>
          <tr style={{width:"20vw"}}>
            <th scope="col">Domain Name</th>
            <th scope="col">Word Count</th>
            <th scope="col">favourite</th>
            <th scope="col">Web-Links</th>
            <th scope="col">Media-Links</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          
             {
                props.data.map((item,index) =>
                <tr key={index} style={{width:"20vw"}}>
                    <th scope="row">{item.domain}</th>
                    <td>{item.word_count}</td>
                    <td>Otto</td>
                    
                    <td style={{width:"20vw"}} >
                      {
                        item.web_links.slice(0,5).map((weblink,indexlink)=>(
                          <p key={indexlink}><b>{indexlink}</b>.{weblink}</p>
                          ))
                      }
                    </td>
                    <td style={{width:"0.2vw"}}>
                      {
                        item.media_links.slice(0,5).map((medialink,indexlink)=>(
                          <p key={indexlink}><b>{indexlink}</b>.{medialink}</p>
                        ))
                      }
                    </td>
                    <td>
                      <img src="./delete.png" alt="delete" height="30vh" onClick={() =>handledelete(index)} style={{ cursor: 'pointer' }}></img>
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
