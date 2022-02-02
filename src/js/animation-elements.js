//Анимирование только Gallery
const cards = document.querySelectorAll('.card');
VanillaTilt.init(cards, {
    max: 15,
    glare: true,
    scale:  1.3,  // Масштабирование
    speed:  300,  // Скорость анимации в начале/в конце
    easing:  "cubic-bezier(.03,.98,.52,.99)", 
    gyroscope:  true,  // Нужен ли эффект при наклоне телефона/другого устройства
    /* Максимальные и минимальные углы эффекта при наклоне устройства */
    gyroscopeMinAngleX:  -45,
    gyroscopeMaxAngleX:  45,
    gyroscopeMinAngleY:  -45,
    gyroscopeMaxAngleY:  45,
});
const card2s = document.querySelectorAll('.card2');
VanillaTilt.init(card2s, {
    max: 15,
    glare: true,
    "max-glare": 0.5,      // maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    scale:  1.2,  // Масштабирование
    speed:  300,  // Скорость анимации в начале/в конце
    easing:  "cubic-bezier(.03,.98,.52,.99)", 
    gyroscope:  true,  // Нужен ли эффект при наклоне телефона/другого устройства
    /* Максимальные и минимальные углы эффекта при наклоне устройства */
    gyroscopeMinAngleX:  -45,
    gyroscopeMaxAngleX:  45,
    gyroscopeMinAngleY:  -45,
    gyroscopeMaxAngleY:  45,
});

const card3s = document.querySelectorAll('.card3');
VanillaTilt.init(card3s, {
    max: 10,
    glare: true,
});
//Анимирование в about, advantages, contacts, products
// const s = document.querySelectorAll('.');
// VanillaTilt.init(s, {
//     max: 9,
//     glare: true,
//     "max-glare": 0.5,      // maximum "glare" opacity (1 = 100%, 0.5 = 50%)
//     scale:  1.1,  // Масштабирование
//     speed:  300,  // Скорость анимации в начале/в конце
//     easing:  "cubic-bezier(.03,.98,.52,.99)", 
//     gyroscope:  true,  // Нужен ли эффект при наклоне телефона/другого устройства
//     /* Максимальные и минимальные углы эффекта при наклоне устройства */
//     gyroscopeMinAngleX:  -45,
//     gyroscopeMaxAngleX:  45,
//     gyroscopeMinAngleY:  -45,
//     gyroscopeMaxAngleY:  45,
// });
