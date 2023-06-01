import assert from "node:assert";
import { describe, it, mock } from "node:test";

describe("test sample", (t) => {
  it("test A", () => {
    assert.equal(1, 1);
  });

  describe("hello world", () => {
    const helloMock = mock.fn((msg) => `hello ${msg || "world"}`);

    it("should say hello [name]", () => {
      assert.equal(helloMock.mock.calls.length, 0);
      assert.equal(helloMock("pedro"), "hello pedro");
      assert.equal(helloMock.mock.calls.length, 1);
    });

    it("should say hello world", () => {
      assert.equal(helloMock(), "hello world");
    });
  });
});
