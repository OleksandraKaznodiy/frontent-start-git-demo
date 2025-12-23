// 1. Находим кнопку по её ID
const button = document.getElementById('theme-toggle');

// 2. Находим тег body, чтобы менять его классы
const body = document.body;

// 3. Вешаем "слушателя событий".
// Когда на кнопку "кликнут" (click), запустится функция внутри.
button.addEventListener('click', () => {
    console.log('Кнопка нажата! Текущая тема:', body.classList.contains('dark-mode') ? 'Темная' : 'Светлая');
    
    // Переключаем класс 'dark-mode' у body.
    // Если класса нет — он добавится. Если есть — уберется.
    body.classList.toggle('dark-mode');

    // Дополнительная фишка: меняем текст кнопки
    if (body.classList.contains('dark-mode')) {
        button.textContent = '☀️ Светлая тема';
    } else {
        button.textContent = '🌙 Темная тема';
    }
});
    const skills = [
    { name: 'HTML5', level: 'Junior' },
    { name: 'CSS3', level: 'Junior' },
    { name: 'JavaScript', level: 'Beginner' },
    { name: 'Git', level: 'Junior' },
    { name: 'React', level: 'Zero level' }
];
const skillsList = document.getElementById('skills-list');
function renderSkills() {
    // Формируем ОДНУ большую строку со всеми li внутри
    const htmlSnippet = skills.map(skill => `
        <li class="skill-item">
            <strong>${skill.name}</strong> 
            <span class="level-badge">${skill.level}</span>
        </li>
    `).join(''); // Превращаем массив строк в одну строку

    // Вставляем всё разом в список
    skillsList.innerHTML = htmlSnippet;
}
renderSkills();

