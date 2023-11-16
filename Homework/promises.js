console.log('start');

const promise1 = new Promise((resolve, reject) => {
console.log(1)
resolve(2)
})

promise1.then(res => {
console.log(res)
})

// Результат:
// 
// start
// 1
// 2


// 1 Выводится "start".
// 2 Создается новый промис promise1.
// 3 В конструкторе промиса выводится число 1.
// 4 Вызывается функция resolve(2), устанавливающая результат промиса на 2.
// 5 Добавляется обработчик к промису через метод .then.
// 6 Поскольку промис уже выполнен (resolved) со значением 2, обработчик .then выполняется сразу после сложения, выводится результат 2.
// 
//  Cначала выводятся "start" и число 1 при создании и резолве промиса соответственно. После того как обработчик .then добавляется к уже выполненному промису, выполняется обработчик, и выводится результат 2.

Promise.resolve(1)
		.then((x) => x + 1)
		.then((x) => { throw new Error('My Error') })
		.catch(() => 1)
		.then((x) => x + 1)
		.then((x) => console.log(x))
		.catch(console.error)

// Результат:
// 
// 2

// 1 "Promise.resolve(1)" создает промис, имеющий значение 1.
// 2 Первый обработчик ".then((x) => x + 1)" получает значение 1 и добавляет к нему 1, получая таким образом 2.
// 3 Далее, второй обработчик ".then((x) => { throw new Error('My Error') })" выбрасывает ошибку с текстом 'My Error'.
// 4 Поскольку происходит ошибка, выполняется блок "catch(() => 1)", возвращающий значение 1.
// 5 Затем выполняется следующий обработчик ".then((x) => x + 1)", прибавляя 1 к 1, и получаем значение 2.
// 6 Обработчик ".then((x) => console.log(x))" выводит значение 2 в консоль.
// 
// Ошибка, выброшенная во втором обработчике, была перехвачена блоком "catch", поэтому она не привела к остановке выполнения кода. Вместо этого код продолжает выполняться включая следующие методы "then" которые успешно завершаются и выводят 2 в консоль.

const promise = new Promise(res => res(2));
	promise.then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .finally(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	    });

// Результат:
// 
// 2
// 4
// undefined
// 8

// 1 Создается новый промис `promise`, который сразу же выполняется значением 2.
// 2 Первый обработчик `.then(v => { console.log(v); return v * 2; })` выводит значение 2 в консоль и возвращает его удвоенное значение, получая таким образом 4.
// 3 Далее, второй обработчик `.then(v=>{console.log(v); return v*2;})` выводит 4 в консоль и возвращает его удвоенное значение – 8.
// 4 Затем вызывается метод `.finally()`. Однако метод `.finally()` не принимает ни одного аргумента и не влияет на значение, которое передается дальше по цепочке. Таким образом, параметр `v` отсутствует и значение не передается дальше. В консоль выводится `undefined` (значение `v` отсутствует).
// 5 Наконец, последний обработчик `.then(v => { console.log(v); })` выводит значение 8 в консоль поскольку оно передается из предыдущего обработчика и завершает последовательность выполнения промиса, выводя 8 в консоль.