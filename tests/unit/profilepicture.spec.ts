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

describe('ProfilePicture.vue', () => {
  it('call gravatar correctly', () => {
    const value = 'Test';
    const wrapper = shallowMount(ProfilePicture, {
      propsData: { email: '  Mann.Landon@gmAil.com   ', editMode: true },
    });
    expect(wrapper.html()).to.contain('dd244c246fff777004fbd71354082477');
  });
});
