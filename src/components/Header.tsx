import {AppBar, Button, Drawer, Toolbar, Typography} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import { Link } from 'react-router-dom';
import 'src/css/header-style.css';
import img2 from 'src/logo.png';
import img from 'src/title.png';

export class Header extends React.Component <{}, {left: boolean}> {
    constructor(props: any) {
        super(props);
        this.state = {
            left: false
        }
    }

    public toggleDrawer = (open: any) => () => {
        this.setState({
            left: open
          })
    }

    public render(){
        return (
            <AppBar position="static">
                <Toolbar>
                    <Button onClick={this.toggleDrawer(true)} >
                        <MenuIcon aria-haspopup="true"/>
                    </Button>
                    <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
                        <div className='drawer-list' tabIndex={0} role="button" onClick={this.toggleDrawer(false)}>
                            <div className='side-img'>
                                <img src={img2} />
                            </div>
                            <br/>
                            <hr/>                            
                            <Typography variant="headline">
                                <Link to="/"> Home </Link>
                            </Typography>
                            <hr/>
                            <Typography variant="headline">
                                <Link to="/FirstComponent"> Advanced Search </Link>
                            </Typography>
                            <hr/>
                            <Typography variant="headline">
                                <Link to="/SecondComponent"> About </Link>
                            </Typography>
                            <hr/>
                        </div>
                    </Drawer>
                    <Typography variant="display2" color="inherit">
                        <Link style={{color: "white"}} to="/"><img className='top-img' src={img}/></Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
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
}

<Typography color="primary">space</Typography>
                    <Typography variant="display1" color="inherit">
                        <Link to="/FirstComponent"> Advanced Search </Link>
                    </Typography>*/