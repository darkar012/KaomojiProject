import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import form from "../form.vue";

describe("form component unit tests", () => {
  it("it renders the form", () => {
    const wrapper = mount(form);
    expect(wrapper).toBeTruthy();
  });
});

describe("InputImage component unit tests", () => {
  it("it save the image", () => {
    const wrapper = mount(form);

    wrapper.find("#images").trigger("change");

    expect(wrapper.vm.readImage).toBeTruthy();
  });
});

describe("addProduct unit tests", () => {
  it("it upload products", () => {
    const wrapper = mount(form);
    // const mockMethod = vitest.fn();
    // wrapper.vm.createNewProduct = mockMethod;

    wrapper.find(".submit").trigger("click");

    expect(wrapper.vm.createNewProduct).toBeTruthy();
  });
  beforeEach(() => {
    setActivePinia(createPinia());
  });
});
