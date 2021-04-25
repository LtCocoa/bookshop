import { shallowMount, createLocalVue } from "@vue/test-utils";
import Book from "@/views/Book";
import Vuex from "vuex";
import VueRouter from 'vue-router';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

const router = new VueRouter()

describe("Book", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      addNotification: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
      state: {
        all: []
      }
    });
  });

  it("renders props when passed", () => {
    const bookId = 1;

    const wrapper = shallowMount(Book, {
      store,
      localVue,
      router,
      computed: {
        books() {
          return [];
        }
      },
      propsData: { bookId: 1 },
    });
    expect(wrapper.props().bookId).toBe(1);
  });
});
