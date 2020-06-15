import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import search_logo from './search.svg';
import RefreshIcon from '@material-ui/icons/Refresh';
import ExpandableTable from './expandable_table';


const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
    display: 'flex',
    margin: '1% 0% 1% 0%',
    border: theme.palette.primary.main
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
  
  logo: {
  height: '25px'
  }
});


//

function AccordianTable(props) {

  const { classes } = props;
  

  
  var data = props.table_data;

  return (
    <Paper className={classes.paper}>
    
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
      
        <Toolbar>
        
          <Grid container spacing={2} alignItems="center">
          
            <Grid item>

              <img src={search_logo} alt="logo" className={classes.logo} />
            </Grid>
            
            <Grid item xs>
            
              <TextField
                fullWidth
                placeholder="Search metric name"
                InputProps={{
                  disableUnderline: false,
                  className: classes.searchInput,
                }}
                
                
                variant = "outlined"
                
              />
              
            </Grid>
            
            <Grid item>
            
              <Button variant="contained" color="primary" className={classes.addUser} onClick={() => props.updateData()}>
                Search Metric
              </Button>
			  
						</Grid>
            
          </Grid>
          
        </Toolbar>
        
      </AppBar>
      

      <div className={classes.contentWrapper}>
        <ExpandableTable table_data={data}/>
      </div>
      
    </Paper>
  );
}

AccordianTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccordianTable);
