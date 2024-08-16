# Language-Translator

This repository allows for the translation of any JSON file containing language keyphrases into multiple provided languages using Google Translate. Simply provide your base language JSON file and specify the target languages, and the tool will generate the corresponding translated JSON files.

## Getting Started

To get started, follow these steps to install the necessary prerequisites and required Node.js modules.

### Prerequisites

Ensure you have the following installed:
- Node.js: @latest

### Clone the Repository

First, clone the repository to your local machine.

```bash
git clone https://github.com/muhammada86/Language-Translator.git
```

### Install Dependencies
Once the cloning is complete, navigate to the repository directory and install the dependencies.

```bash
cd Language-Translator
npm install
```

### Configuration
After installing the dependencies, you need to set up the environment variables. Create a .env file by copying the provided .env.example file.

```bash
cp .env.example .env
```
### Running the Application
Now you are ready to start the application.

```bash
npm start
```

## Instructions 

### Base Language
- The base language for translation is English by default. The application translates the keyphrases from this base language to the provided target languages.
- To change the base language, navigate to the src/index.js file.
- Modify the const baseLanguage = 'en'; line to your desired language's short form code (e.g., 'es' for Spanish, 'fr' for French).
- Save the changes, stop the server, and restart it for the changes to take effect.

### Target Languages

- The target languages for translation are specified in src/data/countries.json. This file contains an array of objects, each with a name and code representing a language.
- You can edit this file to add or remove target languages as needed.
- 
### Translation Process

- Place your base language JSON file containing the keyphrases you want to translate in the appropriate directory.
- Start the application using npm start.
- The tool will read your base language JSON file and use the Google Translate API to translate the keyphrases into all the specified target languages.
- The translated JSON files will be generated in the output directory, each named according to the target language code.

## Example
Suppose your base language JSON file (en.json) contains the following keyphrases:

```json
{
  "greeting": "Hello",
  "farewell": "Goodbye",
  "thank_you": "Thank you"
}
```
With `src/data/countries.json` specifying Spanish `(es)` and French `(fr)` as target languages, the tool will generate two JSON files:

`es.json:`
```json
{
  "greeting": "Hola",
  "farewell": "Adiós",
  "thank_you": "Gracias"
}
```

`es.json:`
```json
{
  "greeting": "Bonjour",
  "farewell": "Au revoir",
  "thank_you": "Merci"
}
```

## Customization
You can customize the translation process further by modifying the source code in the `src` directory to suit your specific needs.

## Summary

The Language-Translator tool simplifies the process of translating JSON files into multiple languages using Google Translate. By following the steps outlined above, you can quickly and easily generate translated JSON files for your project. If you encounter any issues or have questions, feel free to consult the documentation or open an issue on the repository.



