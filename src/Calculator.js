import React, { Component } from 'react';
import './Calculator.css';




class Calculator extends Component {
	constructor(props){
    super(props)
    this.state = { 
    	total: 'answer',
    	val1: '',
    	val2: ''
}
  	this.addNumbers = this.addNumbers.bind(this);
  	this.subtractNumbers = this.subtractNumbers.bind(this);
  	this.multiplyNumbers = this.multiplyNumbers.bind(this);
  	this.divideNumbers = this.divideNumbers.bind(this);
  	this.clearTotal = this.clearTotal.bind(this);
  	this.handleChange1 = this.handleChange1.bind(this);
  	this.handleChange2 = this.handleChange2.bind(this);

  }

  addNumbers(e) {
  	e.preventDefault(e);
  	let num1 = parseFloat(this.state.val1);
  	let num2 = parseFloat(this.state.val2);
  	this.setState({ total: ( num1 + num2 ) });
  }
  subtractNumbers(e) {
  	e.preventDefault(e);
  	let num1 = parseFloat(this.state.val1);
  	let num2 = parseFloat(this.state.val2);
  	this.setState({ total: ( num1 - num2 ) });
  }
  multiplyNumbers(e) {
  	e.preventDefault(e);
  	let num1 = parseFloat(this.state.val1);
  	let num2 = parseFloat(this.state.val2);
  	this.setState({ total: ( num1 * num2 ) });
  }
  divideNumbers(e) {
  	e.preventDefault(e);
  	let num1 = parseFloat(this.state.val1);
  	let num2 = parseFloat(this.state.val2);
  	this.setState({ total: ( num1 / num2 ) });
  }
   clearTotal(e) {
  	e.preventDefault(e);
  	this.setState({ total: 'answer', val1: '', val2: '' });
  }
  handleChange1(event) {
    this.setState({val1: event.target.value})
  }
  handleChange2(event) {
   	this.setState({val2: event.target.value})

  }

	render() {
		return (
			<div className="container">
				<h1>Math with React!</h1>
	    		<h3 className='result'>{this.state.total}</h3>
	    		<form  onSubmit={this.clearTotal} className='clearTotal'>
		    		<input className='clear' type='submit' value='Clear' /> 
	    		</form>
	    			<form className='input'>
	  					<input type='number' className='num' value={this.state.val1} onChange={this.handleChange1}/>
		    			<input type='number' className='num' value={this.state.val2} onChange={this.handleChange2}/>
		    		</form>
				<div className="calc">
		  			<form onSubmit={this.addNumbers}>
		  				<div className="math">
		   					<input hidden value={this.state.val1} onChange={this.handleChange1}/>
		    				<input hidden value={this.state.val2} onChange={this.handleChange2}/>
		    				<input className='submit' type="submit" value="+" />
		  				</div>
		  			</form>
		  			<form onSubmit={this.subtractNumbers}>
		  				<div className="math">
		   					<input hidden value={this.state.val1} onChange={this.handleChange1}/>
		    				<input hidden value={this.state.val2} onChange={this.handleChange2}/>
		    				<input className='submit' type="submit" value="-" />
		  				</div>
		  			</form>
		  			<form onSubmit={this.multiplyNumbers}>
		  				<div className="math">
		   					<input hidden value={this.state.val1} onChange={this.handleChange1}/>
		    				<input hidden value={this.state.val2} onChange={this.handleChange2}/>
		    				<input className='submit' type="submit" value="X" />
		  				</div>
		  			</form>
		  			<form onSubmit={this.divideNumbers}>
		  				<div className="math">
		   					<input hidden value={this.state.val1} onChange={this.handleChange1}/>
		    				<input hidden value={this.state.val2} onChange={this.handleChange2}/>
		    				<input className='submit' type="submit" value="/" />
		  				</div>
		  			</form>
				</div>
	  				
			</div>

		);
	}
}


export default Calculator; 