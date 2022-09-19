
# SHOP


This project deals with the operation of the online store. I made it with a tutorial because I wanted to learn Laravel


## Build with
Project is created with:
* Laravel 9.17.0
* Bootstrap 5.1.3
* sweetalert2 11.4.19
* PHP 8
* fortawesome/fontawesome-free 6.1.2

    
## Setup
1. Clone this repo to your computer.
2. Open this repo in IDE.
3. In the terminal, type:
* composer install
* cp .env.example .env
* php artisan key:generate
* npm install
* npm run dev
I use public disk, so if you also want to use a public disk in the env file add
"FILESYSTEM_DISK=public" and for the default pictures to load you need to add in env
you must add "SHOP_DEFAULT_IMAGE =https://via.placeholder.com/240x240/5fa9f8/efefef"

4. If you did this in the env file, configure the database and mail. I used the mailtrapo for the project
5. Later in the terminal, use the commands:
* php artisan config:cache
* php artisan storage:link
* php artisan migrate
* php artisan serve


## Main View

After you do everything, you will see the main panel with no products

## Status

Finished work
