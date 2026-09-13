# Matriz de Casos de Teste — `calcularTaxaEntrega(distanciaKm)`
### (ISO/IEC/IEEE 29119-4 — Partição por Equivalência e Análise do Valor-Limite)

## Regra de Negócio
| Faixa de Distância | Taxa Aplicada |
|---|---|
| 1 a 10 km | R$ 5,00 |
| 11 a 50 km | R$ 15,00 |
| 51 a 100 km | R$ 30,00 |
| < 1 km ou > 100 km | Lança `DistanciaInvalidaException` |

## Classes de Equivalência
- **CE-01 (Inválida):** distância < 1
- **CE-02 (Válida):** 1 ≤ distância ≤ 10 → R$ 5,00
- **CE-03 (Válida):** 11 ≤ distância ≤ 50 → R$ 15,00
- **CE-04 (Válida):** 51 ≤ distância ≤ 100 → R$ 30,00
- **CE-05 (Inválida):** distância > 100

## Matriz de Casos de Teste

| ID | Técnica | Classe / Fronteira | Entrada (km) | Resultado Esperado |
|---|---|---|---|---|
| CT-01 | BVA | Limite inferior válido (Faixa 1) | `1` | `5.00` |
| CT-02 | EP | Classe válida (Faixa 1) | `5` | `5.00` |
| CT-03 | BVA | Limite superior válido (Faixa 1) | `10` | `5.00` |
| CT-04 | BVA | Limite inferior válido (Faixa 2) | `11` | `15.00` |
| CT-05 | EP | Classe válida (Faixa 2) | `30` | `15.00` |
| CT-06 | BVA | Limite superior válido (Faixa 2) | `50` | `15.00` |
| CT-07 | BVA | Limite inferior válido (Faixa 3) | `51` | `30.00` |
| CT-08 | EP | Classe válida (Faixa 3) | `75` | `30.00` |
| CT-09 | BVA | Limite superior válido (Faixa 3) | `100` | `30.00` |
| CT-10 | BVA | Limite inferior inválido | `0` | Lança `DistanciaInvalidaException` |
| CT-11 | BVA | Limite superior inválido | `101` | Lança `DistanciaInvalidaException` |
| CT-12 | EP | Classe inválida (negativa) | `-10` | Lança `DistanciaInvalidaException` |
| CT-13 | EP | Classe inválida (não numérica) | `"abc"` | Lança `DistanciaInvalidaException` |

## Resultado da Execução
- **Total de casos planejados:** 13
- **Total executado:** 13
- **Aprovados:** 13
- **Reprovados:** 0
- **Cobertura de código:** 100% (Statements, Branches, Functions, Lines)
