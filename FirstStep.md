## 1. Cтворити файл .env в корені проекта

## 2. Додай в нього наступне -

# PostgreSQL Database Configuration for NestJS

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=pass123
DATABASE_NAME=postgres

# Optional: TypeORM sync and logging

TYPEORM_SYNCHRONIZE=true
TYPEORM_LOGGING=true

# Optional: JWT Secret for authentication

JWT_SECRET=your_jwt_secret
JWT_TOKEN_AUDIENCE=localhost:3000
JWT_TOKEN_ISSUER=localhost:3000
JWT_ACCESS_TOKEN_TTL=3600
JWT_REFRESH_TOKEN_TTL=86400

## 3. встанови Docker

## 4. після цього Запусти docker-compose up

## 5. коли він запуститься npm run start:dev або npm run start

## 6. Відкрий браузер за цим посиланням

[Документація API](http://localhost:3000/api/docs)

## 7. Створи користувача наприклад

```json
{
  "email": "user@nestjs.com",
  "password": "Password!123"
}
```

## 8. Залогінься

```json
{
  "email": "user@nestjs.com",
  "password": "Password!123"
}
```

## 9. Створи місце рибалки наприклад

```json
{
  "name": "Lake Svityaz",
  "location": "Volyn Region, Ukraine",
  "type": "Lake",
  "fishSpecies": "Pike-perch, Pike, Bream",
  "isPaid": false,
  "description": "One of the largest natural lakes in Ukraine with clean water and a rich fish population.",
  "seasonality": "Year-Round"
}
```
