import http from 'k6/http';
import { check } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 10 },   // Aumento repentino para 10 usuários
        { duration: '10s', target: 100 },  // Pico súbito para 100 usuários
        { duration: '10s', target: 10 },   // Queda rápida para 10 usuários
        { duration: '10s', target: 0 },    // Finaliza o teste reduzindo para 0 usuários
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
// stages → Simula um aumento e redução rápida da carga:
// Fase 1: Começa com 10 usuários em 10s.
// Fase 2: Aumento súbito para 100 usuários em 10s.
// Fase 3: Redução rápida para 10 usuários em 10s.
// Fase 4: Finaliza o teste zerando os usuários em 10s.
// http.get() → Simula requisições ao sistema para verificar sua estabilidade.
// check() → Verifica se o status da resposta é 200 e se o tempo de resposta está abaixo de 800ms.

// Esse teste é útil para identificar como o sistema responde a picos inesperados de tráfego e se ele consegue se recuperar sem degradação de desempenho.