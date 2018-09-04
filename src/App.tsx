import CircularProgress from '@material-ui/core/CircularProgress';
import * as React from 'react';
import './App.css';
import './css/styles.css';

interface IState {
  value: string,
  title: any,
  year: any,
  genre: any,
  plot: any,
  image: any
}

export default class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      genre: '',
      image: '',
      plot: '',
      title: '',
      value: '',
      year: ''      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(event: any) {
    this.setState({value: event.target.value});
  }

  public handleSubmit(event: any) {
    const main = this
    fetch(`http://www.omdbapi.com/?apikey=e6baafca&t=${this.state.value}`)
    .then(results => {
      return results.json();
    }).then(data => {
      main.setState({
        genre: data.Genre,
        image: data.Poster,
        plot: data.Plot,
        title: data.Title,
        year: data.Released        
      })
    })
    event.preventDefault();
  }

  public render() {
    return (
      <div className="container-fluid">
        <div className="centreText">
          <p>Type in a movie title in the search bar below to view information about the movie.</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} className='input' />
            </label>
            <input type="submit" value="Submit" className='submitButton'/>
          </form>
          <div> 
          {
            this.state.title === "" ? 
            (this.state.value.length !== 0 ?
            <div className='loader'>
              <CircularProgress thickness={3} />
            </div> :
            <br/>) :
            <div className='results-box'>
              <img src={this.state.image}/>
              <div className='results'>
                <p>Title: {this.state.title}<br/>
                Released in: {this.state.year}<br/>
                Genre: {this.state.genre}<br/>
                Plot: {this.state.plot}</p>
              </div>
            </div>
          }
          </div>
        </div>
    </div>
    );
  }
}