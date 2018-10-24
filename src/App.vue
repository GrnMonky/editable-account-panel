<template>
  <div id="app">
    <div>
    <GravatarProfilePicture :email='email'/>
    </div>

    <div id="fields">
    <EditableFieldTitle title="Email">
      <template slot-scope='scope'>
      <EditableTextBox validations='email|required' :editMode='scope.editMode' dataID='email' @data-changed='updateData($event)' type="email" placeholder="example@gmail.com"/>
      </template>
    </EditableFieldTitle>

    <EditableFieldTitle title="Name">
      <template slot-scope='scope'>
      <EditableTextBox validations='required' :editMode='scope.editMode' dataID='firstName' placeholder="First" @data-changed='updateData($event)' style="padding-right: 10px;"/>
      <EditableTextBox validations='required' :editMode='scope.editMode' dataID='lastName' placeholder="Last" @data-changed='updateData($event)'/>
      </template>
    </EditableFieldTitle>

    <EditableFieldTitle title="Password">
      <template slot-scope='scope'>
      <PasswordBox validations='required|min:7' :editMode='scope.editMode' dataID='password' placeholder="Password" @data-changed='updateData($event)'/>
      </template>
    </EditableFieldTitle>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GravatarProfilePicture from './components/GravatarProfilePicture.vue';
import EditableFieldTitle from './components/EditableFieldTitle.vue';
import EditableTextBox from './components/EditableTextBox.vue';
import PasswordBox from './components/PasswordBox.vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, { inject: false });

@Component({
  components: {
    GravatarProfilePicture,
    EditableFieldTitle,
    EditableTextBox,
    PasswordBox,
  },
})
export default class App extends Vue {
  private email: string = '';
  private updateData(data: {id: string, value: string}): void  {
    if (data.id === 'email') {
      this.email = data.value;
    }
    alert(`Updating ${data.id} to ${data.value} in database`);
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 60px;
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
}

#fields {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}
</style>
