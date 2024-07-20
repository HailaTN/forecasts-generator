/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


const forecastBtn = document.querySelector('.forecast-btn');


forecastBtn.addEventListener('click', function () {
    const name = document.querySelector('h1');
    name.textContent = 'Тебя ждёт прекрасная неделя';
    let probability = document.querySelector('.current-forecast p');
    let predictionNumber = generateNumber(0, 100);
    probability.textContent = `Вероятность : ${predictionNumber} %`;


    const myPredictionContainer = document.querySelector('.forecasts');
    const template = document.querySelector('#forecast-item');

    if (predictionNumber > 50) {
        const items = template.content.cloneNode(true);

        items.querySelector('h3').textContent = 'Приглашение на свидание';
        items.querySelector('p').textContent = `Вероятность : ${generateNumber(0, 100)} %`;

        myPredictionContainer.append(items);

        const items2 = template.content.cloneNode(true);

        items2.querySelector('h3').textContent = 'Отдых от всех дел';
        items2.querySelector('p').textContent = `Вероятность : ${generateNumber(0, 100)} %`;

        myPredictionContainer.append(items2);

        const items3 = template.content.cloneNode(true);

        items3.querySelector('h3').textContent = 'Везде сопутствует удача';
        items3.querySelector('p').textContent = `Вероятность : ${generateNumber(0, 100)} %`;

        myPredictionContainer.append(items3);

        const items4 = template.content.cloneNode(true);

        items4.querySelector('h3').textContent = 'Получишь неожиданный подарок';
        items4.querySelector('p').textContent = `Вероятность : ${generateNumber(0, 100)} %`;

        myPredictionContainer.append(items4);
    } else {
        const items5 = template.content.cloneNode(true);
        items5.querySelector('h3').textContent = 'Тебя ждёт неудача';
        items5.querySelector('p').textContent = `Вероятность : ${generateNumber(0, 100)} %`;

        myPredictionContainer.append(items5);
    }
})
