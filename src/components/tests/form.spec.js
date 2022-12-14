import { mount } from "@vue/test-utils"
import { describe, it } from "vitest"
import form from "../form.vue"
import calendar from "primevue/calendar"

describe ("form component unit tests",  () => {

    it("it renders the form", () => {
        const wrapper = mount (form)
        expect (wrapper).toBeTruthy()
    })

})