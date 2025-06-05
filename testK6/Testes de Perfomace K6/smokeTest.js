import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 1, // Apenas 1 usuário virtual para um teste rápido
    duration: '10s', // Tempo curto de execução
};

export default function () {
    let res = http.get('https://test-api.k6.io/public/crocodiles/');

    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time is acceptable': (r) => r.timings.duration < 500, // Resposta abaixo de 500ms
    });
}

// Explicação do Código
// vus: 1 → Apenas um usuário virtual (VU).
// duration: '10s' → Duração curta para verificar rapidamente a disponibilidade da API.
// http.get() → Realiza uma requisição GET na API de teste.
// check() → Verifica se o status da resposta é 200 e se o tempo de resposta está dentro de um limite aceitável.

// Esse tipo de teste é útil para validar se o sistema está online e pronto para testes mais aprofundados.