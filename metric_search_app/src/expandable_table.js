import React from 'react';
import MaterialTable from 'material-table';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import './font_icons.css';

const styles = theme => ({
  rowStyleParent: {
    display:"flex",

  },
  
  rowStyleLink:{
  color:"blue",
  
  marginLeft:"8px",
  
  textDecorationLine:"underline",

  cursor:"pointer"
  }
 })

function ExpandableTable(props) {

  const { classes } = props;
  
	const handleLinkClick = (rowData	) => {
	  
	  
		window.location.assign(String(rowData.fileUrl))
	
  }


  return (

    <MaterialTable

      columns={[

        { title: 'Report Name', field: 'reportName', headerStyle: {
					  fontWeight: 'bold'					  
					  
					},
					
					render: rowData => <div className={classes.rowStyleParent}> {rowData.reportName} 
																<div className={classes.rowStyleLink} onClick={() => handleLinkClick(rowData)}>Link</div> 
															</div>
					

						 },

        { title: 'Owner Name', field: 'owner', headerStyle: {
					  fontWeight: 'bold',
					  
					} },

      ]}
      


      data={props.table_data}

      
      options={{
          headerStyle: {
            backgroundColor: '#130f40',
            color: '#FFF'
          }
          }
          }
          
      

      title= {props.table_data.length.toString().concat(" Matching Results")}



      

    />

  )

}

export default  withStyles(styles)(ExpandableTable);
