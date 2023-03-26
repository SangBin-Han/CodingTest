// 범위 추출
// Range Extraction
// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
function solution1(list){
  if (list.length === 0) return [];
  
  let result = [];
  let tempArray = [];
  let prevNumber;
  for (let i = 0; i <= list.length; i++) {
    let currentNumber = list[i];
    if (typeof prevNumber === 'undefined') {
      prevNumber = currentNumber;
      continue;
    }

    tempArray.push(prevNumber);

    if (isContinuous(prevNumber, currentNumber)) {
      prevNumber = currentNumber;
      continue;
    } else {
      if (tempArray.length > 2) {
        tempArray = [convertArray(tempArray)];
      }

      result = [...result, ...tempArray];
      tempArray.length = 0;
    }

    prevNumber = currentNumber;
  }

  return result.join(",");

  function isContinuous(num1, num2) {return (num1 + 1) === num2;}
  function convertArray(array) {
    const firstNum = array.shift();
    const lastNum = array.pop();
    return `${firstNum}-${lastNum}`;
  }
}

// Best Practices
function solution2(individualIntegers) {
	return individualIntegers
		.reduce(splitIntoRanges, [])
		.map(convertToRange)
		.join(",");
}

function splitIntoRanges(ranges, number) {
	if (!ranges.length) {
		ranges.push([number]);
		return ranges;
	}

	var lastRange = ranges[ranges.length - 1];
	var lastNumber = lastRange[lastRange.length - 1];

	number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
	return ranges;
}

function convertToRange(range) {
	return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}

// Clever
function solution3(list){
  for(var i = 0; i < list.length; i++){
     var j = i;
     while(list[j] - list[j+1] == -1) j++;
     if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
 return list.join();
}


console.log(solution3([-51,-49,-46,-44,-41,-39,-36,-34,-33,-30,-28,-27,-26,-23,-22,-21,-19,-16,-13,-10,-8,-6,-4,-2,-1,0,2]));
// console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// console.log(solution([-3,-2,-1,2,10,15,16,18,19,20]));
