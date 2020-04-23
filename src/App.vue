<template>
  <div id="app" class="fixed-top d-flex align-items-center justify-content-center">
    <b-card md="4" offset-md="4" style="width: 50%;">
      <Form/>
    </b-card>
  </div>
</template>

<script>
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    Form
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
