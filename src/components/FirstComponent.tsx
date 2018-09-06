import CircularProgress from '@material-ui/core/CircularProgress';
import * as React from "react";

interface IState {
        actor: any,
        director: any,
        titleValue: string,
        yearValue: string,
        title: any,
        year: any,
        genre: any,
        plot: any,
        image: any,
        response: any
}

export default class FirstComponent extends React.Component<{}, IState> {
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
                        titleValue: '',
                        year: '',
                        yearValue: ''
                };

                this.handleChange1 = this.handleChange1.bind(this);
                this.handleChange2 = this.handleChange2.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
        }

        public handleChange1(event: any) {
                this.setState({ titleValue: event.target.value });
        }

        public handleChange2(event: any) {
                this.setState({ yearValue: event.target.value });
        }

        public handleSubmit(event: any) {
                const main = this
                fetch(`http://www.omdbapi.com/?apikey=e6baafca&t=${this.state.titleValue}&y=${this.state.yearValue}`)
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
                                        <p className='desc'>Type in a movie title and it's year of release in the search bar below to view information about the movie.</p>
                                        <form onSubmit={this.handleSubmit}>
                                                <label>
                                                        <input type="text" value={this.state.titleValue} onChange={this.handleChange1} className='input' placeholder='Search title'/>
                                                </label>
                                                <label>
                                                        <input type="text" value={this.state.yearValue} onChange={this.handleChange2} className='input' placeholder='Search year'/>
                                                </label>
                                                <input type="submit" value="Search" className='submitButton' />
                                                <p className='warning-2'>Note: Putting no title and putting in a year will yield only one movie released in that year.</p>
                                        </form>
                                        <hr className='split'/>
                                        <div>
                                                {
                                                        this.state.title === "" ?
                                                                (this.state.titleValue.length > 0 || this.state.yearValue.length > 0 ?
                                                                        <div className='loader'>
                                                                                <CircularProgress thickness={5} size={50} />
                                                                        </div> :
                                                                        <br />) :
                                                                (this.state.response === "True" ?
                                                                        <div className='results-box'>
                                                                                <img src={this.state.image} />
                                                                                <div className='results'>
                                                                                        <p><b>Title:</b> {this.state.title}<br/>
                                                                                        <b>Released in:</b> {this.state.year}<br/>
                                                                                        <b>Genre:</b> {this.state.genre}<br/>
                                                                                        <b>Directed by:</b> {this.state.director}<br/>
                                                                                        <b>Starring:</b> {this.state.actor}<br/><br/>
                                                                                        <b>Plot:</b> {this.state.plot}</p>
                                                                                </div>
                                                                        </div> :
                                                                        <p className='error'>There were no movies in the data that matched your search.</p>)
                                                }
                                        </div>
                                </div>
                        </div>
                );
        }
}