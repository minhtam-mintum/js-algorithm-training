# JavaScript Algorithm Training

A small, dependency-free workspace for practicing JavaScript algorithms from the
command line. The current exercises focus on frequency maps, hash lookups, and
sets using plain JavaScript.

## Requirements

- Node.js
- npm

## Run

```bash
npm start
```

The script runs `src/index.js` with Node and prints example results to the
terminal.

## Project Structure

```text
.
├── package.json
├── README.md
└── src
    └── index.js
```

## Current Exercises

`src/index.js` currently includes examples for:

- Counting item frequency with `Map`
- Checking whether two strings are anagrams
- Comparing two arrays by item frequency
- Finding the most frequent item in an array
- Solving Two Sum with index lookup
- Finding the first unique character in a string
- Removing duplicates with `Set`

## Practice Ideas

Try extending the exercises by adding:

- More edge cases, such as mixed types, empty inputs, and negative numbers
- Console output labels for every function
- Recursive versions where they make sense
- Time and space complexity notes above each function
- New files under `src/` grouped by topic, such as `maps.js` or `arrays.js`

## Notes

This project intentionally avoids test frameworks and build tools for now, so
you can focus on the algorithm logic directly. Edit `src/index.js`, save it, and
run `npm start` again to check the output.
