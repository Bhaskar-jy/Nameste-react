import { useEffect, useState } from "react";
const User = () => {
  const [userInfo, setuserInfo] = useState({});
  useEffect(() => {
    fetchUserInfo();
  }, []);
  const fetchUserInfo = async () => {
    const data = await fetch("https://api.github.com/users/Bhaskar-jy");
    const json = await data.json();
    console.log(json);
    setuserInfo(json);
  };
  const { name, location, bio, avatar_url } = userInfo;
  return (
    <div className="user-card m-4 p-4 items-center bg-gray-100 hover:bg-gray-300 rounded-lg">
      <img src={avatar_url} />
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>Bio : {bio}</h4>
    </div>
  );
};

export default User;
