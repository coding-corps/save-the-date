# What is Vue?
Vue (pronounced /vjuː/, like view) is a 'JavaScript' framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.

## Here is a minimal example:


<pre>
<code>

import { createApp } from "vue"

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')
template
<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>

</code>
</pre>


<img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="Italian Trulli">
