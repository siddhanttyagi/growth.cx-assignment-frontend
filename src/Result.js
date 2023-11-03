import React from "react";

const Result = (props) => {
  console.log("mai result hoon");
  console.log(props.data);
  function handledelete(){
    console.log("hi");
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
                    <th scope="row">{index}. {item.domain}</th>
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
                      <img src="./delete.png" alt="delete" height="30vh" onClick={handledelete} style={{ cursor: 'pointer' }}></img>
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
