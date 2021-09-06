const lower_case_words = [
	"a",
	"an",
	"and",
	"as",
	"at",
	"but",
	"by",
	"for",
	"if",
	"in",
	"nor",
	"of",
	"off",
	"on",
	"or",
	"per",
	"so",
	"the",
	"to",
	"up",
	"via",
	"yet",
];

function apCase(str) {
	let words = str.match(/[^ ]+/g);
	return words == null
		? str
		: words.length == 1
		? capitalizeFirstLetter(words[0])
		: convert(words);
}

function convert(words) {
	let lastIndex = words.length - 1;
	words[0] = capitalizeFirstLetter(words[0]);
	words[lastIndex] = capitalizeFirstLetter(words[lastIndex]);
	let mid = [];

	if (words.length >= 3) {
		mid = words.slice(1, lastIndex).map((word) => {
			return lower_case_words.includes(word.toLowerCase())
				? word.toLowerCase()
				: capitalizeFirstLetter(word);
		});
	}

	return words.length >= 3
		? `${words[0]} ${mid.join(" ")} ${words[lastIndex]}`
		: `${words[0]} ${words[lastIndex]}`;
}

function capitalizeFirstLetter(word) {
	return word.toLowerCase().replace(/(?:^|[\s-/])\w/g, function (match) {
		return match.toUpperCase();
	});
}

module.exports = apCase;
