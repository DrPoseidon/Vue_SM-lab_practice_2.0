import { shallowMount } from '@vue/test-utils'
import ToDoList from '../../src/components/ToDoList.vue'

test('renders correctly', () => {
  const wrapper = shallowMount(ToDoList, {
    mocks: {
      date : jest.fn(() => 1482363367071)
    }
  })
  expect(wrapper.element).toMatchSnapshot()
})


