import { configureStore } from '@reduxjs/toolkit'

import { SinhVien } from './SinhVien'
import { QuanLyReducer } from './QuanLyReducer'
import { errors } from './errors'
import { disabled } from './disabled'



export const store = configureStore({
    reducer: {
        QuanLyReducer: QuanLyReducer,
        SinhVien: SinhVien,
        errors: errors,
        disabled: disabled
    }
})