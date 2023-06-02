import React, { Component } from 'react'
import { connect } from 'react-redux'


class FormSinhVien extends Component {


    handleChange = (e) => {
        const { value, id } = e.target;
        //tạo action đưa value và id lên redux
        const action = {
            type: 'HANDLE_CHANGE_FORM',
            payload: {
                id: id,
                value: value
            }
        };
        //dùng dispatch gửi reducer
        this.props.dispatch(action);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const values = this.props.userRegister;
        //Tạo ra dữ liệu action đưa lên reducer
        const action = {
            type: 'REGISTER_FORM',
            payload: values
        }
        //SỬ dụng hàm dispatch từ redux cung cấp đưa dữ liệu lên reducer
        this.props.dispatch(action);
    }
    render() {

        const { maSV, hoTen, sDT, email } = this.props.infoSV
        return (
            <div className='container mt-5'>
                <div className="card text-start p-3 ">
                    <h2 className='text-center '>Thông tin Sinh Viên</h2>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className='row'>
                                <div className=' form-group col-6'>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="maSV" name='maSV' placeholder="Mã Sinh Viên" value={maSV} onChange={this.handleChange} />
                                        <label htmlFor="maSV">Mã Sinh Viên</label>
                                    </div>

                                </div>
                                <div className=' form-group col-6'>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="hoTen" name='hoTen' placeholder="Họ tên Sinh Viên" value={hoTen} onChange={this.handleChange} />
                                        <label htmlFor="hoTen">Họ tên</label>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className=' form-group col-6'>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="sDT" name='sDT' placeholder="Số điện thoại" value={sDT} onChange={this.handleChange} />
                                        <label htmlFor="sDT">Số Điện Thoại</label>
                                    </div>
                                </div>
                                <div className=' form-group col-6'>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" name='email' placeholder="email" value={email} onChange={this.handleChange} />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Thêm Sinh Viên</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    infoSV: state.SinhVien
})



export default connect(mapStateToProps)(FormSinhVien)