import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Khakuwa Food Delivery Service </h2>
      <div className="usercontainer">
        <User
          name={"Gabbar Saturo"}
          location={"Onigiri"}
          contact={"@saturoGabbar"}
        />
        <UserClass
          name={"Kakashi Hatake"}
          location={"Kyoto"}
          contact={"@hatakekakashi"}
        />
      </div>
    </div>
  );
};

export default About;
