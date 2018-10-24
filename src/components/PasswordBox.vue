<!--
Password Text Box
An editable text box that for passwords. Shows password strength and showing password can be toggled on and off.
-->

<template>
<div>
  <div v-if="editMode">
     <password v-model="value" :showPassword='showPassword' v-validate:value="validations" name='input'/>
  </div>
  <div v-else-if="value">
      <input class="password-label" :type="showPassword ? 'text' : 'password'" :placeholder="placeholder" v-model="value" disabled/>
  </div>

    <template v-if='value || editMode'>
  <input type="checkbox" v-model="showPassword"> show password
    </template>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import EditableTextBox from './EditableTextBox.vue';
import Password from 'vue-password-strength-meter';

@Component({
  components: {
    Password,
  },
})
export default class PasswordBox extends EditableTextBox {
    private showPassword: boolean = false;
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