const {
  calcularTaxaEntrega,
  DistanciaInvalidaException,
} = require("./taxaEntrega");

describe("Cálculo de Taxa de Entrega (ISO/IEC/IEEE 29119-4)", () => {
  describe("Faixa 1 (1 a 10 km) - R$ 5.00", () => {
    test("CT-01 (BVA): Limite inferior válido - 1 km", () => {
      expect(calcularTaxaEntrega(1)).toBe(5.0);
    });

    test("CT-02 (EP): Valor intermediário da classe - 5 km", () => {
      expect(calcularTaxaEntrega(5)).toBe(5.0);
    });

    test("CT-03 (BVA): Limite superior válido - 10 km", () => {
      expect(calcularTaxaEntrega(10)).toBe(5.0);
    });
  });

  describe("Faixa 2 (11 a 50 km) - R$ 15.00", () => {
    test("CT-04 (BVA): Limite inferior válido - 11 km", () => {
      expect(calcularTaxaEntrega(11)).toBe(15.0);
    });

    test("CT-05 (EP): Valor intermediário da classe - 30 km", () => {
      expect(calcularTaxaEntrega(30)).toBe(15.0);
    });

    test("CT-06 (BVA): Limite superior válido - 50 km", () => {
      expect(calcularTaxaEntrega(50)).toBe(15.0);
    });
  });

  describe("Faixa 3 (51 a 100 km) - R$ 30.00", () => {
    test("CT-07 (BVA): Limite inferior válido - 51 km", () => {
      expect(calcularTaxaEntrega(51)).toBe(30.0);
    });

    test("CT-08 (EP): Valor intermediário da classe - 75 km", () => {
      expect(calcularTaxaEntrega(75)).toBe(30.0);
    });

    test("CT-09 (BVA): Limite superior válido - 100 km", () => {
      expect(calcularTaxaEntrega(100)).toBe(30.0);
    });
  });

  describe("Entradas Inválidas", () => {
    test("CT-10 (BVA): Limite inferior inválido - 0 km", () => {
      expect(() => calcularTaxaEntrega(0)).toThrow(DistanciaInvalidaException);
    });

    test("CT-11 (BVA): Limite superior inválido - 101 km", () => {
      expect(() => calcularTaxaEntrega(101)).toThrow(
        DistanciaInvalidaException
      );
    });

    test("CT-12 (EP): Classe inválida - distância negativa", () => {
      expect(() => calcularTaxaEntrega(-10)).toThrow(
        DistanciaInvalidaException
      );
    });

    test("CT-13 (EP): Classe inválida - entrada não numérica", () => {
      expect(() => calcularTaxaEntrega("abc")).toThrow(
        DistanciaInvalidaException
      );
    });
  });
});
