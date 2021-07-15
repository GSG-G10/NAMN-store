const {
  SearchByName,
  FilterByPrice,
  FilterByCategory,
  rearrange,
} = require("./script/function");

const item = [
  { name: "cc", price: "15$", category: "fruits" },
  { name: "zz", price: "40$", category: "vegetables" },
];

describe("Testing SearchByName return array", () => {
  test("Should return 1 when given 1", () => {
    const actual = SearchByName("c", item)[0];
    const expected = { name: "cc", price: "15$", category: "fruits" };
    expect(actual).toEqual(expected);
  });
});

describe("Testing SearchByPrice return array", () => {
  test("Should return 1 when given 1", () => {
    const actual = FilterByPrice(14, 20, item)[0];
    const expected = { name: "cc", price: "15$", category: "fruits" };
    expect(actual).toEqual(expected);
  });
});

describe("Testing FilterByCategory return array", () => {
  test("Should return 1 when given 1", () => {
    const actual = FilterByCategory("vegetables", item)[0];
    const expected = { name: "zz", price: "40$", category: "vegetables" };
    expect(actual).toEqual(expected);
  });
});

describe("Testing price by max and min return array", () => {
  test("Should return item between min and max number", () => {
    const actual = rearrange(5, 15, 100);
    const expected = true;
    expect(actual).toBe(expected);
  });

  test("Should return item between min and max number", () => {
    const actual = rearrange(30, 10, 40);
    const expected = false;
    expect(actual).toBe(expected);
  });
});
