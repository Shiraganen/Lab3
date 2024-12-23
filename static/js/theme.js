// Установка темы
function setTheme(theme) {
    document.body.className = theme;
    document.cookie = "theme=" + theme + "; path=/; max-age=31536000";
}

// Установка языка
function setLanguage(language) {
    document.cookie = "language=" + language + "; path=/; max-age=31536000";
    location.reload();
}

// Получение cookie
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
}

// Применение настроек при загрузке страницы
window.onload = function () {
    // Применение темы
    const savedTheme = getCookie("theme") || "light";
    document.body.className = savedTheme;

    // Применение языка
    const savedLanguage = getCookie("language") || "ru";
    const welcomeText = document.getElementById("welcome");

    if (savedLanguage === "en") {
        welcomeText.textContent = "Welcome to Comic Reader";
    } else {
        welcomeText.textContent = "Добро пожаловать в Comic Reader";
    }
};
