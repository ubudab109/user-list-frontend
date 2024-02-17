## REQUIRMENTS
- PHP 8.0+
- MYSQL
- COMPOSER

## INSTALLATIONS
- RUN `COMPOSER INSTALL`
- CREATE FILE `.env` THEN COPY ALL VALUES FROM `.env.example`
- ADJUST THE DATABASE CONFIGURATION WITH YOUR OWN
- RUN `php artisan migrate` AND `php artisan db:seed` TO MIGRATE TABLE AND SEED DATA

## HOW TO RUN?
- RUN `php -S localhost:8000 -t public` THEN THIS PROJECT WILL RUN ON YOUR LOCAL WITH 8000 PORT e.g (http://localhost:8000)
- IF WANT TO RUN UNIT TEST, YOU CAN RUN `/vendor/bin/phpunit`

## API ENDPOINT
#### THERE IS 2 ENDPOINT API FOR THIS APP THAT CAN BE ACCESSED
- `http://localhost:8000/api/users` TO GET ALL USERS DATA
- `http://localhost:8000/api/users/userId` TO GET SINGLE USER DATA BASED ON ID

## DEMO
<a href="https://aone-backend.000webhostapp.com/" target="_blank">URL</a>
