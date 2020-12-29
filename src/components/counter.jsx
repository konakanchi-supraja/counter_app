import React, { Component } from "react"
class Counter extends Component {
    
    /*styles ={
        fontSize : 100,
        fontWeight : "bold"
    }
    renderingTags() {
        if (this.state.tags.length === 0) return <p>no tags</p>
        else return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>
    }
   /*constructor() {
    super();
    this.handleInc = this.handleInc.bind(this);
   }*/
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? <h1>zero</h1> : value;
    }
    render() {
        return (
            /*<React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-small">Inc</button>*/
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }
}
export default Counter