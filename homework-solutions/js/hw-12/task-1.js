/*1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
*/


function delayTwoSeconds(callback) {
  setTimeout(() => {
    try {
      callback();
    } catch (err) {
      console.error("Callback error:", err);
    }
  }, 2000); 
}


delayTwoSeconds(() => console.log("delayTwoSeconds: прошло 2 секунды"));

const promiseOne = new Promise((resolve) => {
  resolve(1);
});

promiseOne.then((value) => {
  console.log("promiseOne resolved with:", value);
});


const promiseFailed = new Promise((_, reject) => {
  reject("Promise failed");
});

promiseFailed
  .then((v) => {
    console.log("This will not run:", v);
  })
  .catch((err) => {
    console.log(" promiseFailed rejected with:", err);
  });


function promiseNumber(n) {
  return new Promise((resolve) => {
    resolve(n);
  });
}

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((values) => {
    console.log(" Promise.all resolved array:", values);
    
    values.forEach((v, i) => console.log(`Promise.all [${i}]:`, v));
  })
  .catch((err) => {
    console.error("Promise.all error:", err);
  });



Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((results) => {
    console.log(" Promise.allSettled results:", results);
    results.forEach((r, i) => {
      if (r.status === "fulfilled") {
        console.log(`allSettled [${i}] status: ${r.status}, value:`, r.value);
      } else {
        console.log(`allSettled [${i}] status: ${r.status}, reason:`, r.reason);
      }
    });
  });



async function runAllWithAsync() {
  try {
    const values = await Promise.all([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber(3),
    ]);
    console.log("(async) Promise.all resolved array:", values);
    values.forEach((v, i) => console.log(`(async) Promise.all [${i}]:`, v));
  } catch (err) {
    console.error("(async) Promise.all error:", err);
  }
}

async function runAllSettledWithAsync() {
  try {
    const results = await Promise.allSettled([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber(3),
    ]);
    console.log(" (async) Promise.allSettled results:", results);
    results.forEach((r, i) => {
      if (r.status === "fulfilled") {
        console.log(`(async) allSettled [${i}] status: ${r.status}, value:`, r.value);
      } else {
        console.log(`(async) allSettled [${i}] status: ${r.status}, reason:`, r.reason);
      }
    });
  } catch (err) {
    console.error("(async) allSettled unexpected error:", err);
  }
}

runAllWithAsync();
runAllSettledWithAsync();
