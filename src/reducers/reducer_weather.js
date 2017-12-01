import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return state.concat([action.payload.data]);
            // cannot use push because push change the state directly!
            // concat return a new array which combines 2 arrays
            // return [action.payload.data, ...state];
            // same as above -> return a new array, ... flatens state array out into item1,item2, ...

            break;
        default:

    }
    return state;
}
