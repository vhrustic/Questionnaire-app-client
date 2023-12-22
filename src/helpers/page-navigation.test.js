import { getPreviousPageId } from "./page-navigation";

describe("Page navigation test", () => {
  it("getPreviousPageId returns previous page id", () => {
    const prevPage = getPreviousPageId([{ id: 0 }, { id: 1 }], 1);
    expect(prevPage).toBe(10);
  });
});
