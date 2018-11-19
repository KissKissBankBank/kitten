"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlImageCropper = void 0;

var _react = _interopRequireDefault(require("react"));

var _imageCropper = require("kitten/components/images/image-cropper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlImageCropper = function KarlImageCropper() {
  return _react.default.createElement(_imageCropper.ImageCropper, {
    name: "picture",
    uploaderErrorLabel: "Erreur sur l'upload du fichier.",
    sliderMin: 0,
    sliderMax: 300,
    label: "Image de pr\xE9sentation",
    cropperInfo: "D\xE9placez l\u2019image dans le cadre pour obtenir le plan voulu.",
    sliderTitle: "Zoom de l\u2019image",
    buttonLabel: "Choisir une image",
    description: "Taille max : 5 Mo au format JPEG, PNG ou GIF. Les dimensions recommand\xE9es sont 620x376 px."
  });
};

exports.KarlImageCropper = KarlImageCropper;