"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _radium = _interopRequireWildcard(require("radium"));

var _rewardCard = require("kitten/components/cards/reward-card");

var _grid = require("kitten/components/grid/grid");

var _marger = require("kitten/components/layout/marger");

var _text = require("kitten/components/typography/text");

var _typography = require("kitten/helpers/utils/typography");

var _button = require("kitten/components/buttons/button");

var _paragraph = require("kitten/components/typography/paragraph");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _list = require("kitten/components/lists/list");

var _expandBoard = require("kitten/components/expandable/expand-board");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Button = (0, _radium.default)(_button.Button);
var Paragraph = (0, _radium.default)(_paragraph.Paragraph);
var Text = (0, _radium.default)(_text.Text);
(0, _react2.storiesOf)('Cards/RewardCard', module).addDecorator(_react3.withKnobs).add('RewardCard', (0, _addonInfo.withInfo)('The RewardCard is a card with two versions depending on the parent container width. It can be composed with many sub-components.')(function () {
  var versionGroupId = 'Versions';
  var contentGroupId = 'Content';
  var starred = (0, _react3.boolean)('Starred', true, versionGroupId);
  var alreadyContributed = (0, _react3.boolean)('Has user contributed?', true, versionGroupId);
  var hasRewardLabel = (0, _react3.boolean)('Does the reward have a label?', true, versionGroupId);
  var withImage = (0, _react3.boolean)('With image', true, versionGroupId);
  var disabled = (0, _react3.boolean)('Disabled', false, versionGroupId);
  var completed = (0, _react3.boolean)('Completed', false, versionGroupId);
  var withOptions = (0, _react3.boolean)('Does the reward have options?', false, versionGroupId);
  var option2Disabled = (0, _react3.boolean)('Reward option 2 disabled', true, versionGroupId);
  return _react.default.createElement("div", {
    style: styles.storyContainer
  }, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "10"
  }, _react.default.createElement(_rewardCard.RewardCard, null, _react.default.createElement(_rewardCard.RewardCard.Row, null, _react.default.createElement(_rewardCard.RewardCard.RowContent, null, starred && _react.default.createElement(_rewardCard.RewardCard.StarredBadge, {
    disabled: disabled
  }, _react.default.createElement(Text, {
    size: "nano",
    color: "font1",
    weight: "bold",
    style: [disabled && styles.disabled]
  }, (0, _react3.text)('Starred label', 'Starred reward', contentGroupId)), _react.default.createElement(Text, {
    size: "nano",
    color: "font1",
    style: [disabled && styles.disabled]
  }, (0, _react3.text)('Starred description', 'Lorem ipsum', contentGroupId))), _react.default.createElement(_rewardCard.RewardCard.Title, {
    disabled: disabled
  }, (0, _react3.text)('Title', '100$', contentGroupId)), hasRewardLabel && _react.default.createElement(Text, {
    color: "font1",
    tag: "p",
    weight: "bold",
    style: [styles.label.base, disabled && styles.disabled]
  }, (0, _react3.text)('Reward label', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', contentGroupId)), _react.default.createElement(Paragraph, {
    style: [styles.description, disabled && styles.disabled],
    modifier: "quaternary",
    margin: false
  }, (0, _react3.text)('Reward description', "Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro adnexa Isauria, pari sorte uberi palmite viget et frugibus minutis, quam mediam navigabile flumen Calycadnus interscindit.", contentGroupId)), _react.default.createElement(_list.List, null, _react.default.createElement(_rewardCard.RewardCard.Info, {
    key: "Contributors",
    label: (0, _react3.text)('Info 1 label:', 'Contributors:', contentGroupId),
    value: (0, _react3.text)('Info 1 value:', '35', contentGroupId),
    disabled: disabled
  }), _react.default.createElement(_rewardCard.RewardCard.Info, {
    key: "Availability",
    label: (0, _react3.text)('Info 2 label:', 'Availability:', contentGroupId),
    value: (0, _react3.text)('Info 2 value:', '42/1000', contentGroupId),
    disabled: disabled
  }), _react.default.createElement(_rewardCard.RewardCard.Info, {
    key: "Delivery",
    label: (0, _react3.text)('Info 3 label:', 'Delivery:', contentGroupId),
    value: (0, _react3.text)('Info 3 value:', 'January 2019', contentGroupId),
    withMarginBottom: false,
    disabled: disabled
  }))), withImage && _react.default.createElement(_rewardCard.RewardCard.RowSide, null, _react.default.createElement(_rewardCard.RewardCard.Image, {
    src: (0, _react3.text)('Reward image src', 'http://via.placeholder.com/200x240/caf4fe/caf4fe', contentGroupId),
    alt: (0, _react3.text)('Reward image alt', 'My reward', contentGroupId),
    disabled: disabled
  }))), !completed && _react.default.createElement(_rewardCard.RewardCard.Row, null, _react.default.createElement(_rewardCard.RewardCard.RowContent, null, !withOptions && _react.default.createElement(Button, {
    size: "big",
    modifier: "helium",
    type: "button",
    "aria-labelledby": disabled ? 'Sold out' : 'Contribute',
    style: [styles.button],
    disabled: disabled
  }, (0, _react3.text)('Button label', disabled ? 'Sold out' : 'Contribute', contentGroupId)), withOptions && _react.default.createElement(_expandBoard.ExpandBoard, {
    disabled: disabled
  }, _react.default.createElement(_expandBoard.ExpandBoard.Button, {
    expandChildren: "Pr\xE9cisez votre choix"
  }, (0, _react3.text)('Options button label', disabled ? 'Sold out' : 'Contribute', contentGroupId)), _react.default.createElement(_expandBoard.ExpandBoard.Content, null, _react.default.createElement(_list.List, null, _react.default.createElement(_list.List.ButtonItem, null, _react.default.createElement("div", {
    style: styles.buttonListItem.wrapper
  }, _react.default.createElement(Text, {
    tag: "p",
    weight: "regular",
    color: "font1",
    size: "tiny",
    style: styles.buttonListItem.base
  }, (0, _react3.text)('Option 1 label', 'Taille S', contentGroupId)), _react.default.createElement(Text, {
    tag: "small",
    color: "font1",
    size: "micro"
  }, (0, _react3.text)('Option 1 description', 'Disponibilité: 10/30', contentGroupId)))), _react.default.createElement(_list.List.ButtonItem, {
    disabled: option2Disabled
  }, _react.default.createElement("div", {
    style: styles.buttonListItem.wrapper
  }, _react.default.createElement(Text, {
    tag: "p",
    weight: "regular",
    color: "font1",
    size: "tiny",
    style: [styles.buttonListItem.base, option2Disabled && styles.disabled]
  }, (0, _react3.text)('Option 2 label', 'Taille M', contentGroupId)), _react.default.createElement(Text, {
    tag: "small",
    color: "font1",
    size: "micro",
    style: [styles.buttonListItem.base, option2Disabled && styles.disabled]
  }, (0, _react3.text)('Option 2 description', 'Disponibilité: 12/30', contentGroupId)))), _react.default.createElement(_list.List.ButtonItem, null, _react.default.createElement("div", {
    style: styles.buttonListItem.wrapper
  }, _react.default.createElement(Text, {
    tag: "p",
    weight: "regular",
    color: "font1",
    size: "tiny",
    style: styles.buttonListItem.base
  }, (0, _react3.text)('Option 3 label', 'Taille XXL', contentGroupId)), _react.default.createElement(Text, {
    tag: "small",
    color: "font1",
    size: "micro"
  }, (0, _react3.text)('Option 4 description', 'Disponibilité: 29/30', contentGroupId)))))))), withImage && _react.default.createElement(_rewardCard.RewardCard.RowSide, {
    withVerticalMargins: false
  })), alreadyContributed && _react.default.createElement(_rewardCard.RewardCard.CheckedSection, null, _react.default.createElement(Text, {
    color: "font1",
    size: "tiny",
    tag: "p",
    style: styles.checkedSectionItems
  }, (0, _react3.text)('Manage contribution description', 'You contributed to this project.', contentGroupId)), _react.default.createElement(Text, {
    decoration: "none",
    color: "primary1",
    size: "tiny",
    weight: "regular",
    tag: "a",
    href: "#",
    style: styles.checkedSectionItems
  }, (0, _react3.text)('Manage contribution description', 'Manage my contribution', contentGroupId)))))));
})).add('Legacy RewardCard', (0, _addonInfo.withInfo)('common info')(function () {
  return _react.default.createElement("div", {
    style: styles.storyContainer
  }, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "10"
  }, _react.default.createElement(_rewardCard.RewardCard, {
    titleAmount: (0, _react3.text)('Title amount', 'For 00€'),
    subtitle: (0, _react3.text)('subtitle', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'),
    description: (0, _react3.text)('Text Description', 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'),
    infos: [(0, _react3.object)('Infos[0]', {
      label: 'Contributors:',
      value: '35'
    }), (0, _react3.object)('Infos[1]', {
      label: 'Delivery:',
      value: 'January 2018'
    }), (0, _react3.object)('Infos[2]', {
      label: 'Availability:',
      value: '200'
    })],
    buttonLabel: (0, _react3.text)('Button label', 'Choose'),
    manageContributionDescription: (0, _react3.text)('Manage contribution description', 'You contributed to this project'),
    manageContributionLinkLabel: (0, _react3.text)('Manage contribution link label', 'Manage my contribution'),
    manageContributionLink: (0, _react3.text)('Manage contribution link href', 'https://www.google.com'),
    isDisabled: (0, _react3.boolean)('Is Disabled', false),
    starred: (0, _react3.boolean)('Is Starred', false),
    starLabel: (0, _react3.text)('Label for featured reward', 'Featured reward'),
    imageProps: (0, _react3.object)('Src/Alt', {
      src: 'http://via.placeholder.com/200x240/caf4fe/caf4fe',
      alt: ''
    })
  }))));
}));
var styles = {
  storyContainer: {
    margin: "".concat((0, _typography.pxToRem)(20), " 0")
  },
  button: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1.3rem',
    padding: "".concat((0, _typography.pxToRem)(22), " ").concat((0, _typography.pxToRem)(30))
  },
  buttonContainer: {
    marginRight: (0, _typography.pxToRem)(30)
  },
  label: {
    margin: "0 0 ".concat((0, _typography.pxToRem)(15), " 0")
  },
  description: {
    color: _colorsConfig.default.font1,
    margin: "0 0 ".concat((0, _typography.pxToRem)(20), " 0")
  },
  row: {
    emptySide: {
      margin: "0 ".concat((0, _typography.pxToRem)(15))
    }
  },
  checkedSectionItems: {
    lineHeight: (0, _typography.pxToRem)(20),
    display: 'flex',
    margin: 0,
    padding: 0
  },
  disabled: {
    color: _colorsConfig.default.font2,
    cursor: 'not-allowed'
  },
  expandBoard: {
    defaultContent: {
      padding: '1.5em',
      borderLeft: "".concat(_colorsConfig.default.line1, " 0.125rem solid"),
      borderRight: "".concat(_colorsConfig.default.line1, " 0.125rem solid"),
      borderBottom: "".concat(_colorsConfig.default.line1, " 0.125rem solid")
    }
  },
  buttonListItem: {
    base: {
      margin: 0,
      padding: 0,
      lineHeight: '1.2rem'
    },
    wrapper: {
      margin: '1rem 0',
      padding: 0
    }
  }
};