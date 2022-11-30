import { mount } from "@vue/test-utils"
import { describe, it } from "vitest"
import addProcess from "../addProcess.vue"

describe ("addProcess component unit tests",  () => {

    it("it renders the modal", () => {
        const wrapper = mount (addProcess)
        expect (wrapper).toBeTruthy()
    })

})