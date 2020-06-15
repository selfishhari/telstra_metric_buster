import React from 'react';
import MaterialTable from 'material-table';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import './font_icons.css';


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
});


class DisableFieldEditable extends React.Component {
  constructor(props) {
    super(props);
    
    if (this.props.individual=="Users"){
		  var data = [
		      { reportName: 'Report1_v1.xlsx', owner: 'Gilly' },
		      { reportName: 'Report1_v1.xlsx', owner: 'Sehwag' },
		      { reportName: 'Report1_v1.xlsx', owner: 'Sachin' },
		      { reportName: 'Report2_v1.xlsx', owner: 'Amit Shah' },
		      { reportName: 'Report2_v1.xlsx', owner: 'Gilly' },
		      { reportName: 'Report3_v1.xlsx', owner: 'ABCD' },
		      { reportName: 'Report3_v1.xlsx', owner: 'sksks' },
		      { reportName: 'Report3_v1.xlsx', owner: 'Sachin' },
		    
		    ]
    
    }else{
    	var data = [
        { reportName: 'Report1_v1.xlsx', owner: 'Gilly' },
        { reportName: 'Report2_v1.xlsx', owner: 'Sachin' },
        { reportName: 'Report3_v1.xlsx', owner: 'Gilly' },
        { reportName: 'Report4_v1.xlsx', owner: 'Amit Shah' },
        { reportName: 'Report5_v1.xlsx', owner: 'Some User' },
        { reportName: 'Report6_v1.xlsx', owner: 'ABCD' },
        { reportName: 'Report7_v1.xlsx', owner: 'sksks' },
        { reportName: 'Report8_v1.xlsx', owner: 'Sachin' },
      
      ]
    
    }
    this.state = {
    
    	columns:[

        { title: 'Report Name', field: 'reportName',editable: 'onAdd', 
					},

        { title: this.props.individual, field: 'owner', editable: 'always'
					}

      ],
      
      data: data
      
      
    }
  }

  render() {
  
  const { classes } = this.props;
  
    return (
    
    <Paper className={classes.paper}>
      <MaterialTable
      
      	options={{
          headerStyle: {
            backgroundColor: '#130f40',
            color: '#FFF',
            fontWeight:"bold"
          }
          }
          }
        title=""
        columns={this.state.columns}
        data={this.state.data}
        
        
        
      />
      
  </Paper>
    )
  }
}
export default withStyles(styles) (DisableFieldEditable);
