# Домашнє завдання

## 1. Написати функцію, котра буде повертати DOM-ноду із необхідною структурою. Приклад:

```js
var view = p('div', {id: 'header'}, [
  p('div', {textContent: 'Привіт!'}),
  p('div', {textContent: ' Базовий приклад SPA без використання сторонніх бібліотек.'}),
  p('a', {href: '#', textContent: 'Перейти на привітання'),
  p('a', {href: '#', textContent: 'Перейти назад')
])

function p(/* args */) {
  // body
}


```
Результат:
```html
<div id="header">
  <div>Привіт</div>
  <div> Базовий приклад SPA без використання сторонніх бібліотек.</div>
  <a href="#">Перейти на привітання</a>
  <a href="#">Перейти назад</a>
</div>
```

## 2. Написати форму Login.

- додати обробник подій `onChange` на `inputs` https://www.w3schools.com/jsref/event_onchange.asp
- при неправильному введені емелу чи пустому полі виводити відповідне повідомлення
- додати обробник подій `onSubmit` на форму https://www.w3schools.com/jsref/event_onsubmit.asp
- при `onSubmit` вивести в консоль дані введені користувачем

## 3. Валідація пароля
- додати реалізований на попередньому завданні метод валідації паролю.
- при не вірному введенні паролю виводити відповідне повідомлення

