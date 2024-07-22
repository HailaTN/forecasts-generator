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
const myPredictionContainer = document.querySelector('.forecasts');
const template = document.querySelector('#forecast-item');
const namePredictions = document.querySelector('.current-forecast h1');
const probabilityPredictions = document.querySelector('.current-forecast p');


function createSample(name, parcent) {
    const myPrediction = template.content.cloneNode(true);
    myPrediction.querySelector('h3').textContent = name;
    myPrediction.querySelector('p').textContent = parcent;

    return myPrediction;
}


forecastBtn.addEventListener('click', function () {
    let predictionText = '';
    const predictionNumber = generateNumber(0, 4);
    let probability = '';

    if (predictionNumber == 1) {
        predictionText = "Тебя ждёт прекрасная неделя";
        probability = `Вероятность : ${generateNumber(0, 100)} %`;

    } else if (predictionNumber == 2) {
        predictionText = "Приглашение на свидание";
        probability = `Вероятность : ${generateNumber(0, 100)} %`;
    } else if (predictionNumber == 3) {
        predictionText = "Неожиданная поездка на море";
        probability = `Вероятность : ${generateNumber(0, 100)} %`;
    } else {
        predictionText = "Приятный сюрприз";
        probability = `Вероятность : ${generateNumber(0, 100)} %`;
    }

    namePredictions.textContent = predictionText;
    probabilityPredictions.textContent = probability;

    const prediction = createSample('Приезд любой рок группы в твой город', `Вероятность : ${generateNumber(0, 100)} %`);
    myPredictionContainer.append(prediction);

    const prediction2 = createSample('Неожиданные скидки в любимом магазине одежды', `Вероятность : ${generateNumber(0, 100)} %`);
    myPredictionContainer.append(prediction2);

    const prediction3 = createSample('WB доставил все заказы без задержек', `Вероятность : ${generateNumber(0, 100)} %`);
    myPredictionContainer.append(prediction3);

    const prediction4 = createSample('Сдала весь раздел по JS без ошибок', `Вероятность : ${generateNumber(0, 100)} %`);
    myPredictionContainer.append(prediction4);
})
