import CircularProgress from '@material-ui/core/CircularProgress';
import * as React from 'react';
import { Link } from 'react-router-dom';
import 'typeface-roboto';
import './App.css';
import './css/styles.css';


interface IState {
  actor: any,
  value: string,
  title: any,
  year: any,
  genre: any,
  plot: any,
  image: any,
  response: any,
  director: any,
}

export default class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      actor: '',
      director: '',
      genre: '',
      image: '',
      plot: '',
      response: '',
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
        actor: data.Actors,
        director: data.Director,
        genre: data.Genre,
        image: data.Poster,
        plot: data.Plot,
        response: data.Response,
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
          <p className='desc'>Type in a movie title in the search bar below to view information about the movie.</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} className='input' />
            </label>
            <input type="submit" value="Submit" className='submitButton'/><br/>
            <Link to='/FirstComponent'>Advanced Search</Link>
            <p className='warning'>Note: movies with the same title will yield only one of the movies, for a specific movie,
            you may wish to use the advanced search.</p>
          </form>
          <div> 
          {
            this.state.title === "" ? 
            (this.state.value.length > 0 ?
            <div className='loader'>
              <CircularProgress thickness={3} />
            </div> :
            <br/>) :
            (this.state.response === "True" ?
            <div className='results-box'>
              <img src={this.state.image}/>
              <div className='results'>
                <p><b>Title:</b> {this.state.title}<br/>
                <b>Released in:</b> {this.state.year}<br/>
                <b>Genre:</b> {this.state.genre}<br/>
                <b>Directed by:</b> {this.state.director}<br/>
                <b>Starring:</b> {this.state.actor}<br/>
                <b>Plot:</b> {this.state.plot}</p>
              </div>
            </div> :
            <p className='error'>There were no movies in the data that matched your search.</p>)
          }
          </div>
        </div>
      </div>
    )
  }
}