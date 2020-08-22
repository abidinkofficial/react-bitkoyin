import React from 'react';
import './App.css';

import Header from './Header'
import Content from './Content'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchState: false,
      searchValue: '',
      data: [],
      searchData: [],
      isLoaded: false,
      renderCount: 10
    }

    this.fetchData = this.fetchData.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.fetchSearch = this.fetchSearch.bind(this);
    this.incrementRenderCount = this.incrementRenderCount.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
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

  handleSearchChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  fetchSearch(event) {
    event.preventDefault();

    this.setState({ isLoaded: false });

    if (this.state.searchValue) {
      let searchString = 'https://api.coincap.io/v2/assets?search=' + this.state.searchValue;

      let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch(searchString, requestOptions)
        .then(response => response.json())
        .then(result => this.setState({
          searchData: result.data
        }))
        .then(result => this.setState({ isLoaded: true, searchState: true }))
        .catch(error => console.log('error', error));
    } else if (!this.state.searchValue) {
      this.setState({searchState: false});
    }
  }

  clearSearch() {
    this.setState({
      searchState: false,
      searchValue: ''
    })
  }

  componentDidMount() {
    this.fetchData();
    setInterval(() => { this.fetchData() }, 1000);
  }


  render() {
    let moreButton = null;
    let clearSearchButton = null;
    if(!this.state.searchState && this.state.renderCount !== 100) {
      moreButton = <button className='more-button' id='more-button' onClick={this.incrementRenderCount}>daha fazla</button>
    }
    if(this.state.searchState) {
      clearSearchButton = <button className='more-button' onClick={this.clearSearch}>geri dön</button>
    }

    return (
      <div className="App">
        <Header handleSearchChange={this.handleSearchChange} fetchSearch={this.fetchSearch} />
        <Content data={this.state.data} isLoaded={this.state.isLoaded} renderCount={this.state.renderCount} searchState={this.state.searchState} searchData={this.state.searchData} />
        {moreButton}
        {clearSearchButton}
      </div>
    );
  }
}

export default App;
