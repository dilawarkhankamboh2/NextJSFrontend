

let imageData = [];

export const addImage = (url) => {
  imageData.push({ url }); // Add new image URL to existing array of objects
};

export const getImageData = () => {
  return imageData;
};
