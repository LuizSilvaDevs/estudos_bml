// Função para carregar o simulado de Risaer
function quizrisaer() {
    const risaerQuizForm = document.createElement('form');
    risaerQuizForm.id = 'risaerQuizForm';
    risaerQuizData.forEach((questionData, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question'); //classe para utilizar no CSS
        
        // Criando a pergunta
        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${questionData.question}`;
        questionDiv.appendChild(questionText);
        questionText.classList.add('pergunta_texto'); //classe para utilizar no CSS
        
        // Criando as opções de resposta
        questionData.options.forEach((option, i) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = "radio";
            input.name = `risaerQ${index}`;
            input.value = i;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            questionDiv.appendChild(label);

            label.classList.add('label_texto'); //classe para utilizar no CSS
            input.classList.add('input_resposta'); //classe para utilizar no CSS
        });

            
        // Adicionando a pergunta ao formulário
        risaerQuizForm.appendChild(questionDiv);
    });
    
    document.getElementById('simuladoContent').appendChild(risaerQuizForm);
}

// Função para carregar o simulado de Rcont
function quizrcont() {
    const rcontQuizForm = document.createElement('form');
    rcontQuizForm.id = 'rcontQuizForm';
    rcontQuizData.forEach((questionData, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question'); //classe para utilizar no CSS
        
        // Criando a pergunta
        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${questionData.question}`;
        questionDiv.appendChild(questionText);
        questionText.classList.add('pergunta_texto'); //classe para utilizar no CSS
        
        // Criando as opções de resposta
        questionData.options.forEach((option, i) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = "radio";
            input.name = `rcontQ${index}`;
            input.value = i;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            questionDiv.appendChild(label);

            label.classList.add('label_texto'); //classe para utilizar no CSS
            input.classList.add('input_resposta'); //classe para utilizar no CSS
        });

            
        // Adicionando a pergunta ao formulário
        rcontQuizForm.appendChild(questionDiv);
    });
    
    document.getElementById('simuladoContent').appendChild(rcontQuizForm);
}

// Função para carregar o simulado de Rdaer
function quizrdaer() {
    const rdaerQuizForm = document.createElement('form');
    rdaerQuizForm.id = 'rdaerQuizForm';
    rdaerQuizData.forEach((questionData, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question'); //classe para utilizar no CSS
        
        // Criando a pergunta
        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${questionData.question}`;
        questionDiv.appendChild(questionText);
        questionText.classList.add('pergunta_texto'); //classe para utilizar no CSS
        
        // Criando as opções de resposta
        questionData.options.forEach((option, i) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = "radio";
            input.name = `rdaerQ${index}`;
            input.value = i;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            questionDiv.appendChild(label);

            label.classList.add('label_texto'); //classe para utilizar no CSS
            input.classList.add('input_resposta'); //classe para utilizar no CSS
        });

            
        // Adicionando a pergunta ao formulário
        rdaerQuizForm.appendChild(questionDiv);
    });
    
    document.getElementById('simuladoContent').appendChild(rdaerQuizForm);
}

// Função para carregar o simulado de Conhecimento BLM
function quizconhecimento() {
    const conhecimentoQuizForm = document.createElement('form');
    conhecimentoQuizForm.id = 'conhecimentoQuizForm';
    conhecimentoQuizData.forEach((questionData, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question'); //classe para utilizar no CSS
        
        // Criando a pergunta
        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${questionData.question}`;
        questionDiv.appendChild(questionText);
        questionText.classList.add('pergunta_texto'); //classe para utilizar no CSS
        
        // Criando as opções de resposta
        questionData.options.forEach((option, i) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = "radio";
            input.name = `conhecimentoQ${index}`;
            input.value = i;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            questionDiv.appendChild(label);

            label.classList.add('label_texto'); //classe para utilizar no CSS
            input.classList.add('input_resposta'); //classe para utilizar no CSS
        });

            
        // Adicionando a pergunta ao formulário
        conhecimentoQuizForm.appendChild(questionDiv);
    });
    
    document.getElementById('simuladoContent').appendChild(conhecimentoQuizForm);
}

// Função para carregar o simulado de Estatudo dos Militares
function quizestatuto() {
    const estatutoQuizForm = document.createElement('form');
    estatutoQuizForm.id = 'estatutoQuizForm';
    estatutoQuizData.forEach((questionData, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question'); //classe para utilizar no CSS
        
        // Criando a pergunta
        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${questionData.question}`;
        questionDiv.appendChild(questionText);
        questionText.classList.add('pergunta_texto'); //classe para utilizar no CSS
        
        // Criando as opções de resposta
        questionData.options.forEach((option, i) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = "radio";
            input.name = `estatutoQ${index}`;
            input.value = i;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            questionDiv.appendChild(label);

            label.classList.add('label_texto'); //classe para utilizar no CSS
            input.classList.add('input_resposta'); //classe para utilizar no CSS
        });

            
        // Adicionando a pergunta ao formulário
        estatutoQuizForm.appendChild(questionDiv);
    });
    
    document.getElementById('simuladoContent').appendChild(estatutoQuizForm);
}