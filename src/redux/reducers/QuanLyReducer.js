const initialState = [{ maSV: '1', hoTen: 'thanh', sDT: '0909', email: 'bao@gmail.com' }]

export const QuanLyReducer = (state = initialState, action) => {
    switch (action.type) {

        case "HANDLE_SUBMIT": {
            let sinhvien = [...state];
            sinhvien.push(action.payload);
            state = sinhvien
            return state
        }
        case "HANDLE_DELETE": {
            let sinhvien = [...state];
            let indexDel = sinhvien.findIndex(sinhvien => sinhvien.maSV === action.payload);
            sinhvien.splice(indexDel, 1);
            state = sinhvien
            return state
        }
        case "HANDLE_EDIT": {
            let students = [...state];
            let studentUpdate = students.find(student => student.key === action.payload)
            return state
        }
        case "HANDLE_UPDATE": {
            let students = [...state];
            let findStudent = students.findIndex(student => student.key === action.payload.key);
            if (findStudent > -1) {
                students[findStudent] = action.payload
            }
            state = students
            return state
        }
        default:
            return state
    }
}
