import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";


export default function ButtonAppBar() {
   
    
  return (
      
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings" >
              <IconButton sx={{ p: 1 }}>
                <Avatar alt="Remy Sharp"  sx={{ width: 60, height: 40 }} src="data:image/jpeg;base64,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" />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            STL LOGIN CREDENTIALS
          </Typography>
          <IconButton sx={{ p: 1 }}>
          <Button
           onClick={show}
            variant="contained"
            style={{backgroundColor:"violet"}} >FAQ !
            
          </Button>
          
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
const show = () => {
    
        alert("Frequently Asked Questions !");
      
  };