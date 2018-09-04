import CircularProgress from '@material-ui/core/CircularProgress';
import * as React from "react";

interface IState {
        titleValue: string,
        yearValue: string,
        title: any,
        year: any,
        genre: any,
        plot: any,
        image: any
      }

export default class FirstComponent extends React.Component<{}, IState> {
        constructor(props: any) {
        super(props);
        
        this.state = {
                genre: '',
                image: '',
                plot: '',
                title: '',
                titleValue: '',
                year: '',
                yearValue: ''      
        };
            
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
        
        public handleChange1(event: any) {
        this.setState({titleValue: event.target.value});
        }

        public handleChange2(event: any) {
        this.setState({yearValue: event.target.value});
        }
            
        public handleSubmit(event: any) {
        const main = this
        fetch(`http://www.omdbapi.com/?apikey=e6baafca&t=${this.state.titleValue}&y=${this.state.yearValue}`)
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
              <input type="text" value={this.state.titleValue} onChange={this.handleChange1} className='input' />
            </label>
            <label>
              <input type="text" value={this.state.yearValue} onChange={this.handleChange2} className='input' />
            </label>
            <input type="submit" value="Submit" className='submitButton'/>
          </form>
          <div> 
          {
            this.state.title === "" ? 
            (this.state.titleValue.length !== 0 ?
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