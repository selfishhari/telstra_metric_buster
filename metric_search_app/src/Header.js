import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AccordianTable from './accordian_table';
import telstra_logo from './Telstra_logo.svg';

import DisableFieldEditable from './DisableFieldEditable.js'

import Box from '@material-ui/core/Box';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold"
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
  
  logo: {
    maxWidth: 160,
    maxHeight: 40,
  },
  
  toolbar: {

    alignItems: 'center',
    justify: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  
  titlebar: {
  fontWeight:"bold",
 	display: "flex"
  },
  
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1',
  },
  
  tab_styles: {
  
  fontWeight:"bold"
  }
});


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  //console.log(value, index)

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}






function Header(props) {

  const { classes, onDrawerToggle } = props;
  
  const [value, setValue] = React.useState(0);
  
  const [data, setDataValue] = React.useState([]);
  
  const handleChange = (event, newValue) => {
	  

    setValue(newValue);
  };
  
  const handleChangeIndex = index => {
	  
	  
    setValue(index);
	
  };
  

const fetchSearch = () => {



var data = [

        { reportName: 'report1_v1.xlsx', owner: 'Virat Kohli', 'fileUrl': '/'},

        { reportName: 'report2_v1.xlsx', owner: 'Gilchrist', 'fileUrl': '/'},
		
		{ reportName: 'report3_v1.xlsx', owner: 'Brett Lee', 'fileUrl': '/'},
		{ reportName: 'report4_v1.xlsx', owner: 'Damien Martin', 'fileUrl': '/'},
		{ reportName: 'report5_v1.xlsx', owner: 'Andrew Symonds', 'fileUrl': '/'},
		

      ]
      
setDataValue(data)

}
  

  


  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0} styles={{justify: 'center'}}>
      
      <Grid container justify="center">
      
      
      	<Grid item xs = {12 } justify="center" className={classes.titlebar}>
        <Toolbar className={classes.toolbar}>
   
						<img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Telstra_logo.svg" alt="logo" className={classes.logo} />
					
						<Typography variant="h4" edge="start" className={classes.title} >
			      	Telstra Metric Search
			    	</Typography>
							           

        </Toolbar>
        
        
        </Grid>
        
      
       </Grid>
      
        <Tabs value={value} textColor="inherit" onChange={handleChange}>
        
					 <Tab textColor="inherit" label="Metric Search" {...a11yProps(0)} className={classes.tab_styles}/>
					 
					 <Tab textColor="inherit" label="Users List"  {...a11yProps(1)} className={classes.tab_styles}/>
					 
					 <Tab textColor="inherit" label="Owners List" {...a11yProps(2)} className={classes.tab_styles}/>
				      
        </Tabs>
        
    </AppBar>
      <AppBar
      
        component="div"
        
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
		
		<TabPanel value={value} index={0} className={classes.main}>
			<AccordianTable updateData={fetchSearch} table_data={data}/>
		</TabPanel>
		<TabPanel value={value} index={1} className={classes.main}>
			<DisableFieldEditable individual="Users"/>
		</TabPanel>
		<TabPanel value={value} index={2} className={classes.main}>
		  <DisableFieldEditable individual="Owners"/>
		</TabPanel>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
