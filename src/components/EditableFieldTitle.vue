<!--
Wrapper for editable controls. Adds a title and edit button to child EditableTextBoxes.
-->

<template>
    <div class="wrapper">
        <label class="title">{{ title }}:</label>
        <slot :editMode='editMode'></slot>
        <template v-if="editMode">
            <i class='edit fa fa-save' @click="save"></i>
        </template>
        <template v-else>
            <i class='edit fa fa-edit' @click="editMode = !editMode"></i>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import 'font-awesome/css/font-awesome.css';
import EditableTextBox from './EditableTextBox.vue';

@Component({
    // inject validation to all Sub EditableTextBoxes
    components: { EditableTextBox },
    $_veeValidate: { validator: 'new' },
})
export default class EditableFieldTitle extends Vue {
    public editMode: boolean = false;
    @Prop() private title!: string;
    public async save(): Promise<void> {
        const passing = await this.$validator.validateAll();
        alert(`passing validation ${passing}`);
        if (passing) {
            this.editMode = !this.editMode;
        }
    }
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