import React ,{ useState, useEffect }from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


import './booking_update.scss'
const UppBookingForm = () => {
  const [ID, setID] = useState('');
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [tele, setTele] = useState('');
  const [address, setAddress] = useState('');
  const [day, setDay] = useState('');
  const [msg, setMsg] = useState('');
  const { id,setdata } = useParams();
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
        
    ID:"",
        name:"",
        mail:"",
        tele:"",
        address:"",
        day:"",
        msg : ""
  });
function serdata(){


  axios
  .get(`http://localhost/:3000/deleivary/se/${id}`)
  .then((res) => {
    setValues({
      ...values,
    
      ID:res.data.ID,
      name:res.data.name,
      mail:res.data.mail,
      tele:res.data.tele,
      address:res.data.address,
      day:res.data.day,
      msg:res.data.msg,

    });
  })
  .catch((err) => console.log(err));

}
  useEffect(() => {
    //Fetiching data
    serdata()
  }, []);

const myupdate  = {ID,name,mail,tele,address,day,msg}
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost/:3000/deleivary/up/${id}`, myupdate)
      .then((res) => {
        console.log(res);
        Swal.fire("Done!", "Booking Updated Successfully!", "success");
         
      })
      .catch((err) => console.log(err));
  };

  

  return (
   
    <div>
      <input className="update" 
        type="text"
        placeholder="Serch "
        required
        onChange={(e) => setdata(e.target.value)}
        
      />
      <button type="submit" onClick={serdata}>Submit</button>
 <form className="update" >
      <h3> UPDATE ROOM BOOKING </h3>

      <label> Booking ID </label>
      <input
        type="text"
        placeholder="Enter Booking ID "
        required
        onChange={(e) => setID(e.target.value)}
        value={ID}
       
      />
       <input
        type="text"
        placeholder="Enter Booking Name "
        required
        onChange={(e) => setName(e.target.value)}
        value={name}
       
      />
       <input
        type="text"
        placeholder="Enter Booking email "
        required
        onChange={(e) => setMail(e.target.value)}
        value={mail}
      />
       <input
        type="text"
        placeholder="Enter Booking Phone number "
        required
        onChange={(e) => setTele(e.target.value)}
        value={tele}
      />
       <input
        type="text"
        placeholder="Enter Booking Addres "
        required
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      /> <input
      type="text"
      placeholder="Enter Booking ID "
      required
      onChange={(e) => setDay(e.target.value)}
      value={day}
    />
     <input
        type="text"
        placeholder="Enter Booking ID "
        required
        onChange={(e) => setMsg(e.target.value)}
        value={msg}
      />

<button type="submit" onClick={handleUpdate}>Submit</button>
  <button onClick={() => window.location.reload()} style={{ marginLeft: '50px' }}>CANCEL</button>
      
    </form>
    </div>
  );
};
export default UppBookingForm;
