import {AppBar, Toolbar, Typography} from '@material-ui/core/';
// import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
// import { Nav, Navbar, NavItem } from 'react-bootstrap';
// import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
    return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="display2" color="inherit">
                        <Link style={{color: "white"}} to="/">This Random Movie Thing</Link>
                    </Typography>
                    <Typography color="primary">space</Typography>
                    <Typography variant="display1" color="inherit">
                        <Link to="/FirstComponent"> Advanced Search </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}

/*export const Header: React.StatelessComponent<{}> = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">This Random Movie Thing</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <IndexLinkContainer to="/FirstComponent">
                    <NavItem>Advanced Search</NavItem>
                </IndexLinkContainer>
            </Nav>
        </Navbar>
    );
}*/