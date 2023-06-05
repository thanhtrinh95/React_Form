import React, { Component } from 'react'
import { connect } from 'react-redux'


class FormSinhVien extends Component {

    handleChange = (e) => {
        const { value, id } = e.target;
        let message = ""
        let dataType = e.target.getAttribute("data-type");
        switch (dataType) {
            case "letter": {
                let regexLetter = /^[a-zA-Z]+$/;
                if (!regexLetter.test(value.trim())) {
                    message = id + ' phải là chữ';
                }
                break;
            }
            case "number": {
                let min = JSON.parse(e.target.getAttribute("min-maxLength"))[0];
                let max = JSON.parse(e.target.getAttribute("min-maxLength"))[1];
                if (value.length < min || value.length > max) {
                    message = id + ` từ  ${min} đến ${max} số`
                }
                break;
            }
            case "email": {
                var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (!mailformat.test(value)) {
                    message = id + ' sai định dạng'
                    break;
                }
            }


        }
        if (value.trim() == "") {
            message = id + " không bỏ trống";
        }

        const action = {
            type: 'HANDLE_CHANGE',
            payload: {
                id: id,
                value: value
            }
        }
        const actionError = {
            type: "HANDLE_ERROR",
            payload: { message, id }
        }

        this.props.dispatch(action);
        this.props.dispatch(actionError);
    }
    checkValidForm = () => {
        const errors = { ...this.props.errors }
        let output = false;
        for (let key in errors) {
            if (errors[key] !== "") {
                output = true;
                break
            }
        }
        return output
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
    handleUpdate = () => {
        const values = { ...this.props.infoSV }
        const action = {
            type: "HANDLE_UPDATE",
            payload: values
        }
        this.props.dispatch(action)
        const disabled = {
            type: "HANDLE_iSDISABLEd",
            payload: null
        }
        this.props.dispatch(disabled)
    }
    render() {

        const { infoSV, errors, disabled } = this.props;
        return (
            <div className='container mt-5'>
                <div className="card text-start p-3 ">
                    <h2 className='text-center '>Thông tin Sinh Viên</h2>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className='row'>
                                <div className=' form-group col-6'>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="maSV" name='maSV' placeholder="Mã Sinh Viên" data-type="number" min-maxLength="[4,6]" value={infoSV.maSV} disabled={!disabled} onChange={this.handleChange} />
                                        <label htmlFor="maSV">Mã Sinh Viên</label><span className='text-danger'>{errors.maSV}</span>
                                    </div>

                                </div>
                                <div className=' form-group col-6'>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="hoTen" name='hoTen' data-type="letter" placeholder="Họ tên Sinh Viên" value={infoSV.hoTen} onChange={this.handleChange} />
                                        <label htmlFor="hoTen">Họ tên</label><span className='text-danger'>{errors.hoTen}</span>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className=' form-group col-6'>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="sDT" name='sDT' data-type="number" min-maxLength="[8,10]" placeholder="Số điện thoại" value={infoSV.sDT} onChange={this.handleChange} />
                                        <label htmlFor="sDT">Số Điện Thoại</label><span className='text-danger'>{errors.sDT}</span>
                                    </div>
                                </div>
                                <div className=' form-group col-6'>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" name='email' data-type="email" placeholder="email" value={infoSV.email} onChange={this.handleChange} />
                                        <label htmlFor="email">Email</label><span className='text-danger'>{errors.email}</span>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Thêm Sinh Viên</button>
                            <button type="button" className="btn btn-outline-danger mx-2" onClick={this.handleUpdate} disabled={disabled}>Sửa Sinh Viên</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    infoSV: state.SinhVien,
    errors: state.errors,
    disabled: state.disabled
})



export default connect(mapStateToProps)(FormSinhVien)