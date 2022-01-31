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
VanillaTilt.init(card3, {
    max: 10,
    glare: true,
});

