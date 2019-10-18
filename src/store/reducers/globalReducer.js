import { fromJS } from 'immutable';

const initState = fromJS({
    start:"true"
})

export default function globalStateReducer(state=initState,action){
    return state;
    switch(action.type){
        case "START_UP": return state;
        default: break;
    }
}