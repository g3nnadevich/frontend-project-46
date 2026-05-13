### Hexlet tests and linter status:
[![Actions Status](https://github.com/g3nnadevich/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/g3nnadevich/frontend-project-46/actions)


# JavaScript Проект - «Вычислитель отличий»
## Описание
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. 
## Возможности утилиты:
- Поддержка входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json
- Возможность интеграции в другие пакеты
## Установка приложения и запуск
- Убедитесь, что у вас установлена Node.js версии 13 и выше. В противном случае установите Node.js версии 13 и выше.
- Установите пакет в систему с помощью npm link и убедитесь в том, что он работает, запустив gendiff -h в терминале. Команду npm link необходимо запускать из корневой директории проекта.
## Пример использования:
формат plain - $ gendiff --format plain path/to/file.yml another/path/file.json
формат stylish - $ gendiff filepath1.json filepath2.json
