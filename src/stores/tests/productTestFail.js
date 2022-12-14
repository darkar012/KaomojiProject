import { createPinia, setActivePinia } from "pinia";
import { expect, vi, vitest } from "vitest";
import { useProductsStore } from "../products.js";

describe("Product Store fail", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  vi.mock("firebase/firestore", () => {
    const collection = vitest.fn(() => Promise.resolve([{}]));
    const getDocs = vitest.fn(() => Promise.resolve([{}]));
    const doc = vitest.fn(() =>
      Promise.resolve([
        {
          id: "test",
          name: "YOZAKURA • HOODIE",
          price: "69,95",
          description:
            '夜桜 // "Yozakura"\n\nDesign inspired by Yozakura (夜桜: Cherry blossoms at night)\n\nGazing through the window where the cherry blossoms and stars intertwine.\n\nYozakura means night cherry blossom, watching the cherry blossoms at night is called Yozakura.\n\n• Sakura Worlds design on the front and back\n• Traditional screen print\n• 65% Cotton\n• 35% Polyester',
          imgUrl: "/img/png/products/hanami/yozakura.png",
          type: "Clothes",
          year: 2022,
          collection: "HANAMI //SS2022",
        },
      ])
    );
    const setDocs = vitest.fn(() => doc);

    return {
      collection,
      getDocs,
      doc,
      setDocs,
    };
  });

  vi.mock("../../firebase/firebase.js", () => ({ db: "mock" }));

  it("getProduct fn", async () => {
    const firestore = useProductsStore();
    console.log = vitest.fn();
    firestore.getProductById("id");

    expect(console.log).toBe(false);
  });
});
