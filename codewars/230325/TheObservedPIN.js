// https://www.codewars.com/kata/5263c6999e0f40dee200059d
function getPINs(observed) {
  const keyPad = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [-1,0,-1],
  ];
  const mapping = String(observed).split("")
    .map(findMatingNums);

  let tempArray = [];
  const totalLength = mapping.reduce((acc, cur) => acc * cur.length, 1);
  for (let i = 0; i < mapping.length; i++) {
    let isLast = (i === (mapping.length - 1));
    let cnt = 0;
    let column = 0;
    let columnLimit = mapping[i].length;
    let numLimit = mapping.slice(i+1).reduce((acc, cur) => acc * cur.length, 1);

    for (let j = 0; j < totalLength; j++) {
      let currentValue = mapping[i][column];
      
      if (!tempArray[j]) tempArray[j] = "";
      tempArray[j] += (""+currentValue);

      if (isLast) {
        column++;
        if (column === mapping[i].length) {
          cnt++;
          column = 0;
        }
      } else {
        cnt++;
        if (cnt === numLimit) {
          if (column === (columnLimit - 1)) column = 0;
          else column++;
          
          cnt = 0;
        }
      }
    }
  }

  return tempArray.sort();

  function findMatingNums(num) {
    num = +num;
    const result = [num];
    const keyPadKey = findKeyPadKey(num);
    const numKey = keyPad[keyPadKey].indexOf(num);
    if (keyPadKey - 1 > -1) result.push(keyPad[keyPadKey - 1][numKey]);
    if (keyPadKey + 1 < 4) {
      if (keyPad[keyPadKey + 1][numKey] !== -1) result.push(keyPad[keyPadKey + 1][numKey]);
    }
    if (numKey - 1 > -1 && keyPad[keyPadKey][numKey - 1] !== -1) result.push(keyPad[keyPadKey][numKey - 1]);
    if (numKey + 1 < 3 && keyPad[keyPadKey][numKey + 1] !== -1) result.push(keyPad[keyPadKey][numKey + 1]);

    return result.sort();
  }
  function findKeyPadKey(num) {
    if (1 <= num && num <= 3) return 0;
    if (4 <= num && num <= 6) return 1;
    if (7 <= num && num <= 9) return 2;
    if (num === 0) return 3;
  }
}

// Cleaver1
function getPINs1(observed) {
  return observed.split('')
  .map( t => ({
		'0': [ '0', '8' ],
    '1': [ '1', '2', '4' ],
    '2': [ '1', '2', '3', '5' ],
    '3': [ '2', '3', '6' ],
    '4': [ '1', '4', '5', '7' ],
    '5': [ '2', '4', '5', '6', '8' ],
    '6': [ '3', '5', '6', '9' ],
    '7': [ '4', '7', '8' ],
    '8': [ '5', '7', '8', '9', '0' ],
    '9': [ '6', '8', '9' ]
  }[t]))
  .reduce((pre, cur)=> [].concat.apply([], pre.map(t => cur.map(g => t + g))));
}

// Cleaver2
function getPINs2(observed) {
  var adjacent = [
    /* 0 */ [0, 8],
    /* 1 */ [1, 2, 4],
    /* 2 */ [1, 2, 3, 5],
    /* 3 */ [2, 3, 6],
    /* 4 */ [1, 4, 5, 7],
    /* 5 */ [2, 4, 5, 6, 8],
    /* 6 */ [3, 5, 6, 9],
    /* 7 */ [4, 7, 8],
    /* 8 */ [5, 7, 8, 9, 0],
    /* 9 */ [6, 8, 9]
  ];
  
  return observed
    .split('')
    .map(function(d) { return adjacent[d|0]; })
    .reduce(function(pa, da) {
      return da.reduce(function(pv, d) {
        return pv.concat(pa.map(function(p) {
          return '' + p + d;
        }));
      }, []);
    }, ['']);
}

// console.log(getPINs(8)); // ["5", "7", "8", "9", "0"]
// console.log(getPINs(11)); // ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
// console.log(getPINs(369)); // ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
// console.log(getPINs2("9173"));
// 1,2,4    1,2,4,5     1,2     1
// 1,2,4    4,2,1,7,9   2,5,9   5,4
//                      5,6     5
//                              2,5
// 11,12,14,21,22,24,41,42,44

// 11,12,14   14,12,11,17,19  125,126,155,156,195,196   1552,1555,1452,1455
// 21,22,24   24,22,21,27,29  225,226,255,256,295,296   
// 41,42,44   44,42,41,47,49  
//            54,52,51,57,59

// 6,8,9
// 1,2,4
// 4,7,8
// 2,3,6

// 6142,6143,6146,6172,6173,6176,6182,6183,6186,6242,6243,6246