const translations = {
    en: {
        title: "Bachelor's Thesis",
        research_title: "Research Topic",
        research_description: "An intelligent medical data search system using RAG model, FAISS, and GPT-Neo.",
        goal_title: "Goal",
        goal_description: "Develop a prototype with a search interface and answer relevance assessment.",
        tasks_title: "Tasks",
        task1: "Collect and preprocess medical datasets.",
        task2: "Integrate FAISS and SentenceTransformer.",
        task3: "Build RAG system with GPT-Neo 2.7B.",
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
        task1: "Збір та обробка медичних даних.",
        task2: "Інтеграція FAISS та SentenceTransformer.",
        task3: "Побудова RAG-системи з GPT-Neo 2.7B.",
        contact_title: "Контакти",
        contact_info: "student@example.com"
    }
};

let currentLang = 'uk';

function switchLanguage() {
    currentLang = currentLang === 'uk' ? 'en' : 'uk';
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        el.textContent = translations[currentLang][key];
    });
}
