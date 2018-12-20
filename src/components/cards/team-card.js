"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeamCard = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _title = require("./team-card/title");

var _image = require("./team-card/image");

var _icons = require("./team-card/icons");

var TeamCard =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TeamCard, _Component);

  function TeamCard() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, TeamCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TeamCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.render = function () {
      return _this.props.children;
    };

    return _this;
  }

  return TeamCard;
}(_react.Component);

exports.TeamCard = TeamCard;
TeamCard.Image = _image.TeamCardImage;
TeamCard.Title = _title.TeamCardTitle;
TeamCard.Icons = _icons.TeamCardIcons;