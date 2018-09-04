import * as React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import App from './App'
import AdvancedSearchComponent from './components/AdvancedSearchComponent';
import FirstComponent from './components/FirstComponent';
import { Header } from './components/Header';
import './css/styles.css';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <BrowserRouter>
            <div>
                <Header />
                <main>
                    <Route exact={true} path="/" component={App} />
                    <Route path="/AdvancedSearchComponent" component={AdvancedSearchComponent} />
                    <Route path="/FirstComponent" component={FirstComponent} />
                    <Redirect from='*' to='/' />
                </main>
            </div>
        </BrowserRouter>

    );
}