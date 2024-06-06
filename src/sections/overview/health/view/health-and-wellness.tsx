"use client";
import React, { useState, useEffect, useRef, DragEvent } from 'react';
import { Grid } from '@mui/material';
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import { registerLicense } from '@syncfusion/ej2-base';
import debounce from 'lodash/debounce';
import DialogBox from 'src/components/dialog/DialogBox';
import axios from 'axios';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF1cWWhPYVJ/WmFZfVpgdVVMYVxbRHVPMyBoS35RckVmW39fcXRSR2ReUEV0');

function HealthWellness() {

  const [data, setdata] = useState();
  const [images, setImages] = useState<{ id: number; imageUrl: string; size: number }[]>([

    { id: 1, imageUrl: '/assets/images/about/vision.jpg', size: 4 },
    { id: 2, imageUrl: '/assets/images/about/vision.jpg', size: 2 },
    { id: 3, imageUrl: '/assets/images/about/vision.jpg', size: 3 },
    { id: 4, imageUrl: '/assets/images/about/vision.jpg', size: 1 },
    { id: 5, imageUrl: '/assets/images/about/vision.jpg', size: 1 },
    { id: 6, imageUrl: '/assets/images/about/vision.jpg', size: 1 },
  ]);
    useEffect(()=>{
     const allImages = async ()=>{
      const res = await axios.get("http://localhost:5000/api/all/image");
      setdata(res.data);

     }
     allImages()

    },[])

  const layoutRef = useRef<DashboardLayoutComponent>(null);
  const [dragging, setDragging] = useState<boolean>(false);

  useEffect(() => {
    const layout = layoutRef.current;
    if (layout && layout.layoutInstance) {
      layout.layoutInstance.dragStart = debounce((args: any) => {
        setDragging(true);
      }, 50);

      layout.layoutInstance.dragStop = debounce((args: any) => {
        setDragging(false);
      }, 50);
    }
  }, []);

  

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter((file: File) => file.type.startsWith('image/'));
    const imageUrls = imageFiles.map((file: File) => ({
      id: Date.now() + Math.random(), // Ensure unique ID
      imageUrl: URL.createObjectURL(file),
      size: 1, // Default size for newly added image
    }));
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDelete = (id: number, size: number) => {
    setImages((prevImages) => {
      const filteredImages = prevImages.filter((image) => image.id !== id);
      // Agar deleted image ka size 4 tha, toh size 4 wale images ko barabar distribute karein
      if (size === 4) {
        const remainingImages = filteredImages.filter((image) => image.size === 1);
        const newSize = 4 / remainingImages.length;
        remainingImages.forEach((image) => {
          image.size = newSize;
        });
      }
      return filteredImages;
    });
  };
  

  const getGrid = () => {
    const rows: { id: number; imageUrl: string; size: number }[][] = [];
    let rowIndex = 0;
    while (rowIndex < images.length) {
      const rowImages = images.slice(rowIndex, rowIndex + 4);
      rows.push(rowImages);
      rowIndex += 4;
    }
    return rows;
  };

  return (
    <>
      <div onDrop={handleDrop} onDragOver={handleDragOver} style={{ overflowY: 'hidden' }}>
        <style>
          {`
            .e-drag-item.e-dragging,
            .e-dashboardlayout.e-drag-over,
            .e-dashboardlayout.e-dragging {
                display: none !important;
            }
            .e-panel.e-dragging {
                background: transparent !important;
                box-shadow: none !important;
            }
            .e-panel-container {
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
                position: relative;
            }
            .icons {
                display: flex;
                justify-content: space-between;
                position: absolute;
                top: 0;
                width: 100%;
                padding: 5px;
                background: #161C24;
            }
            .icons img {
                cursor: pointer;
            }
          `}
        </style>
        <div className={`control-section${dragging ? ' dragging' : ''} marginTop`}>
          <DashboardLayoutComponent
            ref={layoutRef}
            id="defaultLayout"
            allowResizing={false}
            columns={4}
            enableRtl={false}
            enablePersistence={true}
          >
            {getGrid().map((row, rowIndex) => (
              <Grid container spacing={2} key={rowIndex}>
                {row.map((image, columnIndex) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
                    <div
                      className="e-panel box"
                      data-row={rowIndex}
                      data-col={columnIndex}
                      data-sizex={image.size} // Use the size property for layout
                      data-sizey={1}
                    >
                      <div
                        className="e-panel-container margin_bottom"
                        style={{ backgroundImage: `url(${image.imageUrl})` }}
                      >
                        <div className="icons">
                          <div className="left">
                            <img src="/assets/dragIcons/drag.svg" alt="drag icon" width={'15px'} />
                          </div>
                          <div className="right">
                            <img
                              src="/assets/dragIcons/delete.svg"
                              alt="delete icon"
                              width={'20px'}
                              onClick={() => handleDelete(image.id, image.size)}
                            />
                            <img src="/assets/dragIcons/link.svg" alt="link icon" width={'20px'} />
                            <img
                              src="/assets/dragIcons/upload.svg"
                              alt="upload icon"
                              width={'20px'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            ))}
          </DashboardLayoutComponent>
        </div>

        <DialogBox/>
      </div>
    </>
  );
}

export default HealthWellness;