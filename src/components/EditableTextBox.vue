<!--
Editable Text Box
Text that can be switched to edit mode. Any edits will be validated and sent back to the listener.
-->

<template>
  <div v-if="$parent.editMode">
     <input :type="type" :placeholder="placeholder" v-model="value"/>
  </div>
  <div v-else-if="value">
    <label>{{ value }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class EditableTextBox extends Vue {
  public value: string = '';
  public editMode: boolean = true;
  @Prop({default: 'text'}) private type!: string;
  @Prop({default: '...'}) private placeholder!: string;
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

input {
  height: 20px;
}
</style>
