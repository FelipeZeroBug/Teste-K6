import http from 'k6/http';
import { check } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 100 },  // Aumenta para 100 usuários em 1 minuto
        { duration: '2m', target: 200 },  // Sobe para 200 usuários em 2 minutos
        { duration: '3m', target: 300 },  // Sobe para 300 usuários em 3 minutos
        { duration: '2m', target: 400 },  // Mantém 400 usuários por 2 minutos
        { duration: '2m', target: 0 },    // Reduz para 0 usuários em 2 minutos
    ],
};

export default function () {
    let res = http.get('https://test-api.k6.io/public/crocodiles/');

    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time is below 1000ms': (r) => r.timings.duration < 1000, // Espera que a resposta esteja abaixo de 1s
    });
}

// Explicação do Código
// stages → Simula um aumento rápido da carga para avaliar o limite do sistema:
// Primeira fase: Aumenta para 100 usuários em 1 minuto.
// Segunda fase: Chega a 200 usuários em 2 minutos.
// Terceira fase: Testa com 300 usuários em 3 minutos.
// Quarta fase: Mantém 400 usuários por 2 minutos.
// Última fase: Reduz gradualmente a carga.
// http.get() → Faz uma requisição para testar a estabilidade da API.
// check() → Garante que o status da resposta seja 200 e que o tempo de resposta seja menor que 1s.

// Esse teste ajuda a identificar gargalos e limites do sistema antes de falhas críticas. 