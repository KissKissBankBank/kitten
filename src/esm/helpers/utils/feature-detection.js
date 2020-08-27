export var cssSupports = function cssSupports(supportCondition) {
  if (typeof window === 'undefined' || typeof window.CSS === 'undefined' || typeof window.CSS.supports === 'undefined') {
    return false;
  }

  return window.CSS.supports(supportCondition);
};