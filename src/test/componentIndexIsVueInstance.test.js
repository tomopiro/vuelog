import { mount } from '@vue/test-utils';
import Index from '../components/Index';

describe('Component Index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
