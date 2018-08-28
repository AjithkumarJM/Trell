export default function(state= {}, action){
    switch(action.type){
        case 'all_data':
            state = action.payload.data.data;
            return state;
        default:
            return state;
    }
}