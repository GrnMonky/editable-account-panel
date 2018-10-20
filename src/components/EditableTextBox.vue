<!--
Editable Text Box
Text that can be switched to edit mode. Any edits will be validated and sent back to the listener.
-->

<template>
  <div v-if="editMode">
     <input type="text" v-if="editMode" placeholder="value"/>
  </div>
  <div v-else>
    <h1>{{ value }}</h1>
  </div>
   
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() public value!: string;
  @Prop({default: false}) public editMode!: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
