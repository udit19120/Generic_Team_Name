import React from 'react';
import '../../App.css';
import ACards from '../ACards';
import Footer from '../Footer';
import Fab from '@mui/material/Fab';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import RecommendIcon from '@mui/icons-material/Recommend';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import UploadItem from '../UploadItem';
import ResultCard from '../ResultCard';


export default function AccesoriesTryOn() {
  const [open, setOpen] = React.useState(false);
  const [ropen, setResult] = React.useState(false);

  const handleUpload = () => {
    setOpen(true);
  
  };

  const handleClose = () => {
    setOpen(false);
  
  };
  const handleResultUpload = () => {
    setResult(true);
  
  };

  const handleResultClose = () => {
    setResult(false);
  
  };
 
  return (
    <>
      
      <ACards />
      <Fab variant="extended" style={{position:'fixed', bottom:'10px', right:'10px', padding:'20px', background:'linear-gradient(90deg, rgb(228, 7, 99) 0%, rgb(248, 122, 3) 100%)'}} onClick={handleUpload}>
        <UploadFileIcon sx={{ mr: 1 }} />
          Upload Image
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload Image</DialogTitle>
        <DialogContent>
          
          <UploadItem/>
            

          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>


      <Fab variant="extended" style={{position:'fixed', bottom:'100px', right:'10px', padding:'20px', background:'linear-gradient(90deg, rgb(228, 7, 99) 0%, rgb(248, 122, 3) 100%)'}} onClick={handleResultUpload}>
        <RecommendIcon sx={{ mr: 1 }} />
          Results
      </Fab>
      <Dialog open={ropen} onClose={handleResultClose} maxWidth>
        <DialogTitle>Results </DialogTitle>
        <DialogContent>
        
          <ResultCard/>
            

          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleResultClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      
     
      <Footer />
    </>
  );
}
