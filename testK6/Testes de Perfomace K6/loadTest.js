import http from 'k6/http';
import { check } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 10 },  // Aumenta para 10 VUs em 30s
        { duration: '1m', target: 50 },   // Mantém 50 VUs por 1 minuto
        { duration: '30s', target: 0 },   // Reduz gradualmente para 0 VUs
    ],
};

export default function () {
    let res = http.get('https://test-api.k6.io/public/crocodiles/');

    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time is below 800ms': (r) => r.timings.duration < 800,
    });
}

// Explicação do Código
// stages → Define a variação da carga durante o teste:
// Primeira fase: Sobe gradualmente para 10 usuários virtuais em 30s.
// Segunda fase: Mantém 50 usuários por 1 minuto.
// Terceira fase: Reduz gradualmente para 0 usuários em 30s.
// http.get() → Faz uma requisição GET para a API de teste.
// check() → Verifica se a resposta tem status 200 e se o tempo de resposta está abaixo de 800ms.

// Esse tipo de teste ajuda a verificar como o sistema se comporta sob carga sustentada.