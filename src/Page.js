import React from "react";
import { useNavigate } from "react-router-dom";
export default function Page() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Wishlist Page (Remote)</h2>
      {/* <button onClick={()=>navigate("/")}>← Back to Homepage</button> */}
      <a href="/" style={{ textDecoration: 'none', color: 'blue' }}>← Back to Homepage</a>
    </div>
  );
}
