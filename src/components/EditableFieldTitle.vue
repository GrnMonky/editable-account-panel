<!--
Wrapper for editable controls. Adds a title and edit button to child EditableTextBoxes.
-->

<template>
    <div class="wrapper">
        <label class="title">{{ title }}:</label>
        <slot :editMode='editMode'></slot>
        <template v-if="editMode">
            <i class='edit fa fa-save' @click="editMode = !editMode"></i>
        </template>
        <template v-else>
            <i class='edit fa fa-edit' @click="editMode = !editMode"></i>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import 'font-awesome/css/font-awesome.css';

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
.edit {
    margin-left: 10px;
}
</style>