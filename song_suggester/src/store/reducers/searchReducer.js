import { dummyData } from '../local_data'
const initialState = {
    songList : dummyData,
};

export const searchReducer = (state = initialState, action) => {
    switch( action.type ) {
        default:
            return state;
    }
}