import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);

    console.log("useEffect called");
    return () => {
      clearInterval(timer);
      console.log(
        "Function Component Will Unmount called, useEffect return called"
      );
    };
  }, []);

  console.log("render");
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Count: {count}</h1>
      {/* <h1>Count2: {count2}</h1> */}
      <h2>Name: {name}</h2>

      <h3>Location: Guntur</h3>
      <h4>Contact: @kedhar9999</h4>
    </div>
  );
};

export default User;
