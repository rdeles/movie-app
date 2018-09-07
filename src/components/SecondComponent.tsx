import * as React from "react";
import { Link } from 'react-router-dom';

export default class SecondComponent extends React.Component <{}> {
        
        public render() {
                return (
                        <div className="centreText">
                            <h2>ABOUT THIS SITE</h2>
                            <p className='about'>
                                This allows you to search for movies and tv series in the database.
                                The normal search returns the full titles and years of release for movies or tv series that contain or match your search term.
                                If there are more than 10 that match your search, this will only return the 10 most relevant matches.
                                <br/><br/>
                                Advanced search allows you to search for a particular movie released in a particular year.
                                This will return only one movie which matches the search with more information (title, release date, genre, director/s, actors, and plot)
                                than provided by normal search.
                            </p>
                            <hr/>
                            <h2>TIPS FOR SEARCHING</h2>
                            <p className='about'>
                                Use the normal search to see what movie/tv series you are looking for and note the year of release then enter the title and year
                                in the advanced search to bring up information about a particular movie/tv series.
                                <br/><br/>
                                When using the normal search, make the search terms as long as possible to return only the relevant results.
                                <br/><br/>
                                <Link to='/Help'>Click here for more help.</Link>
                            </p>
                            <hr/>
                        </div>
                );
        }

        
}