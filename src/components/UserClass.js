import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Unknown name",
        location: "Unknown location",
        contact: "Unknown contact",
        avatar_url: " ",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Bhaskar-jy");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did updated");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    // const { name, location, contact } = this.props;
    const { name, location, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card m-4 p-4 items-center bg-gray-100 hover:bg-gray-300 rounded-lg">
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Bio : {bio}</h4>
      </div>
    );
  }
}

export default UserClass;
