import React from "react";

const Result = (props) => {
  console.log("mai result hoon");
  console.log(props.data);

  return (
    <div>
      <table class="table" style={{width:"70vw"}}>
        <thead>
          <tr>
            <th scope="col">Domain Name</th>
            <th scope="col">Word Count</th>
            <th scope="col">favourite</th>
            <th scope="col">Web-Links</th>
            <th scope="col">Media-Links</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default Result;
