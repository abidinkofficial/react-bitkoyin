import React from 'react';
import './App.css';

import Header from './Header'
import Content from './Content'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoaded: false,
      renderCount: 10
    }

    this.fetchData = this.fetchData.bind(this);
    this.incrementRenderCount = this.incrementRenderCount.bind(this);
  }

  incrementRenderCount() {
    if (this.state.renderCount === 10) {
      this.setState((state) => ({
        renderCount: state.renderCount + 90
      }));
      document.getElementById('more-button').style.display = 'none';
    }
  }


fetchData() {
  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch('https://api.coincap.io/v2/assets', requestOptions)
    .then(response => response.json())
    .then(result => this.setState({
      data: result.data
    }))
    .then(result => this.setState({ isLoaded: true }))
    .catch(error => console.log('error', error));
}

componentDidMount() {
  this.fetchData();
  setInterval(() => { this.fetchData() }, 1000);
}


render() {
  return (
    <div className="App">
      <Header />
      <Content data={this.state.data} isLoaded={this.state.isLoaded} renderCount={this.state.renderCount} />
      <button className='more-button' id='more-button' onClick={this.incrementRenderCount}>daha fazla</button>
    </div>
  );
}
}

export default App;
