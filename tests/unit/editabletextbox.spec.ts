import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import EditableTextBox from '@/components/EditableTextBox.vue';

describe('EditableTextBox.vue', () => {
  it('starts off as a regular text or header', () => {
    const value = 'Test';
    const wrapper = shallowMount(EditableTextBox, {
      propsData: { initialValue: value },
    });
    expect(wrapper.text()).to.include(value);
    expect(wrapper.contains('input')).to.equals(false);
  });

  it('switches to input in editMode', () => {
    const value = 'Test';
    const wrapper = shallowMount(EditableTextBox, {
      propsData: { initialValue: value, editMode: true },
    });
    expect(wrapper.contains('input')).to.equals(true);
  });
});
