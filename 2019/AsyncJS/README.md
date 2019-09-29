# Домашнє завдання

## 0 Прочитати 
- [Статтю](https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B0%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-javascript-%D1%81-async-await-ba5f47f4436)

## 1 
Переробити функцію валідації паролю із першого завдання в асинхронну функцію, яка вертатиме результат через `500` мс та викидатиме помилку у разі неправтльного паролю.

```
// example of ussage
checkPassword('12345', (result, error) => {
    
})
``` 
## 2 
Пререробити перший пуркт в проміс

```
// example of ussage
checkPassword('12345')
.then()
.catch()

```

## 3 
Викликати перевірку 10 паролей за домомогою Promise.all та async/await.
Засікти час виконная коду і вивсети різнтцю. використовуйте [Time](https://developer.mozilla.org/ru/docs/Web/API/Console/time)

## 4 *
Добави ти на форму із попередньої лекції теймер який кожні 3 с буде перевіряти чи була здійсненна користувачем якась активність і виводити повідомлення `Are you here?` якщо ні. 