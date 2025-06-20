import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(this.props.name + "Child constructor called");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child componentDidMount called");

    //API call
    // const data = await fetch("https://api.github.com/users/akshaymarch7");
    // const json = await data.json();
    // console.log(json);

    // this.setState({
    //   userInfo: json,
    // });

    this.timer = setInterval(() => {
      //   console.log("Namaste React OP");
    }, 1000);
  }

  componentDidUpdate() {
    // console.log("Component DidUpdate called");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("Component Will Unmount called");
  }

  render() {
    // console.log(this.props.name + "Child render called");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <img src={avatar_url} alt="avatar" />
        <h3>Location: {location}</h3>
        <h4>Contact: @kedhar9999</h4>
      </div>
    );
  }
}

export default UserClass;
