export = {
  "type": "sqlite",
  "database": "data.sqlite",
  "synchronize": true,
  "logging": false,
  "entities": [
    "entities/**/*.ts"
  ],
  "migrations": [
    "migration/**/*.ts"
  ],
  "subscribers": [
    "subscriber/**/*.ts"
  ],
  "cli": {
    "entitiesDir": "entities",
    "migrationsDir": "migration",
    "subscribersDir": "subscriber"
  }
}