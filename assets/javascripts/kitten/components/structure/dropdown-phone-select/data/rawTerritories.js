// Taken from react-phone-input2 v2.13.8
// https://github.com/bl00mber/react-phone-input-2
// The MIT License (MIT)

// Copyright (c) 2017-2020 Nick Reiley <bloomber111@gmail.com> (https://github.com/bl00mber)
// Copyright (c) 2015-2017 Raza Gill <raza.gill@outlook.com> (https://github.com/razagill)

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// Country model:
// [
//    Country name,
//    Regions,
//    iso2 code,
//    International dial code,
//    Format (if available),
//    Order priority (if >1 country with same dial code),
//    Area codes (if >1 country with same dial code)
// ]
//
// Regions:
// ['america', 'europe', 'asia', 'oceania', 'africa']
//
// Sub-regions:
// ['north-america', 'south-america', 'central-america', 'carribean',
//  'eu-union', 'ex-ussr', 'ex-yugos', 'baltic', 'middle-east', 'north-africa']

const rawTerritories = [
  ['American Samoa', ['oceania'], 'as', '1684'],
  ['Anguilla', ['america', 'carribean'], 'ai', '1264'],
  ['Bermuda', ['america', 'north-america'], 'bm', '1441'],
  ['British Virgin Islands', ['america', 'carribean'], 'vg', '1284'],
  ['Cayman Islands', ['america', 'carribean'], 'ky', '1345'],
  ['Cook Islands', ['oceania'], 'ck', '682'],
  ['Falkland Islands', ['america', 'south-america'], 'fk', '500'],
  ['Faroe Islands', ['europe'], 'fo', '298'],
  ['Gibraltar', ['europe'], 'gi', '350'],
  ['Greenland', ['america'], 'gl', '299'],
  ['Jersey', ['europe', 'eu-union'], 'je', '44', '.... ......'],
  ['Montserrat', ['america', 'carribean'], 'ms', '1664'],
  ['Niue', ['asia'], 'nu', '683'],
  ['Norfolk Island', ['oceania'], 'nf', '672'],
  ['Northern Mariana Islands', ['oceania'], 'mp', '1670'],
  ['Saint Barthélemy', ['america', 'carribean'], 'bl', '590', '', 1],
  ['Saint Helena', ['africa'], 'sh', '290'],
  ['Saint Martin', ['america', 'carribean'], 'mf', '590', '', 2],
  ['Saint Pierre and Miquelon', ['america', 'north-america'], 'pm', '508'],
  ['Sint Maarten', ['america', 'carribean'], 'sx', '1721'],
  ['Tokelau', ['oceania'], 'tk', '690'],
  ['Turks and Caicos Islands', ['america', 'carribean'], 'tc', '1649'],
  ['U.S. Virgin Islands', ['america', 'carribean'], 'vi', '1340'],
  ['Wallis and Futuna', ['oceania'], 'wf', '681'],
]

export default rawTerritories
