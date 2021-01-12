import React from 'react';
import swal from 'sweetalert';
import Bank from './Bank';
import { withRouter } from 'react-router';
import { Formik, Form, Field } from 'formik';
//import {string} from 'yup';
import * as Yup from 'yup';

const loginValidations = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Shoul be greater then 2 characters')
        .max(10, "username should not be greater then 10 characters ")
        .required('Required'),
    password: Yup.string()
        .min(2, 'Shoul be greater then 2 characters')
        .required('Required'),

})

class Login extends React.Component {
    // state = {
    //     username: "",
    //     password: "",
    // }

    // onChangeuname = (event) => {
    //     this.setState({ username: event.target.value });
    // }
    // onChangepwd = (event) => {
    //     this.setState({ password: event.target.value });
    // }
    onSubmit = (values) => {
        let uname = values.username;
        let pwd = values.password;
        Bank.login(uname, pwd)
            .then(response => {
                // console.log(response);
                // alert("api completed")
                swal("Login Success!", response.data.message, "success");
                this.props.history.push("/Home")
            })
            // .catch(error=>{console.log(error)})
            .catch(error => {

                swal("Login failed", "You provided invalid message", "error");
            })
    }

        //     event.preventDefault();
        //     //alert("Submit")
        //     let uname = this.state.username;
        //     let pwd = this.state.password;
        //     Bank.login(uname,pwd)
        //     .then(response=>{
        //         // console.log(response);
        //         // alert("api completed")
        //         swal( "Login Success!",response.data.message,"success");
        //         this.props.history.push("/Home")
        //     })
        //     // .catch(error=>{console.log(error)})
        //     .catch(error=>{ 

        //         swal("Login failed", "You provided invalid message","error");
        //     })

        // let data = Bank.getaccount()
        // if (uname in data) {
        //     let password = data[uname]["password"]
        //     if (pwd == password) {
        //         //localStorage.setItem("currentuser",uname);
        //         Bank.setCurrentuser(uname);
        //         swal("Good job!", "Login Success!");
        //         //setTimeout(()=>window.location.href="home.html",5000)
        //         this.props.history.push("/Home")
        //     }
        //     else {
        //         swal("Login failed", "You provided invalid message")
        //     }
        // }
        // else {
        //     alert("Invalid login")
        // }
    

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


                <div className="jumbotron">

                    <Formik
                        initialValues={{
                            username: "",
                            password: ""
                        }}
                        validationSchema={loginValidations}
                        onSubmit={this.onSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form>

                                <div className="form-group">
                                    <label>Username</label>
                                    <Field name="username" class="form-control"/>
                                    {errors.username ? <div>{errors.username}</div> : null}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <Field name="password" type="password" class="form-control" />
                                    {errors.password ? <div>{errors.password}</div> : null}
                                </div>


                                <button type="submit" className="btn btn-primary">Submit</button>


                            </Form>
                        )}

                    </Formik>

                </div>



            </div>
        </div>

    </div >);
}
}


export default withRouter(Login);
