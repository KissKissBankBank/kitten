"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _addonActions = require("@storybook/addon-actions");

var _react3 = require("@storybook/addon-knobs/react");

var _simpleUploader = require("./simple-uploader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Uploaders/SimpleUploader', module).addDecorator(_react3.withKnobs).add('default', (0, _addonInfo.withInfo)('common info')(function () {
  return _react.default.createElement(_simpleUploader.SimpleUploader, {
    fileName: (0, _react3.text)('Filename', 'Filename'),
    disabled: (0, _react3.boolean)('Disabled', false),
    deletable: (0, _react3.boolean)('Deletable', true),
    buttonLabel: (0, _react3.text)('Button Label', 'Choose a file'),
    acceptedFiles: (0, _react3.text)('Accepted files', '.jpg,.jpeg,.gif,.png'),
    maxSize: (0, _react3.number)('Max size', 5 * 1024 * 1024),
    base64: (0, _react3.boolean)('base64', false),
    onSuccess: (0, _addonActions.action)('success'),
    onError: (0, _addonActions.action)('error')
  });
}));