import React, { useState } from "react";
import Form from "./components/form"
import People from "./components/people"
import NewestPerson from "./components/newestperson"

//REACT hooks doesn't use class components anymore it use functionla components
//useState is the first hook used and creates a state within a component. useState take an initial value and the function returns an array containg two things, first off the current state and second the function that will allow us to change the state which is the second deconstructed argument. We don't have to bind and the syntax is cleaner
const App = () => {
  //people is the array and setPeople is how you add to it
  const [people, setPeople] = useState([
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
  ]);
  //from within the component it will add people to state throguh here
  const addPerson = (person) =>{
    setPeople([...people, person ])
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <Form addPerson={addPerson}/>
          <People people={people} />
          <NewestPerson newestPerson={people[people.length - 1]} peopleCount={people.length}/>
      </div>
    </div>
  );
};

export default App;
