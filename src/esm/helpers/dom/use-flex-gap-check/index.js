import domElementHelper from '../element-helper'; // https://ishadeed.com/article/flexbox-gap/
// Waiting for next Safari

export var useFlexGapCheck = function useFlexGapCheck() {
  if (!domElementHelper.canUseDom()) return true; // create flex container with row-gap set

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