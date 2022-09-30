<template class="summary col-md-5" >
  <div>
    <div>
        <div class="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <div v-for='t in tags' :key='t'>
                 <b-badge  :pill="true" class=" tag approved">{{t}}</b-badge>
                 </div>
              <h3 class="mb-0">{{title}}</h3>
              <div class="mb-1 text-muted">{{posted}}</div>
              <p class="mb-auto">{{summary}}</p>
              <a href="#" @click="modalShow = !modalShow" class="stretched-link">Continue reading</a>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img class="bd-placeholder-img"  width='200' height="200" :src="require(`../assets/${img}`)" alt="&lt;/&gt; Thumbnail">
            </div>
        </div>
    </div>
    <b-modal v-model="modalShow">{{main}}</b-modal>
  </div>
</template>

<script>
  export default {
    name: 'BlogPost',
    props: ['post'],
    data() {
      return {
        modalShow: false,
        main: this.post.main ? this.post.main : "",
        title: this.post.title ? this.post.title : "",
        posted: this.post.date ? this.post.date : "",
        summary: this.post.summary ? this.post.summary : "",
        img: this.post.img ? this.post.img : "",
        tags: this.post.tags ? this.post.tags : []
      }
    }
  }
</script>
<style>
  :root {
  --tag-color-one: #58c2a9;
  }
  .tag {
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 20px;
  }
  
  .approved {
    background-color: var(--tag-color-one);
    color: white;
  }

  .summary{
  border-radius: 7px;
  background: #f5f5f5!important;
  box-shadow: inset 7px 7px 14px #bbbcbc, 
            inset -7px -7px 14px #ffffff!important;
}

.summary  img{
  border-radius: 7px;
  filter: drop-shadow(-7px 7px 14px #bbbcbc)!important;
}

</style>