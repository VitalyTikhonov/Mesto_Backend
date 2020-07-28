# Mesto_Backend v1.0.1
Учебное задание по разработке серверного приложения для веб-сайта.
## Функционал проекта
Сервер:
- возвращает страницу _Mesto_ из папки _Public_;
- обрабатывает запросы к страницам _/users_, _/users/[идентификатор_пользователя]_ и _/cards_, а также запросы по несуществующим адресам, отправляя в ответ JSON-объекты.
На предыдущих этапах реализован фронтенд – см. [проект Mesto_Webpack](https://github.com/VitalyTikhonov/Mesto_Webpack/blob/master/README.md).
## Используемые технологии
- Node.js
- Express.js
- Nodemon
- Eslint
## Как воспользоваться проектом
Необходимо скачать проект, запустить его командой _npm run start_ или _npm run dev_ (с автообновлением), после чего обратиться к адресам _http://localhost:3000/_, _http://localhost:3000/users_, _http://localhost:3000/users/[идентификатор_пользователя]_ или _http://localhost:3000/cards_ в браузере или сервисе для тестирования запросов к серверу.
