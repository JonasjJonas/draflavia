# Site — Dra. Flávia Mameria

Site institucional de página única. HTML, CSS e JavaScript puros, sem build:
o que está no repositório é exatamente o que vai pro ar.

    index.html              a página inteira
    assets/css/site.css     toda a folha de estilo
    assets/js/site.js       menu, lacunas e entrada em cena
    assets/img/             fotos e arte (ver assets/img/LEIA-ME.txt)

Publicado no GitHub Pages pelo workflow `.github/workflows/deploy.yml`, que
dispara a cada push na branch `main`.

Para ver localmente:

    python3 -m http.server 8123

e abrir <http://127.0.0.1:8123>.

---

## O que ainda falta

Cada item abaixo aparece na página como uma etiqueta tracejada **◇ FALTA**, no
lugar exato onde o conteúdo entra. Elas somem sozinhas quando o dado é
preenchido — não precisa caçar no código.

### Dados de registro
- [ ] CRM (número e UF)
- [ ] RQE de Ginecologia e Obstetrícia

### Sobre ela
- [ ] Parágrafo de apresentação, escrito na voz dela
- [ ] Graduação — faculdade e ano
- [ ] Residência médica — hospital e período
- [ ] Especialização em medicina fetal — curso e ano
- [ ] Títulos e associações (TEGO, Febrasgo, SBUS…)
- [ ] Hospitais/maternidades onde atende

### Contato
- [ ] WhatsApp com DDD (vira link `wa.me`)
- [ ] Telefone do consultório
- [ ] E-mail
- [ ] Instagram

### Consultório
- [ ] Endereço completo, com CEP e sala
- [ ] Dias e horários de atendimento
- [ ] Convênios atendidos (ou "apenas particular")
- [ ] Estacionamento
- [ ] Acessibilidade
- [ ] Estação de metrô mais próxima
- [ ] Iframe de incorporação do Google Maps

### Conteúdo clínico
- [ ] Revisar a lista de consultas e exames — o que entra, o que sai
- [ ] Confirmar se há aparelho de ultrassom no próprio consultório
- [ ] Resposta sobre convênios na seção de dúvidas

### Fotos
- [ ] Retrato da Dra. Flávia (vertical 4:5)
- [ ] Foto dela no consultório (vertical 3:4)
- [ ] Salvar em `assets/img/` as fotos da clínica e a arte do tríptico

### Antes de publicar de verdade
- [ ] Remover a linha `<meta name="robots" content="noindex, nofollow">` do
      `index.html` — enquanto ela estiver lá, o site não é indexado pelo Google
- [ ] Conferir o texto do rodapé sobre publicidade médica (normas do CFM)
