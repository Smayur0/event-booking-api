# Event Booking System

A simple backend system built with Node.js, Express, MongoDB, Redis, and Bull queue.

This project demonstrates:

* Event creation by Organizer
* Ticket booking by Customer
* Background job processing (booking confirmation & event update notifications)

---

# Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* Redis
* Bull (Job Queue)

---

# Project Setup

## 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Setup Environment Variables

Create a `.env` file in root directory:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/event-booking
REDIS_URL=redis://127.0.0.1:6379
```

---

## 4️⃣ Start Redis (Local Development)

Using Docker:

```bash
docker run -d -p 6379:6379 redis
```

OR if Redis is installed locally:

```bash
redis-server
```

---

## 5️⃣ Start Server

```bash
npm run dev
```

You should see:

```
Server running on port 5000
MongoDB Connected
```

---

# API Endpoints

## 1️⃣ Create Event

**POST** `/api/events`

### Headers

```
x-user-id: 1
x-user-email: organizer@test.com
x-user-role: ORGANIZER
```

### Body

```json
{
  "title": "Node Conference",
  "description": "Backend Workshop",
  "date": "2026-03-01",
  "totalTickets": 100
}
```

### Expected Result

* Event saved in MongoDB
* Event object returned in response

---

## 2️⃣ Book Ticket

**POST** `/api/bookings`

### Headers

```
x-user-id: 2
x-user-email: customer@test.com
x-user-role: CUSTOMER
```

### Body

```json
{
  "eventId": "<EVENT_ID>",
  "quantity": 2
}
```

### Expected Result

* Booking saved in MongoDB
* Immediate API response
* Terminal log shows booking confirmation job execution

Example terminal log:

```
📧 Sending booking confirmation...
Email sent to: customer@test.com
```

---

## 3️⃣ Update Event

**PUT** `/api/events/:id`

### Headers

```
x-user-id: 1
x-user-email: organizer@test.com
x-user-role: ORGANIZER
```

### Body

```json
{
  "title": "Updated Node Conference"
}
```

### Expected Result

* Event updated
* Background notification job triggered

Example terminal log:

```
📢 Notifying users about event update
Notification sent to: customer@test.com
```

---

# How Background Jobs Work

1. Booking API saves booking
2. Job added to Redis queue
3. Worker processes job asynchronously
4. Confirmation/Notification is logged

The API does not wait for background job completion.

---

# Common Issues

## Request Hanging

* Ensure Redis is running
* Check REDIS_URL
* Avoid using remote Redis for local testing

## ObjectId Errors

* Organizer and Customer fields are stored as String
* Event reference remains ObjectId

---

# Production Deployment Notes

* Use managed MongoDB (Atlas)
* Use managed Redis service
* Configure proper TLS for Redis if required
* Remove console logs and integrate real email service (e.g., SendGrid)

---

# Author

Backend Event Booking System – Demo Assignment Project
