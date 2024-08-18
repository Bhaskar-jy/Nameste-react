import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent Constructor");
  }
  componentDidMount() {
    console.log("Parent component did mounted");
  }
  render() {
    console.log("Parent rendered");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Khakuwa Food Delivery Service </h2>
        <div className="usercontainer">
          <User
            name={"Gabbar Saturo"}
            location={"Osaka"}
            contact={"@saturoGabbar"}
          />
          <UserClass
            name={"Kakashi Hatake"}
            location={"Kyoto"}
            contact={"@hatakekakashi"}
          />
          <UserClass
            name={"kamado Tanjiro"}
            location={"kinochi"}
            contact={"@tanjirokamado"}
          />
        </div>
      </div>
    );
  }
}

export default About;
