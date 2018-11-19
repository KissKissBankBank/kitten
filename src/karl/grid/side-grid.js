"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlSideGridWithLeftAsideAndSmallSize = exports.KarlSideGridWithRightAside = void 0;

var _react = _interopRequireDefault(require("react"));

var _sideGrid = require("kitten/components/grid/side-grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlSideGridWithRightAside = function KarlSideGridWithRightAside() {
  return _react.default.createElement(_sideGrid.SideGrid, null, _react.default.createElement(_sideGrid.SideGridContent, null, _react.default.createElement("p", null, "Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae coniunxit.")), _react.default.createElement(_sideGrid.SideGridAside, null, _react.default.createElement("p", null, "Et eodem impetu Domitianum praecipitem per scalas itidem funibus constrinxerunt, eosque coniunctos per ampla spatia civitatis acri raptavere discursu. iamque artuum et membrorum divulsa conpage superscandentes corpora mortuorum ad ultimam truncata deformitatem velut exsaturati.")));
};

exports.KarlSideGridWithRightAside = KarlSideGridWithRightAside;

var KarlSideGridWithLeftAsideAndSmallSize = function KarlSideGridWithLeftAsideAndSmallSize() {
  return _react.default.createElement(_sideGrid.SideGrid, {
    asidePosition: "start",
    asideSize: "small"
  }, _react.default.createElement(_sideGrid.SideGridAside, null, _react.default.createElement("p", null, "Nec vox accusatoris ulla licet subditicii in his malorum quaerebatur acervis ut saltem specie tenus crimina praescriptis legum committerentur, quod aliquotiens fecere principes saevi: sed quicquid Caesaris.")), _react.default.createElement(_sideGrid.SideGridContent, null, _react.default.createElement("p", null, "Haec igitur prima lex amicitiae sanciatur, ut ab amicis honesta petamus, amicorum causa honesta faciamus, ne exspectemus quidem, dum rogemur; studium semper adsit, cunctatio absit; consilium vero dare audeamus libere.")));
};

exports.KarlSideGridWithLeftAsideAndSmallSize = KarlSideGridWithLeftAsideAndSmallSize;