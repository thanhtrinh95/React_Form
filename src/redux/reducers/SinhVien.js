

const initialState = { maSV: '', hoTen: '', sDT: '', email: '' }


export const SinhVien = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_CHANGE_FORM': {
            const { id, value } = action.payload;
            let newState = { ...state };
            //immutable (bất biến)
            newState[id] = value;
            //cập nhât state
            state = newState;
        }; break;

    }
    return state;
}
