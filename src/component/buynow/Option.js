import React,{useEffect} from "react";
import './buynow.css';
import axios from "axios";

function Option({deleteData,get}) {

  useEffect(() => {
    removedata();
  }, [deleteData]);

  const token = window.localStorage.getItem("app-token");
  const removedata = async (id)=>{
    try{
     const response = await axios.get(`http://localhost:8000/remove/${deleteData}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
     })
     const data = await response.data;
     console.log(data)
     if(response === 400 || !data){
      console.log("error in api")
     }
     else{
      console.log("user Deleted")
      get();
     }
    }
    catch(error){

    }
  }
  return (
    <div className="add_remove_select">
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p style={{ cursor: "pointer" }}>Delete</p>
      <span>|</span>
      <p className="forremovemedia">Save Or Later</p>
      <span>|</span>
      <p className="forremovemedia"> See More like this</p>
      
    </div>
  );
}

export default Option;
