import React, { Component } from 'react'
import { connect } from 'react-redux'


class FormSinhVien extends Component {
    state = {
        erros: { maSV: '*', hoTen: '*', sDT: '*', email: '*' }
    }



    handleChange = (e) => {
        const { value, id } = e.target;
        let mess = "";
        let dataType = e.target.getAttribute("data-type");
        switch (dataType) {
            case "letter":
                let regexLetter = /^[a-zA-Z]+$/;
                if (!regexLetter.test(value.trim())) {
                    mess = id + ' phải là chữ';
                }
                break;
            case "number": {
                let min = JSON.parse(e.target.getAttribute("min-maxLength"))[0];
                let max = JSON.parse(e.target.getAttribute("min-maxLength"))[1];
                if (value.length < min || value.length > max) {
                    mess = id + ` phài từ ${min} đến ${max} số`
                }
                break;
            }
            case "email": {
                var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (!mailformat.test(value)) {
                    mess = id + ' sai định dạng'
                    break;
                }
            }
            default:
                break;
        }
        if (value.trim() == "") {
            mess = id + " can't be blank";
        }

        const action = {
            type: 'HANDLE_CHANGE',
            payload: {
                id: id,
                value: value
            }
        }

        //dùng dispatch gửi reducer

        this.props.dispatch(action);

    }
    checkValidForm = () => {
        const error = { ...this.props.error }
        let output = false;
        for (let key in error) {
            if (error[key] !== "") {
                output = true;
                break
            }
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.checkValidForm()) {
            return;
        }
        const values = { ...this.props.infoSV };
        const action = {
            type: "HANDLE_SUBMIT",
            payload: values
        }
        this.props.dispatch(action)
    }
    handleUpdate = (e) => {
        const values = { ...this.props.infoSV }
        const action = {
            type: "HANDLE_UPDATE",
            payload: values
        }
        this.props.dispatch(action)
    }
    render() {

        const { infoSV, error } = this.props;
        return (
            <div className='container mt-5'>
                <div className="card text-start p-3 ">
                    <h2 className='text-center '>Thông tin Sinh Viên</h2>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className='row'>
                                <div className=' form-group col-6'>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="maSV" name='maSV' placeholder="Mã Sinh Viên" data-type="number" min-maxLength="[4,6]" value={infoSV.maSV} onChange={this.handleChange} />
                                        <label htmlFor="maSV">Mã Sinh Viên</label><span className='text-danger'>{error.maSV}</span>
                                    </div>

                                </div>
                                <div className=' form-group col-6'>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="hoTen" name='hoTen' placeholder="Họ tên Sinh Viên" value={infoSV.hoTen} onChange={this.handleChange} />
                                        <label htmlFor="hoTen">Họ tên</label><span className='text-danger'>{error.hoTen}</span>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className=' form-group col-6'>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="sDT" name='sDT' placeholder="Số điện thoại" value={infoSV.sDT} onChange={this.handleChange} />
                                        <label htmlFor="sDT">Số Điện Thoại</label><span className='text-danger'>{error.sDT}</span>
                                    </div>
                                </div>
                                <div className=' form-group col-6'>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" name='email' placeholder="email" value={infoSV.email} onChange={this.handleChange} />
                                        <label htmlFor="email">Email</label><span className='text-danger'>{error.email}</span>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Thêm Sinh Viên</button>
                            <button type="button" className="btn btn-outline-danger mx-2" onClick={this.handleUpdate}>Sửa Sinh Viên</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    infoSV: state.SinhVien,
    error: state.validation
})



export default connect(mapStateToProps)(FormSinhVien)