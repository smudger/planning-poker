import { describe, expect, it } from "vitest";
import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import TheHome from "@/Pages/TheHome.vue";

describe("TheHome", () => {
  window.crypto = { randomUUID: () => "test-uuid" };

  it("should render correctly", () => {
    const wrapper = shallowMount(TheHome, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("should render a link to start a new game", () => {
    const wrapper = shallowMount(TheHome, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({
      name: "Game",
      params: { id: "test-uuid" },
      query: { code: expect.stringMatching(/\d{6}/) },
    });
  });
});
