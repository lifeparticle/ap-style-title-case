const apCase = require("./index.js");

test("convert title", () => {
	expect(apCase("            ")).toBe("            ");
	expect(apCase("")).toBe("");
	expect(apCase("hello")).toBe("Hello");
	expect(apCase(" hello ")).toBe("Hello");
	expect(apCase("hello world")).toBe("Hello World");
	expect(apCase("hello A A A world")).toBe("Hello a a a World");

	var patterns = [
		["this is a test", "This Is a Test"],
		["this is a ", "This Is A"],
		[
			"why sunless tanning is A hot trend",
			"Why Sunless Tanning Is a Hot Trend",
		],
		[
			"Satin Sheets are a Luxury you Can Afford",
			"Satin Sheets Are a Luxury You Can Afford",
		],
		[
			"the Dangers Of Hiking Without Proper Shoes",
			"The Dangers of Hiking Without Proper Shoes",
		],
		["an hour or so", "An Hour or So"],
		["Of the meaning Of Of", "Of the Meaning of Of"],
		["Thing With     Extra Spaces", "Thing With Extra Spaces"],
		[
			"Observations of isolated pulsars and disk-fed X-ray binaries.",
			"Observations of Isolated Pulsars and Disk-Fed X-Ray Binaries.",
		],
	];

	patterns.forEach((pattern) => {
		expect(apCase(pattern[0])).toBe(pattern[1]);
	});

	// expect(
	// 	apCase(
	// 		"the fool doth think he is wise, but the wise man knows himself to be a fool."
	// 	)
	// ).toBe(
	// 	"The Fool Doth Think He Is Wise, but the Wise Man Knows Himself To Be a Fool."
	// );
});
