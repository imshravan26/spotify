import { stateContext } from "./DataLayer";

export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // Remove After finished developing
    token: null,
    // token: "BQDhUJy8u56H_HMXCQBfsjzBwUwA00SAJIOwvw5y6kDtpCJmiCR8j-o9e46kiZvPgH0aX-YFCTSbMvy0oaJbxJy6Ldf_DrGeLsZF3kB5gT8AIZEhsdbmQsct_GUSgopM9MF3DKPy3zvDthk86a3Pdh33FFKuBnHCjfvIXFe2fJlRA,",
};

const reducer = (state, action) => {
    console.log(action);
    // Action -> type [palyload]


    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
        };
};

export default reducer;