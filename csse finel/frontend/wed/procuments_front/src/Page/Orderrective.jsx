import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Orderrective() {
  const [orderDetails, setOrderDetails] = useState([]);
  let[yes,setyes] =useState("")
  const[my,setmys] = useState()
      const [ft,ssetnyy] = useState('')
  
  useEffect(() => {
    getAllSalaryCal();
  }, []);

  function getAllSalaryCal() {
    axios.get("http://localhost:3000/order/as").then((response) => {
      setOrderDetails(response.data.data);
      console.log(orderDetails)
    }).catch((error) => {
      console.log('Data not rendered');
      console.log(error);
    });
  }

  function Acceptaorder(g){
    ssetnyy(g)
    updates()
  }
  
  let num = 0;
  let invoid = ''
  let  ename = ''
  let eid = ''
  let date = ''
  let orsert = ''
  let dbid = ''
 {
  eid = ft.empID
  invoid = ft.ID
  date = ft.date
  ename = ft.empName
  orsert = ft.orderDetails

  dbid = ft._id

 }
 function updates(){
  setmys('update dispaly')
  const Addupdate = {
    num,invoid,eid,ename,date,orsert,yes
  }
  axios.put(`http://localhost:3000/order/update/${dbid}`,Addupdate).then((res)=>{
    console.log(res)
  }).catch((err)=>{

    console.log('udate not happen')
    console.log(err)
  })
  
 }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
          </tr>
        </thead>
        <tbody>

          {
          orderDetails?.map((g) => (
            <tr key={g._id}>

              <td onChange={(e)=>{
              ssetnyy(g.ID)
              }}>{g.ID}</td>
              <td>{g.empID}</td>
              <td>{g.date}</td>
              <td>{g.empName}</td>
              <td>{g.orderDetails}</td>
                <tb>  <input class="form-check-input" type="checkbox" value="yes" onChange={(e)=>{
                                    setyes(e.target.value)
                                    Acceptaorder(g)
                                }} id="invalidCheck2" required></input></tb>
                                <td>
                                  <button>Update</button>
                                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>jashas : {dbid}</p>
      <p>update : {my}</p>
    </div>
  );
}

export default Orderrective;
