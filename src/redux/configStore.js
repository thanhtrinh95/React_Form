import { configureStore } from '@reduxjs/toolkit'
import { QLSinhVienReducer } from './reducers/QLSinhVienReducer'
import { SinhVien } from './reducers/SinhVien'

export const store = configureStore({
    reducer: {
        QLSinhVienReducer: QLSinhVienReducer,
        SinhVien: SinhVien
    }
})