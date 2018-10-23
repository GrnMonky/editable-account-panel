import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ProfilePicture from '@/components/GravatarProfilePicture.vue';

describe('ProfilePicture.vue', () => {
  it('has a working default image', () => {
    const value = 'Test';
    const wrapper = shallowMount(ProfilePicture);
    expect(wrapper.html()).to.not.contain('src=""');
  });
});
