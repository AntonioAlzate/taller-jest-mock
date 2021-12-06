import * as app from "./app";
import * as math from "./math";
test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");
  // Se sobrescribe la implementación
  addMock.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  // Se restaura la implementación original
  addMock.mockRestore();
  expect(app.doAdd(1, 2)).toEqual(3);
});