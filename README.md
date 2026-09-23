# PetNest

PetNest is a full-stack pet services management platform designed to simplify the process of discovering and booking pet-related services such as grooming, veterinary care, and other appointments. It provides users with a centralized platform to manage their bookings and track appointment status.

## Features

* User registration and authentication
* Browse available pet services
* Book pet service appointments
* View upcoming and past appointments
* Track appointment status
* Manage appointment details
* Service reviews and ratings
* User profile management
* Responsive and user-friendly interface
* Privacy Policy and Terms & Conditions pages

## Tech Stack

* Node.js
* Express.js
* MongoDB
* EJS
* Bootstrap
* JavaScript
* Passport.js

## Project Modules

### User Module

* User registration and login
* Authentication and authorization
* Profile management

### Services Module

* Browse available pet services
* Service categories such as grooming and veterinary care

### Appointment Module

* Book appointments
* View upcoming and previous appointments
* Track appointment status
* Manage existing bookings

### Dashboard

* Centralized view of user activities
* Organized display of appointments and their status

### Review Module

* Submit ratings and reviews for services
* View feedback from other users

## IMAGES
<img width="796" height="389" alt="image" src="https://github.com/user-attachments/assets/2700e18a-b25b-405c-92a7-051ebd78d04d" />
<img width="792" height="363" alt="image" src="https://github.com/user-attachments/assets/b3b7a1a2-2792-448e-b430-a959b1bd9a11" />
<img width="791" height="384" alt="image" src="https://github.com/user-attachments/assets/bdd1f3af-4fce-4634-83f8-348bb4138e50" />
<img width="940" height="464" alt="image" src="https://github.com/user-attachments/assets/b5ca5c33-8fcc-4fd8-91e1-9bf4b140f069" />
<img width="940" height="457" alt="image" src="https://github.com/user-attachments/assets/5d9b9a42-a864-457e-95e2-7c4877ddd85c" />
<img width="757" height="374" alt="image" src="https://github.com/user-attachments/assets/797989aa-a162-4920-89b0-aaa039215d9e" />


## Project Structure

```text
PetNest/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── middleware/
├── utils/
├── app.js
└── package.json
```

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd PetNest
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and configure your environment variables:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
```

4. Start the application:

```bash
node app.js
```

5. Open the application in your browser:

```text
http://localhost:8080
```

## Purpose

PetNest was developed to provide a structured digital solution for managing pet service appointments. The project provided hands-on experience with full-stack development, authentication, CRUD operations, database management, server-side rendering, and responsive UI development.

## Future Improvements

* Online payment integration
* Email/SMS appointment notifications
* Advanced service filtering
* Provider-side management dashboard
* Pet profile and medical history management
* Location-based service discovery
