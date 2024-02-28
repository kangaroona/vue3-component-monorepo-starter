import { mount, shallowMount } from '@vue/test-utils';
import { nextTick } from 'vue';
import Button from './Button.vue';

const text: string = 'text button';
describe('Button', () => {
  test('mount button', async () => {
    const wrapper = mount(Button, {
      props: {
        text
      }
    });
    expect(wrapper.text()).toContain(text);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
  test('click button', async () => {
    const buttonClassName = '.openx-button';
    const countName = '.count-text';
    const wrapper = shallowMount(Button, {
      props: {
        text
      }
    });
    await wrapper.find(buttonClassName).trigger('click');
    await nextTick();
    expect(wrapper.find(countName).text()).toBe('1');
  });
});
