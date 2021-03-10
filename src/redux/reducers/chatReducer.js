import { SEND_MESSAGE, ADD_CHAT } from '../actions/messageActions';

const initialState = {
    chats:[
        'Default chat'
    ],
    messages: {
        0: [{ text: 'Hello from redux', author: 'robot' }],
    },
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                chats: [...state.chats, action.payload.chatName]
            };
        }
        case SEND_MESSAGE: {
            const prevMessages = state.messages[action.payload.chatId] || [];

            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: [
                        ...prevMessages,
                        {
                            text: action.payload.text,
                            author: action.payload.author,
                        },
                    ],
                },
            };
        }
        default:
            return state;
    }
};
