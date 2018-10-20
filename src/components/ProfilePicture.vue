<!--
Gets users profile image from Gravatar by email
-->

<template>
  <img src='../assets/Portrait_Placeholder.png'>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProfilePicture extends Vue {
  @Prop() private email!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    img {
        height: 100px;
        width: 100px;
    }
</style>