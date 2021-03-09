import { CHANGE_NAME } from '../actions/profileActions';

const initialState = {
    profileName: 'Me',
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                profileName: action.payload.newName,
            };
        }
        default:
            return state;
    }
};
