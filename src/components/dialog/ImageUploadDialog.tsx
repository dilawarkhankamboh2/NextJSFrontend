'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function DialogBox() {
  const [open, setOpen] = React.useState(false);
  const [activeBox, setActiveBox] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBoxClick = (boxName) => {
    setActiveBox(boxName);
  };

  const handleClick = ()=>{
    
  }

  const isNextButtonDisabled = activeBox === null; // Check if no box is active

  // Define CSS classes for button
  const NextButton = styled('button')({
    background: '#21B888',
    color: 'white',
    padding: '10px 6rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    '&:disabled': {
      background: '#cccccc',
      cursor: 'not-allowed',
    },
  });

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <Image
          src={'/assets/dialog/upload.svg'}
          alt="upload image"
          width={300}
          height={200}
          className="upload_image"
        />
      </Button>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Baray mein chhota chayan karen
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div className="flexbox">
              <div>
                <h4>Small (1x1)</h4>
                <Image
                  onClick={() => handleBoxClick('small')}
                  className={`box ${activeBox === 'small' ? 'activeBox' : ''}`}
                  src={'/assets/dialog/box/small.png'}
                  alt="upload image"
                  width={400}
                  height={230}
                />
              </div>

              <div>
                <h4>Large (2x2)</h4>
                <Image
                  onClick={() => handleBoxClick('large')}
                  className={`box ${activeBox === 'large' ? 'activeBox' : ''}`}
                  src={'/assets/dialog/box/large.png'}
                  alt="upload image"
                  width={400}
                  height={230}
                />
              </div>

              <div>
                <h4>Full Width (4x1)</h4>
                <Image
                  onClick={() => handleBoxClick('fullWidth')}
                  className={`box ${activeBox === 'fullWidth' ? 'activeBox' : ''}`}
                  src={'/assets/dialog/box/full-width.png'}
                  alt="upload image"
                  width={400}
                  height={230}
                />
              </div>
            </div>
            <NextButton className="NextButton" disabled={isNextButtonDisabled} onClick={handleClick}>
              Next
            </NextButton>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
