import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "Jamie",
    birthday: "921015",
    gender: "male",
    job: "traveler",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "Sunny",
    birthday: "911010",
    gender: "female",
    job: "traveler",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "Jamie",
    birthday: "921015",
    gender: "male",
    job: "traveler",
  },
];

function App() {
  return (
    <div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
