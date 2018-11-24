import React, {Component, createElement} from 'react';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import {createMuiTheme} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {Menu, Home, Subject, Favorite, Settings, WatchLater, AvTimer, DirectionsRun,AlarmOn,Assignment} from '@material-ui/icons';

export default class Activities extends Component {
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
        let modalOpen=true;

        return (
            <div>
                <Grid>
                    <DirectionsRun style={{fontSize: '75px', marginTop: '5%', marginBottom: '5%', marginLeft: '7%', marginRight: '7%'}} />
                    <Assignment style={{fontSize: '75px', marginTop: '5%', marginBottom: '5%', marginLeft: '7%', marginRight: '7%'}}/>
                    <AlarmOn style={{fontSize: '75px', marginTop: '5%', marginBottom: '5%', marginLeft: '7%', marginRight: '7%'}}/>
                    <Favorite style={{fontSize: '75px', marginTop: '5%', marginBottom: '5%', marginLeft: '7%', marginRight: '7%'}}/>
                </Grid>

                <Modal open={modalOpen}>
                    <Card style={{height: '60%', fontSize: '120px', marginTop: '10%', marginBottom: '10%', marginLeft: '25%', marginRight: '25%'}} raised={true}>
                             Test
                    </Card>
                     {/* <button>Click to close</button> */}
                 </Modal>
            </div>
            

            // <Card style={{fontSize: '120px', marginTop: '10%', marginBottom: '10%', marginLeft: '25%', marginRight: '25%'}} raised={true}>
            //     <List>
            //             {this.listItem(Home, 'Exercise')}
            //             {this.listItem(Storage, 'Health')}
            //             {this.listItem(Subject, 'Mood')}
            //             {this.listItem(Settings, 'Tasks')}
            //             {this.listItem(AvTimer, 'Music')}
            //     </List>
            // </Card>    
        );
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
}

