import React, { useState } from "react";

function App() {
  /**
   * States are used to manage information within a component.They are mutable which means we can change the  state value.
   */
  const [firstName, setFirstName] = useState("");

  const changeHandler = (event) => {
    // Destructuring Assignment in JavaScript
    /**
     * https://www.geeksforgeeks.org/destructuring-assignment-in-javascript/?ref=gcse
     */
    const { name, value } = event.target;
    setFirstName({ [name]: value });
  };

  const preventDefault = (event) => {
    event.preventDefault();
    // Check in dev tool
    console.log(firstName);
  };

  return (
    <>
      <form onSubmit={preventDefault}>
        <input type="text" name="firstName" onChange={changeHandler} />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default App;
