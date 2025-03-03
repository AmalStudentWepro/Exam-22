// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let successful = [];

let unSuccessful = [];

let taxes = Number;

let taxesMax = {};

let taxesMin = {};

// Реальные данные 2021*

let bank = [
  {
    name: "Apple",

    budget: 1000000,

    tax: 28,

    expensesPerYear: [
      { title: "Salaries", total: 125000 },

      { title: "Utilites", total: 18000 },

      { title: "Rent", total: 258000 },
    ],
  },

  {
    name: "Microsoft",

    budget: 988000,

    tax: 21,

    expensesPerYear: [
      {
        title: "Salaries",

        total: 148000,
      },

      {
        title: "Utilites",

        total: 124000,
      },

      {
        title: "Rent",

        total: 314000,
      },
    ],
  },

  {
    name: "HP",

    budget: 609000,

    tax: 14,

    expensesPerYear: [
      {
        title: "Salaries",

        total: 414000,
      },

      {
        title: "Utilites",

        total: 19000,
      },

      {
        title: "Rent",

        total: 114400,
      },
    ],
  },

  {
    name: "Xiomi",

    budget: 889500,

    tax: 17,

    expensesPerYear: [
      {
        title: "Salaries",

        total: 318000,
      },

      {
        title: "Utilites",

        total: 14000,
      },

      {
        title: "Rent",

        total: 169000,
      },
    ],
  },

  {
    name: "Samsung",

    budget: 889500,

    tax: 12,

    expensesPerYear: [
      {
        title: "Salaries",

        total: 650400,
      },

      {
        title: "Utilites",

        total: 29000,
      },

      {
        title: "Rent",

        total: 212000,
      },
    ],
  },
];

// 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах*

// 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ procent в объектах. Например компания в месяц зарабатывает 100,000, а тратит 25,000, значит ее ключ procent = 25%*

// 3. Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax*

// 4. Сохранить в переменной taxes общее количество налогов со всех компаний. Например все платят по 20,000 в месяц. В итоге taxes = 100,000*

// 5. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги*

// 6. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег в компании после вычета всех налогов и трат*

// * Писать весь код в функции `setup()`*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
  taxes = 0;
  taxesMax = bank[0];
  taxesMin = bank[0];

  // 1
  for (let i = 0; i < bank.length; i++) {
      let company = bank[i];

      let expenses = 0;
      for (let j = 0; j < company.expensesPerYear.length; j++) {
          expenses += company.expensesPerYear[j].total;
      }
      company.expensesPerMonth = expenses / 12;

      // 2
      company.procent = (company.expensesPerMonth / (company.budget / 12)) * 100;

      // 3
      let taxMoney = (company.budget * company.tax) / 100;
      let totalMoney = company.budget - taxMoney - expenses;
      company.totalMoney = totalMoney;

      if (totalMoney >= 0) {
          successful.push(company);
      } else {
          unSuccessful.push(company);
      }

      // 4
      taxes += taxMoney;

      // 5
      if (taxMoney > taxesMax.tax * taxesMax.budget / 100) {
          taxesMax = company;
      }

      if (taxMoney < taxesMin.tax * taxesMin.budget / 100) {
          taxesMin = company;
      }
  }
};

setup();

// это пишу я Амаль: в первом задании я сделал j потому что j нужен для вложеного цикла (я это проходил) 
