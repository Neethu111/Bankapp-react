import React from 'react';
import swal from 'sweetalert';
import Bank from './Bank';

import { withRouter } from 'react-router';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const registerValidations = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Shoul be greater then 2 characters')
        .max(10, "username should not be greater then 10 characters ")
        .required('Required'),
        password: Yup.string()
        .min(2, 'Shoul be greater then 2 characters')
        .required('Required'),
        cpassword: Yup.string()
        .min(2, 'Shoul be greater then 2 characters')
        .required('Required'),
        acno: Yup.string()
        .min(2, 'Shoul be greater then 2 characters')
        .required('Required'),


})



class Register extends React.Component {
    // state = {
    //     username: "",
    //     password: "",
    //     cpassword: "",
    //     acno: "",
    // }
    // onChangeuname = (event) => {
    //     this.setState({ username: event.target.value });
    // }
    // onChangepwd = (event) => {
    //     this.setState({ password: event.target.value });
    // }
    // onChangecpwd = (ev) => {
    //     this.setState({ cpassword: ev.target.value });
    // }
    // onChangeacno = (ev) => {
    //     this.setState({ acno: ev.target.value });
    // }
    onSubmit = (values) => {
        //event.preventDefault();
        //alert("Submit")
        let username = values.username;
        let password = values.password;
        let cpwd = values.cpassword;
        let acno = values.acno;
        Bank.register(username,password,cpwd,acno)

        .then(response=>{
            swal("Registration Success",response.data.message,"success")
            this.props.history.push("/")
        })
        .catch(error=>{ 
            swal("Registration failed", error.response.data.message, "Please Login","error")
        })

        // let data = Bank.getaccount()
        // if (username in data) {
        //     swal("Registration failed", "User already exist", "Please Login")
        // }
        // else if (password !== cpwd) {
        //     swal("Password and confirm password doesn't match")
        // }


        // else {
        //     Bank.addUser(username, password, acno)
        //     swal("Registration Success")
        //     this.props.history.push("/")
        // }
    }



    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">Welcome to SBI bank</div>
                <div className="col-4"></div>
                <div className="col-4"></div>


            </div>

            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">



                    
                    <Formik
                        initialValues={{
                            username: "",
                            password: "",
                            cpassword:"",
                            acno:"",
                        }}
                        validationSchema={registerValidations}
                        onSubmit={this.onSubmit}
                    >
                        {({ errors, touched }) => (
                             <div className="jumbotron">
                            <Form>
                               

                                <div className="form-group">
                                    <label>Username</label>
                                    <Field name="username" class="form-control"  />
                                    {errors.username ? <div>{errors.username}</div> : null}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <Field name="password" type="password" class="form-control" />
                                    {errors.password ? <div>{errors.password}</div> : null}
                                </div>
                                <div className="form-group">
                                    <label >Confirm Password</label>
                                    <Field name="cpassword" type="password" class="form-control" />
                                    {errors.cpassword ? <div>{errors.cpassword}</div> : null}
                                </div>
                                <div className="form-group">
                                    <label>Account No</label>
                                    <Field name="acno" class="form-control"/>
                                    {errors.acno ? <div>{errors.acno}</div> : null}
                                </div>


                                <button type="submit" className="btn btn-primary">Submit</button>

                                
                            </Form>
                            </div>
                           
                        )}
                     
                    </Formik>
                    



                </div>
            </div>

        </div>);
    }
}
export default withRouter(Register);