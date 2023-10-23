import axios from "axios";
import PageNav from "../components/PageNav";
import { useState,useEffect } from "react";

function AcceptOrder() {
  let a = localStorage.getItem("selectedEmpID");
  const [serch,setserch] = useState([])
  const [email, setEmail] = useState('');
  const [dates,setdate] =useState('')
  const [empID,setempID] =useState('')
  const [empName,setempName] =useState('') 
  const [orderDetails,setorderDetails] =useState('')

  useEffect(()=>{

     serchordr()
  },[])
const serchordr =()=>{
   
    axios.get(`http://localhost:3000/order/ser/${a}`).then((response)=>{

    let searchedItem = [];
     searchedItem.push(response.data)
     setserch(searchedItem)
    }).catch((err)=>{

      console.log('not sserching ')
        console.log(err)
    })
}

let invoid = ''
let  ename = ''
let eid = ''
let date = ''
let orsert = ''


 serch.map((r)=>(
     invoid =  r.ID,
     eid = r.empID,
     ename = r.empName,
     date = r.date,
     orsert = r.orderDetails
 ))
  return (
    <div>
      <PageNav />
      <div>{a}</div>
      <form>
        <div>
        <label>INvoice Id</label>
         <input type="text" value={invoid} onChange={(e)=>{
           
           setEmail(e.target.value)
         }}/>
        </div>

        <div>
        <label>employye id</label>
         <input type="text" value={eid} onChange={(e)=>{
           
           setempID(e.target.value)
         }}/>
        </div>
        <div>
        <label>empluye name </label>
         <input type="text" value={ename} onChange={(e)=>{
           
           setempName(e.target.value)
         }}/>
        </div> <div>
        <label>INvoice Id</label>
         <input type="text" value={date} onChange={(e)=>{
           
           setdate(e.target.value)
         }}/>
        </div>
        <div>
        <label>INvoice Id</label>
         <input type="text" value={orsert} onChange={(e)=>{
           
           setorderDetails(e.target.value)
         }}/>
        </div>
        <div>
        <label>INvoice Id</label>
        <button >update</button>
        </div>

      <p>sdsds{
      invoid
}</p>
        
      </form>
    </div>
  );
}

export default AcceptOrder;
