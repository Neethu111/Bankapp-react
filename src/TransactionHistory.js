import React from 'react';
import Bank from './Bank';
import { withRouter } from 'react-router';

class TransactionHistory extends React.Component {
    state={
        history:[]
    }

    render() {
        //let history = Bank.gethistory();
        return (
            <div className="container">


                <h1>Transaction History</h1>
                <table className="table">
                    <tr><th>Type of Transaction</th>
                        <th>Amount</th></tr>
                        {
                            this.state.history.length==0?
                            <tr><td><p>No data</p></td></tr>:null
                        }

                    {
                        this.state.history.map(h => <tr>
                            <td>{h.typeOfTransaction}</td>
                            <td>{h.amount}</td>
                        </tr>)
                    }
                </table>
            </div>
          

        );
    }
    componentDidMount()
    {
        Bank.history()
        .then(response=>{

            this.setState({history:response.data.history})
        })
    }

}
export default withRouter(TransactionHistory);