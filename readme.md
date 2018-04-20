# SMSAero API Node.js
Класс для работы с API [smsaero.ru](https://smsaero.ru/) в Node.js. Поддерживаются все методы [API v2](https://smsaero.ru/description/api/).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Установка](#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0)
- [Использование](#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
- [API](#api)
  - [send({ number, numbers, [sign, text, channel, dateSend, callbackUrl] })](#send-number-numbers-sign-text-channel-datesend-callbackurl-)
  - [checkStatus(id)](#checkstatusid)
  - [sendedList({ number, text, page })](#sendedlist-number-text-page-)
  - [balance()](#balance)
  - [tariffs()](#tariffs)
  - [addSign(name)](#addsignname)
  - [signList([page])](#signlistpage)
  - [addGroup(name)](#addgroupname)
  - [deleteGroup(id)](#deletegroupid)
  - [groupList([page])](#grouplistpage)
  - [addContact({ number, [groupId, birthday, sex, lname, fname, sname, param1, param2, param3] })](#addcontact-number-groupid-birthday-sex-lname-fname-sname-param1-param2-param3-)
  - [deleteContact(id)](#deletecontactid)
  - [contactList({ [number, groupId, birthday, sex, operator, lname, fname, sname] })](#contactlist-number-groupid-birthday-sex-operator-lname-fname-sname-)
  - [addBlacklist(number)](#addblacklistnumber)
  - [blacklistList([number, page])](#blacklistlistnumber-page)
  - [hlrCheck(number)](#hlrchecknumber)
  - [hlrStatus(id)](#hlrstatusid)
  - [checkOperator(number)](#checkoperatornumber)
  - [sendViber({ number, numbers, groupId, sign, channel, text, [imageSource, textButton, linkButton, dateSend, signSms, channelSms, textSms, priceSms] })](#sendviber-number-numbers-groupid-sign-channel-text-imagesource-textbutton-linkbutton-datesend-signsms-channelsms-textsms-pricesms-)
  - [checkViberStat(id)](#checkviberstatid)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Установка
```bash
npm install --save smsaero-api
```
or
```js
yarn add smsaero-api
```

## Использование

Все методы возвращают promise, поэтому используйте .then/catch или async/await.

```js
const smsAero = require('smsaero-api');
// третьим параметром идет формат ответа, если не указать, то используется json
const sendSMS = new smsAero("login", "apiKey", "json");

sendSMS.send(...); // отправить sms
  .then(response => {
      const { data } = response;
      console.log(data); // ответ API
    })
  .catch(err => console.log(err)); // ловим ошибки
```

## API
Принимаемые методами параметры почти везде совпадают с [документацией](https://smsaero.ru/description/api/), поэтому за детальным разъяснением какой метод за что отвечает - обращайтесь к ней.

### send({ number, numbers, [sign, text, channel, dateSend, callbackUrl] })

Отправка SMS.

```js
sendSMS.send({ number: '79290000000', sign: 'lol!', text: 'text', channel: 'SERVICE', dateSend: 1524125567, callbackUrl: 'http://goo.gl' })
```
```js
sendSMS.send({ numbers: ['79290000000', '79290000000', '79290000000'], sign: 'lol', text: 'text', channel: 'SERVICE', dateSend: 1524125567, callbackUrl: 'http://goo.gl' })
```

#### Параметры

Обязательными являются один из параметров: `number` или `numbers`.

#### number
Тип: `string`<br>
Обязательно: `да`

#### numbers
Тип: `array`<br>
Обязательно: `да`

#### sign
Тип: `string`<br>
Обязательно: `нет`

#### text
Тип: `string`<br>
Обязательно: `нет`

#### channel
Тип: `string`<br>
Обязательно: `нет`

#### dateSend
Тип: `number`<br>
Обязательно: `нет`<br>
Формат: `unixtime`

#### callbackUrl
Тип: `string`<br>
Обязательно: `нет`

### checkStatus(id)

Проверить статус отправленной sms.

```js
sendSMS.checkStatus(44180961)
```

#### Параметры

#### id
Тип: `number`<br>
Обязательно: `да`


### sendedList({ number, text, page })

Получить список отправленных SMS.

```js
sendSMS.sendedList({number: '79290000000', text: 'text to filter sms', page: 2})
```

#### Параметры

#### number
Тип: `string`<br>
Обязательно: `нет`

#### text
Тип: `string`<br>
Обязательно: `нет`

#### page
Тип: `number`<br>
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
Тип: `string`<br>
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
Тип: `string`<br>
Обязательно: `да`

### deleteGroup(id)

Удалить группу.

```js
sendSMS.deleteGroup(1)
```

#### Параметры

#### id
Тип: `number`<br>
Обязательно: `да`

### groupList([page])

Получить список групп. На вход может принимать параметр `page`, если не передать, по умолчанию это 1 страница.

```js
sendSMS.groupList(2)
```

#### Параметры

#### page
Тип: `string`<br>
Обязательно: `нет`

### addContact({ number, [groupId, birthday, sex, lname, fname, sname, param1, param2, param3] })

Добавить контакт. Обязательный параметр только `number`. Параметр `sex` может иметь значения только `male` или `female`, или библиотека выкинет ошибку.

```js
sendSMS.addContact({number: '79000000000'})
```

#### number
Тип: `string`<br>
Обязательно: `да`

#### groupId
Тип: `number`<br>
Обязательно: `нет`

#### birthday
Тип: `number`<br>
Обязательно: `нет`<br>
Формат: `unixtime`

#### sex
Тип: `string`<br>
Возможные значения: `male`, `female`

#### lname
Тип: `string`<br>
Обязательно: `нет`

#### fname
Тип: `string`<br>
Обязательно: `нет`

#### sname
Тип: `string`<br>
Обязательно: `нет`

#### param1
Тип: `string`<br>
Обязательно: `нет`

#### param2
Тип: `string`<br>
Обязательно: `нет`

#### param3
Тип: `string`<br>
Обязательно: `нет`

### deleteContact(id)

Удалить контакт.

```js
sendSMS.deleteContact(253603322)
```

#### Параметры

#### id
Тип: `number`<br>
Обязательно: `да`

### contactList({ [number, groupId, birthday, sex, operator, lname, fname, sname] })

Получить список контактов. Обязательных параметров нет.

```js
sendSMS.contactList({number: '79000000000', page: 1})
```

#### Параметры

#### number
Тип: `string`<br>
Обязательно: `да`

#### groupId
Тип: `number`<br>
Обязательно: `нет`

#### birthday
Тип: `number`<br>
Обязательно: `нет`<br>
Формат: `unixtime`

#### sex
Тип: `string`<br>
Возможные значения: `male`, `female`

#### operator
Тип: `string`<br>
Возможные значения: `MEGAFON`, `MTS`, `BEELINE`, `TELE2`, `OTHER`

#### lname
Тип: `string`<br>
Обязательно: `нет`

#### fname
Тип: `string`<br>
Обязательно: `нет`

#### sname
Тип: `string`<br>
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
Тип: `string`<br>
Обязательно: `да`

#### numbers
Тип: `array`<br>
Обязательно: `да`

### blacklistList([number, page])

Получить номера в черном списке. Обязательных параметров нет. Параметр page по умолчанию равен `1`.

```js
sendSMS.blacklistList('79000000000')
```

#### Параметры

#### number
Тип: `string`<br>
Обязательно: `нет`

#### page
Тип: `number`<br>
Обязательно: `нет`<br>
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
Тип: `string`<br>
Обязательно: `да`

#### numbers
Тип: `array`<br>
Обязательно: `да`

### hlrStatus(id)

Получение статуса HLR.

```js
sendSMS.hlrCheck(610991)
```

#### Параметры

#### id
Тип: `number`<br>
Обязательно: `да`

### checkOperator(number)

Определение оператора по номеру телефона. Обязательными являются один из параметров: `number` или `numbers` (передаваемый как объект с ключом `numbers`, см. пример ниже).

```js
sendSMS.checkOperator('79000000000'),
sendSMS.checkOperator({ numbers: ['79000000000', '79000000001'] })
```

#### Параметры

#### number
Тип: `string`<br>
Обязательно: `да`

#### numbers
Тип: `array`<br>
Обязательно: `да`

### sendViber({ number, numbers, groupId, sign, channel, text, [imageSource, textButton, linkButton, dateSend, signSms, channelSms, textSms, priceSms] })

**Внимание!** У меня не было возможности оттестировать рассылку Viber на реальных данных, поэтому use it on your own risk, если что-то не работает или работает не так - не стесняйтесь сделать pull request с поправкой или создать issue!

Создание Viber-рассылки. Обязательными являются один из параметров: `number` или `numbers` (передаваемый как объект с ключом `numbers`, см. пример ниже), `groupId`, `sign`, `channel`, `text`.

```js
sendSMS.sendViber({ numbers: ['79000000000', '79000000001'] })
```

#### Параметры

#### number
Тип: `string`<br>
Обязательно: `да`

#### numbers
Тип: `array`
Обязательно: `да`

#### groupId
Тип: `number`<br>
Обязательно: `да`

#### sign
Тип: `string`<br>
Обязательно: `да`

#### channel
Тип: `string`<br>
Обязательно: `да`

#### text
Тип: `string`<br>
Обязательно: `да`

#### imageSource
Тип: `string`<br>
Обязательно: `нет`

#### textButton
Тип: `string`<br>
Обязательно: `нет`

#### linkButton
Тип: `string`<br>
Обязательно: `нет`

#### dateSend
Тип: `number`<br>
Обязательно: `нет`<br>
В формате: `unixtime`

#### signSms
Тип: `array`<br>
Обязательно: `нет`

#### channelSms
Тип: `string`<br>
Обязательно: `нет`

#### textSms
Тип: `string`<br>
Обязательно: `нет`

#### priceSms
Тип: `number`<br>
Обязательно: `нет`

### checkViberStat(id)

Статистика по Viber-рассылке.

```js
sendSMS.checkViberStat(693278)
```

#### Параметры

#### checkViberStat
Тип: `number`<br>
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

## License

MIT © [Alexander Sharabarov](https://alcovegan.github.io/)