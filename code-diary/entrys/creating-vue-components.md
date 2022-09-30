# creating vue components 
Step 3 — Creating a Header Component
Now that you have a single-page application running on a Node server, make some changes to this by creating a standard header and footer. These AppHeader.vue and AppFooter.vue components will be imported in such a way that they’ll be present on each route.

In a new terminal window, navigate into the root of your vue-starter-project folder and list out the files with the following command:

ls
You will receive the following output:

Output
README.md  babel.config.js  node_modules  package-lock.json  package.json  public  src  tsconfig.json
You can also view the contents of your project by opening your project in your editor of choice, such as Visual Studio Code. In either case, you will have access to a number of different files and directories. These config files in the root directory have been created because of the selections made during the intial generation of this project. The option In dedicated config files told Vue CLI to create config.js files for each service you are using, such as Babel, TypeScript, and ESLint. In addition to these files, there are a number of directories. This tutorial will go over these as you get to them.

First, create a .vue file in the components directory and name it AppHeader.vue. You can do this right-clicking in the components directory and creating a new file in IDEs like VS Code. If you prefer terminal commands, you can do this in your computer’s terminal with the bash command touch:

touch src/components/AppHeader.vue
In this step, you are creating a single-file component that will contain all of the HTML, JavaScript, and SCSS that this chunk of code needs. Every .vue component contains three basic concerns or sections: <template>, <script>, and <style>. In this case, template is the component’s HTML.

Open up the new file in your text editor.

In this file, create a header by using the <header> tag inside of <template>. Inside of this <header>, add the Vue.js logo and a <p> element with the content My Vue.js Application:

vue-starter-project/src/components/AppHeader.vue
<template>
  <header>
    <img alt="Vue logo" src="../assets/logo.png" height="50">
    <p>My Vue.js Application</p>
  </header>
</template>
Keep your development server running throughout development. If you close or cancel the server process, you will not be able to view your application in the browser.

Save the file.

At this point, when you open your browser, you will not see the HTML rendered. That is because you need to import the newly created AppHeader.vue component into a component that is already mounted. Since App.vue is your main entry point, it’s best to import it there so our header appears on every route.

Open up the App.vue file in your text editor, then delete the div with the ID of nav and add the following highlighted code:

vue-starter-project/src/App.vue
<template>
  <app-header />
  <router-view/>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>
When you import using ES6, you are essentially creating a variable to later reference in your code. In this case, you are storing the code from AppHeader.vue into a variable called AppHeader. You need to register it via the components property before you can use it.

Once it’s imported, you deleted the #nav in the template and added <app-header /> before the <router-view />. This renders the component in the HTML.

After completing this step, save any unsaved file and open your browser back to localhost:8080. Thanks to hot module reloading, you will now find your newly created header at the top of the page:

