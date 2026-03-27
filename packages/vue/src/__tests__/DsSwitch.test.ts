import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DsSwitch from '../components/DsSwitch.vue';

describe('DsSwitch', () => {
  test('renders with label', () => {
    const wrapper = mount(DsSwitch, { props: { label: 'Dark mode' } });
    expect(wrapper.text()).toContain('Dark mode');
  });

  test('has switch role', () => {
    const wrapper = mount(DsSwitch, { props: { label: 'Toggle' } });
    expect(wrapper.find('input').attributes('role')).toBe('switch');
  });

  test('supports v-model', async () => {
    const wrapper = mount(DsSwitch, { props: { label: 'Toggle', modelValue: false } });
    await wrapper.find('input').setValue(true);
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([true]);
  });

  test('renders disabled', () => {
    const wrapper = mount(DsSwitch, { props: { label: 'Toggle', disabled: true } });
    expect(wrapper.find('input').attributes('disabled')).toBeDefined();
  });
});
