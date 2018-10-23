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
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class EditableTextBox extends Vue {
  public value: string = '';
  public editMode: boolean = true;
  @Prop({default: 'none'}) public dataID!: string;
  @Prop({default: 'text'}) private type!: string;
  @Prop({default: '...'}) private placeholder!: string;
  @Watch('$parent.editMode') private onEditModeChanged(val: boolean, oldVal: string) {
    if (val === false) {
      this.$emit('data-changed', {id: this.dataID, value: this.value});
    }
  }
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
