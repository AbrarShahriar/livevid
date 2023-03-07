import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./App.css";
import { db } from "./firebase";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const params = useSearchParams();

  const handleNumberInsert = async () => {
    if (!params[0].get("go")) {
      alert("You are using an invalid link!!");
      return false;
    }

    const q = query(
      collection(db, "number"),
      where("mobile", "==", phoneNumber)
    );

    try {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          navigate(`/${params[0].get("go")}`);
        } else {
          alert("YOU ARE NOT ALLOWED");
        }
      });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="app">
      <h1>Enter your Mobile Number</h1>
      <input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        type="tel"
        className="number__input"
        placeholder="Mobile Number..."
      />
      <button onClick={handleNumberInsert}>GO</button>
    </div>
  );
}

export default App;
