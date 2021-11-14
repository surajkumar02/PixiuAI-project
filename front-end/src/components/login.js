import React from 'react'
import axios from 'axios'

export default class Login extends React.Component{
    constructor(props){
        super(props)

        this.state={
            item:[],
            username:null,
            password:null,
            name:null,
            login:false,
            access:null,
            refresh:null
        }
    }

    logIn(e){
        e.preventDefault()
        axios({

            method: 'post',

            url: 'http://127.0.0.1:8000/login/',

            headers: {

                'Content-Type': 'application/json'

            },

            data: {
                email:this.state.username,
                password:this.state.password
            }
            
            // JSON.stringify({
            //     username:e.target['name'].value,
            //     password:e.target['password'].value})
        

        })
        .then(response=>this.setState({name:response.data.username,access:response.data.access,refresh:response.data.refresh,login:true}))
        .catch(err=>alert(err.data))
    }

    signUp(e){
        e.preventDefault()
        axios({

            method: 'post',

            url: 'http://127.0.0.1:8000/signup/',

            headers: {

                'Content-Type': 'application/json'

            },

            data: {
                username:this.state.username,
                name:this.state.name,
                password:this.state.password
            }
            
            // JSON.stringify({
            //     username:e.target['username'].value,
            //     name:e.target['name'].value,
            //     password:e.target['password'].value})
        

        })
        .then(response=>this.setState({name:response.data.username,access:response.data.access,refresh:response.data.refresh,login:true}))
        .catch(err=>alert(err.data))
    }

    post(e){
        axios.post('http://localhost:8000/blogs/',         
            {
                user:this.state.user,
                username:this.state.name,
                item:this.state.data
            },{
            headers:{
                'Authorization':`Bearer ${this.state.access}`
            }
            }
            ).then(response=>this.setState({login:true}))
            .catch(err=>console.log(err.data))

    }

    handleSubmit(e){
        e.preventDefault()
    }

    render(){
        return (
            <div>
                <button className='btn-primary' onClick={(e)=>this.setState({login:!this.state.login})}>Login/Singup</button>
                <br/><br/>
            <div>
                <div>
                {!this.state.login &&   <form onSubmit={this.handleSubmit}> 
                <input type="text" onChange={(e)=>this.setState({username:e.target.value})} placeholder="Recipient's  E-mail" required/><br/>
                <input type="password" onChange={(e)=>this.setState({password:e.target.value})} placeholder="Recipient's  Password" required/><br/><br/>
                <button className='btn-primary' type='reset' onClick={(e)=>this.logIn(e)}>Login</button>
                </form>}
                </div>
                
                {this.state.login &&   <form onSubmit={this.handleSubmit}> 
                <input type="text" onChange={(e)=>this.setState({name:e.target.value})} placeholder="Recipient's  Name" required/><br/>
                <input type="text" onChange={(e)=>this.setState({username:e.target.value})} placeholder="Recipient's  E-mail" required/><br/>
                <input type="password" onChange={(e)=>this.setState({password:e.target.value})} placeholder="Recipient's  Password" required/><br/><br/>
                <button className='btn-warning' type='reset' onClick={(e)=>this.signUp(e)}>Sign Up</button>
                </form>}
            
               

            </div>
            </div>
        )
    }
}