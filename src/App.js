import './App.css';
import React from 'react';

class App extends React.Component  {
  state = {vrijednost: "" };

promjenaTeksta = event => {
  console.log("event vrijednost: " + event.target.value);
  this.setState({vrijednost: event.target.value })
}

pohranaForme = event => {
  event.preventDefault();
  const {vrijednost} = this.state;

  alert("U state je vrijednost: " + vrijednost);

  this.setState({ vrijednost: ""});

};
  render(){
    const {vrijednost} = this.state;
  return (
    <form onSubmit={this.pohranaForme}>
      <label>Ime:</label>
      <input type='text'onChange={this.promjenaTeksta} value={vrijednost}></input>
      <input type='submit' value="unesi"></input>
    </form>
  );
}
}
export default App;
