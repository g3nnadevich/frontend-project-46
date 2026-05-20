### Hexlet tests and linter status:
[![Actions Status](https://github.com/g3nnadevich/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/g3nnadevich/frontend-project-46/actions) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=g3nnadevich_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=g3nnadevich_frontend-project-46) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=g3nnadevich_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=g3nnadevich_frontend-project-46)

# Вычислитель отличий
Вычислитель отличий — это JavaScript CLI-утилита для сравнения двух структур данных и определения различий между ними. Программа принимает на вход файлы с данными и формирует отчёт о различиях в удобном для восприятия или машинной обработки формате.
## Возможности:
- Поддержка входных форматов: JSON, YAML
- Сравнение вложенных структур любой глубины
- Генерация отчётов в форматах:
    - stylish (дерево с визуальной структурой)
    - plain (текстовое описание изменений)
    - json (машинно-читабельный формат)
- Возможность использования как CLI-утилиты и как библиотеки в других проектах
## Установка приложения и запуск
- Установите Node.js версии 16 и выше.
- Клонирование и установка репозитория:
    gh repo clone g3nnadevich/frontend-project-46
    cd frontend-project-46
    npm install
    npm link
- Проверьте установку вывзовом справочной информации по утилите: gendiff -h
## Использование
gendiff [options] <filepath1> <filepath2>

options:
  -V, --version        output the version number
  -f, --format [type]  output format
  -h, --help           display help for command

Программа выводит результат по умолчанию в формате stylish.
## Примеры использования
- Stylish формат (по умолчанию): gendiff filepath1.json filepath2.json
- Plain формат: gendiff --format plain path/to/file.yaml another/path/file.yaml
- JSON формат: gendiff --format json filepath1.yml filepath2.yml
## Примеры вывода
Примеры основаны на результатах сравнения готовых файлов из директории fixtures.

### Stylish формат:
{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}

### Plain формат:
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]