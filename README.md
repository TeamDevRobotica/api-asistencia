# Config Initial

1. `npm install typeorm`
2. `typeorm init --name user-microservice --database mysql --express`
3. `cd user-microservice`
4. `npm install`

# DB config

5. `docker run --name songtham-mysql -e MYSQL_ROOT_PASSWORD=test -e MYSQL_USER=test -e MYSQL_PASSWORD=test -e MYSQL_DATABASE=test -p 3306:3306 -d mysql:latest --default-authentication-plugin=mysql_native_password`

# Awesome Project Build with TypeORM

Steps to run this project:

6. Setup database settings inside `ormconfig.json` file
7. Run `npm start` command
# api-asistencia
