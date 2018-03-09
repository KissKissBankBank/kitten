import arrayKeys from "core-js/library/fn/array/keys";
import arrayFrom from "core-js/library/fn/array/from";
import numberIsInteger from "core-js/library/fn/number/is-integer";

export const createRangeFromZeroTo = num =>
  numberIsInteger(num) ? arrayFrom(arrayKeys(Array(num))) : [];
