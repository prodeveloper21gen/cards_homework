const users = [
    {
        name: "Idris Olimov",
        number: "102030035",
        age: 11,
        gender: "Male",
        course: "Next.js",
        date: "05.08.2024",
        status: "Active"
    },
    {
        name: "Maryamkhon Shodieva",
        number: "918659198",
        age: 18,
        gender: "Male",
        course: "Next.js",
        date: "05.08.2024",
        status: "Active"
    },
    {
        name: "Bilol Mahmudov",
        number: "918944274",
        age: 16,
        gender: "Male",
        course: "HTML&Css",
        date: "06.06.2024",
        status: "Active"
    },
    {
        name: "Subhoniddin Kalandarzoda",
        number: "985899092",
        age: 34,
        gender: "Male",
        course: "C++-February-Online",
        date: "17.02.2024",
        status: "Active"
    },
    {
        name: "Murtazo Musammem",
        number: "933792255",
        age: 14,
        gender: "Male",
        course: "Olymp-1",
        date: "13.03.2024",
        status: "Active"
    },
    {
        name: "Ardamehr Abdughafor",
        number: "917156660",
        age: 27,
        gender: "Male",
        course: "HTML-April",
        date: "15.04.2024",
        status: "Active"
    }
];
const container = document.querySelector('.box');
users.forEach((user) => {
    const card = document.createElement('div');
    const pico = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('div');
    const svoistva = document.createElement('div');
    const number = document.createElement('span');
    const age = document.createElement('span');
    const gender = document.createElement('span');
    const course = document.createElement('span');
    const date = document.createElement('span');
    const status = document.createElement('div');
    const pkdiv = document.createElement('div');
    const penico = document.createElement('span');
    const kico = document.createElement('span');
    card.classList.add('card');
    pico.classList.add('pico');
    name.classList.add('name');
    svoistva.classList.add('svoistva');
    status.classList.add('status');
    pkdiv.classList.add('pkdiv');
    img.src = "data:image/png;base64,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";
    name.innerHTML = user.name;
    number.innerHTML = `${user.number} | ${user.age} year | ${user.gender} `;
    course.innerHTML = `<button class ='but'> ${user.course} > <span>📆</span></button>`;
    date.innerHTML = `<span>${user.date}</span>`;
    status.innerHTML = `Status: ${user.status}`;
    penico.innerHTML = '✏️';
    kico.innerHTML = '🗑️';
    pico.appendChild(img);
    svoistva.append(number, age, gender, course, date);
    pkdiv.append(penico, kico);
    card.append(pico, name, svoistva, status, pkdiv);
    container.append(card);
});
