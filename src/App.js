import React from "react";
import data from "./data";
import List from "./List";
import { useState } from "react";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="container">
      <h3>{people.length} birthdays today </h3>
      {people.map((person) => {
        return <List data={person} key={person.id} />;
      })}
      {people ? (
        <button onClick={() => setPeople([])}>Clear all</button>
      ) : (
        <button onClick={() => setPeople(data)}>Bring all</button>
      )}
    </div>
  );
}

export default App;
