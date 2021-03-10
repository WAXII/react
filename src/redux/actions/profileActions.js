export const CHANGE_NAME = '@@message/CHANGE_NAME';

export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: {
        newName,
    },
});