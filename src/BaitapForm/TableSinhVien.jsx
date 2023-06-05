import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableSinhVien extends Component {
    handleDelete = (e) => {
        const action = {
            type: "HANDLE_DELETE",
            payload: e
        }
        this.props.dispatch(action)
    }
    handleEdit = (e) => {
        const action = {
            type: "HANDLE_EDIT",
            payload: e
        }
        this.props.dispatch(action)
        const disabled = {
            type: "HANDLE_DISABLE",
            payload: null
        }
        this.props.dispatch(disabled)
    }
    render() {
        const { mangSinhVien } = this.props;
        console.log(this.props.mangSinhVien);
        return (
            <div className="table-responsive mt-3">
                <table className="table ">
                    <thead className='table-success'>
                        <tr>
                            <th scope="col">Mã Sinh Viên</th>
                            <th scope="col">Họ Tên</th>
                            <th scope="col">Số Điện Thoại</th>
                            <th scope="col">Email</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>


                    <tbody>
                        {mangSinhVien.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.maSV}</td>
                                <td>{item.hoTen}</td>
                                <td>{item.sDT}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button className='btn btn-primary mx-3' onClick={() => {
                                        this.handleEdit(item)
                                    }}>Sửa</button>
                                    <button className='btn btn-danger' onClick={() => {
                                        this.handleDelete(item.maSV)
                                    }}>Xóa</button>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    mangSinhVien: state.QuanLyReducer
})



export default connect(mapStateToProps)(TableSinhVien)
