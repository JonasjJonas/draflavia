# Site — Dra. Inara Contin Rassi

Oftalmologia e blefaroplastia. Site institucional de página única, em HTML,
CSS e JavaScript puros, sem build: o que está no repositório é exatamente o
que vai pro ar.

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
- [x] CRM 136.284
- [x] RQE 77580
- [ ] Confirmar a **UF do CRM** — a publicidade médica exige o estado junto
      do número, e eu não quis chutar

### Sobre ela
- [ ] Parágrafo de apresentação, escrito na voz dela
- [ ] Graduação — faculdade e ano
- [ ] Residência em oftalmologia — serviço e período
- [ ] Especialização em oculoplástica — fellowship/curso, instituição e ano
- [ ] Títulos e associações (CBO, SBCPO, SBO…)
- [ ] Hospitais/centros cirúrgicos onde opera

### Contato
- [ ] WhatsApp com DDD (vira link `wa.me`)
- [ ] Telefone do consultório
- [ ] E-mail
- [ ] Instagram

### Consultório
- [ ] Endereço completo, com CEP e sala
- [ ] Confirmar a **cidade** — o site diz São Paulo, herdado do briefing
- [ ] Dias e horários de atendimento
- [ ] Convênios atendidos (ou "apenas particular")
- [ ] Estacionamento
- [ ] Acessibilidade
- [ ] Estação de metrô mais próxima
- [ ] Iframe de incorporação do Google Maps

### Conteúdo clínico
- [ ] Revisar a lista de consultas, exames e cirurgias — o que entra, o que sai
- [ ] Confirmar quais exames são feitos no próprio consultório
- [ ] Resposta sobre convênios na seção de dúvidas

### Fotos
- [ ] Retrato da Dra. Inara (vertical 4:5)
- [ ] Foto dela no consultório (vertical 3:4)
- [x] Arte dos dois painéis e fotos da clínica — já no site
- [ ] Se existirem, substituir pelos originais da câmera (as atuais vieram
      reduzidas; ver `assets/img/LEIA-ME.txt`)
- [ ] Decidir se a foto da recepção pode mostrar a placa "Lavezzo & Takigami"
      — hoje ela está cortada fora do quadro

### Antes de publicar de verdade
- [ ] Remover a linha `<meta name="robots" content="noindex, nofollow">` do
      `index.html` — enquanto ela estiver lá, o site não é indexado pelo Google
- [ ] Revisar o texto do rodapé sobre publicidade médica. Blefaroplastia tem
      componente estético, e as normas do CFM são rígidas: nada de antes e
      depois, depoimento de paciente ou promessa de resultado
