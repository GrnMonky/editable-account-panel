<!--
Editable Text Box
Text that can be switched to edit mode. Any edits will be validated and sent back to the listener.
-->

<template>
  <div v-if="editMode">
     <input :class="{ error: errors.has('input') }" :type="type" :placeholder="placeholder" v-model="value" v-validate:value="validations" name='input'/>
  </div>
  <div v-else-if="value">
    <label>{{ value }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

@Component
export default class EditableTextBox extends Vue {
  @Prop({default: ''}) public initialValue!: string;
  public value: string = this.initialValue;
  @Prop() public validations!: VeeValidate.FieldOptions;
  @Prop({default: false}) public editMode!: boolean;
  @Prop({default: 'none'}) public dataID!: string;
  @Prop({default: 'text'}) private type!: string;
  @Prop({default: '...'}) private placeholder!: string;
  @Watch('editMode') private onEditModeChanged(val: boolean, oldVal: string) {
    if (val === false) {
      if (this.$validator.errors.any()) {
        return;
      }
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
