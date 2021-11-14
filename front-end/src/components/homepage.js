import React from 'react'
import axios from 'axios'

import Login from './login';
import Create from './createpage';



export default class Homepage extends React.Component{
    constructor(props){
        super(props)

        this.state={
            items:[],
            toggle:false
            
        }
    }
        componentDidMount(){
      axios.get('http://127.0.0.1:8000/home/')
    //   .then(res=>console.log(res.data))
        .then(response=> this.setState({items:response.data/*,name:response.data.username*/}))
      .catch(err=> console.log("Error in Url"))
  }
  

like(value){
    if (!this.state.toggle){
        axios.put('',{
            like:value+1
        })

    }
    else{
        axios.put('',{
            like:value-1
        })
    }
    
}

    render(){
        return (
            <div>
                {/* <Login/>
                <Create/> */}
                 <div className='container'>
                    <div className='row m-4'>
                    {this.state.items.map((item)=>
                    <div className="col m-4 p-2 border" key={item.id}>
                    <img width='50' />
                    <span >{item.username}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button>Bell Icon</button><br/>
                    <div >
                        <span className="m-2 p-2">
                            <h4 >{item.idea}</h4>
                            <h6>for ${item.share}/USDT</h6>
                            <button>{item.risk}</button>
                        </span>
                        <span>
                            <button onClick={(e)=>this.like(item.like)}>Join this Idea</button>
                        </span>
                    </div><br/>
                    <div> 
                    <span>Enter below</span>&nbsp;
                    <span>{item.user.username}</span>
                    </div>
                    <div> 
                        <span>Book Profit near </span>&nbsp;
                        <span>{item.target}</span>
                    </div>
                    <div> 
                        <span>Stoploss at </span> &nbsp;
                        <span>{item.stop}</span>
                    </div>
                    </div>
                    )
                    
                    }
                    </div>
                 </div>
            </div>
        )
    }
}
