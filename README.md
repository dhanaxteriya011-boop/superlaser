# SuperLaser Website

This project is a full-stack web application built using **Laravel (Backend)** and **React (Frontend)**.

## Project Structure

```
superlaser
│
├── backend    # Laravel API
│
└── frontend   # React Application
```

---

## Technologies Used

Backend:

* PHP
* Laravel
* MySQL

Frontend:

* React
* JavaScript
* Axios
* CSS / Bootstrap

---

## Backend Setup (Laravel)

1. Navigate to backend folder

```
cd backend
```

2. Install dependencies

```
composer install
```

3. Copy environment file

```
cp .env.example .env
```

4. Configure database in `.env`

Example:

```
DB_DATABASE=superlaser
DB_USERNAME=root
DB_PASSWORD=
```

5. Generate application key

```
php artisan key:generate
```

6. Run migrations

```
php artisan migrate
```

7. Start Laravel server

```
php artisan serve
```

Backend will run at:

```
http://127.0.0.1:8000
```

---

## Frontend Setup (React)

1. Navigate to frontend folder

```
cd frontend
```

2. Install dependencies

```
npm install
```

3. Start React development server

```
npm start
```

Frontend will run at:

```
http://localhost:3000
```

---

## API Communication

React frontend communicates with Laravel backend using REST APIs.

Example API:

```
GET /api/hello
```

---

## Author

Dhanalakshmi
