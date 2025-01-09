    // Função para verificar as respostas do Simulado de Risaer
    function checkRisaerAnswers() {
        const risaerQuizForm = document.getElementById('risaerQuizForm');
        const risaerResult = document.getElementById('risaerResult');
        risaerResult.innerHTML = ''; // Limpa os resultados anteriores

        let score = 0;

        // Verificando as respostas
        risaerQuizData.forEach((questionData, index) => {
            const selectedOption = risaerQuizForm.querySelector(`input[name="risaerQ${index}"]:checked`);
            const questionDiv = risaerQuizForm.querySelector(`.question:nth-of-type(${index + 1})`);
            
            if (selectedOption) {
                const selectedValue = parseInt(selectedOption.value);
                const correctAnswer = questionData.correctAnswer;

                if (selectedValue === correctAnswer) {
                    score++;
                    selectedOption.parentElement.classList.add('correct');
                    selectedOption.parentElement.classList.remove('incorrect');
                } else {
                    selectedOption.parentElement.classList.add('incorrect');
                    selectedOption.parentElement.classList.remove('correct');
                    
                    const correctLabel = questionDiv.querySelector(`input[value="${correctAnswer}"]`).parentElement;
                    let correctAnswerText = questionDiv.querySelector('.correct-answer');
                    
                    // Se a resposta está errada, mostra a resposta correta em vermelho
                    if (!correctAnswerText) {
                        correctAnswerText = document.createElement('p');
                        correctAnswerText.classList.add('incorrect-answer');
                        correctAnswerText.textContent = `Resposta correta: ${correctLabel.textContent.trim()}`;
                        questionDiv.appendChild(correctAnswerText);
                    }
                }
            }
        });

        // Exibindo o resultado
        risaerResult.innerHTML = `Você acertou ${score} de ${risaerQuizData.length} questões.`;
    }

     // Função para verificar as respostas do Simulado de Rcont
    function checkRcontAnswers() {
    const rcontQuizForm = document.getElementById('rcontQuizForm');
    const rcontResult = document.getElementById('rcontResult');
    rcontResult.innerHTML = ''; // Limpa os resultados anteriores

    let score = 0;

    // Verificando as respostas
    rcontQuizData.forEach((questionData, index) => {
        const selectedOption = rcontQuizForm.querySelector(`input[name="rcontQ${index}"]:checked`);
        const questionDiv = rcontQuizForm.querySelector(`.question:nth-of-type(${index + 1})`);
        
        if (selectedOption) {
            const selectedValue = parseInt(selectedOption.value);
            const correctAnswer = questionData.correctAnswer;

            if (selectedValue === correctAnswer) {
                score++;
                selectedOption.parentElement.classList.add('correct');
                selectedOption.parentElement.classList.remove('incorrect');
            } else {
                selectedOption.parentElement.classList.add('incorrect');
                selectedOption.parentElement.classList.remove('correct');
                
                const correctLabel = questionDiv.querySelector(`input[value="${correctAnswer}"]`).parentElement;
                let correctAnswerText = questionDiv.querySelector('.correct-answer');
                
                // Se a resposta está errada, mostra a resposta correta em vermelho
                if (!correctAnswerText) {
                    correctAnswerText = document.createElement('p');
                    correctAnswerText.classList.add('incorrect-answer');
                    correctAnswerText.textContent = `Resposta correta: ${correctLabel.textContent.trim()}`;
                    questionDiv.appendChild(correctAnswerText);
                }
            }
        }
    });

    // Exibindo o resultado
    rcontResult.innerHTML = `Você acertou ${score} de ${rcontQuizData.length} questões.`;
} 

   // Função para verificar as respostas do Simulado de Rdaer
   function checkRdaerAnswers() {
    const rdaerQuizForm = document.getElementById('rdaerQuizForm');
    const rdaerResult = document.getElementById('rdaerResult');
    rdaerResult.innerHTML = ''; // Limpa os resultados anteriores

    let score = 0;

    // Verificando as respostas
    rdaerQuizData.forEach((questionData, index) => {
        const selectedOption = rdaerQuizForm.querySelector(`input[name="rdaerQ${index}"]:checked`);
        const questionDiv = rdaerQuizForm.querySelector(`.question:nth-of-type(${index + 1})`);
        
        if (selectedOption) {
            const selectedValue = parseInt(selectedOption.value);
            const correctAnswer = questionData.correctAnswer;

            if (selectedValue === correctAnswer) {
                score++;
                selectedOption.parentElement.classList.add('correct');
                selectedOption.parentElement.classList.remove('incorrect');
            } else {
                selectedOption.parentElement.classList.add('incorrect');
                selectedOption.parentElement.classList.remove('correct');
                
                const correctLabel = questionDiv.querySelector(`input[value="${correctAnswer}"]`).parentElement;
                let correctAnswerText = questionDiv.querySelector('.correct-answer');
                
                // Se a resposta está errada, mostra a resposta correta em vermelho
                if (!correctAnswerText) {
                    correctAnswerText = document.createElement('p');
                    correctAnswerText.classList.add('incorrect-answer');
                    correctAnswerText.textContent = `Resposta correta: ${correctLabel.textContent.trim()}`;
                    questionDiv.appendChild(correctAnswerText);
                }
            }
        }
    });

    // Exibindo o resultado
    rdaerResult.innerHTML = `Você acertou ${score} de ${rdaerQuizData.length} questões.`;
} 

   // Função para verificar as respostas do Simulado de Conhecimento BLM
   function checkConhecimentoAnswers() {
    const conhecimentoQuizForm = document.getElementById('conhecimentoQuizForm');
    const conhecimentoResult = document.getElementById('conhecimentoResult');
    conhecimentoResult.innerHTML = ''; // Limpa os resultados anteriores

    let score = 0;

    // Verificando as respostas
    conhecimentoQuizData.forEach((questionData, index) => {
        const selectedOption = conhecimentoQuizForm.querySelector(`input[name="conhecimentoQ${index}"]:checked`);
        const questionDiv = conhecimentoQuizForm.querySelector(`.question:nth-of-type(${index + 1})`);
        
        if (selectedOption) {
            const selectedValue = parseInt(selectedOption.value);
            const correctAnswer = questionData.correctAnswer;

            if (selectedValue === correctAnswer) {
                score++;
                selectedOption.parentElement.classList.add('correct');
                selectedOption.parentElement.classList.remove('incorrect');
            } else {
                selectedOption.parentElement.classList.add('incorrect');
                selectedOption.parentElement.classList.remove('correct');
                
                const correctLabel = questionDiv.querySelector(`input[value="${correctAnswer}"]`).parentElement;
                let correctAnswerText = questionDiv.querySelector('.correct-answer');
                
                // Se a resposta está errada, mostra a resposta correta em vermelho
                if (!correctAnswerText) {
                    correctAnswerText = document.createElement('p');
                    correctAnswerText.classList.add('incorrect-answer');
                    correctAnswerText.textContent = `Resposta correta: ${correctLabel.textContent.trim()}`;
                    questionDiv.appendChild(correctAnswerText);
                }
            }
        }
    });

    // Exibindo o resultado
    conhecimentoResult.innerHTML = `Você acertou ${score} de ${conhecimentoQuizData.length} questões.`;
} 

   // Função para verificar as respostas do Simulado de Estatuto dos Militares
   function checkEstatutoAnswers() {
    const estatutoQuizForm = document.getElementById('estatutoQuizForm');
    const estatutoResult = document.getElementById('estatutoResult');
    estatutoResult.innerHTML = ''; // Limpa os resultados anteriores

    let score = 0;

    // Verificando as respostas
    estatutoQuizData.forEach((questionData, index) => {
        const selectedOption = estatutoQuizForm.querySelector(`input[name="estatutoQ${index}"]:checked`);
        const questionDiv = estatutoQuizForm.querySelector(`.question:nth-of-type(${index + 1})`);
        
        if (selectedOption) {
            const selectedValue = parseInt(selectedOption.value);
            const correctAnswer = questionData.correctAnswer;

            if (selectedValue === correctAnswer) {
                score++;
                selectedOption.parentElement.classList.add('correct');
                selectedOption.parentElement.classList.remove('incorrect');
            } else {
                selectedOption.parentElement.classList.add('incorrect');
                selectedOption.parentElement.classList.remove('correct');
                
                const correctLabel = questionDiv.querySelector(`input[value="${correctAnswer}"]`).parentElement;
                let correctAnswerText = questionDiv.querySelector('.correct-answer');
                
                // Se a resposta está errada, mostra a resposta correta em vermelho
                if (!correctAnswerText) {
                    correctAnswerText = document.createElement('p');
                    correctAnswerText.classList.add('incorrect-answer');
                    correctAnswerText.textContent = `Resposta correta: ${correctLabel.textContent.trim()}`;
                    questionDiv.appendChild(correctAnswerText);
                }
            }
        }
    });

    // Exibindo o resultado
    estatutoResult.innerHTML = `Você acertou ${score} de ${estatutoQuizData.length} questões.`;
} 