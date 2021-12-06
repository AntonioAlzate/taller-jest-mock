import * as app from "./app";
import * as math from "./math";

test("calls math.add", () => {
  // Almacenar la implementación original
  const originalAdd = math.add;
  // mock de add con la implementación original
  math.add = jest.fn(originalAdd);
  // espiar las llamadas para agregar
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // sobrescribir la implementación
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // Se restaura la implementación original
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});