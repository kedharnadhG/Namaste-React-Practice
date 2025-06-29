import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent ComponentDidMount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About class component</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          ) }
        </UserContext.Consumer>
        <h2>This is namaste React Web Series</h2>
        <User name={"Kedhar (function)"} />

        {/* <UserClass name={"Kedhar (class)"} location={"Hyderabad"} /> */}
      </div>
    );
  }
}

export default About;
