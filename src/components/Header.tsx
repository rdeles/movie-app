import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">This Random Movie Thing</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
            <IndexLinkContainer to="/AdvancedSearchComponent">
                    <NavItem>Advanced Search</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer to="/FirstComponent">
                    <NavItem>Extra Information</NavItem>
                </IndexLinkContainer>
            </Nav>
        </Navbar>
    );
}