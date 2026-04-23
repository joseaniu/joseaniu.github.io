// ============================================
// ЗАДАНИЕ 1: Функции
// ============================================
function min(a, b) { return a < b ? a : b; }
function max(a, b) { return a > b ? a : b; }
function equal(a, b) { return a === b; }

function calcMin() {
    const a = parseFloat(document.getElementById('min-a').value);
    const b = parseFloat(document.getElementById('min-b').value);
    const res = min(a, b);
    document.getElementById('min-result').textContent = `min(${a}, ${b}) = ${res}`;
}

function calcMax() {
    const a = parseFloat(document.getElementById('max-a').value);
    const b = parseFloat(document.getElementById('max-b').value);
    const res = max(a, b);
    document.getElementById('max-result').textContent = `max(${a}, ${b}) = ${res}`;
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
// ЗАДАНИЕ 2: Переменные
// ============================================
function runAssignment2() {
    let userName = prompt("Введите ваше имя:", "Martins");
    if (userName === null || userName.trim() === "") userName = "Martins";
    let admin = userName;
    alert("Значение переменной admin: " + admin);
}

// ============================================
// ЗАДАНИЕ 3: Возраст
// ============================================
function startAgePrompt() {
    let age;
    let confirmed = false;
    while (!confirmed) {
        age = prompt("Введите ваш возраст:", "25");
        if (age === null || age.trim() === "") {
            alert("Пожалуйста, введите числовое значение.");
            continue;
        }
        let isCorrect = confirm(`Вы ввели возраст: ${age} лет. Всё верно?`);
        if (isCorrect) {
            alert(`Спасибо! Ваш возраст: ${age} лет`);
            document.getElementById('age-result').textContent = `Ваш возраст: ${age} лет`;
            confirmed = true;
        } else {
            alert("Давайте попробуем еще раз!");
        }
    }
}
document.getElementById('btn-age').addEventListener('click', startAgePrompt);

// ============================================
// ЗАДАНИЕ 4: Функции резюме
// ============================================
function changeSurname() {
    const newSurname = document.getElementById('input-surname').value.trim();
    if (newSurname === "") {
        alert("⚠️ Пожалуйста, введите фамилию!");
        return;
    }
    const nameElement = document.getElementById('full-name');
    const nameParts = nameElement.textContent.split(' ');
    nameElement.textContent = `${nameParts[0]} ${newSurname}`;
    alert(`✅ Фамилия изменена на: ${newSurname}`);
}

function changeRandomColor() {
    const r = Math.floor(Math.random() * 200);
    const g = Math.floor(Math.random() * 200);
    const b = Math.floor(Math.random() * 200);
    document.body.style.background = `linear-gradient(135deg, rgb(${r},${g},${b}), rgb(${b},${r},${g}))`;
}
