import React, {useState} from "react";
import {Box, Grid, Modal, IconButton} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ImageGallery = ({images, images2}) => {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpen = index => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleNext = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <Box>
      <Grid container spacing={4}>
        {images.slice(0, 7).map((image, index) => (
          <Grid
            item
            xs={6}
            md={3}
            lg={3}
            key={index}
            className="w-[383px] h-[320px]">
            <img
              src={image.src}
              alt={`Gallery ${index}`}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                cursor: "pointer",
                objectFit: "cover",
              }}
              onClick={() => handleOpen(index)}
            />
          </Grid>
        ))}
        {images.length > 6 && (
          <Grid item xs={6} md={3}>
            <div
              className="relative bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `url(${images[7].src})`,
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                cursor: "pointer",
                borderRadius: "0.5rem",
                height: "100%",
              }}
              onClick={() => handleOpen(0)}>
              <div className="absolute inset-0 bg-[#000000b8] bg-opacity-85 rounded-lg"></div>
              <h1 className="relative z-10">View All</h1>
            </div>
          </Grid>
        )}
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            transform: "translate(-50%, -50%)",
            height: "100%",
            bgcolor: "rgba(27, 35, 46,0.9)",
            boxShadow: 24,
            outline: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px",
          }}>
          {/* Close Button */}
          <IconButton
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "#000",
            }}
            onClick={handleClose}>
            <p style={{fontSize: "16px", fontWeight: "600", color: "white"}}>
              Close
            </p>
          </IconButton>

          {/* Main Image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <IconButton
              sx={{
                color: "#fff",
                margin: "0 8px",
              }}
              onClick={handlePrevious}
              aria-label="previous image">
              <ArrowBackIcon />
            </IconButton>
            <img
              src={images[currentImageIndex].src}
              alt={`Large ${currentImageIndex}`}
              style={{
                maxWidth: "80%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
              }}
            />
            <IconButton
              sx={{
                color: "#fff",
                margin: "0 8px",
              }}
              onClick={handleNext}
              aria-label="next image">
              <ArrowForwardIcon />
            </IconButton>
          </Box>

          {/* Thumbnail Navigation */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              gap: 2,
              overflowX: "auto",
            }}>
            {images2.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`Thumbnail ${index}`}
                style={{
                  maxWidth: "150px", // Maximum width
                  maxHeight: "100px", // Maximum height
                  width: `calc(${100 / images2.length}% - 10px)`,
                  // Dynamic width based on number of images
                  height: "auto",
                  cursor: "pointer",
                  borderRadius: "8px",
                  border:
                    currentImageIndex === index
                      ? "2px solid #007bff"
                      : "2px solid transparent",
                  boxShadow:
                    currentImageIndex === index
                      ? "0px 2px 4px rgba(0,0,0,0.2)"
                      : "none",
                }}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ImageGallery;
