import { useState, useEffect } from "react";
import axios from "axios";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

function PendingRequests() {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    getAllSalaryCal();
  }, []);

  function getAllSalaryCal() {
    axios
      .get("http://localhost:3000/order/as")
      .then((response) => {
        setOrderDetails(response.data.data);
      })
      .catch((error) => {
        console.log("Data not rendered");
        console.log(error);
      });
  }

  function update(empID) {
    // Store empID in localStorage
    localStorage.setItem("selectedEmpID", empID);
    console.log(localStorage.getItem("selectedEmpID"));
  }

  return (
    <div>
      <PageNav />
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
            {orderDetails?.map((g) => (
              <tr key={g._id}>
                <td>{g.ID}</td>
                <td>{g.empID}</td>
                <td>{g.date}</td>
                <td>{g.empName}</td>
                <td>{g.orderDetails}</td>
                <td>
                  <button onClick={() => update(g._id)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PendingRequests;
