 ## Creating angular project:
- Prerequisites for installing Angular CLI : To install Angular CLI you should have installed Node 6.9.0 or higher, and NPM 3 or higher


- To check the versions that you have on your machine type the following commands in a command window.
    - node -v 
    - npm -v

- You can get the latest version of Node and NPM from the following website. Click on the correct download link depending on the Operating System you have.
https://nodejs.org/en/download/

- Once you have Node and NPM installed. Run Command Prompt as an administrator and execute the following command.
    - Flag -g installs Angular CLI globally on your machine.
    - npm install -g @angular/cli

- You can also use i as shortcut for install. So the above command can also be rewritten as shown below
    - npm i -g @angular/cli
- To verify the version of Angular CLI installed, execute the following command
    - ng -v

## Introduction to Angular:
- `Component Based Development` : Component based web development is the future of web development. In Angular 2, "everything is a component". Components are the building blocks of an Angular application. The advantage of the component-based approach is that, it facilitates greater code reuse. From unit testing standpoint, the use of components make Angular2 more testable

## Workspace and project file structure:
    - Refer: https://angular.io/guide/file-structure#workspace-configuration-files
  
## Adding bootstrap 5 to angular project:
- install bootstrap 5 package:
    - npm i bootstrap
- install bootstrap 5 icons:
    - npm i bootstrap-icons
- add the following scripts in angular.json
  - path: `architect.build.options.styles, architect.build.options.scripts`
   
    ```
    "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/bootstrap-icons/font/bootstrap-icons.css"
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
    ```
- 