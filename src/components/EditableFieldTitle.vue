<!--
Wrapper for editable controls. Adds a title and edit button to child EditableTextBoxes.
-->

<template>
    <div class="wrapper">
        <label class="title">{{ title }}:</label>
        <slot></slot>
        <button @click="editMode = !editMode">
            <template v-if="editMode">
            Save
            </template>
            <template v-else>
            Edit
            </template>
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class EditableFieldTitle extends Vue {
    public editMode: boolean = false;
    @Prop() private title!: string;
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-wrap: nowrap;
    align-items: baseline;
}
.title {
    padding-right: 10px;
    font-weight: bold;
}
</style>