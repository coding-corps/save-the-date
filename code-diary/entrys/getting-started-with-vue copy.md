# How To Generate a Vue.js Single Page App With the Vue CLI

Vue.js is a popular JavaScript framework for creating user interfaces. 

Vue.js is often described as a combination of React and Angular, it borrows from the prop-driven development of React and the templating power of Angular.


## Prerequisites
in order to complete this mission you will need the following 

* Node.js version 10.6.0 or greater 
* a basic knowledge of JavaScript, HTML, and CSS
-----
## 1st objective 

- Download Vue CLI 3
to do this you will need to run a command in your terminal either via npm or Yarn

``` 
npm install -g @vue/cli
# OR
yarn global add @vue/cli
 ```
*** it is important to note that it’s not recommended to mix commands. It’s best to be consistent with one or the other for the duration of your project.

After installation, you will have access to the vue binary in your command line. 

You can verify that it is properly installed by simply running vue
   
    vue

you can check your  vue cli version by running: 
    
    vue --version

my current vue cli version *@vue/cli 5.0.8*

-----

## 2nd objective 
* Generating a Single-Page Application

manually configuring a vue project from scratch can sometimes take hours. 
using the cli however you start with a  pre-generated template that is based on your specifications. allowing you to start developing your project right away. 

To generate a single-page application, navigate to the directory you’d like your Vue project in, then run the following:

    vue create <name-of-project> 

in the command, < name-of-project >, is the name of the root directory of your project. 
    
this folder will be home to your Vue.js project files.

after runnung the command, the vue cli will present you with the following options:  

```
Vue CLI v5.0.8
? Please pick a preset: 
  Default ([Vue 3] babel, eslint) 
  Default ([Vue 2] babel, eslint) 
❯ Manually select features 

```

By selecting specific features, you can configure each option you selected to be installed by the CLI.

these options include:

``` 
❯◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◯ Router
 ◯ Vuex
 ◯ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
```
Notice that some of these items are already selected (the bubble is filled in). You may select as many or as few as you’d like by pressing <space> on the entry. 

for this project i selected the default vue 3 configuraton.

these configurations, are stored by default in the package.json file 
 
When completed, cd (change directory) in your project folder and run 

``` npm run serve```

This will run your project at a port on your localhost, usually :8080. If it’s a different port, the CLI will tell you. open your browser of choice and visit the url 

You will find a welcome screen with the Vue logo and the technologies you’ve selected in your project configurations.


You can leave this server running throughout this tutorial to monitor your changes.