"use strict";

exports.__esModule = true;
exports.TeamCard = void 0;

var _title = require("./components/title");

var _image = require("./components/image");

var _icons = require("./components/icons");

const TeamCard = _ref => {
  let {
    children
  } = _ref;
  return children;
};

exports.TeamCard = TeamCard;
TeamCard.Image = _image.TeamCardImage;
TeamCard.Title = _title.TeamCardTitle;
TeamCard.Icons = _icons.TeamCardIcons;