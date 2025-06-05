import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '2m', target: 50 },   // Sobe para 50 usuários em 2 minutos
        { duration: '58m', target: 50 },  // Mantém 50 usuários por 58 minutos
        { duration: '2m', target: 0 },    // Reduz para 0 usuários em 2 minutos
    ],
    thresholds: {
        http_req_duration: ['p(95)<1000'], // 95% das requisições devem ser respondidas em menos de 1s
        http_req_failed: ['rate<0.01'],    // Taxa de erro deve ser menor que 1%
    },
};

export default function () {
    let res = http.get('https://test-api.k6.io/public/crocodiles/');

    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time is below 800ms': (r) => r.timings.duration < 800,
    });

    sleep(1); // Simula um tempo de espera entre as requisições
}

// Explicação do Código
// stages → Mantém a carga por um período prolongado:
// Fase 1: Aumenta para 50 usuários em 2 minutos.
// Fase 2: Mantém 50 usuários ativos por 58 minutos.
// Fase 3: Reduz gradualmente para 0 usuários em 2 minutos.
// thresholds → Define critérios de sucesso:
// http_req_duration: ['p(95)<1000'] → 95% das requisições devem ser concluídas em menos de 1s.
// http_req_failed: ['rate<0.01'] → A taxa de erro deve ser menor que 1%.
// sleep(1) → Faz cada usuário aguardar 1 segundo entre requisições para simular uso real.

// Esse teste ajuda a identificar falhas de longo prazo, como vazamento de memória e degradação do desempenho.