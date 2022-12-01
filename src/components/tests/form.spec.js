import { mount } from "@vue/test-utils";
import { describe, it } from "vitest";
import form from "../form.vue";
import Calendar from "../../../node_modules/primevue/calendar/Calendar.vue";

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

describe("NewProduct method unit tests", () => {
  it("it saves the product", () => {
    const wrapper = mount(form);
    wrapper.find("#images").setValue("");
    wrapper.
  });
});
