import { useState } from "react";
const User = ({ name, location, contact }) => {
  const [count1, setCount1] = useState(0);

  return (
    <div className="user-card">
      <h5>Count : {count1}</h5>

      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact : {contact}</h4>
    </div>
  );
};

export default User;
