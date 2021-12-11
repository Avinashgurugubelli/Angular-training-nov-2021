## Creation of Typescript project

- Install Node jS
	https://nodejs.org/en/download/
- Once you installed a node JS
	- Check version:
		- Open CMD prompt and type -> node --version
- Along with the node installed, NPM(Node package manager) will also installed
	- TO check NPM version: npm --version

- If we want to explore NPM: https://www.npmjs.com/

- Setup node project. 
    1. create a directory/folder
    2. open cmd prompt
    3. npm init
- Explore the package.json
- Install necessary packages/dependencies
	- Dependecies is of types
		1.devDependencies:

			- npm install <`package-name`> --save-dev
						(or)
			- npm i <package-name> --save-dev
            
		2. dependencies:

			- npm install <`package-name`> --save-prod
- To work with typescript, install the below packages in dev mode:
    - ts-node
    - typescript
    - @types/node
    - tslint

- once we installed the above packages -> these packages will be loacally get installed from NPM inside node_modules folder.

- after installed successfully -> package-lock.json will be created to maintain the dependency list.
- create file tsconfig.json and copy the content
    ```
        {
    "compilerOptions": {
      "module": "commonjs",
      "esModuleInterop": true,
      "target": "es6",
      "moduleResolution": "node",
      "sourceMap": true,
      "outDir": "dist"
    },
    "lib": ["es2015"]
  }
    ```
- create a folder src-> to place all the project code.

- Update the package.json scripts property.  ``` "build": "tsc --build"``` this command will convert the .ts files into .js file and place it under dist folder.


