"use client";
import React, { useState, useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
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

const DialogContentWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export default function DialogBox() {
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [activeBox, setActiveBox] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
  const [isNextButtonActive, setIsNextButtonActive] = useState(false);
  const [image , setImage] = useState()


  const handleFirstClickOpen = () => setOpenFirst(true);
  const handleFirstClose = () => setOpenFirst(false)
  const handleSecondClickOpen = () => setOpenSecond(true)
  const handleSecondClose = () => setOpenSecond(false);
  const handleBoxClick = (boxName: string) => setActiveBox(boxName);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleUploadClick = () => fileInputRef.current?.click()


  const handleFileInputChange = async() => {
    const files = fileInputRef.current?.files;

    if (files && files.length > 0) {

      setIsNextButtonActive(true);
    } else {
      setSelectedFiles([]);
      setIsNextButtonActive(false);
    }
  };

  const handleNextClick = () => {
    handleSecondClose();
    handleFirstClickOpen();
  };

  const handleDilawarButtonClick = () => {
    const newData = selectedFiles.map((file) => ({
      id: generateUniqueId(),
      imageUrl: file.url, // Store image URL
      size: 1 // Store size name
    }));

    // Close the first dialog
    handleFirstClose();
  };

  const isNextButtonDisabled = activeBox === null;

  // Unique ID banane ke liye function
  const generateUniqueId = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  return (
    <>
      <div className="upload_image" onClick={handleSecondClickOpen}>
        <Image src={'/assets/dialog/upload.svg'} alt="upload image" width={70} height={70} />
      </div>

      <BootstrapDialog
        onClose={handleSecondClose}
        aria-labelledby="customized-dialog-title"
        open={openSecond}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Please choose a size
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleSecondClose}
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
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <NextButton
                className="NextButton"
                disabled={isNextButtonDisabled}
                onClick={handleNextClick}
              >
                Next
              </NextButton>
            </div>
          </Typography>
        </DialogContent>
      </BootstrapDialog>

      <BootstrapDialog
        onClose={handleFirstClose}
        aria-labelledby="customized-dialog-title"
        open={openFirst}
        PaperProps={{
          style: {
            maxWidth: '500px',
            width: '80%',
            height: 'auto',
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Please choose a cover image
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleFirstClose}
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
          <DialogContentWrapper>
            <div onClick={handleUploadClick} style={{ cursor: 'pointer', textAlign: 'center' }}>
              <Image src={'/assets/upload.svg'} alt="upload image" width={200} height={100} />
              <form>
              <input
                type="file"
                ref={fileInputRef}
                name='photo'
                style={{ display: 'none' }}
                onChange={handleFileInputChange}
              />
              </form>
              <p className="uploadImageText" style={{ marginTop: '10px' }}>
                Upload an image
              </p>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <NextButton
                className="NextButton"
                disabled={!isNextButtonActive}
                onClick={handleDilawarButtonClick}
              >
                Upload
              </NextButton>
            </div>
          </DialogContentWrapper>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
