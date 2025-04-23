const translations = {
    en: {
        title: "Bachelor's Thesis",
        research_title: "Research Topic",
        research_description: "An intelligent medical data search system using RAG model, FAISS, and GPT-Neo.",
        goal_title: "Goal",
        goal_description: "Develop a prototype with a search interface and answer relevance assessment.",
        tasks_title: "Tasks",
        task1: "Analyze existing solutions for medical data search.",
        task2: "Select RAG architecture for the system.",
        task3: "Integrate FAISS and GPT-Neo.",
        contact_title: "Contact",
        contact_info: "student@example.com"
    },
    uk: {
        title: "Бакалаврська робота",
        research_title: "Тема дослідження",
        research_description: "Інтелектуальна система пошуку медичних даних на основі RAG-моделі, FAISS та GPT-Neo.",
        goal_title: "Мета",
        goal_description: "Розробка прототипу системи з інтерфейсом пошуку та оцінкою релевантності відповідей.",
        tasks_title: "Завдання",
        task1: "Аналіз існуючих рішень для пошуку медичних даних",
        task2: "Вибір архітектури RAG для реалізації системи",
        task3: "Інтеграція FAISS та GPT-Neo",
        contact_title: "Контактна інформація",
        contact_info: "studentsumdu@example.com"
    }
};

let currentLang = 'uk';

function switchLanguage() {
    currentLang = currentLang === 'uk' ? 'en' : 'uk';
    document.getElementById('lang-toggle').textContent = currentLang === 'uk' ? 'EN' : 'UA';
    document.getElementById('lang-toggle').setAttribute('aria-pressed', currentLang === 'uk' ? 'false' : 'true');

    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        el.textContent = translations[currentLang][key];
    });
}

document.getElementById('lang-toggle').addEventListener('click', switchLanguage);
