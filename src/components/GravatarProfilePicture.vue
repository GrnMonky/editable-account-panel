<!--
Gets users profile image from Gravatar by email
-->

<template>
  <img :src='srcFromEmail()'>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import md5 from 'md5';

@Component
export default class GravatarProfilePicture extends Vue {
  @Prop({default: ''}) private email!: string;
  private srcFromEmail(): string {
    return `https://www.gravatar.com/avatar/${md5(this.email)}`;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    img {
        height: 100px;
        width: 100px;
    }
</style>