[![Node.js CI](https://github.com/lifeparticle/ap-style-title-case/actions/workflows/build.yml/badge.svg)](https://github.com/lifeparticle/ap-style-title-case/actions/workflows/build.yml)

This project is inspired by [ap-style-title-case](https://github.com/words/ap-style-title-case).

# Install

```shell
npm i @lifeparticle/ap-style-title-case
```

# Use

## React

```js
import apCase from "@lifeparticle/ap-style-title-case";
import "./App.css";
import { useState } from "react";

function App() {
	const [title, setTitle] = useState("");
	return (
		<div>
			<input type="text" onChange={(e) => setTitle(apCase(e.target.value))} />
			<input type="text" value={title} />
		</div>
	);
}

export default App;
```

# Test

```shell
npm i --save-dev jest
npm test
```

# Algorithm

1. Capitalize first word of the title
2. Capitalize last word of the title
3. Don't capitalize these words

```
"a","an","and","as","at","but","by","for","if","in","nor","of","off","on","or","per","so","the","to","up","via","yet"
```

4. Capitalize other words

# Resources

1. https://www.bkacontent.com/how-to-correctly-use-apa-style-title-case/
2. https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case
