import React from 'react';
import { render } from 'react-dom';

function Welcome({name}){
return <h1>Hello {name}</h1>;
}



function App() {
  const numbers = [1,2,3];
  const listItems = numbers.map((number) => <li>{number}</li>);
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  
  return (
    <div>
       <Welcome name="test"></Welcome>
       <Clock></Clock>
       <Toggle></Toggle>
       
       <NameForm />
    </div>
  );
}

class NameForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value :''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleSubmit = (event) => {
    alert(this.state.value);
    event.preventDefault();
  };

  render(){
    return (
  <form onSubmit={this.handleSubmit}>
  <label>name : 
<input type="text" value={this.state.value} onChange={this.handleChange}></input>

  </label>
<input type="submit" value="Submit"></input>
  </form>
    );
  }
}


function Blog(props){
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
      <li key={post.id}> {post.title}</li>
      )}
    </ul>
  );

  const content = props.posts.map((post) => 
  <div key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.content}</p>
  </div>
  );

  return (
  <div>
    {sidebar}
    <hr/>
    {content}
  </div>
  
  );
}


export default App;

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick(){
    this.setState({date : new Date()});
  }

  render(){
    return (
<div>
    <h1> {this.state.date.toLocaleTimeString()}</h1>
</div>

    );
  }
}

class Toggle extends React.Component{
  constructor(props){
super(props);
this.state = {isToggleOn: true};
this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
isToggleOn: !state.isToggleOn
    }));
  }

  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
