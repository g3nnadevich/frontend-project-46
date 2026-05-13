### Hexlet tests and linter status:
[![Actions Status](https://github.com/g3nnadevich/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/g3nnadevich/frontend-project-46/actions) [![CI](https://github.com/g3nnadevich/frontend-project-46/actions/workflows/CI.yml/badge.svg)](https://github.com/g3nnadevich/frontend-project-46/actions/workflows/CI.yml) ![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=g3nnadevich_frontend-project-46&metric=coverage)

JavaScript Проект - «Вычислитель отличий»
Описание
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

Возможности утилиты:

Поддержка разных входных форматов: yaml, json
Генерация отчета в виде plain text, stylish и json
Установка приложения и запуска игр
Убедитесь, что у вас установлена Node.js версии 13 и выше. В противном случае установите Node.js версии 13 и выше.
Установите пакет в систему с помощью npm link и убедитесь в том, что он работает, запустив gendiff -h в терминале. Команду npm link необходимо запускать из корневой директории проекта.
Пример использования:
формат plain - $ gendiff --format plain path/to/file.yml another/path/file.json
формат stylish - $ gendiff filepath1.json filepath2.json
