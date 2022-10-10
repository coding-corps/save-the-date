# What is Vue?

***Vue*** (pronounced /vjuː/, like view) is a JavaScript framework used to build user interfaces.
It provides a declarative and component-based programming approach that aids in the speedy development of user interfaces, whether they are basic or complicated.

Because it incorporates the prop-driven development of React and the templating capability of Angular, Vue.js is frequently referred to as a hybrid of React and Angular.

however vue emphasizes regular HTML and CSS rather than being a CSS-in-JS framework like React or depending on TypeScript (a superset of JavaScript), like Angular does.This makes Vue an approachable framework for beginners to pick up.


if you imagine javascript as an alphabet, then Vue is a phrasebook that gives programmers the tools to create complex phrases in a shorter time.

Vue's two main characteristics are:

* ***Declarative rendering***, which enables us to declaratively describe HTML output depending on JavaScript state. Vue extends normal HTML with a template vocabulary. To interpolate the necessary data in the DOM, double curly braces are utilized as placeholders.
* ***Reactivity***: When JavaScript state changes, Vue automatically monitors them and quickly updates the DOM, this is one of vues most recognizably distinctive features. It facilitates easy-to-understand state management.



  EXAMPLE:
 <pre>
<code> 

  <div id="app">
    <button @click="count++">
      Count is: {{ count }}
    </button>
  </div>

  import { createApp } from 'vue'

  createApp({
    data() {
      return {
        count: 0
      }
    }
  }).mount('#app')
</code> 
</pre>
# Components
Single-File Components (also known as ***.vue*** files, abbreviated as SFC) are  file formats used to author Vue components in the majority of build-tool enabled Vue applications. 

As the name suggests, the logic (JavaScript), template (HTML), and styling (CSS) of a component are all contained in a single file called a Vue SFC. Here is the above illustration in SFC format:
<pre>
<code> 
  <script>
  export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
    data() {
      return {
        count: 0
      }
    },
    // Methods are functions that mutate state and trigger updates.
    // They can be bound as event listeners in templates.
    methods: {
      increment() {
        this.count++
      }
  },
  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <!-- this.count is displayed reactively here using Declarative rendering -->
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>

button {
  font-weight: bold;
}
</style> 
</code>
</pre>


Vue is made to be adaptable and gradually adopted. Vue has a variety of uses that you can choose from according on your use case:
* Static HTML improvement without a build step
* Web components can be embedded on any page.
* Application with Just One Page (SPA)
* Server-Side Rendering / Full Stack (SSR)
* Static site generation using Jamstack (SSG)
* focusing on WebGL, mobile, desktop, and even the terminal


By the end of this blog, if you follow alog, You should have a functioning Vue.js application running on a local server that renders quick feedback in-browser while you work using hot module reloading with Webpack.
along the way we will produce.vue single-file components (SFC), like a header and a footer that you can use as a strong starting point for future Vue projects.


# Getting Started:

The Vue CLI (command line interface) is a powerful component for Vue.js development. The major feature of the Vue CLI is its ability to construct and pre-configure a new single-page application with the vue create command. The Vue CLI also includes a variety of useful features that improve the Vue development experience.

there are 2 major versions of Vue: Vue2 & Vue3 
Vue 3 is the current, most recent major version of Vue. 
It has new capabilities including teleport, suspense, and multiple root elements per template that are not included in Vue 2. Additionally, it has breaking changes that render Vue 2 incompatible.

Because many libraries used in creating this blog are still not Vue3 compatible Vue2 was used. however  much of the syntax and practices from Vue 2 are used in Vue 3 and the migration from  Vue2 to Vue3 is relitively simple to proform down the line.

# Prerequisites
You will need the following:

* Node.js version 10.6.0 or greater installed on your computer. 
* basic knowledge of JavaScript, HTML, and CSS

Step 1 — Downloading Vue CLI 3
To download Vue CLI 3, you will need to run a command either via npm or Yarn, whichever you prefer. npm or Node Package Manager is a way to download and manage other people’s code to use in your project as a dependency. Yarn, on the other hand, executes NPM commands under the hood but provides additional features like caching. It’s up to personal preference regarding which one to use. However, it is important to note that it’s not recommended to mix commands. It’s best to be consistent with one or the other for the duration of your project.

Moving forward, this tutorial will use npm commands. The following command will download the necessary Vue CLI files from the registrar, which in this case is the npm (Node Package Manager) service:

npm i -g @vue/cli
Note: On some systems, installing an npm package globally can result in a permission error, which will interrupt the installation. Since it is a security best practice to avoid using sudo with npm install, you can instead resolve this by changing npm’s default directory. If you encounter an EACCES error, follow the instructions at the official npm documentation.

You install this globally in order to use the CLI anywhere on your machine. If you don’t install this globally, it will only work in the directory that you installed it at. In the case of the command options, i means “install” and -g is a flag to install the code globally on your computer.

To verify if Vue CLI 3 was properly installed, run the following:

vue --version
You will receive the following output with a version number. Your version number may differ, but if you receive a response with a version number, you’ve properly installed Vue CLI 3:

Output
@vue/cli 4.5.6
To update Vue CLI 3, run the previous commands in this section, and the latest version will be installed.

At this point, you have successfully downloaded npm globally along with the Vue CLI tool that you will use in the next section to create a generated Vue.js project.

Step 2 — Generating a Single-Page Application
As you develop Vue.js applications, you may find that manually configuring a project is not the most productive use of your time, since configuring a new Vue.js project from scratch can take hours. This is the true power of Vue CLI: It provides you with a pre-generated template that is based on your specifications. Because of this, it’s already configured so you can start developing your website or application right away. Vue CLI 3 will ask you a few questions via a command line prompt about your project, download the required files, and pre-configure it for you so you are ready to work as soon as it’s done.

To generate a single-page application, navigate to the directory you’d like your Vue project in, then run the following:

vue create vue-starter-project
The highlighted section of the command is the name of the root directory of the project. This will be the name of the folder that contains all of your Vue.js project files. This can be whatever you’d like, but in the case of this tutorial, you will use vue-starter-project.

Once you type out that command, continue by pressing Enter. You will then receive the following prompt:

Vue CLI v4.5.6
? Please pick a preset: 
  Default ([Vue 2] babel, eslint) 
  Default (Vue 3 Preview) ([Vue 3] babel, eslint) 
❯ Manually select features 
If you do not want to configure your project and opt for the defaults, you can do so with either Vue 2 or Vue 3. For the purpose of this tutorial though, it’s recommended to manually select your features. By selecting specific features, you will see how each option you selected was installed by the CLI.

Select Manually select features with ENTER. Immediately you’ll receive a number of different options, including: Choose Vue version, TypeScript, Router, and Vuex. Notice that some of these items are already selected (the bubble is filled in). You may select as many or as few as you’d like. However, for this tutorial, select the following by pressing <space> on the entry:

...
 ◉ Choose Vue version
 ◉ Babel
 ◉ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◉ CSS Pre-processors
 ◉ Linter / Formatter
❯◯ Unit Testing
 ◯ E2E Testing
Once you have your options selected, press the ENTER key. The CLI will ask you further questions regarding each of the features you selected for your project, in order. The first question will ask which version of Vue you’d like to use: 2.x or 3.x. You’ll use Vue 3 for this tutorial, but you may want to use Vue 2 if you want greater support from the Vue Community:

...
? Choose a version of Vue.js that you want to start the project with 
  2.x 
❯ 3.x (Preview)
The next question is regarding TypeScript integration. If you are not familiar with TypeScript, that’s alright. This option was intentionally selected to illustrate how Vue CLI 3 downloads what you defined as required for unique project. This tutorial will not use the class-style syntax, but will use Babel alongside TypeScript.

When encountering the following, enter N:

...
Use class-style component syntax? (y/N) N
In the following prompt, enter Y:

...
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? (Y/n) Y
Next, Vue CLI will ask about history mode. History mode will make each route its own URL. This means you will not have the /#/ (hash) in your application’s URL. If you do use history mode, you will need a Node server to run your project. This is not a problem, because Vue CLI 3 provides you with a Node server.

Type Y to answer yes to history mode:

...
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) Y
The next question is regarding CSS pre-processors such as Sass or LESS. A CSS pre-processor is CSS with added features like nesting and variables. The browser cannot read this, so when the project is built, Node will compile all of your SCSS or LESS code to traditional CSS. Since you are using Node to build your project, it’s recommended to select Sass/SCSS (with node-sass) as your pre-processor. Later on, you’ll add lang attributes in your .vue components to enable SCSS on a per component basis:

...
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): 
  Sass/SCSS (with dart-sass) 
❯ Sass/SCSS (with node-sass) 
  Less 
  Stylus 
After that, you will receive some questions regarding the linter style. A linter is a program that evaluates your code as you develop your application. This linter can enforce a number of syntactical rules during development. In addition to this, your integrated development environment (IDE) can read this configuration file and format your code on save. This will keep your code consistent no matter who works on your project and what operating system or IDE a developer is using.

For this tutorial, choose ESLint + Standard config:

...
? Pick a linter / formatter config: 
  ESLint with error prevention only 
  ESLint + Airbnb config 
❯ ESLint + Standard config 
  ESLint + Prettier 
  TSLint (deprecated) 
This selects a set of rules for ESLint to enforce. These configurations include options like the use of trailing commas, semi-colons at the end of a line, or using const over var in JavaScript.

The next option is selecting when you want ESLint to format your code. This can be either on save or when you commit your code to a service like GitHub, GitLab, or BitBucket. It’s recommended to select Lint on save so you can review any changes before committing to version control:

...
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ Lint on save
 ◯ Lint and fix on commit
Once you select your lint features, Vue CLI will ask you about how you want to store these configurations, whether in dedicated files or in the package.json. It’s considered standard practive to store configurations in their own files for a few reasons. One, configurations are easier to share between projects this way, and two, you’ll be keeping your package.json as legible as possible by only defining the important information about your app:

...
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files 
  In package.json
Once you are done, the CLI tool will ask if you want to save this selection as a preset for future projects. This is useful if you are generating projects for your employer and you want everything to stay consistent.

Go ahead and save this configuraion as a preset; Vue CLI will ask you to rename it. Name it DigitalOcean Vue Tutorial Series:

...
? Save this as a preset for future projects? Yes
? Save preset as: DigitalOcean Vue Tutorial Series
Now you can use these exact same settings for a future project.

At this point, you will have something along the lines of this in your terminal summarizing all of your options:

? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, TS, Router, Vuex, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with node-sass)
? Pick a linter / formatter config: Standard
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N) 
Press ENTER, and Vue CLI will start creating your app.

When completed, cd (change directory) in your project name (vue-starter-project):

cd vue-starter-project
Next, start the application with npm run serve. This will run your project at a port on your localhost, usually :8080. If it’s a different port, the CLI will tell you:

npm run serve
You do not need to download dependencies, as the CLI already did that for you. To view your generated project, open your browser of choice and visit localhost:8080 in the URL bar. You will find a welcome screen with the Vue logo and the technologies you’ve selected in the previous steps.

Vue template screen

You can leave this server running throughout this tutorial to monitor your changes.

In this section, you selected a number of options specific to the project you are creating. Vue CLI downloaded all of the code needed and pre-configured it for you. You can now start working in the generated code base, including creating your own single-file .vue components.


  