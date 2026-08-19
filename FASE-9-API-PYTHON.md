# Fase 9 — Preparação para API Python

> **Status: planejada, não iniciada.** Este documento registra o que a Fase 9 do
> roteiro do Todo List envolve, pra ser retomada numa sessão futura sem precisar
> reconstruir o raciocínio do zero. Nenhum código foi alterado por causa dele —
> é só o plano.

## Contexto

O roteiro de evolução do Todo List (Fases 1-8, todas concluídas) sempre teve a
Fase 9 reservada pra isto: preparar o front-end pra um dia trocar os dados
mockados (`localStorage`) por uma API Python de verdade — **sem implementar
essa API agora**. As Fases 1-8 já constroem o produto inteiro (Landing, Auth,
Tasks, Dashboard, Analytics, responsividade/acessibilidade, sidebar, termos de
uso, paleta de cores do Lythra) inteiramente mockado; a Fase 9 é sobre
facilitar a transição futura, não sobre fazer essa transição.

## O que já está pronto pra isto (decisão tomada lá atrás, não é trabalho novo)

A arquitetura de dados do app já foi desenhada com essa migração em mente desde
a Fase 4/5 — é por isso que a Fase 9 é "preparação", não "reescrita":

- **Camada `services/` isola 100% do acesso a dado.** Nenhum componente,
  hook de página ou página chama `localStorage` diretamente — todos passam
  por `taskService`/`usuarioService`, que expõem funções assíncronas
  (`listarPorUsuario`, `criar`, `atualizar`, `remover`, `verificarCredenciais`...).
  Isso já é exatamente o formato que uma chamada `fetch()` teria.
- **`mockStorage.js`** é o único arquivo que toca `localStorage` de verdade —
  o comentário no topo dele já registra a intenção: *"quando existir uma API
  de verdade, só o INTERIOR de cada `entidadeService.js` muda — a ASSINATURA
  que hooks/páginas consomem continua igual"*.
- **`useAsync`** (hook-base de leitura) e os hooks de mutation
  (`useCriarTask`/`useAtualizarTask`/`useExcluirTask`) já tratam toda leitura
  como assíncrona, com `carregando`/`erro`/`recarregar` — o mesmo contrato que
  uma chamada de rede real precisa, já em uso hoje.
- **`delay()` simulado** em cada função de `mockStorage.js` já acostuma a UI a
  não tratar respostas como instantâneas (estados de carregando são
  visíveis e testados desde a Fase 5).
- **Erros já são lançados como `Error` com mensagem em português**
  (ex.: `"Já existe uma conta com este e-mail."`), e os componentes já
  capturam via `try/catch` — o mesmo padrão que traduzir uma resposta de erro
  HTTP precisaria.

## O que muda quando a Fase 9 for executada de verdade

### Baixo risco — só o interior de `services/`
Cada função de `taskService.js`/`usuarioService.js` troca
`readCollection`/`writeCollection` por `fetch()` (ou `axios`), mas a
**assinatura e o formato de retorno continuam os mesmos**. Nenhum hook, página
ou componente deveria precisar mudar uma linha.

- `mockStorage.js` é substituído por um `httpClient.js` (ou nome equivalente)
  — um wrapper fino sobre `fetch`, mesma ideia de "ponto único de contato",
  agora com a URL base da API (`import.meta.env.VITE_API_URL`) e talvez um
  helper pra anexar o header `Authorization`.
- As fixtures (`tasksFixture`, `usuariosFixture`) somem — os dados passam a
  vir do banco da API.

### Risco médio — sessão/autenticação
Hoje `authStorage.js` persiste só o `id` do usuário (`AuthContext.jsx`
rehidrata buscando o usuário fresco por esse id). Uma API real normalmente
devolve um **token** (JWT ou opaco) no login, não um id cru — isso muda:

- O que fica salvo no `localStorage`/cookie (token, não id).
- Como a sessão é rehidratada no boot (validar/decodificar o token, não um
  `buscarPorId`).
- Como toda chamada autenticada se identifica (header `Authorization: Bearer
  <token>`, não implícito).

Isso é uma mudança real de fluxo em `AuthContext.jsx`, não só trocar
`localStorage` por `fetch` — vale mais tempo de design quando chegar a hora.

### Fora do front-end, mas relevante pro planejamento
- **Hashing de senha** é responsabilidade do backend (a senha continua
  trafegando em texto plano por HTTPS até ali — isso é normal — o que muda é
  o backend nunca guardar em texto puro, diferente do mock de hoje).
- **CORS** precisa estar configurado na API pra aceitar o front-end.
- **Migração de dados**: como este é um projeto didático mockado, não existe
  dado real de usuário pra migrar — a troca é "zerar e recomeçar" contra a
  API nova, não uma migração de banco de verdade.

## Checklist de execução (quando a fase for retomada)

1. Decidir e subir a API Python (ver "Decisões em aberto" abaixo).
2. Criar `services/httpClient.js` — wrapper de `fetch`, URL base via env var.
3. Reescrever o interior de `usuarioService.js` (login, criar, buscar por id)
   pra chamar a API — manter a mesma assinatura de função.
4. Redesenhar `authStorage.js`/`AuthContext.jsx` pra token em vez de id cru.
5. Reescrever o interior de `taskService.js` (CRUD completo) pra chamar a API
   — manter a mesma assinatura de função.
6. Rodar a suíte de verificação manual já usada nas Fases 5-8 (Playwright:
   login, CRUD de tarefas, dashboard, analytics, sidebar) contra a API real,
   não mais contra o mock — é o mesmo roteiro de teste, só a fonte de dado
   muda.
7. Remover `mockStorage.js` e as fixtures, se nada mais depender delas.

## Decisões em aberto (perguntar ao usuário quando a fase começar de verdade)

- **Stack da API**: o projeto integrador do curso (Lythra) já usa FastAPI +
  SQLAlchemy + PostgreSQL — reaproveitar essa mesma stack aqui é o caminho
  mais consistente pedagogicamente, mas não foi confirmado ainda pro Todo
  List especificamente.
- **Estratégia de token**: JWT (stateless, mais comum em APIs Python/FastAPI)
  vs. token opaco com sessão guardada no servidor — trade-off real a discutir,
  não uma escolha óbvia.
- **Onde a API roda em dev**: localhost em outra porta (precisa de CORS) vs.
  proxy do Vite (`server.proxy` no `vite.config.js`, evita CORS em dev).

## Não-escopo (mesmo quando a fase for retomada)

Continua valendo o mesmo princípio de simplicidade das Fases 1-8 — a Fase 9
troca ONDE o dado mora, não aumenta o que o app faz:

- Sem OAuth/login social.
- Sem WebSocket/tempo real.
- Sem cache client-side sofisticado (React Query/SWR) só por causa da troca —
  só entraria se um problema real de UX pedisse por ele depois.
