"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlProjectSimilarLoader = void 0;

var _react = _interopRequireWildcard(require("react"));

var _projectSimilarCard = require("kitten/components/cards/project-similar-card");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var KarlProjectSimilarLoader = function KarlProjectSimilarLoader() {
  return _react.default.createElement(_projectSimilarCard.ProjectSimilarCard, {
    step: "1/5",
    loading: true
  });
};

exports.KarlProjectSimilarLoader = KarlProjectSimilarLoader;