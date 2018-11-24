import React, {Component, createElement} from 'react';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import {createMuiTheme} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {Menu, Home, Subject, Storage, Settings, WatchLater} from '@material-ui/icons';

const drawerWidth = 240;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section: 'Home',
            open: true,
            color: green,
            theme: 'dark',
        };
    }

    render() {
        const {classes} = this.props;
        console.log(classes);
        const {open} = this.state;
        const theme = createMuiTheme({typography: {useNextVariants: true}, palette: {primary: this.state.color, type: this.state.theme}});
        return (
            <MuiThemeProvider theme={theme}>
                <Drawer variant="persistent" style={{width: drawerWidth}} open={open}
                        anchor="left" PaperProps={{style: {width: drawerWidth}}}>
                    <WatchLater color='primary' style={{width: '100%', fontSize: '120px', marginTop: '10px', marginBottom: '10px'}}/>
                    <Divider/>
                    <List>
                        {this.listItem(Home, 'Home')}
                        {this.listItem(Storage, 'Categories')}
                        {this.listItem(Subject, 'History')}
                        {this.listItem(Settings, 'Settings')}
                    </List>
                </Drawer>
                <AppBar
                    position="fixed"
                    style={{width: open ? `calc(100% - ${drawerWidth}px)` : '100%', marginLeft: open ? drawerWidth : 0,
                        transition: theme.transitions.create(['margin', 'width'], open
                            ? {easing: theme.transitions.easing.easeOut, duration: theme.transitions.duration.enteringScreen}
                            : {easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen}
                        ),
                    }}
                >
                    <Toolbar disableGutters>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={() => this.toggleDrawer()}
                            style={{marginLeft: 12, marginRight: 20}}
                        >
                            <Menu/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Hack Western 5
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div style={{display: 'flex', marginTop: '64px', flex: 1, marginLeft: open ? 0 : -drawerWidth,
                    transition: theme.transitions.create('margin', open
                        ? {easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen}
                        : {easing: theme.transitions.easing.easeOut, duration: theme.transitions.duration.enteringScreen}
                    ),
                    backgroundColor: theme.palette.background.paper
                }}>
                    {App.getContent()}
                </div>
            </MuiThemeProvider>
        );
    }

    toggleDrawer() {
        this.setState({open: !this.state.open});
    }

    listItem(icon, text) {
        let {color, theme} = this.state;
        let selected = this.state.section === text;
        return (
            <ListItem button selected={selected} onClick={() => this.setState({section: text})}
                      style={{backgroundColor: selected ? color['500'] : undefined }}>
                {createElement(icon, {nativeColor: (selected || theme === 'dark') ? 'white' : 'black'})}
                <ListItemText primary={<div style={{color: selected ? 'white' : ''}}>{text}</div>}/>
            </ListItem>
        );
    }

    static getContent() {
        return (
            <div style={{overflow: 'auto', flex: 1}}>
            </div>
        );
    }
}
