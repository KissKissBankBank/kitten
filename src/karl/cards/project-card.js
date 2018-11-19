"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlProjectCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _projectCard = require("kitten/components/cards/project-card");

var _checkedCircleIcon = require("kitten/components/icons/checked-circle-icon");

var _warningCircleIcon = require("kitten/components/icons/warning-circle-icon");

var _crossCircleIcon = require("kitten/components/icons/cross-circle-icon");

var _clockCircleIcon = require("kitten/components/icons/clock-circle-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var colors = {
  'line-2': '#d8d8d8',
  'primary-1': '#19b4fa',
  'tertiary-1': '#effaf1',
  error: '#ff0046'
};

var KarlProjectCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(KarlProjectCard, _React$Component);

  function KarlProjectCard() {
    _classCallCheck(this, KarlProjectCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(KarlProjectCard).apply(this, arguments));
  }

  _createClass(KarlProjectCard, [{
    key: "getHexaByScore",
    value: function getHexaByScore() {
      if (!this.props.score) return;
      var hexaByScore = {
        'A+': '#00696e',
        A: '#009682',
        'B+': '#009b5f',
        B: '#04ab2f',
        C: '#8cc31e'
      };
      return hexaByScore[this.props.score];
    }
  }, {
    key: "getScoreData",
    value: function getScoreData() {
      if (!this.props.score) return;
      return {
        scoreValue: this.props.score,
        scoreBackgroundColor: this.getHexaByScore()
      };
    }
  }, {
    key: "getStatusData",
    value: function getStatusData() {
      var iconClassName = 'k-ProjectCard__status__svg';
      var data = {};

      switch (this.props.status) {
        case 'collecting':
          data = {
            coloredInfosValues: true
          };
          break;

        case 'closing':
          data = {
            statusContent: [_react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, {
              key: "closing-icon-".concat(this.props.id),
              className: iconClassName,
              circleColor: colors['tertiary-1']
            }), this.props.labelClosing],
            coloredInfosValues: true
          };
          break;

        case 'succeed':
          data = {
            statusValidBackground: true,
            statusContent: [_react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, {
              key: "succeed-icon-".concat(this.props.id),
              className: iconClassName
            }), this.props.labelSucceed]
          };
          break;

        case 'defaulted':
          data = {
            statusErrorBackground: true,
            statusContent: [_react.default.createElement(_warningCircleIcon.WarningCircleIcon, {
              key: "defaulted-icon-".concat(this.props.id),
              warningColor: colors['error'],
              className: iconClassName
            }), this.props.labelDefaulted]
          };
          break;

        case 'delayed':
          data = {
            statusErrorReverseBackground: true,
            statusContent: [_react.default.createElement(_warningCircleIcon.WarningCircleIcon, {
              key: "delayed-icon-".concat(this.props.id),
              warningColor: "#fff",
              circleColor: colors['error'],
              className: iconClassName
            }), this.props.labelDelayed]
          };
          break;

        case 'fraudulent':
          data = {
            statusErrorBackground: true,
            statusContent: [_react.default.createElement(_warningCircleIcon.WarningCircleIcon, {
              key: "fraudulent-icon-".concat(this.props.id),
              warningColor: colors['error'],
              className: iconClassName
            }), this.props.labelFraudulent]
          };
          break;

        case 'failed':
          data = {
            statusGreyBackground: true,
            statusContent: [_react.default.createElement(_crossCircleIcon.CrossCircleIcon, {
              key: "failed-icon-".concat(this.props.id),
              crossColor: colors['line-2'],
              className: iconClassName
            }), this.props.labelFailed]
          };
          break;

        case 'studying':
          data = {
            statusPrimaryBackground: true,
            statusContent: [_react.default.createElement(_clockCircleIcon.ClockCircleIcon, {
              key: "studying-icon-".concat(this.props.id),
              clockColor: colors['primary-1'],
              className: iconClassName
            }), this.props.labelStudying]
          };
          break;

        default:
      }

      return data;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_projectCard.ProjectCard, _extends({}, this.props, this.getStatusData(), this.getScoreData()));
    }
  }]);

  return KarlProjectCard;
}(_react.default.Component); // Status options: collecting, closing, succeed, defaulted,
//                 delayed, fraudulent, failed, studying.


exports.KarlProjectCard = KarlProjectCard;
KarlProjectCard.defaultProps = {
  score: null,
  status: null,
  labelClosing: 'Collecte en closing !',
  labelSucceed: 'Collecte réussie !',
  labelDefaulted: 'Projet en défaut de paiement',
  labelDelayed: 'Projet en retard de paiement',
  labelFraudulent: 'Projet frauduleux',
  labelFailed: 'Collecte échouée',
  labelStudying: "Projet à l'étude"
};