🚀 Testes de Performance com K6

Este repositório contém scripts desenvolvidos para realizar testes de performance utilizando o K6.

Os testes permitem avaliar desempenho, estabilidade e resiliência de sistemas sob diferentes condições de carga.

⚙️ Tipos de Teste
Tipo de Teste	Descrição
Smoke Test	Verifica rapidamente se a API está online e respondendo corretamente. Ideal para validações iniciais.
Load Test	Mede o desempenho do sistema sob uma carga constante de usuários. Ajuda a identificar gargalos de performance.
Stress Test	Aumenta gradualmente a carga até o ponto de falha, avaliando a capacidade máxima suportada.
Spike Test	Simula picos súbitos de usuários para observar a reação do sistema.
Soak Test	Mantém carga constante por um longo período para detectar vazamentos de memória ou degradação de desempenho.
🧠 Objetivo

Garantir que o sistema:

Mantenha estabilidade sob diferentes níveis de carga.

Identifique pontos de falha e gargalos de performance.

Seja escalável e confiável em ambientes de produção.

🧩 Pré-requisitos

Antes de executar os testes, certifique-se de ter o K6 instalado:

👉 Guia de Instalação do K6

▶️ Como Executar os Testes

Após instalar o K6, execute o comando abaixo no terminal:

k6 run nome_do_teste.js


Para especificar configurações (ex: quantidade de usuários, duração do teste, etc), edite as opções dentro do arquivo .js.

📊 Exemplo de Saída

Durante a execução, o K6 exibe métricas em tempo real, como:

Taxa de requisições por segundo

Tempo de resposta médio

Percentuais de erro

Thresholds de desempenho

🧾 Estrutura do Projeto
📁 testK6/
 ┣ 📜 README.md
 ┣ 📜 smoke-test.js
 ┣ 📜 load-test.js
 ┣ 📜 stress-test.js
 ┣ 📜 spike-test.js
 ┗ 📜 soak-test.js

💬 Contribuições

Sinta-se à vontade para abrir issues e pull requests com sugestões de melhorias, novos cenários de teste ou ajustes nas configurações.

🧑‍💻 Autor

Felipe F. G.
Analista de QA | Testes Manuais, Automatizados e Performance

📫 LinkedIn
 • GitHub
