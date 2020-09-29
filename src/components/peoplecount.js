import React from "react";


//Prop drilling is a bad and passing down components should not be done
const PeopleCount = props =>{
    return <h2 className="text-center mt-4">{props.peopleCount} </h2>
}

export default PeopleCount