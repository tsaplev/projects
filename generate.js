const data = [
  {
    "Клиент": "Дороже денег",
    "Проект": "Бренд-медиа о финансах",
    "Project": "Brand media for a FinTech product",
    "Инструменты": "PHP, WordPress",
    "Тип работы": "Техническая разработка",
    "Год": 2022
  },
  {
    "Клиент": "[Под NDA]",
    "Проект": "Исследование сетевых пакетов и реверс-инжиниринг интерфейса OBD-II на автомобилях Mazda",
    "Project": "Analysing and reverse engineering of Mazdas’ OBD-II interface",
    "Инструменты": "Reverse Engineering",
    "Тип работы": "Консультация",
    "Год": 2021
  },
  {
    "Клиент": "Skyeng",
    "Проект": "Веб-платформа для проведения соревнования с функционалом загрузки и оценки конкурсных работ",
    "Project": "Platform for an online contest with the ability to upload and rate competitive works",
    "Инструменты": "PHP, WordPress",
    "Тип работы": "Техническая разработка",
    "Год": 2021
  },
  {
    "Клиент": "N/A",
    "Проект": "Прототип приложения для планирования путешествий",
    "Project": "App for creating travel itineraries",
    "Инструменты": "JavaScript, React.js, TypeScript",
    "Тип работы": "Техническая разработка",
    "Год": 2021
  },
  {
    "Клиент": "VK Pay",
    "Проект": "Участие в разработке клиентской части финансового приложения",
    "Project": "Collaborating in front-end development of a banking application",
    "Инструменты": "JavaScript, React.js, TypeScript, VK API, VKUI",
    "Тип работы": "Участие в команде",
    "Год": 2021
  },
  {
    "Клиент": "N/A",
    "Проект": "ЧукотАвиа",
    "Project": "App for tracking available seats on a flight",
    "Инструменты": "Data, Reverse Engineering, Telegram API",
    "Тип работы": "Техническая разработка",
    "Год": 2020
  },
  {
    "Клиент": "N/A",
    "Проект": "Веб-приложение по ведению статистики путешествий",
    "Project": "App for journaling travels",
    "Инструменты": "Google Maps, JavaScript, Node.js, Webpack",
    "Тип работы": "Техническая разработка",
    "Год": 2020
  },
  {
    "Клиент": "Zebra Design Bureau",
    "Проект": "Инструмент по автоматизации верстки контента в продуктах Adobe",
    "Project": "Tool for a layout creating automation in Adobe apps",
    "Инструменты": "Adobe, ExtendScript, JavaScript",
    "Тип работы": "Техническая разработка",
    "Год": 2020
  },
  {
    "Клиент": "N/A",
    "Проект": "Разработка API к прототипу приложения для доставки товаров",
    "Project": "API for delivery service",
    "Инструменты": "Laravel, PHP",
    "Тип работы": "Техническая разработка",
    "Год": 2019
  },
  {
    "Клиент": "[Под NDA]",
    "Проект": "Инструмент для сбора данных из открытых источников",
    "Project": "Tool for scraping data from a real estate website",
    "Инструменты": "Data, Laravel, PHP, Reverse Engineering",
    "Тип работы": "Техническая разработка",
    "Год": 2019
  },
  {
    "Клиент": "N/A",
    "Проект": "Прототип мобильного приложения для бронирования книг в библиотеке",
    "Project": "Prototype of an app for books booking in a library",
    "Инструменты": "React Native, Reverse Engineering",
    "Тип работы": "Техническая разработка",
    "Год": 2019
  },
  {
    "Клиент": "N/A",
    "Проект": "Система уведомлений о доступности лотов для записи на государственном портале",
    "Project": "Notification tool of appointment availability on a government’s website",
    "Инструменты": "Node.js, Reverse Engineering",
    "Тип работы": "Техническая разработка",
    "Год": 2019
  },
  {
    "Клиент": "[Под NDA]",
    "Проект": "Подготовка веб-приложения к запуску в IFE самолётов семейства Airbus",
    "Project": "Optimisation of a web app to run on Airbus IFE",
    "Инструменты": "Docker",
    "Тип работы": "Консультация",
    "Год": 2019
  },
  {
    "Клиент": "Мосгортранс",
    "Проект": "Исследование и оптимизация API расписания общественного транспорта",
    "Project": "Public transport API optimisation",
    "Инструменты": "Reverse Engineering",
    "Тип работы": "Консультация",
    "Год": 2019
  },
  {
    "Клиент": "[Под NDA]",
    "Проект": "Информационный сайт для образовательного проекта",
    "Project": "Landing page for an EdTech company",
    "Инструменты": "WordPress",
    "Тип работы": "Техническая разработка",
    "Год": 2019
  },
  {
    "Клиент": "Skyeng",
    "Проект": "Веб-платформа для проведения соревнований с функционалом загрузки и оценки конкурсных работ",
    "Project": "Platform for an online contest with the ability to upload and rate competitive works",
    "Инструменты": "Figma, PHP, WordPress, jQuery",
    "Тип работы": "Техническая разработка",
    "Год": 2019
  },
  {
    "Клиент": "[Под NDA]",
    "Проект": "Исследование алгоритма подписи данных в банковском приложении",
    "Project": "Reverse engineering of a banking app’s API",
    "Инструменты": "Reverse Engineering",
    "Тип работы": "Консультация",
    "Год": 2019
  },
  {
    "Клиент": "Skyeng",
    "Проект": "Расширение под WordPress для проведения интерактивных викторин",
    "Project": "WordPress plugin for quizzes",
    "Инструменты": "JavaScript, WordPress, jQuery",
    "Тип работы": "Техническая разработка",
    "Год": 2019
  },
  {
    "Клиент": "BUSINESS TIMES",
    "Проект": "Миграция данных с Drupal на WordPress",
    "Project": "Data migration from Drupal to WordPress",
    "Инструменты": "Data, SQL",
    "Тип работы": "Консультация",
    "Год": 2018
  },
  {
    "Клиент": "Связной",
    "Проект": "Участие в технической разработке системы бронирования отелей",
    "Project": "Participation in the development of a hotel booking system",
    "Инструменты": "Data, PHP, RabbitMQ",
    "Тип работы": "Участие в команде",
    "Год": 2018
  },
  {
    "Клиент": "Связной",
    "Проект": "Онлайн-сервис по продаже билетов",
    "Project": "Online service for booking railway tickets",
    "Инструменты": "PHP, React.js",
    "Тип работы": "Техническая разработка",
    "Год": 2018
  },
  {
    "Клиент": "[Под NDA]",
    "Проект": "Внутрикорпоративный инструмент по сбору данных из социальных сетей и последующей генерацией их в отчет",
    "Project": "Internal system for scraping data from social media and further PDF reports generation",
    "Инструменты": "Data, Facebook API, Instagram API, Node.js, React.js, Twitter Bootstrap, VK API",
    "Тип работы": "Техническая разработка",
    "Год": 2018
  },
  {
    "Клиент": "Magforest",
    "Проект": "Мобильное приложение для платформы по продаже контента",
    "Project": "Mobile app for an online magazine newsstand distribution platform",
    "Инструменты": "JavaScript, React Native",
    "Тип работы": "Техническая разработка",
    "Год": 2017
  },
  {
    "Клиент": "Magforest",
    "Проект": "Разработка API для платформы по продаже контента",
    "Project": "API for an online magazine newsstand distribution platform",
    "Инструменты": "JavaScript, PHP, SQL, WordPress",
    "Тип работы": "Техническая разработка",
    "Год": 2017
  },
  {
    "Клиент": "Madcrush Labs",
    "Проект": "Участие в технической разработке криптоплатформы",
    "Project": "Participation in the technical development of a cryptocurrency platform",
    "Инструменты": "AngularJS, Laravel, PHP, TypeScript",
    "Тип работы": "Участие в команде",
    "Год": 2017
  },
  {
    "Клиент": "[Под NDA]",
    "Проект": "Внутрикорпоративная система для отслеживания активности в социальных сетях в режиме реального времени",
    "Project": "Real-time tweets aggregator",
    "Инструменты": "React.js, Twitter API",
    "Тип работы": "Техническая разработка",
    "Год": 2017
  },
  {
    "Клиент": "Timebook",
    "Проект": "Участие в разработке системы контроля и управления рабочим временем персонала",
    "Project": "Participation in the technical development of a platform for managing employees' working schedule",
    "Инструменты": "AngularJS, Node.js, PHP, Yii2",
    "Тип работы": "Участие в команде",
    "Год": 2017
  },
  {
    "Клиент": "N/A",
    "Проект": "Инструмент для автоматизации ведения маркетинговых активностей в социальных сетях",
    "Project": "Social media marketing automation tool",
    "Инструменты": "PHP, VK API",
    "Тип работы": "Техническая разработка",
    "Год": 2017
  },
  {
    "Клиент": "Макомания",
    "Проект": "Разработка интернет-магазина",
    "Project": "eCommerce website",
    "Инструменты": "WordPress",
    "Тип работы": "Консультация",
    "Год": 2017
  },
  {
    "Клиент": "[Под NDA]",
    "Проект": "Исследование и документирование непубличного банковского API",
    "Project": "Analysing & documenting a private API",
    "Инструменты": "Reverse Engineering",
    "Тип работы": "Консультация",
    "Год": 2017
  },
  {
    "Клиент": "Сайт НН",
    "Проект": "Участие в технической разработке веб-сайтов",
    "Project": "Participation in the technical development of websites",
    "Инструменты": "PHP, jQuery",
    "Тип работы": "Участие в команде",
    "Год": 2016
  },
  {
    "Клиент": "[Под NDA]",
    "Проект": "Внутрикорпоративная система по управлению наличием товаров на складе",
    "Project": "Internal system for managing a warehouse",
    "Инструменты": "PHP, Twitter Bootstrap, jQuery",
    "Тип работы": "Техническая разработка",
    "Год": 2016
  },
  {
    "Клиент": "N/A",
    "Проект": "BikeShopList",
    "Project": "Marketplace prototype",
    "Инструменты": "Microsoft Azure, PHP, Yii2",
    "Тип работы": "Техническая разработка",
    "Год": 2016
  },
  {
    "Клиент": "[Под NDA]",
    "Проект": "Парсинг из CSV и VK",
    "Project": "Tool for scraping profiles data from social media",
    "Инструменты": "Data, PHP, Twitter Bootstrap, VK API, jQuery",
    "Тип работы": "Техническая разработка",
    "Год": 2016
  },
  {
    "Клиент": "N/A",
    "Проект": "Collezione",
    "Project": "Tool for scraping newsfeed data from social media",
    "Инструменты": "Data, Facebook API, Instagram API, PHP, VK API, Yii2",
    "Тип работы": "Техническая разработка",
    "Год": 2016
  },
  {
    "Клиент": "YOLO",
    "Проект": "Информационный сайт для ресторана",
    "Project": "Business website for a restaurant",
    "Инструменты": "WordPress",
    "Тип работы": "Техническая разработка",
    "Год": 2016
  },
  {
    "Клиент": "LaLuna",
    "Проект": "Информационный сайт о группе ресторанов",
    "Project": "Business website for a group of restaurants",
    "Инструменты": "WordPress",
    "Тип работы": "Техническая разработка",
    "Год": 2015
  }
]

console.log(data.reduce((acc, el, idx) => {
  return acc + `<tr>
      <td class="number">${(data.length - idx) > 9 ? data.length - idx : ('0' + (data.length - idx))}</td>
      <td class="client">${el.Клиент}</td>
      <td class="description" style="display: none">${el.Проект}</td>
      <td class="description">${el.Project}</td>
      <td class="tools">${el.Инструменты}</td>
      <td class="type">${el['Тип работы']}</td>
      <td class="year">${el.Год}</td>
    </tr>
`
}, ''))