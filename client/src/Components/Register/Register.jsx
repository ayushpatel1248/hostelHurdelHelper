import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [hostel, setHostel] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    // Implement user registration logic here
    // For simplicity, assume registration is successful
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>Mobile No:</label>
      <input
        type="text"
        value={mobileNo}
        onChange={(e) => setMobileNo(e.target.value)}
      />
      <label>Hostel:</label>
      <input
        type="text"
        value={hostel}
        onChange={(e) => setHostel(e.target.value)}
      />
      <label>Room No:</label>
      <input
        type="text"
        value={roomNo}
        onChange={(e) => setRoomNo(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
