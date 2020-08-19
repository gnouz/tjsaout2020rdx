import { createStore } from 'redux'

const initialState={
    messages:[],
    users:[],
    user:{}
}
function reducer(state=initialState,action) {
    switch(action.type){
        case 'ADD_MESSAGES':
            return {...state,messages: [...state.messages,...action.values]};
        case 'ADD_USERS':
            return {...state,users: [...state.users,...action.values]};
        case 'SET_CURRENT_USER' :
            return {...state, user: action.value};
        default : return state;
    }
}
/*
let monState=reducer(undefined,{type:'ADD_MESSAGES', values:[{id:1, message:'Azul'}]})
console.log(monState);
let monState2=reducer(monState,{type:'ADD_USERS', values:[{id:1, name:'NBO'}]})
console.log(monState2);

let monState3=reducer(monState,{type:'SET_CURRENT_USER', value:{id:1, name:'NBO'}})
console.log(monState3);
*/
const store = createStore(reducer);
store.subcribe(()=>{
    console.log(store.getState());

});
store.dispatch({type:'ADD_MESSAGES', values:[{id:1, message:'Azul'}]});
store.dispatch({type:'ADD_USERS', values:[{id:1, message:'MIMOU'}]});
store.dispatch({type:'SET_CURRENT_USER', value:{id:2, name:'NBO'}});
export default store;