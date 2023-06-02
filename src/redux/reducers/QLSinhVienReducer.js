

const initialState = {
    mangSinhVien: [{ maSV: 1, hoTen: 'Nguyễn văn a', sDT: '09090909', email: 'bao@gmail.com' }]
}

export const QLSinhVienReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_FORM': {
            const values = action.payload;
            console.log('values', values)
            //clone arrState ra 
            let newArrState = [...state, values];
            //newArrUser.push(values);

            state = newArrState;
            return state;
        };


    }
}