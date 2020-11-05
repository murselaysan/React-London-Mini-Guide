import React from "react";

export default function Table({info}) {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>                    
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {info.pharmacies.map((data) =>{
           return (
                <div key={data.phone}>
              <th scope="row">1</th>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.address}</td>
            <td>{data.website}</td>
                </div>
              )
           })
          }
          </tr>
        </tbody>
      </table>
    </div>
  );
}
