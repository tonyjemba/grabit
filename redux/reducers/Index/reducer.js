import {INCREASE,DECREASE} from './action'

// this is the initial state of the index page
const initialState = {
    count : 0
}

const indexReducer = (state = initialState , action) => {

    //when the actions are dispatched(depending on the type) the return will change state and the page will re-render
    switch(action.type){
        case INCREASE:
            return {
                ...state,
                count: state.count +1
            }
        case DECREASE:
            return{
                ...state,
                count: state.count -1
            }
        
        default:
            return state;
    }
}

export default indexReducer;