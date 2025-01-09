// Dados das questões de Risaer
const risaerQuizData = [
    {
        question: "Qual a finalidade do RISAER conforme descrito no Art. 1º?",
        options: ["Regulamentar os serviços administrativos das Forças Armadas.",
             "Regular a execução dos diferentes serviços e estabelecer rotinas administrativas nas OM do COMAER.",
              "Supervisionar exclusivamente os serviços de escala de segurança.",
            "Organizar exclusivamente as atividades operacionais da Aeronáutica."],
        correctAnswer: 1 // Resposta correta
    },
    {
        question: "Quais são os serviços de escala atribuídos exclusivamente a Oficiais?",
        options: ["Cabo da Guarda, Corneteiro de Dia e Farmacêutico Bioquímico de Dia.",
             "Oficial de Dia, Supervisor de Dia ao Rancho e Comissário de Dia.", "Superior de Dia, Oficial de Operações e Oficial de Comando e Controle.", "Sargento de Dia, Despachante de Dia e Auxiliar do Oficial de Dia."],
        correctAnswer: 2 // Resposta correta
    },
    {
        question: "Segundo o Art. 3º, qual é a duração padrão dos serviços de escala?",
        options: ["8 horas.", "12 horas.", "24 horas.", "Indeterminada."],
        correctAnswer: 2 // Resposta correta
    },
    {
        question: "Quais critérios podem ser adotados para escalas de serviços de segurança?",
        options: ["Turnos de 4 horas na sede das OM.", "Turnos de até 8 horas na sede das OM e 12 horas em desdobramentos externos.", "Turnos de 6 horas em qualquer situação.", "Apenas turnos de 12 horas, independentemente do local."],
        correctAnswer: 1 // Resposta correta
    },
    {
        question: "Quem é responsável por detalhar as normas complementares de cada serviço nas OM?",
        options: [
            "O Comandante da Guarda.",
            "O Oficial de Dia.",
            "O Comandante, Chefe, Diretor ou Prefeito da OM.",
            "O Adjunto ao Oficial de Permanência Operacional."
        ],
        correctAnswer: 2
    },
    {
        question: "Segundo o Art. 14, o que caracteriza a Escala de Serviço?",
        options: [
            "Uma lista aleatória de militares.",
            "Um documento configurado em relação nominal de militares ou fração de tropa.",
            "Um planejamento semanal de atividades operacionais.",
            "Uma rotina de manutenção das OM."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o intervalo mínimo entre dois serviços de escala para o mesmo militar, salvo exceções?",
        options: [
            "24 horas.",
            "36 horas.",
            "48 horas.",
            "72 horas."
        ],
        correctAnswer: 2
    },
    {
        question: "Quais são os critérios para designar um militar para um serviço de escala?",
        options: [
            "A experiência do militar em escalas similares.",
            "O grau hierárquico e a disponibilidade.",
            "A menor quantidade de serviços executados na mesma escala.",
            "A critério exclusivo do Comandante da OM."
        ],
        correctAnswer: 2
    },
    {
        question: "Quem supervisiona o cerimonial de entrada de serviço nas OM?",
        options: [
            "O Oficial de Dia.",
            "O Adjunto ao Oficial de Dia.",
            "O setor responsável pelo cerimonial militar.",
            "O Comandante da Guarda."
        ],
        correctAnswer: 2
    },
    {
        question: "Qual é a finalidade do cerimonial de entrada de serviço?",
        options: [
            "Marcar o início da jornada administrativa.",
            "Realçar a responsabilidade do pessoal de serviço.",
            "Apresentar novos integrantes das equipes.",
            "Apenas executar a troca de turno."
        ],
        correctAnswer: 1
    },
    {
        question: "Quem é responsável pela condução das atividades de segurança e defesa fora do horário administrativo?",
        options: [
            "Oficial de Dia.",
            "Cabo da Guarda.",
            "Comandante da Guarda.",
            "Adjunto ao Oficial de Permanência Operacional."
        ],
        correctAnswer: 0
    },
    {
        question: "O Oficial de Operações tem qual atribuição principal?",
        options: [
            "Inspecionar a limpeza da OM.",
            "Fiscalizar as atividades administrativas.",
            "Prestar assistência direta a aeronaves e tripulações em trânsito.",
            "Executar manutenção dos equipamentos de solo."
        ],
        correctAnswer: 2
    },
    {
        question: "O que é exigido do Adjunto ao Oficial de Dia?",
        options: [
            "Permanecer no local designado durante a ausência do Oficial de Dia.",
            "Substituir integralmente o Oficial de Dia.",
            "Elaborar escalas de serviço.",
            "Supervisionar os serviços do rancho."
        ],
        correctAnswer: 0
    },{
        question: "O que deve ser registrado no Livro de Ocorrências pelos integrantes da equipe de serviço?",
        options: [
            "Apenas as faltas dos militares.",
            "Todos os eventos relevantes durante o serviço.",
            "Informações administrativas do dia anterior.",
            "As atividades planejadas para o próximo turno."
        ],
        correctAnswer: 1
    },
    {
        question: "Quem realiza a substituição das sentinelas na guarda?",
        options: [
            "O Oficial de Dia.",
            "O Comandante da Guarda.",
            "O Cabo da Guarda.",
            "O Adjunto ao Oficial de Dia."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é a principal incumbência do Superior de Dia?",
        options: [
            "Coordenar a segurança e defesa da organização na ausência do Comandante.",
            "Supervisionar os refeitórios.",
            "Realizar manutenções preventivas.",
            "Auxiliar o Oficial de Dia."
        ],
        correctAnswer: 0
    },
    {
        question: "Qual é o objetivo do Plano de Emergência Aeronáutica em Aeródromo (PEAA)?",
        options: [
            "Supervisionar aeronaves em trânsito.",
            "Coordenar atividades durante emergências aeronáuticas.",
            "Fiscalizar materiais aeronáuticos.",
            "Gerenciar o transporte de passageiros."
        ],
        correctAnswer: 1
    },
    {
        question: "Em quais casos o Adjunto ao Oficial de Dia pode ausentar-se do local de serviço?",
        options: [
            "Em caso de autorização pelo Oficial de Dia.",
            "Para realizar rondas obrigatórias.",
            "Em turnos de mais de 8 horas.",
            "Durante o intervalo de alimentação."
        ],
        correctAnswer: 0
    },
    {
        question: "Qual é a função do Cabo da Guarda?",
        options: [
            "Supervisionar o revezamento das sentinelas.",
            "Coordenar o cerimonial de entrada de serviço.",
            "Atuar como substituto do Comandante da Guarda.",
            "Auxiliar diretamente o Oficial de Dia."
        ],
        correctAnswer: 0
    },
    {
        question: "Quem pode concorrer ao serviço de Farmacêutico Bioquímico de Dia?",
        options: [
            "Sargentos da especialidade.",
            "Oficiais da área de saúde.",
            "Capitães, Tenentes e Aspirantes a Oficial Farmacêutico.",
            "Suboficiais do setor de farmácia."
        ],
        correctAnswer: 2
    },
    {
        question: "Qual é a responsabilidade do Enfermeiro de Dia?",
        options: [
            "Executar manutenções em equipamentos médicos.",
            "Coordenar a assistência de enfermagem.",
            "Supervisionar o transporte de pacientes.",
            "Realizar rondas para verificar a higiene do rancho."
        ],
        correctAnswer: 1
    },
    {
        question: "Quem pode atuar como Oficial de Recepção de Autoridades?",
        options: [
            "Aspirantes a Oficial de qualquer quadro.",
            "Oficiais de saúde.",
            "Capitães designados pelo Comandante.",
            "Sargentos com treinamento em protocolo."
        ],
        correctAnswer: 2
    },
    {
        question: "Qual documento deve conter todas as ocorrências de um serviço?",
        options: [
            "Livro de Partes do Oficial de Dia.",
            "Plano de Emergência Operacional.",
            "Manual de Procedimentos de Segurança.",
            "Livro de Contingência."
        ],
        correctAnswer: 0
    },
    {
        question: "Qual é a frequência mínima de inspeções nos locais de trabalho e nos serviços executados?",
        options: [
            "Diariamente, durante o horário administrativo.",
            "Semanalmente, conforme determinação do Comandante.",
            "A cada turno de serviço.",
            "Mensalmente, como parte de relatórios gerais."
        ],
        correctAnswer: 0
    },
    {
        question: "Quem é responsável por aprovar a Escala Geral de Serviço?",
        options: [
            "O Oficial de Dia.",
            "O Adjunto ao Oficial de Dia.",
            "O Comandante, Chefe ou Diretor da OM.",
            "O Setor de Recursos Humanos."
        ],
        correctAnswer: 2
    },
    {
        question: "Em que situações é permitido alterar a Escala de Serviço já aprovada?",
        options: [
            "Somente com autorização do Adjunto ao Oficial de Dia.",
            "Sempre que houver necessidade operacional urgente.",
            "Quando houver motivos plenamente justificados e aprovados pelo Comandante.",
            "Em caso de indisponibilidade de pessoal."
        ],
        correctAnswer: 2
    },
    {
        question: "O que caracteriza a função do Supervisor de Serviço?",
        options: [
            "Auxiliar o Oficial de Dia em suas tarefas administrativas.",
            "Conduzir rondas e avaliar o desempenho dos subordinados no serviço.",
            "Fiscalizar a segurança de armamentos na OM.",
            "Realizar inspeções apenas em áreas de acesso restrito."
        ],
        correctAnswer: 1
    },
    {
        question: "Quais são os horários típicos para a rendição de serviço nas OM?",
        options: [
            "Apenas ao meio-dia.",
            "Às 8h, 12h e 18h.",
            "Conforme a escala aprovada, sem horário fixo.",
            "Às 8h, salvo situações excepcionais."
        ],
        correctAnswer: 3
    },
    {
        question: "Quais serviços são designados exclusivamente a Oficiais?",
        options: [
            "Supervisão de Refeições.",
            "Adjunto ao Oficial de Dia.",
            "Oficial de Dia e Oficial de Operações.",
            "Cabo da Guarda e Adjunto ao Oficial."
        ],
        correctAnswer: 2
    },
    {
        question: "Qual documento oficial regulamenta o RISAER?",
        options: [
            "Manual de Instrução e Conduta.",
            "Portaria do Comandante da Aeronáutica.",
            "Decreto-lei que institui o Estatuto dos Militares.",
            "Normas Internas da Força Aérea Brasileira."
        ],
        correctAnswer: 1
    },
    {
        question: "Quais são os principais objetivos do serviço de guarda nas OM?",
        options: [
            "Proteger bens materiais e fiscalizar a entrada e saída de pessoas.",
            "Realizar rondas em áreas administrativas.",
            "Supervisionar o trabalho dos setores operacionais.",
            "Acompanhar o transporte de cargas."
        ],
        correctAnswer: 0
    },
    {
        question: "Como deve ser tratado um militar que apresente problema de conduta no serviço de escala?",
        options: [
            "Submetido a um Conselho Disciplinar imediatamente.",
            "Substituído do serviço e encaminhado ao setor competente para análise.",
            "Notificado verbalmente pelo Oficial de Dia.",
            "Afastado do serviço sem registro no Livro de Ocorrências."
        ],
        correctAnswer: 1
    },
    {
        question: "O que é prioridade para militares escalados em serviços externos?",
        options: [
            "Atender chamadas do Comandante da Guarda.",
            "Cumprir os horários estabelecidos na rotina diária.",
            "Garantir segurança e vigilância nos desdobramentos externos.",
            "Participar de todas as reuniões administrativas da OM."
        ],
        correctAnswer: 2
    }
    
];

// Dados das questões de Rcont
const rcontQuizData = [
    {
        question: "Qual é a finalidade do Regulamento de Continências, Honras, Sinais de Respeito e Cerimonial Militar das Forças Armadas?",
        options: [
            "Regular apenas os sinais de respeito entre superiores e subordinados.",
            "Estabelecer as normas de apresentação, tratamento e cerimonial militar.",
            "Determinar os dias de folga dos militares.",
            "Organizar as competências das diferentes Forças Armadas."
        ],
        correctAnswer: 1
    },
    {
        question: "Segundo o regulamento, a continência é dirigida:",
        options: [
            "À pessoa do superior hierárquico.",
            "À autoridade investida e não à pessoa.",
            "Apenas aos símbolos nacionais.",
            "Apenas durante cerimônias oficiais."
        ],
        correctAnswer: 1
    },
    {
        question: "Quando um militar fardado entra em um recinto coberto, ele deve:",
        options: [
            "Permanecer fardado e de cabeça coberta.",
            "Descobrir-se, exceto se estiver armado com armas longas.",
            "Apenas cumprimentar verbalmente os superiores.",
            "Retirar-se imediatamente."
        ],
        correctAnswer: 1
    },
    {
        question: "Em qual ocasião o Hino Nacional é tocado em cerimônias militares?",
        options: [
            "Somente durante desfiles cívicos.",
            "Sempre que uma autoridade estrangeira estiver presente.",
            "Na hasteagem da Bandeira Nacional e em eventos solenes.",
            "Apenas no Dia da Independência."
        ],
        correctAnswer: 2
    },
    {
        question: "Para saudar um superior em um local de circulação estreito, um militar deve:",
        options: [
            "Ignorar a presença do superior.",
            "Franquear a passagem ao superior e permanecer de frente para ele.",
            "Oferecer um cumprimento verbal apenas.",
            "Aguardar que o superior passe sem qualquer gesto."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o tratamento formal utilizado para se dirigir ao Ministro de Estado da Defesa?",
        options: [
            "Senhor Ministro ou Vossa Excelência.",
            "Senhor General.",
            "Senhor Comandante.",
            "Senhor Diretor."
        ],
        correctAnswer: 0
    },
    {
        question: "Em qual situação é dispensada a continência individual durante o Hino Nacional?",
        options: [
            "Quando o hino é cantado em um evento esportivo.",
            "Durante cerimônia religiosa.",
            "Em solenidades ao ar livre.",
            "Quando a tropa está em deslocamento."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual atitude caracteriza respeito e disciplina em todas as circunstâncias?",
        options: [
            "Cordialidade sem rigidez.",
            "Atitudes espontâneas sem necessidade de correção.",
            "Gestos regulamentares de saudação e correção de atitudes.",
            "Apenas o uso de uniforme adequado."
        ],
        correctAnswer: 2
    },
    {
        question: "A quem é obrigatória a prestação de continência pelos militares?",
        options: [
            "Apenas aos superiores hierárquicos imediatos.",
            "Aos símbolos nacionais e autoridades definidas pelo regulamento.",
            "Exclusivamente ao Presidente da República.",
            "Somente a outras tropas."
        ],
        correctAnswer: 1
    },
    {
        question: "Em uma organização militar, onde se posiciona o lugar de honra em banquetes?",
        options: [
            "No centro, do lado maior da mesa principal.",
            "Ao lado direito do anfitrião.",
            "Próximo à entrada principal.",
            "Sempre à cabeceira da mesa."
        ],
        correctAnswer: 0
    },
    {
        question: "Qual é o comportamento exigido de um militar ao falar com um superior?",
        options: [
            "Utilizar sempre a palavra “você” como tratamento.",
            "Dirigir-se formalmente com 'Senhor' ou 'Senhora'.",
            "Usar saudação informal, dependendo da situação.",
            "Apenas entregar a mensagem sem falar."
        ],
        correctAnswer: 1
    },
    {
        question: "Em desfiles, a continência é feita:",
        options: [
            "Quando a tropa está a trinta passos do homenageado.",
            "Apenas após a passagem do homenageado.",
            "Quando a tropa está a quinze passos do homenageado.",
            "A dez passos antes e quinze passos após o homenageado."
        ],
        correctAnswer: 3
    },
    {
        question: "O militar fardado descobre-se ao:",
        options: [
            "Entrar em templos religiosos.",
            "Participar de competições esportivas.",
            "Entrar em ambiente militar.",
            "Cumprimentar outros militares."
        ],
        correctAnswer: 0
    },
    {
        question: "Em quais situações os sinais de respeito e apreço são obrigatórios?",
        options: [
            "Apenas em serviço ou cerimônias oficiais.",
            "Em todas as situações da vida militar.",
            "Durante eventos sociais de caráter militar.",
            "Somente em missões de campo."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual o procedimento para o militar se apresentar a um superior?",
        options: [
            "Fazer a continência, dizer seu nome e a razão da apresentação.",
            "Apenas saudar verbalmente e pedir permissão.",
            "Permanecer em silêncio até ser autorizado a falar.",
            "Entregar um documento com seus dados."
        ],
        correctAnswer: 0
    },
    {
        question: "Em que circunstância o militar deve assumir posição de sentido sem prestar continência?",
        options: [
            "Quando estiver com ambas as mãos ocupadas.",
            "Ao cumprimentar civis.",
            "Durante a execução do Hino Nacional.",
            "Quando portando armas de grande porte."
        ],
        correctAnswer: 0
    },
    {
        question: "Quem tem direito à continência da tropa formada?",
        options: [
            "Apenas o Presidente da República.",
            "Autoridades mencionadas no artigo 16 do regulamento.",
            "Civis presentes a eventos militares.",
            "Superiores hierárquicos em traje civil."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o procedimento correto ao encontrar um superior em um refeitório?",
        options: [
            "Saír do local imediatamente.",
            "Pedir permissão para sentar-se à mesa.",
            "Levantar-se, se estiver na mesa da autoridade.",
            "Continuar a refeição normalmente."
        ],
        correctAnswer: 2
    },
    {
        question: "A continência à Bandeira Nacional deve ser feita:",
        options: [
            "Apenas durante hasteamentos oficiais.",
            "Sempre que o militar avistar a Bandeira Nacional.",
            "Somente em desfiles.",
            "Durante a execução do Hino Nacional."
        ],
        correctAnswer: 1
    },
    {
        question: "Como um militar se despede de um superior após apresentar-se?",
        options: [
            "Apenas virando-se e saindo.",
            "Fazendo a continência, pedindo permissão e saindo.",
            "Aguardando o superior deixar o local.",
            "Apenas dizendo 'até logo'."
        ],
        correctAnswer: 1
    }
];

// Dados das questões de Rdaer
const rdaerQuizData = [
    {
        question: "Qual é a abrangência do RDAER conforme o Art. 1º?",
        options: [
            "Apenas os militares da ativa da Aeronáutica.",
            "Militares da ativa, da reserva remunerada e os reformados.",
            "Exclusivamente militares em missão de prontidão.",
            "Oficiais e praças em serviço operacional."
        ],
        correctAnswer: 1
    },
    {
        question: "Segundo o Art. 2º, qual é o dever do subordinado ao receber uma ordem obscura?",
        options: [
            "Solicitar esclarecimentos ao superior no ato do recebimento.",
            "Cumpri-la imediatamente sem questionar.",
            "Apresentar reclamação formal após o cumprimento.",
            "Reportá-la diretamente à autoridade superior."
        ],
        correctAnswer: 0
    },
    {
        question: "Qual é o objetivo principal de uma punição disciplinar, conforme o Art. 6º?",
        options: [
            "Promover a demissão do punido.",
            "Beneficiar o punido e fortalecer a disciplina da OM.",
            "Garantir a execução eficiente das ordens.",
            "Penalizar severamente o transgressor."
        ],
        correctAnswer: 1
    },
    {
        question: "De acordo com o Art. 8º, o que diferencia um crime militar de uma transgressão disciplinar?",
        options: [
            "O crime militar é sempre cometido por oficiais.",
            "O crime militar representa uma ofensa mais grave ao dever militar.",
            "A transgressão disciplinar não possui implicações legais.",
            "A transgressão disciplinar é aplicável apenas em tempos de paz."
        ],
        correctAnswer: 1
    },
    {
        question: "Quando há concurso entre crime militar e transgressão disciplinar, o que ocorre conforme o Art. 9º?",
        options: [
            "Aplica-se apenas a penalidade relativa ao crime.",
            "Ambas as penalidades são aplicadas simultaneamente.",
            "A transgressão é ignorada.",
            "Apenas o superior imediato decide a penalidade."
        ],
        correctAnswer: 0
    },
    {
        question: "Quais são as principais categorias de transgressões disciplinares conforme o Art. 11?",
        options: [
            "Graves, moderadas e leves.",
            "Graves, médias e leves.",
            "Críticas, regulares e menores.",
            "Importantes, secundárias e insignificantes."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é a relação entre circunstâncias justificativas e o julgamento de transgressões?",
        options: [
            "As justificativas tornam obrigatória a aplicação de punição leve.",
            "A punição não é aplicada quando reconhecida uma justificativa.",
            "Apenas oficiais podem alegar justificativas.",
            "As justificativas são irrelevantes para o julgamento."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é a punição disciplinar mais severa prevista no RDAER?",
        options: [
            "Repreensão.",
            "Detenção.",
            "Exclusão a bem da disciplina.",
            "Prisão."
        ],
        correctAnswer: 2
    },
    {
        question: "Quem pode aplicar a exclusão a bem da disciplina, conforme o Art. 29?",
        options: [
            "O comandante da organização militar.",
            "Oficiais superiores em função.",
            "O Ministro da Aeronáutica ou autoridades delegadas.",
            "Qualquer superior hierárquico imediato."
        ],
        correctAnswer: 2
    },
    {
        question: "O que é previsto para praças sem estabilidade assegurada, conforme o Art. 26?",
        options: [
            "Exclusão automática após qualquer punição grave.",
            "Licenciamento a bem da disciplina em caso de conduta inconveniente.",
            "Prisão imediata após transgressão disciplinar leve.",
            "Transferência para outra organização militar."
        ],
        correctAnswer: 1
    },
    {
        question: "Como é classificado o comportamento militar de uma praça com 10 anos consecutivos de serviço sem punições?",
        options: [
            "Ótimo.",
            "Bom.",
            "Excelente.",
            "Insuficiente."
        ],
        correctAnswer: 2
    },
    {
        question: "Qual a competência de um comandante de OM em relação a transgressões disciplinares?",
        options: [
            "Aplicar punições apenas até o nível de repreensão.",
            "Punir subordinados em outra organização sem notificação.",
            "Delegar a aplicação de punições disciplinares a terceiros.",
            "Aplicar punições dentro dos limites definidos no regulamento."
        ],
        correctAnswer: 3
    },
    {
        question: "O que deve conter na publicação de uma punição disciplinar, conforme o Art. 36?",
        options: [
            "Apenas o nome do transgressor.",
            "A transgressão cometida, a classificação e a punição aplicada.",
            "Informações sigilosas sobre o ocorrido.",
            "Apenas a classificação da transgressão."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o limite máximo de detenção para transgressões leves?",
        options: [
            "5 dias.",
            "10 dias.",
            "15 dias.",
            "20 dias."
        ],
        correctAnswer: 1
    },
    {
        question: "Quando uma punição pode ser anulada, conforme o Art. 48?",
        options: [
            "Apenas por decisão judicial.",
            "Em caso de reconhecimento de ilegalidade, irregularidade ou injustiça.",
            "Se o transgressor completar 10 anos de serviço.",
            "Quando solicitada pelo superior imediato."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é a prioridade ao se aplicar uma punição disciplinar?",
        options: [
            "Garantir o rigor excessivo.",
            "Considerar as circunstâncias atenuantes e agravantes.",
            "Priorizar a aplicação de penas graves.",
            "Seguir exclusivamente o regulamento sem interpretações adicionais."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o prazo para o militar pedir reconsideração de ato disciplinar?",
        options: [
            "5 dias corridos.",
            "10 dias úteis.",
            "15 dias corridos.",
            "20 dias úteis."
        ],
        correctAnswer: 2
    },
    {
        question: "Quem pode representar contra ato de superior hierárquico, conforme o Art. 62?",
        options: [
            "Apenas oficiais da ativa.",
            "Qualquer militar diretamente afetado pelo ato.",
            "Somente suboficiais com 10 anos de serviço.",
            "Militares da reserva em situações de emergência."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o objetivo do elogio como recompensa disciplinar?",
        options: [
            "Isentar o militar de futuras punições.",
            "Reconhecer oficialmente o desempenho exemplar.",
            "Garantir promoção imediata.",
            "Permitir folgas extras ao militar recompensado."
        ],
        correctAnswer: 1
    },
    {
        question: "Quem pode conceder recompensas previstas no RDAER?",
        options: [
            "Apenas o Ministro da Aeronáutica.",
            "Autoridades definidas no Art. 42.",
            "Oficiais generais exclusivamente.",
            "Qualquer superior imediato."
        ],
        correctAnswer: 1
    }
];

// Dados das questões de Conhecimento BLM
const conhecimentoQuizData = [
    { 
        question: "Quem realizou o primeiro voo controlado e documentado em um aparelho mais pesado que o ar?", 
        options: ["Bartolomeu de Gusmão", "Alberto Santos Dumont", "Irmãos Wright", "Dédalo e Ícaro"], 
        correctAnswer: 2 
    },
    { 
        question: "Qual a principal contribuição de Bartolomeu de Gusmão para a história da aviação?", 
        options: ["Construção de asas mecânicas", "Desenvolvimento do 14 Bis", "Criação de um balão de ar quente", "Primeira descrição do motor a jato"], 
        correctAnswer: 2 
    },
    { 
        question: "O que é a fuselagem de uma aeronave?", 
        options: ["A parte que estabiliza o avião durante o voo", "A estrutura onde asas e estabilizadores estão fixados", "O conjunto de cauda formado pelos estabilizadores", "O motor e hélice de propulsão"], 
        correctAnswer: 2 
    },
    { 
        question: "Qual a função principal das asas de uma aeronave?", 
        options: ["Gerar tração necessária para o voo", "Transportar a carga útil", "Criar força de sustentação aerodinâmica", "Suportar o avião no solo"], 
        correctAnswer: 3 
    },
    { 
        question: "O aileron é responsável por qual movimento da aeronave?", 
        options: ["Subir e descer o nariz do avião", "Girar em torno do eixo longitudinal", "Movimentar o nariz para direita ou esquerda", "Estabilizar o avião no solo"], 
        correctAnswer: 2 
    },
    { 
        question: "O leme de direção está localizado em qual parte da aeronave?", 
        options: ["Bordo de fuga das asas", "Estabilizador horizontal", "Bordo de fuga do estabilizador vertical", "Grupo motopropulsor"], 
        correctAnswer: 3 
    },
    { 
        question: "Qual a sigla nacional para a gasolina de aviação?", 
        options: ["JP-3", "QAV-1", "AV GAS 100", "JET-A-1"], 
        correctAnswer: 3 
    },
    { 
        question: "Motores a reação utilizam que tipo de combustível?", 
        options: ["Gasolina", "Querosene", "Diesel", "Álcool"], 
        correctAnswer: 2 
    },
    { 
        question: "Qual o papel principal do SILOMS na logística de manutenção?", 
        options: ["Controlar o tráfego aéreo", "Automatizar as operações de voo", "Padronizar formulários e procedimentos", "Supervisionar os pilotos"], 
        correctAnswer: 3 
    },
    { 
        question: "Qual das ferramentas abaixo é mais indicada para trabalhos delicados?", 
        options: ["Chave de fenda comum", "Chave de boca", "Chave de fenda fina", "Alicate de corte diagonal"], 
        correctAnswer: 3 
    },
    { 
        question: "O núcleo de um átomo é composto por:", 
        options: ["Elétrons e prótons", "Prótons e nêutrons", "Elétrons e nêutrons", "Prótons, nêutrons e elétrons"], 
        correctAnswer: 2 
    },
    { 
        question: "O que é um íon positivo?", 
        options: ["Átomo que ganhou elétrons", "Átomo que perdeu elétrons", "Átomo com número igual de prótons e elétrons", "Corpo com excesso de nêutrons"], 
        correctAnswer: 2 
    },
    { 
        question: "O que ocorre ao redor de um condutor percorrido por corrente elétrica?", 
        options: ["Formação de uma onda sonora", "Geração de calor", "Criação de um campo magnético", "Produção de luz visível"], 
        correctAnswer: 3 
    },
    { 
        question: "O eletroímã é controlado por:", 
        options: ["Tensão constante", "Corrente elétrica", "Resistência variável", "Magnetismo natural"], 
        correctAnswer: 2 
    },
    { 
        question: "Qual equipamento auxilia no içamento de motores em aeronaves?", 
        options: ["Garfo de reboque", "Guindaste", "Unidade auxiliar de partida", "Bancada hidráulica"], 
        correctAnswer: 2 
    },
    { 
        question: "Qual é a função do arco de velocidade?", 
        options: ["Aumentar o torque de parafusos", "Substituir chaves ajustáveis", "Garantir rapidez nas operações", "Proteger a estrutura do avião"], 
        correctAnswer: 3 
    },
    { 
        question: "Materiais como borracha são classificados como:", 
        options: ["Bons condutores", "Isolantes", "Ferromagnéticos", "Semicondutores"], 
        correctAnswer: 2 
    },
    { 
        question: "A resistência elétrica é influenciada por:", 
        options: ["Diferença de potencial", "Resistividade e comprimento do condutor", "Somente pela área do condutor", "Tipo de campo magnético"], 
        correctAnswer: 2 
    },
    { 
        question: "Qual a principal causa de corrosão em aeronaves?", 
        options: ["Exposição à luz solar", "Contato com combustíveis", "Ação de agentes químicos e ambientais", "Uso de materiais ferromagnéticos"], 
        correctAnswer: 3 
    },
    { 
        question: "O tratamento anticorrosivo busca:", 
        options: ["Aumentar o peso das aeronaves", "Melhorar a eficiência aerodinâmica", "Proteger contra desgastes químicos", "Reduzir a capacidade de carga"], 
        correctAnswer: 3 
    },
    { 
        question: "Qual a principal função do trem de pouso?", 
        options: ["Criar sustentação durante o voo", "Estabilizar o avião no ar", "Permitir manobras no solo e suportar o avião no chão", "Auxiliar no controle da aeronave durante a decolagem"], 
        correctAnswer: 3 
    },
    { 
        question: "O que define a “letra de série” em uma aeronave?", 
        options: ["O tipo de aeronave na missão básica", "Modificações que alteram desempenho ou manutenção", "Código do projeto no SILOMS", "Símbolo do tipo de motor utilizado"], 
        correctAnswer: 2 
    },
    { 
        question: "O que são Equipamentos de Apoio Solo (EAS)?", 
        options: ["Ferramentas usadas para transporte de passageiros", "Equipamentos utilizados em manutenção de pista e hangar", "Sistemas de propulsão suplementar", "Dispositivos de controle de voo automático"], 
        correctAnswer: 2 
    },
    { 
        question: "Qual dispositivo é usado para travar as superfícies de comando durante a manutenção?", 
        options: ["Unidade auxiliar de partida", "Dispositivo de travamento de superfícies", "Bancada de teste hidráulico", "Plataforma móvel"], 
        correctAnswer: 2 
    },
    { 
        question: "Quais combustíveis são utilizados em motores a reação?", 
        options: ["AV GAS 100 e gasolina comum", "QAV-1 e querosene", "Diesel e álcool", "JP-3 e QAV-1"], 
        correctAnswer: 2 
    },
    { 
        question: "Qual é a diferença principal entre o QAV-1 e o AV GAS 100?", 
        options: ["Composição química", "Usabilidade em aeronaves comerciais e militares", "Eficiência energética", "Tipo de motor utilizado"], 
        correctAnswer: 4 
    },
    { 
        question: "Qual unidade mede a resistência elétrica?", 
        options: ["Ampère (A)", "Volt (V)", "Ohm (Ω)", "Watt (W)"], 
        correctAnswer: 3 
    },
    { 
        question: "Um material com alta resistividade possui qual característica?", 
        options: ["Alta condutividade elétrica", "Dificuldade para conduzir corrente elétrica", "Geração de grande quantidade de calor", "Facilidade em gerar magnetismo"], 
        correctAnswer: 2 
    },
    { 
        question: "O Efeito Joule é responsável por:", 
        options: ["Geração de calor em condutores", "Produção de luz em LEDs", "Movimentação de íons no gás", "Criação de campos magnéticos"], 
        correctAnswer: 1 
    },
    { 
        question: "Qual dispositivo aproveita o magnetismo gerado pela corrente elétrica para fechar um circuito?", 
        options: ["Relé", "Transformador", "Solenoide", "Gerador"], 
        correctAnswer: 1 
    }
];

// Dados das questões de Estatuto dos Militares
const estatutoQuizData = [
    {
        "question": "Qual é o objetivo principal do Estatuto dos Militares?",
        "options": [
            "Regular a situação dos civis",
            "Regular a situação, obrigações, deveres, direitos e prerrogativas dos membros das Forças Armadas",
            "Estabelecer normas para a educação militar",
            "Criar um novo sistema de defesa nacional"
        ],
        "correctAnswer": 1
    },
    {
        "question": "As Forças Armadas são constituídas por quais ramos?",
        "options": [
            "Marinha, Exército e Aeronáutica",
            "Marinha, Exército e Polícia",
            "Aeronáutica, Polícia e Corpo de Bombeiros",
            "Exército, Polícia e Defesa Civil"
        ],
        "correctAnswer": 0
    },
    {
        "question": "O que caracteriza a carreira militar?",
        "options": [
            "Atividade temporária",
            "Atividade continuada e devotada às finalidades das Forças Armadas",
            "Atividade civil",
            "Atividade acadêmica"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Qual das seguintes situações não é considerada 'na ativa'?",
        "options": [
            "Militares de carreira",
            "Militares temporários",
            "Alunos de órgão de formação de militares",
            "Militares reformados"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Os militares temporários adquirem estabilidade?",
        "options": [
            "Sim",
            "Não",
            "Somente em tempo de guerra",
            "Somente após cinco anos"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Quem é considerado militar da reserva remunerada?",
        "options": [
            "Um militar que nunca serviu na ativa",
            "Um militar que está dispensado da prestação de serviço na ativa mas recebe remuneração da União",
            "Um aluno de órgão de formação militar",
            "Um civil convocado para o serviço militar"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Qual é a base institucional das Forças Armadas?",
        "options": [
            "Democracia e liberdade",
            "Hierarquia e disciplina",
            "Igualdade e fraternidade",
            "Justiça e paz"
        ],
        "correctAnswer": 1
    },
    {
        "question": "A hierarquia militar é definida por:",
        "options": [
            "Antiguidade no posto ou graduação",
            "Competência técnica",
            "Tempo de serviço civil",
            "Idade do militar"
        ],
        "correctAnswer": 0
    },
    {
        "question": "O que é um cargo militar?",
        "options": [
            "Um título honorário concedido a civis",
            "Um conjunto de atribuições, deveres e responsabilidades cometidos a um militar em serviço ativo",
            "Uma posição temporária em uma missão civil",
            "Um cargo político no governo"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Os alunos de órgãos de formação de oficiais têm precedência sobre:",
        "options": [
            "Os Cabos",
            "Os Tenentes",
            "Os Generais",
            "Os Sargentos"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Qual é a principal função das Forças Armadas segundo o Estatuto?",
        "options": [
            "Proteger a propriedade privada",
            "Defender a Pátria e garantir os poderes constituídos",
            "Promover a educação militar",
            "Realizar operações comerciais"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Os militares da ativa são aqueles que:",
        "options": [
            "Estão em férias",
            "Estão dispensados do serviço militar",
            "Prestam serviço militar em caráter permanente ou temporário",
            "Estão em treinamento civil"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Qual das seguintes categorias não é considerada um militar?",
        "options": [
            "Militares da reserva remunerada",
            "Alunos de órgãos de formação militar",
            "Civis convocados para o serviço militar",
            "Funcionários públicos civis"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Os militares temporários se tornam parte da reserva:",
        "options": [
            "Após cinco anos de serviço",
            "Ao serem desligados do serviço ativo",
            "Quando promovidos a oficiais",
            "Após completar um curso de formação"
        ],
        "correctAnswer": 1
    },
    {
        "question": "A hierarquia militar é baseada em:",
        "options": [
            "Tempo de serviço civil",
            "Antiguidade no posto ou graduação",
            "Competência técnica",
            "Idade do militar"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Qual é a definição de disciplina no contexto militar?",
        "options": [
            "Liberdade para agir conforme desejado",
            "Observância rigorosa das leis e regulamentos militares",
            "Respeito apenas entre superiores e subordinados",
            "Flexibilidade nas normas estabelecidas"
        ],
        "correctAnswer": 1
    },
    {
        "question": "O que caracteriza um cargo militar?",
        "options": [
            "Um título honorário sem obrigações",
            "Um conjunto de atribuições, deveres e responsabilidades",
            "Uma posição temporária em uma missão civil",
            "Um emprego no setor privado"
        ],
        "correctAnswer": 1
    },
    {
        "question": "O ingresso nas Forças Armadas é facultado a:",
        "options": [
            "Apenas cidadãos brasileiros natos",
            "Todos os brasileiros que atendam aos requisitos legais",
            "Apenas aqueles com formação superior",
            "Somente militares reformados"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Qual é a condição necessária para matrícula em estabelecimentos de ensino militar?",
        "options": [
            "Ser maior de idade",
            "Não ter antecedentes criminais e ser apto fisicamente",
            "Ter experiência prévia em atividades militares",
            "Possuir diploma de ensino médio"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Os alunos de órgãos de formação têm precedência sobre:",
        "options": [
            "Os Generais",
            "Os Cabos",
            "Os Tenentes",
            "Os Sargentos"
        ],
        "correctAnswer": 3
    },
    {
        "question": "A mobilização das Forças Armadas é regulada por:",
        "options": [
            "Normas internas das Forças Armadas apenas",
            "Legislação específica sobre o serviço militar",
            "Diretrizes do Ministério da Educação",
            "Decisões do Presidente da República"
        ],
        "correctAnswer": 1
    },
    {
        "question": "A condição jurídica dos militares é definida por:",
        "options": [
            "Apenas pela Constituição Federal",
            "Pelo Estatuto dos Militares e legislação aplicável",
            "Somente por normas internas das Forças Armadas",
            "Por convenções internacionais"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Os Capelães Militares são regidos por:",
        "options": [
            "Normas civis comuns",
            "Legislação específica para sua função",
            "O mesmo estatuto que os civis",
            "Regulamentação do Ministério da Justiça"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Qual é a definição de 'função militar'?",
        "options": [
            "Um cargo honorário sem responsabilidades",
            "O exercício das obrigações inerentes ao cargo militar",
            "Uma atividade voluntária sem regulamentação",
            "Um trabalho temporário fora das Forças Armadas"
        ],
        "correctAnswer": 1
    },
    {
        "question": "A precedência entre militares da ativa é assegurada pela:",
        "options": [
            "Antiguidade no posto ou graduação",
            "Competência técnica",
            "Idade do militar",
            "Tempo de serviço civil"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Os Guardas-Marinha têm precedência sobre:",
        "options": [
            "Os Tenentes",
            "As demais praças",
            "Os Generais",
            "Os Civis"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Qual dos seguintes não é considerado um militar da reserva?",
        "options": [
            "Militar da reserva remunerada",
            "Militar reformado",
            "Civil convocado para o serviço ativo",
            "Militar temporário desligado"
        ],
        "correctAnswer": 2
    },
    {
        "question": "A hierarquia militar é fundamental para:",
        "options": [
            "Garantir a igualdade entre todos os membros",
            "Organizar a autoridade e responsabilidade dentro das Forças Armadas",
            "Promover a liberdade individual dos militares",
            "Facilitar a comunicação com civis"
        ],
        "correctAnswer": 1
    },
    {
        "question": "O cargo militar é considerado vago quando:",
        "options": [
            "Criado, mas não ocupado por um militar",
            "O ocupante se encontra em licença médica",
            "O ocupante está em férias",
            "O ocupante foi promovido"
        ],
        "correctAnswer": 0
    },
    {
        "question": "As obrigações inerentes ao cargo militar devem ser compatíveis com:",
        "options": [
            "O grau hierárquico correspondente e as normas legais",
            "As preferências pessoais do ocupante do cargo",
            "As diretrizes do Ministério da Educação",
            "As normas internacionais"
        ],
        "correctAnswer": 0
    },
    {
        "question": "A condição 'na ativa' refere-se a:",
        "options": [
            "Militares que estão em treinamento civil",
            "Militares que prestam serviços temporários fora das Forças Armadas",
            "Militares que exercem funções, cargos ou atividades militares ativas",
            "Militares aposentados que ainda recebem salário"
        ],
        "correctAnswer": 2
    },
    {
        "question": "O que define o grau hierárquico do oficial?",
        "options": [
            "O tempo de serviço civil",
            "O ato do Presidente da República ou Ministro de Força Singular",
            "O desempenho em atividades acadêmicas",
            "O número de missões cumpridas"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Os alunos dos órgãos de formação têm precedência sobre quais praças?",
        "options": [
            "Os Sargentos",
            "Os Cabos",
            "Os Generais",
            "Os Tenentes"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Qual artigo estabelece que os militares são servidores da Pátria?",
        "options": [
            "Artigo 1º",
            "Artigo 3º",
            "Artigo 5º",
            "Artigo 7º"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Qual é uma característica dos militares temporários?",
        "options": [
            "Eles têm estabilidade no cargo",
            "Eles podem ser convocados para o serviço ativo",
            "Eles são considerados oficiais permanentes",
            "Eles não podem ser mobilizados"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Os direitos e deveres dos militares são definidos por:",
        "options": [
            "Somente pela Constituição",
            "Estatuto dos Militares e legislação aplicável",
            "Normas internas das Forças Armadas apenas",
            "Diretrizes do Ministério da Defesa"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Os oficiais-generais nomeados Ministros do Superior Tribunal Militar são regidos por:",
        "options": [
            "Estatuto dos Militares",
            "Legislação específica",
            "Normas civis comuns",
            "Regulamentação do Ministério da Justiça"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Os integrantes da reserva podem ser designados para o serviço ativo em tempo de paz mediante:",
        "options": [
            "Convocação obrigatória",
            "Aceitação voluntária",
            "Licença especial",
            "Ordem direta do Presidente"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Quem pode ser convocado para o serviço ativo durante uma mobilização?",
        "options": [
            "Somente os militares da ativa",
            "Qualquer cidadão brasileiro, se convocado ou mobilizado",
            "Apenas os oficiais superiores",
            "Apenas os alunos dos órgãos de formação"
        ],
        "correctAnswer": 1
    },
    {
        "question": "As Polícias Militares são consideradas parte da:",
        "options": [
            "Reserva das Forças Armadas",
            "Atividade civil",
            "Administração pública",
            "Segurança privada"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Os Cabos têm precedência sobre quais alunos?",
        "options": [
            "Alunos dos cursos técnicos",
            "Alunos das escolas ou centros de formação de sargentos",
            "Alunos universitários",
            "Alunos civis"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Qual artigo menciona as condições para matrícula em estabelecimentos de ensino militar?",
        "options": [
            "Artigo 10",
            "Artigo 11",
            "Artigo 12",
            "Artigo 13"
        ],
        "correctAnswer": 2
    },
    {
        "question": "A disciplina deve ser mantida entre quais grupos?",
        "options": [
            "Apenas entre os oficiais superiores",
            "Todos os componentes, ativos e inativos, das Forças Armadas",
            "Somente entre os alunos dos cursos de formação",
            "Apenas entre os civis e militares"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Qual é uma condição necessária para a convocação em tempo de paz?",
        "options": [
            "Aprovação pelo Congresso Nacional",
            "Aceitação voluntária pelos integrantes da reserva",
            "Necessidade urgente reconhecida pelo Presidente",
            "Licença especial concedida"
        ],
        "correctAnswer": 2
    },
    {
        "question": "O que caracteriza a carreira militar?",
        "options": [
            "Atividade temporária e eventual",
            "Atividade continuada devotada às finalidades das Forças Armadas",
            "Atividade acadêmica sem obrigações práticas",
            "Atividade civil paralela ao serviço militar"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Qual artigo menciona as disposições preliminares do Estatuto dos Militares?",
        "options": [
            "Artigo 1º",
            "Artigo 2º",
            "Artigo 3º",
            "Artigo 4º"
        ],
        "correctAnswer": 0
    },
    {
        "question": "O que caracteriza um cargo militar como vago?",
        "options": [
            "Cargo criado, mas não ocupado",
            "Cargo ocupado por um oficial em licença",
            "Cargo temporariamente desativado",
            "Cargo não regulamentado"
        ],
        "correctAnswer": 0
    },
    {
        question: "Qual é a principal definição de militar, conforme o Estatuto dos Militares?",
        options: [
            "Todo cidadão que participa de missões de paz internacional",
            "Todo aquele que presta serviços exclusivamente no Exército",
            "Indivíduo que integra as Forças Armadas ou forças auxiliares do Estado",
            "Apenas oficiais que cumprem funções administrativas"
        ],
        correctAnswer: 2
    },
    {
        question: "As Forças Armadas são constituídas por:",
        options: [
            "Exército, Marinha, Aeronáutica e Polícia Militar",
            "Exército, Marinha e Aeronáutica",
            "Polícia Federal, Marinha e Exército",
            "Exército, Aeronáutica e Corpo de Bombeiros"
        ],
        correctAnswer: 1
    },
    {
        question: "Entre os deveres fundamentais do militar está:",
        options: [
            "A liberdade irrestrita de expressão",
            "A lealdade aos superiores hierárquicos",
            "O direito de promover manifestações públicas",
            "O sigilo total de suas ações internas"
        ],
        correctAnswer: 1
    },
    {
        question: "O militar possui o direito a:",
        options: [
            "Participação em sindicatos",
            "Férias anuais e licenças regulamentadas",
            "Manifestações públicas de teor político-partidário",
            "Greves dentro de limites aceitáveis"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o princípio fundamental que regula as relações entre militares?",
        options: [
            "Hierarquia e disciplina",
            "Liberdade e autonomia",
            "Igualdade e fraternidade",
            "Justiça e eficiência"
        ],
        correctAnswer: 0
    },
    {
        question: "A hierarquia militar é baseada em:",
        options: [
            "Igualdade de funções",
            "Ordenação da autoridade por postos e graduações",
            "Capacidade técnica individual",
            "Análise de mérito civil"
        ],
        correctAnswer: 1
    },
    {
        question: "O militar da ativa é aquele que:",
        options: [
            "Exerce atividade operacional em combate",
            "Está exclusivamente em missões internacionais",
            "Integra as Forças Armadas em exercício contínuo de suas funções",
            "Está afastado temporariamente para tratamento de saúde"
        ],
        correctAnswer: 2
    },
    {
        question: "Os militares reformados são aqueles que:",
        options: [
            "Estão em missões de paz",
            "Foram dispensados do serviço por incapacidade definitiva",
            "Estão em treinamento de alta performance",
            "Atingiram posto máximo na hierarquia"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual das atividades a seguir é permitida ao militar?",
        options: [
            "Participação ativa em sindicatos",
            "Exercício de funções civis compatíveis com a função militar",
            "Organização de greves para reivindicações salariais",
            "Candidatura a cargo político enquanto na ativa"
        ],
        correctAnswer: 1
    },
    {
        question: "O militar é proibido de:",
        options: [
            "Adotar postura de neutralidade em conflitos políticos",
            "Declarar-se em estado de greve",
            "Defender direitos fundamentais básicos",
            "Seguir normas hierárquicas divergentes"
        ],
        correctAnswer: 1
    }
];