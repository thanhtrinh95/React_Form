const initialState =
    { maSV: '*', hoTen: '*', sDT: '*', email: '*' }


export const validation = (state = initialState, action) => {
    switch (action.type) {

        case "HANDLE_ERROR": {
            let error = { ...state };
            error[action.payload.maSV] = action.payload.mess;
            state = error
        }; break;

        default:
            return state
    }
}
