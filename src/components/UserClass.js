import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
    };
    console.log(props);
  }

  render() {
    const { name, location, contact } = this.props;
    const { count1 } = this.state;
    return (
      <div className="user-card">
        <h5>Count1 : {count1}</h5>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Count Incriment
        </button>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
