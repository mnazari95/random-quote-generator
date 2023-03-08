import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      author: ""
    };

    this.fetchQuote = this.fetchQuote.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
  }
  
  async fetchQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      this.setState({
        quote: data.content,
        author: data.author
      });
    } else {
      console.log("error with fetching quote")
    }
  }
  
  render() {
    return (
      <div id="quote-box">
        <div>
          <div id="text">
            {this.state.quote}
          </div>
          <div id="author">
            - {this.state.author}
          </div>
        </div>
        <div id="btn-wrapper">
          <a id="tweet-quote" class="btn btn-primary" href="twitter.com/intent/tweet" target="_top">tweet quote</a>
        <button id="new-quote" class="btn btn-primary" onClick={this.fetchQuote}>New quote</button>
        </div>
      </div>
    );
  }
  
}

export default App;
