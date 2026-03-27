import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DsCheckbox from '../components/DsCheckbox.vue';

describe('DsCheckbox', () => {
  test('renders with label', () => {
    const wrapper = mount(DsCheckbox, { props: { label: 'Accept terms' } });
    expect(wrapper.text()).toContain('Accept terms');
  });

  test('supports v-model', async () => {
    const wrapper = mount(DsCheckbox, { props: { label: 'Check', modelValue: false } });
    await wrapper.find('input').setValue(true);
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([true]);
  });

  test('renders disabled', () => {
    const wrapper = mount(DsCheckbox, { props: { label: 'Check', disabled: true } });
    expect(wrapper.find('input').attributes('disabled')).toBeDefined();
  });
});
