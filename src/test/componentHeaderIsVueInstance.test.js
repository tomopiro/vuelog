import { mount } from '@vue/test-utils';
import Index from '../components/Header';

describe('Component Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
