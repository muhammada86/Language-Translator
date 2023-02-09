# Language-Translator
This repo translates any JSON file containing language keyphrases into provided tag languages automatically with google translate.

## Getting Started

Install the prerequisites and the required node modules.

### Install the prerequisites

- Node.js: @latest

### Clone the repository

Clone the repository to start.

```
git clone https://github.com/muhammada86/Language-Translator.git
```

Once the cloning is done you can install the dependencies.

```
cd Language-Translator
npm install
```

After installing dependencies, create a `.env` by copying `.env.example` or using the command below.

```
cp .env.example .env
```

Now you're ready to go

````
npm start
````

### Instructions
- The base language is english and the provided tags languages are in src/data/countries.json with an object containing name and code of each language
- to modify the base language navigate to src/index.js file
- you can edit the const baseLanguage = en to your desired language short form.
- save changes and kill the server
- restart the server and that's all.
