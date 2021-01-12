import React from 'react';
import Bank from './Bank';
import { withRouter } from 'react-router';

class Users extends React.Component {
    state={
        users:[]
    }
    deleteUser=(username)=>{
        Bank.deleteUser(username);
        this.setState({});

    }
    componentDidMount(){
        Bank.getusers()
        .then(response=>{
            this.setState({users:response.data.users});
        });
    }

    render() {
        //let users = Bank.getusers();
        return (
            <div className="container">


                <h1>Users</h1>
                <table className="table">
                    <tr><th>User name</th>
                        <th>Balance</th></tr>

                    {this.state.users.map(user=><tr>
                    <td>{user.username}</td>
                    <td>{user.balance}</td>
                    <td onClick={()=>{this.deleteUser(user)}}>Delete</td></tr>)
                    }
                </table>
            </div>


        );
    }
}
export default withRouter(Users);