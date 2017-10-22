<template>
  <div class="articleContainer">
    <div id="editor">
      <article class="markdown-body">
      	<div v-html="compiledMarkdown"></div>
      </article>
    </div>
  </div>
</template>

<script>
import marked from 'marked';

export default {

  name: 'Article',

  data() {
    return {
      input: `# 金钱豹REST API

### 0.获取管理方列表

0.1.1 获取管理方列表

> **GET** /management`
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update(e) {
      _.debounce(() => this.input = e.target.value ,300)
    }
  }
};
</script>

<style lang="css" scoped>
.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		/*max-width: 980px;*/
		margin: 0 auto;
		/*padding: 45px;*/
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}

</style>
