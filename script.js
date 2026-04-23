// ============================================
// ЗАДАНИЕ 1: Базовые функции
// ============================================
function min(a, b) { return a < b ? a : b; }
function max(a, b) { return a > b ? a : b; }
function equal(a, b) { return a === b; }

console.log("=== Тесты функций ===");
console.log(`min(-2, 2) = ${min(-2, 2)}`);
console.log(`max(312, 3) = ${max(312, 3)}`);
console.log(`equal(13, 31) = ${equal(13, 31)}`);
console.log(`equal(24, 24) = ${equal(24, 24)}`);

// ============================================
// ФУНКЦИИ ДЛЯ ИНТЕРФЕЙСА ЗАДАНИЯ 1
// ============================================
function calcMin() {
    const a = parseFloat(document.getElementById('min-a').value);
    const b = parseFloat(document.getElementById('min-b').value);
    const res = min(a, b);
    const resBox = document.getElementById('min-result');
    resBox.className = 'result-box';
    resBox.textContent = `min(${a}, ${b}) = ${res}`;
}

function calcMax() {
    const a = parseFloat(document.getElementById('max-a').value);
    const b = parseFloat(document.getElementById('max-b').value);
    const res = max(a, b);
    const resBox = document.getElementById('max-result');
    resBox.className = 'result-box';
    resBox.textContent = `max(${a}, ${b}) = ${res}`;
}

function checkEqual() {
    const a = parseFloat(document.getElementById('equal-a').value);
    const b = parseFloat(document.getElementById('equal-b').value);
    const res = equal(a, b);
    const resBox = document.getElementById('equal-result');
    if (res) {
        resBox.className = 'result-box';
        resBox.textContent = `equal(${a}, ${b}) = true ✅ (числа равны)`;
    } else {
        resBox.className = 'result-box result-error';
        resBox.textContent = `equal(${a}, ${b}) = false ❌ (числа не равны)`;
    }
}

// ============================================
// ЗАДАНИЕ 2: Переменные admin и name
// ============================================
function runAssignment2() {
    let userName = prompt("Введите ваше имя:", "Martins");
    if (userName === null || userName.trim() === "") {
        userName = "Martins";
    }
    let admin = userName;
    alert("Значение переменной admin: " + admin);
}

// ============================================
// ЗАДАНИЕ 3: Проверка возраста (Loop)
// ============================================
function startAgePrompt() {
    let age;
    let confirmed = false;

    while (!confirmed) {
        // 1. Pergunta a idade
        age = prompt("Введите ваш возраст:", "25");

        // Se clicar em Cancelar (null) ou deixar vazio
        if (age === null || age.trim() === "") {
            alert("Пожалуйста, введите числовое значение.");
            continue; // Volta ao início do while
        }

        // 2. Confirma a idade
        let isCorrect = confirm(`Вы ввели возраст: ${age} лет. Всё верно?`);

        if (isCorrect) {
            // Se clicou OK no confirm
            alert(`Спасибо! Ваш возраст: ${age} лет`);
            confirmed = true; // Sai do while
        } else {
            // Se clicou em Cancelar no confirm
            alert("Давайте попробуем еще раз!");
            // Continua no loop (volta ao prompt)
        }
    }
}

// Ligamos a função ao botão que tem o id="btn-age" no HTML
document.getElementById('btn-age').addEventListener('click', startAgePrompt);


// ============================================
// CÓDIGOS ANTIGOS DO RESUMO (Mantidos)
// ============================================
document.getElementById('btn-editar').addEventListener('click', function() {
    const novoSobrenome = document.getElementById('input-sobrenome').value.trim();
    if (novoSobrenome === "") { alert("⚠️ Пожалуйста, введите корректную фамилию!"); return; }
    const nomeCompleto = document.getElementById('nome-completo');
    const partesNome = nomeCompleto.textContent.split(' ');
    nomeCompleto.textContent = partesNome.length >= 2 ? `${partesNome[0]} ${novoSobrenome}` : `${partesNome[0]} ${novoSobrenome}`;
    nomeCompleto.classList.add('pulse');
    setTimeout(() => nomeCompleto.classList.remove('pulse'), 1000);
    alert(`✅ Фамилия изменена на: ${novoSobrenome}`);
});

document.getElementById('btn-cor').addEventListener('click', function() {
    const r = Math.floor(Math.random() * 200);
    const g = Math.floor(Math.random() * 200);
    const b = Math.floor(Math.random() * 200);
    document.body.style.background = `linear-gradient(135deg, rgb(${r},${g},${b}), rgb(${b},${r},${g}))`;
    console.log(`🎨 Новый цвет: rgb(${r},${g},${b})`);
});

document.getElementById('btn-reset').addEventListener('click', function() {
    document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    console.log("🔄 Цвет сброшен на стандартный");
});