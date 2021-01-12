import React from 'react';
import Bank from './Bank';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const depositValidations = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Shoul be greater then 2 characters')
        .max(10, "username should not be greater then 10 characters ")
        .required('Required'),
    amount: Yup.string()

        .required('Required'),



})
const withdrawtValidations = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Shoul be greater then 2 characters')
        .max(10, "username should not be greater then 10 characters ")
        .required('Required'),
    amount: Yup.string()

        .required('Required'),
})


class Home extends React.Component {
    state = {
        // username:"",
        // amount:"",
        balance: "",
    }
    // onChangeuname=(ev)=>{
    //     this.setState({username:ev.target.value});
    // }
    // onChangeamt=(ev)=>{
    //     this.setState({amount:ev.target.value});
    // }
    

    onWithdraw= (values) => {
        //event.preventDefault();
        //alert("Deposit")
        let uname = values.username;
        let amt = Number(values.amount);
        Bank.withdraw(uname, amt)
            .then(response => {
                this.setState({ balance: response.data.balance });
                swal("success!", "withdraw successful", "success")
            })
            .catch(error => {
                swal("withdraw Failed", "u provided invalid message", "error")
            })
        }
        // let data=Bank.getaccount()
        // if (uname in data) {
        //     data[uname]["balance"]+=amt;
        //     let bal=data[uname]["balance"];
        //     data[uname]["history"].push({
        //         typeOfTransaction:"Credit",amount:amt
        //     })
        //     Bank.saveData();

        //     //alert("avlbal=" + data[uname]["balance"])
        //     //btag.textContent="Available balance:"+bal;
        //     this.setState({balance:bal});

        //     alert("Deposit successful")
        // }
        // else {
        //     swal("invalid user")
        // }

    
    onDeposit = (values) => {
        //event.preventDefault();
        //alert("Deposit")
        let uname = values.username;
        let amt = Number(values.amount);
        Bank.deposit(uname, amt)
            .then(response => {
                this.setState({ balance: response.data.balance });
                swal("success!", "Deposit successful", "success")
            })
            .catch(error => {
                swal("Deposit Failed", "u provided invalid message", "error")
            })
    }


    render() {
        return (<div className="container">
            <div className="row">

                <div className="col-6">
                    <Link to="/TransactionHistory">Transaction History</Link>


                    <div className="jumbotron">


                        <Formik
                            initialValues={{
                                username: "",
                                amount: "",
                                //balance:""
                            }}
                            validationSchema={depositValidations}
                            onSubmit={this.onDeposit}
                        >
                            {({ errors, touched }) => (
                                <Form>

                                    <div className="form-group">
                                        <label>Username</label>
                                        <Field name="username" class="form-control" />
                                        {errors.username ? <div>{errors.username}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label>amount</label>
                                        <Field name="amount" class="form-control" />
                                        {errors.amount ? <div>{errors.amount}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label>Balance:{this.state.balance}</label>


                                    </div>

                                    <button type="submit" className="btn btn-primary">Deposit</button>


                                </Form>
                            )}

                        </Formik>
                    </div>

                </div>
                <div className="col-6">
                    <Link to="/TransactionHistory">Transaction History</Link>


                    <div className="jumbotron">


                        <Formik
                            initialValues={{
                                username: "",
                                amount: "",
                                //balance:""
                            }}
                            validationSchema={withdrawtValidations}
                            onSubmit={this. onWithdraw}
                        >
                            {({ errors, touched }) => (
                                <Form>

                                    <div className="form-group">
                                        <label>Username</label>
                                        <Field name="username" class="form-control" />
                                        {errors.username ? <div>{errors.username}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label>amount</label>
                                        <Field name="amount" class="form-control" />
                                        {errors.amount ? <div>{errors.amount}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label>Balance:{this.state.balance}</label>


                                    </div>

                                    <button type="submit" className="btn btn-primary">Withdraw</button>


                                </Form>
                            )}

                        </Formik>
                    </div>

                </div>


            </div>

        </div>

        );
    }
}
export default Home;