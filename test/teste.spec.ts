import { isEven } from "@/server";

describe("Deve testar algo", () => {
  it("Deve ser par", () => {
    expect(isEven(10)).toBe(true);
  });

  it("Nao Deve ser par", () => {
    expect(isEven(11)).toBe(false);
  });

  it("Deve ser par", () => {
    expect(isEven(10)).toBe(true);
  });

  it("Nao Deve ser par", () => {
    expect(isEven(7)).toBe(false);
  });
});
