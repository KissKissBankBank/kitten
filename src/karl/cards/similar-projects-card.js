"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlSimilarProjectsWithInfosCard = exports.KarlSimilarProjectsCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _similarProjectsCard = require("kitten/components/cards/similar-projects-card");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var projectsWithImage = [{
  imageSrc: 'https://placehold.it/400x200/caf4fe/caf4fe',
  title: 'Title 1',
  description: 'Intellectum est enim mihi quidem in multis, et maxime in me ipso',
  link: {
    href: 'http://www.kisskissbankbank.com'
  }
}, {
  imageSrc: 'https://placehold.it/400x200/3b75f0/3b75f0',
  title: 'Title 2',
  description: 'Sed paulo ante in omnibus, cum M. Marcellum senatui',
  link: {
    href: 'http://www.hellomerci.com'
  }
}, {
  imageSrc: 'https://placehold.it/400x200/2c66e1/2c66e1',
  title: 'Title 3',
  description: 'Ille quidem fructum omnis ante actae vitae hodierno die maximum cepit',
  link: {
    href: 'http://www.lendopolis.com'
  }
}];
var tags = [{
  key: 'tag-1',
  item: 'Tag 1'
}, {
  key: 'tag-2',
  item: 'Tag 2'
}];
var tagLists = [{
  items: [{
    key: 'tag-1',
    item: 'Tag 1'
  }, {
    key: 'tag-2',
    item: 'Tag 2'
  }]
}, {
  items: [{
    key: 'tag-3',
    item: 'Tag 3'
  }, {
    key: 'tag-4',
    item: 'Tag 4'
  }]
}];
var infos = [{
  key: 'info-1',
  text: 'Info 1',
  value: 'xx',
  locked: false
}, {
  key: 'info-2',
  text: 'Info 2',
  value: 'xx',
  locked: false
}, {
  key: 'info-3',
  text: 'Info 3',
  value: 'xx',
  locked: false
}];
var projectsWithInfos = [{
  title: 'Title 1',
  description: 'Excogitatum est super his, ut homines quidam ignoti, vilitate ipsa parum cavendi ad colligendos rumores per Antiochiae latera cuncta destinarentur ',
  link: {
    href: 'http://www.kisskissbankbank.com'
  },
  tags: tags,
  infos: infos
}, {
  title: 'Title 2',
  description: 'Relaturi quae audirent. hi peragranter et dissimulanter honoratorum circulis adsistendo pervadendoque divites domus egentium habitu quicquid ',
  link: {
    href: 'http://www.hellomerci.com'
  },
  tagLists: tagLists,
  infos: infos
}, {
  title: 'Title 3',
  description: 'Noscere poterant vel audire latenter intromissi per posticas in regiam nuntiabant, id observantes conspiratione concordi, ut fingerent quaedam',
  link: {
    href: 'http://www.lendopolis.com'
  },
  tags: tags,
  infos: infos
}];

var KarlSimilarProjectsCardBase =
/*#__PURE__*/
function (_React$Component) {
  _inherits(KarlSimilarProjectsCardBase, _React$Component);

  function KarlSimilarProjectsCardBase(props) {
    var _this;

    _classCallCheck(this, KarlSimilarProjectsCardBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KarlSimilarProjectsCardBase).call(this, props));
    _this.state = {
      projects: _this.props.projects
    };
    _this.handleOnRefreshClick = _this.handleOnRefreshClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(KarlSimilarProjectsCardBase, [{
    key: "newProjectsList",
    value: function newProjectsList() {
      var projects = this.state.projects;
      return _toConsumableArray(projects.slice(1)).concat([projects[0]]);
    }
  }, {
    key: "handleOnRefreshClick",
    value: function handleOnRefreshClick() {
      this.setState({
        projects: this.newProjectsList()
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_similarProjectsCard.SimilarProjectsCard, {
        onRefreshClick: this.handleOnRefreshClick,
        projects: this.state.projects
      });
    }
  }]);

  return KarlSimilarProjectsCardBase;
}(_react.default.Component);

var KarlSimilarProjectsCard = function KarlSimilarProjectsCard() {
  return _react.default.createElement(KarlSimilarProjectsCardBase, {
    projects: projectsWithImage
  });
};

exports.KarlSimilarProjectsCard = KarlSimilarProjectsCard;

var KarlSimilarProjectsWithInfosCard = function KarlSimilarProjectsWithInfosCard() {
  return _react.default.createElement(KarlSimilarProjectsCardBase, {
    projects: projectsWithInfos
  });
};

exports.KarlSimilarProjectsWithInfosCard = KarlSimilarProjectsWithInfosCard;