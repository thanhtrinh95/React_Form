import { configureStore } from '@reduxjs/toolkit'

import { SinhVien } from './SinhVien'
import { QuanLyReducer } from './QuanLyReducer'
import { validation } from './validation'


export const store = configureStore({
    reducer: {
        QuanLyReducer: QuanLyReducer,
        SinhVien: SinhVien,
        validation: validation
    }
})