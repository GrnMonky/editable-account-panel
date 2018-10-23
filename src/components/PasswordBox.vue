<!--
Editable Text Box
Text that can be switched to edit mode. Any edits will be validated and sent back to the listener.
-->

<template>
<div>
  <div v-if="editMode">
     <input :type="dynamicType" :placeholder="placeholder" v-model="value"/>
  </div>
  <div v-else-if="value">
      <input class="password-label" :type="dynamicType" :placeholder="placeholder" v-model="value" disabled/>
  </div>

  <input type="checkbox" v-on:click="showPassword"> show password
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import EditableTextBox from './EditableTextBox.vue';

@Component
export default class PasswordBox extends EditableTextBox {
    private dynamicType: string = 'password';
    private showPassword(): void {
        if (this.dynamicType === 'text') {
            this.dynamicType = 'password';
        } else {
            this.dynamicType = 'text';
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.password-label {
  background:rgba(0,0,0,0);
  border:none;
  width: auto;
}
</style>