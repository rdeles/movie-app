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
  array: any[]
}

export default class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      actor: '',
      array: [],
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
    fetch(`http://www.omdbapi.com/?apikey=e6baafca&s=${this.state.value}`)
    .then(results => {
      return results.json();
    }).then(data => {
      main.setState({
        array: data.Search,
        response: data.Response
      })
    })
    event.preventDefault();
  }

  public render() {
    return (
      <div className="container-fluid">
        <div className="centreText">
          <p className='desc'>Type in the search bar below to view matching titles of movies/tv series.</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} className='input' placeholder='Search'/>
            </label>
            <input type="submit" value="Search" className='submitButton'/><br/>
            <Link to='/FirstComponent'>Advanced Search</Link>
            <p className='warning'>Note: Incomplete titles will return movies containing the substring in the title. 
            To see more information on a particular movie/tv series, use advanced search.</p> 
          </form>
          <hr className='split'/>
          <div> 
          {
            this.state.response === '' && this.state.value.length > 0 ?
            <div className='loader'>
              <CircularProgress thickness={5} size={50} />
            </div> :
            (this.state.array === [] ?
            <p className='error'>There were no movies in the data that matched your search.</p> :
            <div>
            {
              this.state.array.map(
                (data) => 
                <div key={data.imdbID} className='results-box-1'>
                  <img src={data.Poster}/>
                  <div className='results'>
                    <p><b>Title:</b> {data.Title}<br/>
                    <b>Released in:</b> {data.Year}<br/></p>
                  </div>
                </div>
              )
            }
            </div>)
          }
          </div>
        </div>
      </div>
    )
  }
}

// base project from workshop demo
// some code adapted from:
// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
// https://reactjs.org/docs/forms.html