export function initChangeStyles(){
    const themes = ["default", "modern", "luxury"];
    let currentThemeIndex = 0;

    const themeLink = document.getElementById("themeStylesheet");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme && themes.includes(savedTheme)) {
        currentThemeIndex = themes.indexOf(savedTheme);
        themeLink.href = `css/themes/${savedTheme}/main.css`;
    }

    // Logo click → switch FULL CSS
    const logo = document.getElementById("madonnaShilouetteLogo");

    if (logo) {
        logo.style.cursor = "pointer";

        logo.addEventListener("click", () => {
            currentThemeIndex = (currentThemeIndex + 1) % themes.length;

            const newTheme = themes[currentThemeIndex];

            themeLink.href = `css/themes/${newTheme}/main.css`;
            localStorage.setItem("theme", newTheme);

            console.log("Switched to theme:", newTheme);
        });
    }
}