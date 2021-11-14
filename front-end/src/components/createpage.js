import React from 'react'
import axios from 'axios'

export default class Create extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:null,
            data:{
              type:null,
              idea:null,
              share:null,
              risk:null,
              target:null,
              stop:null
            }
        }
    }
    post(e,access){
        axios.post('http://localhost:8000/idea/',         
            {
                user:e,
                username:this.state.name,
                item:this.state.data
            },{
            headers:{
                'Authorization':`Bearer ${access}`
            }
            }
            ).then(response=>alert('New Idea Created Successfully'))
            .then(axios.get('http://localhost:8000/idea/'))
    }

render(){
    return (
        <div className='container border m-4'>
            <div className='m-4'>
            <h4>Create Trade Idea</h4>
            <div className='border m-4'>
            <button>Crypto</button> &nbsp;
            <button onClick={(e)=>{alert('Only cryto is working currenly')}}>Stocks</button>
            </div><br/>
            <input placeholder='Name your Idea'/> &nbsp; &nbsp;
            <button>5% Upside</button>
            <div><br/>
                <input placeholder='Select Cryto'/>&nbsp;&nbsp;
                <input placeholder='Select Risk'/>
                
            </div><br/>
            <div>
                <input placeholder='Target'/>&nbsp;&nbsp;
                <input placeholder='Stopless'/>
            </div>
            <br/><br/>
            <div>
                <button>Cancel</button>&nbsp;
                <button>Create</button>
            </div>
            </div>
        </div>
    )
}
}