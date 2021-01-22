const unroll = require("./unroll");

describe("#unroll", function () {
	it("is a function", function () {
		expect(typeof unroll).toEqual("function");
	});

	it("should return a spiraled version of a 5x5 grid array", () => {
		const square = [
			[1, 2, 3, 4, 5],
			[6, 7, 8, 9, 10],
			[11, 12, 13, 14, 15],
			[16, 17, 18, 19, 20],
			[21, 22, 23, 24, 25],
		];
		const expectedResult = [
			1,
			2,
			3,
			4,
			5,
			10,
			15,
			20,
			25,
			24,
			23,
			22,
			21,
			16,
			11,
			6,
			7,
			8,
			9,
			14,
			19,
			18,
			17,
			12,
			13,
		];
		expect(unroll(square)).toEqual(expectedResult);
	});

	it("should return a spiraled version of a 4x4 grid array", () => {
		const square = [
			[1, 2, 3, 4],
			[5, 6, 7, 8],
			[9, 10, 11, 12],
			[13, 14, 15, 16],
		];
		const expectedResult = [
			1,
			2,
			3,
			4,
			8,
			12,
			16,
			15,
			14,
			13,
			9,
			5,
			6,
			7,
			11,
			10,
		];
		expect(unroll(square)).toEqual(expectedResult);
	});

	it("should return a spiraled version of a 3x3 grid array", () => {
		const square = [
			["a", "b", "c"],
			["d", "e", "f"],
			["g", "h", "i"],
		];
		const expectedResult = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
		expect(unroll(square)).toEqual(expectedResult);
	});

	it("should return a spiraled version of a 2x2 grid array", () => {
		const square = [
			["A", "B"],
			["C", "D"],
		];
		const expectedResult = ["A", "B", "D", "C"];
		expect(unroll(square)).toEqual(expectedResult);
	});

	it("should return a spiraled version of a 1x1 grid array", () => {
		const square = [["1"]];
		const expectedResult = ["1"];
		expect(unroll(square)).toEqual(expectedResult);
	});
});
