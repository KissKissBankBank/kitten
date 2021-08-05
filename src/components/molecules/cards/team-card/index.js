"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeamCard = void 0;

var _title = require("./components/title");

var _image = require("./components/image");

var _icons = require("./components/icons");

var TeamCard = function TeamCard(_ref) {
  var children = _ref.children;
  return children;
};

exports.TeamCard = TeamCard;
TeamCard.Image = _image.TeamCardImage;
TeamCard.Title = _title.TeamCardTitle;
TeamCard.Icons = _icons.TeamCardIcons;