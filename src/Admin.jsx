import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "./firebase";

const Admin = () => {
  const [number, setNumber] = useState("");
  const addNumber = async () => {
    try {
      let docRef = await addDoc(collection(db, "number"), {
        number: number,
      });
      alert(`added: ${docRef.id}`);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={addNumber}>Submit</button>
    </div>
  );
};
export default Admin;
