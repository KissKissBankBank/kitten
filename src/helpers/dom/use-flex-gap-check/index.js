"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFlexGapCheck = void 0;

// https://ishadeed.com/article/flexbox-gap/
// Waiting for next Safari
var useFlexGapCheck = function useFlexGapCheck() {
  // create flex container with row-gap set
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px'; // create two, elements inside it

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div')); // append to the DOM (needed to obtain scrollHeight)

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap

  flex.parentNode.removeChild(flex);
  return isSupported;
};

exports.useFlexGapCheck = useFlexGapCheck;