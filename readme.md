# Dicoding JavaScript Basic

This project contains basic JavaScript examples and tests. It includes utility functions, support functions, and tests to ensure the correctness of the code.

## Cloning the Repository

To clone the repository, use the following commands:

```sh
git clone https://github.com/yorizpra/dicoding_javascript-basic.git
cd dicoding_javascript-basic
```

## Project Structure
- utils.mjs: Contains utility functions such as splitString and unique.
- support.mjs: Contains support functions such as add.
- sample.txt: A sample text file with placeholders.
- package.json: Contains project dependencies.
- package-lock.json: Contains the lockfile for project dependencies.
- main.test.mjs: Contains tests for the add function.
- main.js: Contains the add function with JSDoc comments.
- greet.ts: Contains a TypeScript example for greeting.
- .tool-versions: Specifies the versions of tools used in the project.

## Running Tests
To run the tests, use the following command:
```sh
bun test
```

## Usage
Utility Functions
- splitString(string): Splits a string into an array of characters.
- unique(array): Returns an array with unique values.
Support Functions
- add(numA, numB): Adds two numbers and returns the result.
TypeScript Example
- greet(name): Greets the specified name using TypeScript.

## Tool Versions
This project uses the following tool versions:

- Bun: 1.1.37
- Node.js: 20.9.0