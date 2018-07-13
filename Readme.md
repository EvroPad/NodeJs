### Запуск демо-проекта

1. Проверить, что инстанс MongoDB запущен
2. Установить зависимости ```npm install```
3. Запустить сервер ```npm start```

## USERS

### Получить всех юзеров
GET ```http://localhost:1428/api/user```

### Создать нового юзера
POST ```http://localhost:1428/api/user```

BODY x-www-form-urlencoded

name: String

email: String


### Обновить юзера
PUT ```http://localhost:1428/api/user```

BODY x-www-form-urlencoded

id: id

name: String

email: String


### Удалить юзера
DEL ```http://localhost:1428/api/user/<id>```


## MESSAGES

### Получить все сообщения
GET ```http://localhost:1428/api/message```

### Создать новое сообщение
POST ```http://localhost:1428/api/message```

BODY x-www-form-urlencoded

senderId: id

receiverId: id

message: String


### Обновить сообщение
PUT ```http://localhost:1428/api/message```

BODY x-www-form-urlencoded

id: id

senderId: id

receiverId: id

message: String


### Удалить сообщение
DEL ```http://localhost:1428/api/message/<id>```
