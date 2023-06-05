
const initialState = { maSV: '*', hoTen: '*', sDT: '*', email: '*' }


export const errors = (state = initialState, action) => {
    switch (action.type) {
        case "HANDLE_ERROR": {
            let errors = { ...state };
            errors[action.payload.id] = action.payload.message;
            state = errors
        }; break;
        case "HANDLE_RESET": {
            let errors = { ...initialState };
            state = errors
        }; break;
        case "HANDLE_EDIT": {
            let errors = {
                maSV: '', hoTen: '', sDT: '', email: ''
            };
            state = errors
        }; break;
        case "HANDLE_UPDATE": {
            let errors = { ...initialState };
            state = errors
        }
    }
    return state
}
