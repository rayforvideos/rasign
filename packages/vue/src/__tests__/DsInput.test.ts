import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DsInput from '../components/DsInput.vue';

describe('DsInput', () => {
  test('renders input element', () => {
    const wrapper = mount(DsInput, { props: { placeholder: 'Enter text' } });
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter text');
  });

  test('supports v-model', async () => {
    const wrapper = mount(DsInput, { props: { modelValue: 'hello' } });
    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('hello');

    await wrapper.find('input').setValue('world');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['world']);
  });

  test('applies error class', () => {
    const wrapper = mount(DsInput, { props: { error: true } });
    expect(wrapper.find('input').classes()).toContain('error');
  });

  test('renders disabled', () => {
    const wrapper = mount(DsInput, { props: { disabled: true } });
    expect(wrapper.find('input').attributes('disabled')).toBeDefined();
  });
});
