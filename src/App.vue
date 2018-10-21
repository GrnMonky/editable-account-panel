<template>
  <div id="app">
    <div>
    <ProfilePicture/>
    </div>

    <div id="fields">
    <EditableFieldTitle title="Email">
      <EditableTextBox type="email" placeholder="example@gmail.com"/>
    </EditableFieldTitle>

    <EditableFieldTitle title="Name">
      <EditableTextBox placeholder="First" style="padding-right: 10px;"/>
      <EditableTextBox placeholder="Last"/>
    </EditableFieldTitle>

    <EditableFieldTitle title="Password">
      <EditableTextBox placeholder="Password" type='password'/>
    </EditableFieldTitle>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfilePicture from './components/ProfilePicture.vue';
import EditableFieldTitle from './components/EditableFieldTitle.vue';
import EditableTextBox from './components/EditableTextBox.vue';


@Component({
  components: {
    ProfilePicture,
    EditableFieldTitle,
    EditableTextBox,
  },
})
export default class App extends Vue {}
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
