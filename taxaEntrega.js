/**
 * Módulo de Cálculo de Taxa de Entrega
 *
 * Regras de negócio:
 * - Distâncias de 1 a 10 km: taxa de R$ 5.00
 * - Distâncias de 11 a 50 km: taxa de R$ 15.00
 * - Distâncias de 51 a 100 km: taxa de R$ 30.00
 * - Distâncias < 1 ou > 100 km: lança DistanciaInvalidaException
 */

class DistanciaInvalidaException extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "DistanciaInvalidaException";
  }
}

function calcularTaxaEntrega(distanciaKm) {
  if (typeof distanciaKm !== "number" || Number.isNaN(distanciaKm)) {
    throw new DistanciaInvalidaException(
      "Distância inválida: valor não numérico."
    );
  }

  if (distanciaKm < 1 || distanciaKm > 100) {
    throw new DistanciaInvalidaException(
      "Distância fora da faixa permitida (1 a 100 km)."
    );
  }

  if (distanciaKm <= 10) {
    return 5.0;
  } else if (distanciaKm <= 50) {
    return 15.0;
  } else {
    return 30.0;
  }
}

module.exports = { calcularTaxaEntrega, DistanciaInvalidaException };
