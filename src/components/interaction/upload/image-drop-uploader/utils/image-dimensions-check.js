"use strict";

exports.__esModule = true;
exports.areImageDimensionsValid = void 0;

// https://stackoverflow.com/a/47786555
const getImageSize = url => {
  const image = new Image();
  const promise = new Promise(resolve => {
    image.onload = () => {
      const {
        naturalWidth,
        naturalHeight
      } = image;
      resolve({
        naturalWidth,
        naturalHeight
      });
    };
  });
  image.src = url;
  return promise;
};

const getImageDataURL = file => {
  const reader = new FileReader();
  const promise = new Promise(resolve => {
    reader.onload = readerLoadEvent => {
      resolve(readerLoadEvent.target.result);
    };
  });
  reader.readAsDataURL(file);
  return promise;
};

const areImageDimensionsValid = async (file, acceptedDimensions) => {
  const imageDataUrl = await getImageDataURL(file);
  const imageSize = await getImageSize(imageDataUrl);
  if (imageSize.naturalHeight > acceptedDimensions.height) return false;
  if (imageSize.naturalWidth > acceptedDimensions.width) return false;
  return true;
};

exports.areImageDimensionsValid = areImageDimensionsValid;