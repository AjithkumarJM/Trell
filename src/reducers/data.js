export default function(state= {}, action){
    switch(action.type){
        case 'data':
            state = action.payload.data.data;
            return state;
        default:
            return state;
    }
}