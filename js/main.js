'use strict';
const ads = document.querySelector('.ads');
ads.remove();

const items = document.querySelector('.items');
console.log(items);

const item = document.querySelectorAll('.item');
console.log(item);

item[3].after(item[0]);

const propsList = document.querySelectorAll('.props__list');
console.log(propsList);

const propsItemOne = document.querySelectorAll('.props__item_one');
console.log(propsItemOne);
const propsItemTwo = document.querySelectorAll('.props__item_two');
console.log(propsItemTwo);
const propsItemThree = document.querySelectorAll('.props__item_three');
console.log(propsItemThree);
const propsItemFour = document.querySelectorAll('.props__item_four');
console.log(propsItemFour);
const propsItemFive = document.querySelectorAll('.props__item_five');
console.log(propsItemFive);
const propsItemSix = document.querySelectorAll('.props__item_six');
console.log(propsItemSix);

propsItemFour[3].after(propsItemFour[0]);

const clone = propsList[2].cloneNode(true);
console.log(clone);
const clone2 = propsList[4].cloneNode(true);
console.log(clone2);
propsList[4].replaceWith(clone);
propsList[2].replaceWith(clone2);

propsList[1].append(propsItemTwo[8], propsItemTwo[9]);

const title = document.getElementsByClassName('item__title');
console.log(title);
title[0].innerHTML = 'Область видимости и замыкание';
title[1].innerHTML = 'This и прототипы объектов';
title[3].innerHTML = 'Асинхронная обработка и оптимизация';
title[4].innerHTML = 'ES6 и не только';
