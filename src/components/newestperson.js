import React, { useEffect } from "react";
import PeopleCount from "./peoplecount"
//useEffect allows us to obtain that is called on the first render using an anonmyous function that's called as a callback on the first render and the same way when componet is updated and component did mount it works. It works whenever a component is render
const NewestPerson = ({ newestPerson ,peopleCount }) => {
  //when ever we get a new person this will change the heading, then the callback allows
  useEffect(() => {
    const newestPersonName = `${newestPerson.firstName} ${newestPerson.lastName}`;
    document.title = newestPersonName;
    console.log("useEffect");
   
    //this is return statement is called whenever the instance is change liked adding a person 
    return () => {
      console.log("unmounted");
    };
    //if we want to only do it on mount we leave the callback array empty, it is basicallt what you want to watch out for. so it will only excecute when newsest person is added.
  }, [newestPerson]);
  return (
    <div className="col col-sm-12">
      <h2 className="mt-4 text-center">
        Newest Person : {`${newestPerson.firstName} ${newestPerson.lastName}`}
      </h2>
      <PeopleCount peopleCount={peopleCount}/>
    </div>
  );
};

export default NewestPerson;
