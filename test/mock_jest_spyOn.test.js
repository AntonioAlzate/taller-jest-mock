import * as app from "./app";
import * as math from "./math";


test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");
  // llama a la implementación original
  expect(app.doAdd(1, 2)).toEqual(3);
  // y el spy almacena las llamadas para agregar
  expect(addMock).toHaveBeenCalledWith(1, 2);
});