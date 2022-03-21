import React from 'react';

import './App.css';
import Appbar  from './Appbar';
import Mail from './Mail.js';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import { Container } from '@material-ui/core';
// import CssBaseline from '@mui/material/CssBaseline';


function App() {
  return (
    <>
  <Appbar />
  <Mail />
  
  </>
  );
}
export default App;


//     <Stack spacing={2} direction="row">
//       <Button variant="text">Text</Button>
//       <Button variant="contained">Contained</Button>
//       <Button variant="outlined">Outlined</Button>
//     </Stack>
    
//     <Stack direction="row" spacing={2}>
//       <Button>Primary</Button>
//       <Button disabled>Disabled</Button>
//       <Button href="#text-buttons">Link</Button>
//     </Stack>

//     <Stack direction="row" spacing={2}>
//       <Button variant="contained">Contained</Button>
//       <Button variant="contained" disabled>
//         Disabled
//       </Button>
//       <Button variant="contained" href="#contained-buttons">
//         Link
//       </Button>
//     </Stack>

//     <Stack direction="row" spacing={2}>
//       <Button color="secondary">Secondary</Button>
//       <Button variant="contained" color="success">
//         Success
//       </Button>
//       <Button variant="outlined" color="error">
//         Error
//       </Button>
//     </Stack>

//     <Box sx={{ '& button': { m: 1 } }}>
//       <div>
//         <Button size="small">Small</Button>
//         <Button size="medium">Medium</Button>
//         <Button size="large">Large</Button>
//       </div>
//       <div>
//         <Button variant="outlined" size="small">
//           Small
//         </Button>
//         <Button variant="outlined" size="medium">
//           Medium
//         </Button>
//         <Button variant="outlined" size="large">
//           Large
//         </Button>
//       </div>
//       <div>
//         <Button variant="contained" size="small">
//           Small
//         </Button>
//         <Button variant="contained" size="medium">
//           Medium
//         </Button>
//         <Button variant="contained" size="large">
//           Large
//         </Button>
//       </div>
//     </Box>

//     <Box
//       sx={{
//         width: 300,
//         height: 300,
//         backgroundColor: 'primary.dark',
//         '&:hover': {
//           backgroundColor: 'primary.main',
//           opacity: [0.9, 0.8, 0.7],
//         },
//       }}
//     />
//      <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
//       </Container>
//     </React.Fragment>
    
  

    
//     </div>   
//   );
// }

// export default App;
