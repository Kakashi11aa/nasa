document.addEventListener('DOMContentLoaded', function() {
    const closerListElement = document.getElementById('closer-list');
    const dateTimeElement = document.querySelector('.date-time');
    const names = [
        "Ostrovok",
        "MobiLand",
        "MobiUmar",
        "MobiAksa",
        "EldikMobail",
        "Икрам",
        "joni",
        "Aman",
        "Имя сотрудника 9",
        "Имя сотрудника 10",
        "Имя сотрудника 11"
    ]; // **ОБЯЗАТЕЛЬНО ЗАМЕНИТЕ ЭТИ ИМЕНА НА РЕАЛЬНЫЕ ИМЕНА ВАШИХ 11 СОТРУДНИКОВ!**

    function updateCloserInfo() {
        const today = new Date();
        const dateString = today.toLocaleDateString();
        const timeString = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        dateTimeElement.textContent = `${dateString} ${timeString}`;

        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        const closerIndex = (dayOfYear - 1) % names.length; // Предполагаем, что отсчет начинается с 1 января

        closerListElement.innerHTML = ''; // Очищаем предыдущий список
        names.forEach((name, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = name;
            if (index === closerIndex) {
                listItem.classList.add('today');
            }
            closerListElement.appendChild(listItem);
        });
    }

    updateCloserInfo();
    setInterval(updateCloserInfo, 60000); // Обновляем дату и время каждую минуту
});
