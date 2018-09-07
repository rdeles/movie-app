import * as React from "react";
import 'src/css/header-style.css';
import img from 'src/error-2.png';
import 'typeface-roboto';

export default class Help extends React.Component <{}> {
        
        public render() {
                return (
                        <div className="centreText">
                            <h2>HELP</h2>
                            <div className='help-box'>
                                <img id='error-img' src={img}/>
                                <div className='help'>
                                <p>
                                    If you have pressed the enter key or the search button and:<br/><br/>
                                    <ul>
                                        <li>neither images nor the warning 'There were no movies in the data that matched your search.' appear and</li>
                                        <li>the loader persists,</li>
                                    </ul>
                                    your browser may be blocking the content. Make sure that you allow your browser to load the scripts, as seen in the image on the left.
                                    <br/><br/>
                                </p>
                                </div>
                            </div>
                            <hr/>
                        </div>
                );
        }

        
}