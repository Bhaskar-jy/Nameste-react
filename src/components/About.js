import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Khakuwa Food Delivery Service </h2>
        <div className="usercontainer flex ">
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
        </div>
      </div>
    );
  }
}

export default About;
