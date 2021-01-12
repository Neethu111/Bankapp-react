import axios from 'axios';
const baseUrl="http://localhost:4000"
let data = {
    neethu: { username: "neethu", password: "neethu", acno: "1001", balance: 50000, history: [] },
    test1: { username: "test1", password: "test1", acno: "1002", balance: 40000, history: [] },
    tes2: { username: "test2", password: "test2", acno: "1003", balance: 60000, history: [] },
    test3: { username: "test3", password: "test3", acno: "1004", balance: 70000, history: [] },
}
let newData=localStorage.getItem("data");
if(newData)
{
    data=JSON.parse(newData);
}

class Bank {
    static currentuser = "";

    static getaccount() {

        return data;
    }

    static addUser(username, password, acno) {
        data[username] = { username, password, acno, history:[] ,balance: 0 }
        Bank.saveData();
    }

    static gethistory()
    {
        return data[Bank.getuser()].history;
    }
    static getuser() {
        //const currentuser=localStorage.getItem("currentuser");
        // if(currentuser)
        // {
        //     Bank.currentuser=currentuser;
        // }
        return localStorage.getItem("currentuser");
        //return Bank.currentuser;
        //return data[Bank.currentuser];
    }
    static setCurrentuser(uname)
    {
        localStorage.setItem("currentuser",uname);
        //Bank.currentuser=uname;
    }
    static saveData()
    {
        localStorage.setItem("data",JSON.stringify(data));
    }
    static getusers()
    {
        return axios.get(baseUrl+"/users",{withCredentials:true});
    }
    static deleteUser(username)
    {
        delete data[username];
        Bank.saveData();
    }
    static login(username,password)
    {
        return axios.post(baseUrl+"/users/login",{
            username,
            password
        },{withCredentials:true});
    }
    static register(username,password,cpassword,acno)
    {
        return axios.post(baseUrl+"/users/register",{username,password,cpassword,acno});
    }
    static deposit(username,amount)
    {
        return axios.post(baseUrl+"/users/Deposit",{username,amount},{withCredentials:true});
    }
    static history()
    {
        return axios.get(baseUrl+"/users/transactionhistory",{withCredentials:true});
    }
    static withdraw(username,amount)
    {
        return axios.post(baseUrl+"/users/withdraw",{username,amount},{withCredentials:true});
    }
}
export default Bank;