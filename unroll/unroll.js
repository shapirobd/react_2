function unroll(squareArray) {
	const newArray = [];
	while (squareArray.length) {
		pushValsFromFirstRow(squareArray, newArray);
		pushLastValFromEachRow(squareArray, newArray);
		pushValsFromLastRow(squareArray, newArray);
		pushFirstValFromEachRow(squareArray, newArray);
	}
	return newArray;
}

function pushValsFromFirstRow(sqArr, newArr) {
	while (sqArr[0].length) {
		newArr.push(sqArr[0].shift());
	}
	sqArr.shift();
}

function pushLastValFromEachRow(sqArr, newArr) {
	sqArr.map((arr) => newArr.push(arr.pop()));
}

function pushValsFromLastRow(sqArr, newArr) {
	while (sqArr.length && sqArr[sqArr.length - 1].length) {
		newArr.push(sqArr[sqArr.length - 1].pop());
	}
	sqArr.pop();
}

function pushFirstValFromEachRow(sqArr, newArr) {
	sqArr.map((arr, idx) => newArr.push(sqArr[sqArr.length - (1 + idx)].shift()));
}

module.exports = unroll;
