//import {add, sub} from '../actions/action'
import data from '../data/data'

export default function(state, action){
    switch(action.type) {
        case 'ADD':
            state.number += 1; break;

        case 'SUB':
            state.number += 2; break;
        
    }
    return state
}