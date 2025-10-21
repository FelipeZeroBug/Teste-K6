# Testes de Performance com K6

Este projeto contém scripts para realizar diferentes tipos de testes de performance usando [K6](https://k6.io/), como Smoke Test, Load Test, Stress Test, Spike Test e Soak Test.

---

## Tipos de Testes

- **Smoke Test:** Verifica rapidamente se a API está online e respondendo corretamente.
- **Load Test:** Avalia o desempenho do sistema sob uma carga constante de usuários.
- **Stress Test:** Testa os limites do sistema aumentando a carga até o ponto de falha.
- **Spike Test:** Avalia como o sistema reage a picos súbitos de usuários.
- **Soak Test:** Testa o sistema sob carga constante por um longo período, buscando vazamentos ou degradação.

---

## Como Rodar os Testes

### Pré-requisitos

- [Instalar K6](https://k6.io/docs/getting-started/installation)

### Comando para executar o teste

```bash
k6 run nome_do_teste.js
