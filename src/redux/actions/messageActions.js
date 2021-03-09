export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const ADD_CHAT = '@@message/ADD_CHAT';

export const sendMessage = (text, author, chatId) => ({
    type: SEND_MESSAGE,
    payload: {
        text,
        author,
        chatId,
    },
});

export const addChat = (chatName) => ({
    type: ADD_CHAT,
    payload: {
        chatName,
    },
});