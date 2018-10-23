<template>
  <div id="app">
    <div>
    <GravatarProfilePicture :email='email'/>
    </div>

    <div id="fields">
    <EditableFieldTitle title="Email">
      <EditableTextBox dataID='email' @data-changed='updateData($event)' type="email" placeholder="example@gmail.com"/>
    </EditableFieldTitle>

    <EditableFieldTitle title="Name">
      <EditableTextBox dataID='firstName' placeholder="First" @data-changed='updateData($event)' style="padding-right: 10px;"/>
      <EditableTextBox dataID='lastName' placeholder="Last" @data-changed='updateData($event)'/>
    </EditableFieldTitle>

    <EditableFieldTitle title="Password">
      <EditableTextBox dataID='password' placeholder="Password" @data-changed='updateData($event)' type='password'/>
    </EditableFieldTitle>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GravatarProfilePicture from './components/GravatarProfilePicture.vue';
import EditableFieldTitle from './components/EditableFieldTitle.vue';
import EditableTextBox from './components/EditableTextBox.vue';


@Component({
  components: {
    GravatarProfilePicture,
    EditableFieldTitle,
    EditableTextBox,
  },
})
export default class App extends Vue {
  private email: string = '';
  private updateData(data: {id: string, value: string}): void  {
    if(data.id === 'email') {
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
