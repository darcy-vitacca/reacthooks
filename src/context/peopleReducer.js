import {ADD_PERSON} from "./types"
export default (state, action ) =>{
    switch (action.type){
        case ADD_PERSON:
            return addPerson(action.payload, state);
        default:
            return state;
    }
}