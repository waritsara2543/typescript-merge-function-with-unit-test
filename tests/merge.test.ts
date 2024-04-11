import MergeFunction from "../src/merge";

describe("Merge Function", () => {
  const merge = new MergeFunction();

  it("should merge three sorted collections", () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [8, 6, 4, 2];
    const collection3 = [0, 9, 10, 11];
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const merged = merge.merge(collection1, collection2, collection3);
    expect(merged).toEqual(expected);
  });

  it("should handle empty collections", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];
    const expected: number[] = [];
    const merged = merge.merge(collection1, collection2, collection3);
    expect(merged).toEqual(expected);
  });

  it("should handle collections with a single element", () => {
    const collection1 = [5];
    const collection2 = [8];
    const collection3 = [2];
    const expected = [2, 5, 8];
    const merged = merge.merge(collection1, collection2, collection3);
    expect(merged).toEqual(expected);
  });

  it("should handle arrays of different lengths", () => {
    const collection1 = [1, 3, 5, 7, 9];
    const collection2 = [6, 4, 2];
    const collection3 = [0, 8];
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = merge.merge(collection1, collection2, collection3);
    console.log(result);

    expect(result).toEqual(expected);
  });
});
