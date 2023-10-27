import React, { useContext } from "react";
import "./buynow.css";
import axios from "axios";
import { LoginContext } from "../../context/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Option({ deleteData, get }) {
  console.log(deleteData);

  const { account, setAccount } = useContext(LoginContext);

  // useEffect(() => {
  //   removedata();
  // }, [deleteData]);

  const token = window.localStorage.getItem("app-token");
  const removedata = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?"))
      try {
        const response = await axios.get(`http://localhost:8000/remove/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.data;
        console.log(data);
        // if (response === 400 || !data) {
        //   console.log("error in api");
        // } else {
        //   console.log("user Deleted");
        //   setAccount(data)
        //   get();
        //   toast.success("Iteam remove from cart 😃!", {
        //     position: "top-center"
        // });
        // }
        if (response.status === 200) {
          console.log("Item Deleted");
          setAccount(data);
          get();
          toast.success("Item removed from cart 😃!", {
            position: "top-center",
          });
        } else {
          console.log("Error in API");
        }
      } catch (error) {}
  };
  return (
    <div className="add_remove_select" key={deleteData}>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p style={{ cursor: "pointer" }} onClick={() => removedata(deleteData)}>
        Delete
      </p>
      <span>|</span>
      <p className="forremovemedia">Save Or Later</p>
      <span>|</span>
      <p className="forremovemedia"> See More like this</p>
      <ToastContainer />
    </div>
  );
}

export default Option;
