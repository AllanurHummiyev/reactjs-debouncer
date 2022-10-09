//import logo from './logo.svg';
//import "./App.css";
import { Component } from "react";
import { debounce } from "lodash";

class WidgetText extends Component {
  state = { text: "" };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <textarea value={this.state.text} />
      </div>
    );
  }
}

class App extends Component {
  state = { show: true };
  handleToggle = debounce(() => {
    this.setState((prevState) => ({ show: !prevState.show }));
  }, 500);
  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>Toggle</button>
        {this.state.show ? <WidgetText /> : null}
      </div>
    );
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
