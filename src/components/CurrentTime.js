import React from 'react';


export class CurrentTime extends React.Component{
    state = {
        date:new Date()
    }

    callTime(){
        setInterval(()=> {
            this.setState({date:new Date()});
        },1000)
    }

    render(){
        return(
            <div>
                <h1>Hello User!</h1>   
                <h2>It is {this.props.date.toLocalTimeString}</h2> 
                {this.callTime}
            </div>
        );
    }
}