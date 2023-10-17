import "./App.css";
import React, { useState } from "react";

function App() {
  const arrayList = [5, 3, 1, 10, 9];
  let sortArrayAscending = arrayList.sort((a, b) => a - b);
  const [isAscending, setIsAscending] = useState(false);
  let title = "changeDecendingOrder";
  const sortingHandler = () => {
    if (isAscending == true) setIsAscending(false);
    if (isAscending == false) setIsAscending(true);
  };
  if (isAscending == true) {
    sortArrayAscending = arrayList.sort((a, b) => a - b);
    title = "changeDecendingOrder";
  }
  if (isAscending == false) {
    sortArrayAscending = arrayList.sort((a, b) => b - a);
    title = "changeAscendingOrder";
  }

  return (
    <ul>
      <h2>List of Numbers</h2>
      {isAscending &&
        sortArrayAscending.map((item) => (
          <div>
            <h4>{item}</h4>
          </div>
        ))}
      {!isAscending &&
        sortArrayAscending.map((item) => (
          <div>
            <h4>{item}</h4>
          </div>
        ))}
      <button onClick={sortingHandler}>
        <h4>{title}</h4>
      </button>
    </ul>
  );
}

export default App;
