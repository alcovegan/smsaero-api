# SMSAero API Node.js
Класс для работы с API [smsaero.ru](https://smsaero.ru/) в Node.js. Поддерживаются все методы [API v2](https://smsaero.ru/description/api/).

## Установка
```bash
npm install --save smsaero-nodejs
```
or
```js
yarn add smsaero-nodejs
```

## Использование
```js
const smsAero = require('smsaero-nodejs');
// третьим параметром идет формат ответа, если не указать, то используется json
const sendSMS = new smsAero("login", "apiKey", "json");

sendSMS.send(...); // отправить sms
```

## API
Принимаемые методами параметры почти везде совпадают с [документацией](https://smsaero.ru/description/api/), поэтому за детальным разъяснением какой метод за что отвечает - обращайтесь к ней.

### send({ number, numbers, [sign, text, channel, dateSend, callbackUrl] })
Отправить SMS.

```js
sendSMS.send({ number: '79290000000', sign: 'lol!', text: 'text', channel: 'SERVICE', dateSend: 1524125567, callbackUrl: 'http://goo.gl' })
```
```js
sendSMS.send({ numbers: ['79290000000', '79290000000', '79290000000'], sign: 'lol', text: 'text', channel: 'SERVICE', dateSend: 1524125567, callbackUrl: 'http://goo.gl' })
```

#### Параметры

Обязательными являются один из параметров: `number` или `numbers`.

#### number
Тип: `string`
Обязательно: `да`

#### numbers
Тип: `array`
Обязательно: `да`

#### sign
Тип: `string`
Обязательно: `нет`

#### text
Тип: `string`
Обязательно: `нет`

#### channel
Тип: `string`
Обязательно: `нет`

#### dateSend
Тип: `number`
Обязательно: `нет`
Формат: `unixtime`

#### callbackUrl
Тип: `string`
Обязательно: `нет`

### checkStatus(id)

Проверить статус отправленной sms.

```js
sendSMS.checkStatus(44180961)
```

#### Параметры

#### id
Тип: `number`
Обязательно: `да`


### sendedList({ number, text, page })

Получить список отправленных SMS.

```js
sendSMS.sendedList({number: '79290000000', text: 'text to filter sms', page: 2})
```

#### Параметры

#### number
Тип: `string`
Обязательно: `нет`

#### text
Тип: `string`
Обязательно: `нет`

#### page
Тип: `number`
Обязательно: `нет`

### balance()

Получить информацию о состоянии баланса в системе.

```js
sendSMS.balance()
```

### tariffs()

Получить информацию о тарифах.

```js
sendSMS.tariffs()
```

### addSign(name)

Добавить новую подпись. ___Подпись может содержать до 11 латинских символов, цифр и знаков.___

```js
sendSMS.addSign("DELIVERY")
```

#### name
Тип: `string`
Обязательно: `да`

### signList([page])

Получить список доступных подписей. На вход может принимать параметр `page`, если не передать, по умолчанию это 1 страница.

```js
sendSMS.signList(2)
```

#### Параметры

### addGroup(name)

Добавить новую группу.

```js
sendSMS.addGroup("DELIVERY")
```

#### Параметры

#### name
Тип: `string`
Обязательно: `да`

### deleteGroup(id)

Удалить группу.

```js
sendSMS.deleteGroup(1)
```

#### Параметры

#### id
Тип: `number`
Обязательно: `да`

### groupList([page])

Получить список групп. На вход может принимать параметр `page`, если не передать, по умолчанию это 1 страница.

```js
sendSMS.groupList(2)
```

#### Параметры

#### page
Тип: `string`
Обязательно: `нет`

### addContact({ number, [groupId, birthday, sex, lname, fname, sname, param1, param2, param3] })

Добавить контакт. Обязательный параметр только `number`. Параметр `sex` может иметь значения только `male` или `female`, или библиотека выкинет ошибку.

```js
sendSMS.addContact({number: '79000000000'})
```

#### number
Тип: `string`
Обязательно: `да`

#### groupId
Тип: `number`
Обязательно: `нет`

#### birthday
Тип: `number`
Обязательно: `нет`
Формат: `unixtime`

### sex
Тип: `string`
Возможные значения: `male`, `female`

#### lname
Тип: `string`
Обязательно: `нет`

#### fname
Тип: `string`
Обязательно: `нет`

#### sname
Тип: `string`
Обязательно: `нет`

#### param1
Тип: `string`
Обязательно: `нет`

#### param2
Тип: `string`
Обязательно: `нет`

#### param3
Тип: `string`
Обязательно: `нет`

### deleteContact(id)

Удалить контакт.

```js
sendSMS.deleteContact(253603322)
```

#### Параметры

#### id
Тип: `number`
Обязательно: `да`

### contactList({ [number, groupId, birthday, sex, operator, lname, fname, sname] })

Получить список контактов. Обязательных параметров нет.

```js
sendSMS.contactList({number: '79000000000', page: 1})
```

#### Параметры

#### number
Тип: `string`
Обязательно: `да`

#### groupId
Тип: `number`
Обязательно: `нет`

#### birthday
Тип: `number`
Обязательно: `нет`
Формат: `unixtime`

### sex
Тип: `string`
Возможные значения: `male`, `female`

### operator
Тип: `string`
Возможные значения: `MEGAFON`, `MTS`, `BEELINE`, `TELE2`, `OTHER`

#### lname
Тип: `string`
Обязательно: `нет`

#### fname
Тип: `string`
Обязательно: `нет`

#### sname
Тип: `string`
Обязательно: `нет`

### addBlacklist(number)

Добавить номер в черный список.

```js
sendSMS.addBlacklist('79000000000')
or
sendSMS.addBlacklist({ numbers: ['79000000000', '79000000001'] })
```

Обязательными являются один из параметров: `number` или `numbers`. В случае одного номера - можно просто передать его как строку, но так же можно и объектом с ключом `numbers` и массивом с одним телефоном (см. пример выше).

#### Параметры

#### number
Тип: `string`
Обязательно: `да`

#### numbers
Тип: `array`
Обязательно: `да`

### blacklistList([number, page])

Получить номера в черном списке. Обязательных параметров нет. Параметр page по умолчанию равен `1`.

```js
sendSMS.blacklistList('79000000000')
```

#### Параметры

#### number
Тип: `string`
Обязательно: `нет`

#### page
Тип: `number`
Обязательно: `нет`
По умолчанию: `1`

### hlrCheck(number)

Создание запроса на проверку HLR. Обязательными являются один из параметров: `number` или `numbers` (передаваемый как объект с ключом `numbers`, см. пример ниже).

```js
sendSMS.hlrCheck('79000000000')
or
sendSMS.hlrCheck({ numbers: ['79000000000', '79000000001'] })
```

#### Параметры

#### number
Тип: `string`
Обязательно: `да`

#### numbers
Тип: `array`
Обязательно: `да`

### hlrStatus(id)

Получение статуса HLR.

```js
sendSMS.hlrCheck(610991)
```

#### Параметры

#### id
Тип: `number`
Обязательно: `да`

### checkOperator(number)

Определение оператора по номеру телефона. Обязательными являются один из параметров: `number` или `numbers` (передаваемый как объект с ключом `numbers`, см. пример ниже).

```js
sendSMS.checkOperator('79000000000'),
sendSMS.checkOperator({ numbers: ['79000000000', '79000000001'] })
```

#### Параметры

#### number
Тип: `string`
Обязательно: `да`

#### numbers
Тип: `array`
Обязательно: `да`

### sendViber({ number, numbers, groupId, sign, channel, text, [imageSource, textButton, linkButton, dateSend, signSms, channelSms, textSms, priceSms] })

**Внимание!** У меня не было возможности оттестировать рассылку Viber на реальных данных, поэтому use it on your own risk, если что-то не работает или работает не так - не стесняйтесь сделать pull request с поправкой или создать issue!

Создание Viber-рассылки. Обязательными являются один из параметров: `number` или `numbers` (передаваемый как объект с ключом `numbers`, см. пример ниже), `groupId`, `sign`, `channel`, `text`.

```js
sendSMS.sendViber({ numbers: ['79000000000', '79000000001'] })
```

#### Параметры

#### number
Тип: `string`
Обязательно: `да`

#### numbers
Тип: `array`
Обязательно: `да`

#### groupId
Тип: `number`
Обязательно: `да`

#### sign
Тип: `string`
Обязательно: `да`

#### channel
Тип: `string`
Обязательно: `да`

#### text
Тип: `string`
Обязательно: `да`

#### imageSource
Тип: `string`
Обязательно: `нет`

#### textButton
Тип: `string`
Обязательно: `нет`

#### linkButton
Тип: `string`
Обязательно: `нет`

#### dateSend
Тип: `number`
Обязательно: `нет`
В формате: `unixtime`

#### signSms
Тип: `array`
Обязательно: `нет`

#### channelSms
Тип: `string`
Обязательно: `нет`

#### textSms
Тип: `string`
Обязательно: `нет`

#### priceSms
Тип: `number`
Обязательно: `нет`

### checkViberStat(id)

Статистика по Viber-рассылке.

```js
sendSMS.checkViberStat(693278)
```

#### Параметры

#### checkViberStat
Тип: `number`
Обязательно: `да`

#### viberList()

Список Viber-рассылок.

```js
sendSMS.viberList()
```

#### viberSignList()

Список доступных подписей для Viber-рассылок

```js
sendSMS.viberSignList()
```

