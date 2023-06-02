import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableSinhVien extends Component {
    render() {
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
                        </tr>
                    </thead>


                    <tbody>
                        {this.props.mangSinhVien.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.maSV}</td>
                                <td>{item.hoTen}</td>
                                <td>{item.sDT}</td>
                                <td>{item.email}</td>
                                <td></td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    mangSinhVien: state.QLSinhVienReducer.mangSinhVien
})



export default connect(mapStateToProps)(TableSinhVien)
