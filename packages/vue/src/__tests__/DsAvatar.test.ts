import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DsAvatar from '../components/DsAvatar.vue';

describe('DsAvatar', () => {
  test('renders image when src provided', () => {
    const wrapper = mount(DsAvatar, { props: { src: '/user.jpg', alt: 'User' } });
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe('/user.jpg');
  });

  test('renders initials when no src', () => {
    const wrapper = mount(DsAvatar, { props: { initials: 'JD' } });
    expect(wrapper.text()).toBe('JD');
    expect(wrapper.find('img').exists()).toBe(false);
  });

  test('applies size class', () => {
    const wrapper = mount(DsAvatar, { props: { initials: 'JD', size: 'lg' } });
    expect(wrapper.classes()).toContain('lg');
  });
});
