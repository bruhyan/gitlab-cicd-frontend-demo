import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Form from '@/components/Form.vue'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Form', () => {
  it('reveals a notification when submitted', async () => {
    const wrapper = mount(Form, {localVue})
    
    wrapper.find('#input-1').setValue('alice@gmail.com')
    wrapper.find('#input-2').setValue('alice')
    wrapper.find('form').trigger("submit")
    await wrapper.vm.$nextTick()

    expect(wrapper.find(".message").text()).toBe("Thank you for your submission, alice")
  })
})