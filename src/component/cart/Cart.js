import { Divider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { LoginContext } from "../../context/ContextProvider";

function Cart() {
  const { id } = useParams("");
  const history = useNavigate();
  const { account, setAccount } = useContext(LoginContext);
  console.log("account: ", account);
  // console.log("account.carts: ", account.carts);

  const [getaData, setGetaData] = useState([]);

  const getdata = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/getproduct/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.data;
      console.log(data);
      if (res.status !== 201) {
        alert("no data available");
      } else {
        setGetaData(data);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    setTimeout(getdata, 1000);
  }, [id]);

  const addtocart = async (id) => {
    // console.log(id);
    try {
      const checkresponse = await axios.post(
        `http://localhost:8000/addtocart/${id}`,
        getaData,
        {
          headers: {
            // Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const data1 = await checkresponse.data;
      console.log(data1);
      if (checkresponse.status === 401 || !data1) {
        console.log(data1);
        alert("user Invalid");
      } else {
        setAccount(data1);
        history.push("/buynow");
        alert("data added in your cart");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle the error here
    }
  };

  return (
    <div className="cart_section">
      {getaData && Object.keys(getaData).length && (
        <div className="cart_container">
          <div className="left_cart">
            <img src={getaData.detailUrl} alt="" />
            <div className="cart_btn">
              <button
                className="cart_btn1"
                onClick={() => addtocart(getaData.id)}
              >
                Add to Cart
              </button>
              <button className="cart_btn2">Buy Now</button>
            </div>
          </div>
          <div className="right_cart">
            <h3>{getaData.title.shortTitle}</h3>
            <h4>{getaData.title.longTitle}</h4>
            <Divider />
            <p className="mrp">
              M.R.P. : <del>₹{getaData.price.mrp}</del>
            </p>
            <p>
              Deal of the Day:
              <span style={{ color: "#B12704" }}>{getaData.price.cost}</span>
            </p>
            <p>
              You save : :
              <span style={{ color: "#B12704" }}>
                ₹{getaData.price.mrp - getaData.price.cost} (
                {getaData.price.discount})
              </span>
            </p>
            <div className="discount_box">
              <h5>
                Discount:
                <span style={{ color: "#111" }}>{getaData.discount}</span>
              </h5>
              <h4>
                Free Delivery :
                <span style={{ color: "#111", fontWeight: "600" }}>
                  Oct 8 - 12
                </span>
                Details
              </h4>
              <p>
                Fastest delivery:
                <span style={{ color: "#111", fontWeight: "600" }}>
                  Tomorrow 11AM
                </span>
              </p>
            </div>
            <p className="description">
              <span
                style={{
                  color: "#565959",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.4px",
                }}
              >
                About the Item :{" "}
                <span
                  style={{
                    color: "#565959",
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "0.4px",
                  }}
                >
                  {getaData.description}
                </span>
              </span>
            </p>
          </div>
        </div>
      )}
      {!getaData ? (
        <div className="circle">
          <CircularProgress />
          <h2> Loading....</h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cart;
