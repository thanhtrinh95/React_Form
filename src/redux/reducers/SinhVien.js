

const initialState = { maSV: '', hoTen: '', sDT: '', email: '' }


export const SinhVien = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_CHANGE': {
            const { id, value } = action.payload;
            let newState = { ...state };
            newState[id] = value;
            state = newState;
        }; break;
        case "HANDLE_EDIT": {
            let newState = { ...action.payload };
            state = newState
        }; break;
        case "HANDLE_UPDATE": {
            let newState = { ...initialState };
            state = newState;
        }; break;

    }
    return state;
}
