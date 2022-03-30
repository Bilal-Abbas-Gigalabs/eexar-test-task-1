import { mount } from '@vue/test-utils'
import App from './../src/App.vue'

describe('Check if App is mounting', () => {
  test('does app get mounted properly', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the page', () => {
    const wrapper = mount(App)
    expect(wrapper.html()).toContain('Add New Product')
  })
  // add checks for inputs

  it('has name input', () => {
    const wrapper = mount(App)
    expect(wrapper.find('input[name="product_name"]').exists()).toBe(true)
  })

  it('has reference input', () => {
    const wrapper = mount(App)
    expect(wrapper.find('input[name="reference"]').exists()).toBe(true)
  })

  it('has price input', () => {
    const wrapper = mount(App)
    expect(wrapper.find('input[name="price"]').exists()).toBe(true)
  })

  it('has a button', () => {
    const wrapper = mount(App)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('submit with empty name', () => {
    const wrapper = mount(App)
    wrapper.find('input[name="product_name"]').setValue('')
    const submitButton = wrapper.find('button.contact100-form-btn')
    submitButton.trigger('click')

    expect(wrapper.find('.error-message.name-error')).toBeTruthy()
  })
  it('submit with empty reference', () => {
    const wrapper = mount(App)
    wrapper.find('input[name="reference"]').setValue('')
    const submitButton = wrapper.find('button.contact100-form-btn')
    submitButton.trigger('click')

    expect(wrapper.find('.error-message.ref-error')).toBeTruthy()
  })
  it('submit with empty price', () => {
    const wrapper = mount(App)
    wrapper.find('input[name="price"]').setValue(0)
    const submitButton = wrapper.find('button.contact100-form-btn')
    submitButton.trigger('click')

    expect(wrapper.find('.error-message.price-error')).toBeTruthy()
  })

  it('submit with price less than zero', () => {
    const wrapper = mount(App)
    wrapper.find('input[name="price"]').setValue(-1)
    const submitButton = wrapper.find('button.contact100-form-btn')
    submitButton.trigger('click')

    expect(wrapper.find('.error-message.price-error')).toBeTruthy()
  })

  it('submit with price more than zero', () => {
    const wrapper = mount(App)
    wrapper.find('input[name="price"]').setValue(11)
    const submitButton = wrapper.find('button.contact100-form-btn')
    submitButton.trigger('click')

    expect(wrapper.find('.error-message.price-error').exists()).toBe(false)
  })

  it('clear button clear values', () => {
    const wrapper = mount(App)
    wrapper.find('input[name="product_name"]').setValue('test')
    wrapper.find('input[name="reference"]').setValue('test')
    wrapper.find('input[name="price"]').setValue(1)

    const clearButton = wrapper.find('.clear-button')
    clearButton.trigger('click')

    expect(wrapper.find('input[name="product_name"]').value).toBe(undefined)
    expect(wrapper.find('input[name="reference"]').value).toBe(undefined)
    expect(wrapper.find('input[name="price"]').value).toBe(undefined)
  })
})
