# Chai Express – A Creator Support Platform

![License](https://img.shields.io/badge/license-MIT-green)
![Tech](https://img.shields.io/badge/stack-MERN-blue)
![Status](https://img.shields.io/badge/status-Active-brightgreen)

*Chai Express* is a modern web platform that enables creators to receive financial support from their audience through small contributions. The platform features secure GitHub OAuth login, personalized dashboards, real-time support messages, and seamless Razorpay integration for UPI, cards, and wallets.

---

## Features

- GitHub OAuth authentication for creators
- Personalized dashboards
- Razorpay integration for payments
- Real-time supporter messages
- Clean and responsive UI (Next.js + Tailwind CSS)

---

## Tech Stack

- *Frontend:* Next.js, Tailwind CSS  
- *Backend:* Node.js, Express.js  
- *Database:* MongoDB with Mongoose  
- *Authentication:* GitHub OAuth (via NextAuth.js)  
- *Payment Gateway:* Razorpay

---

## Demo

[Watch the demo video](#) ([](https://www.linkedin.com/posts/adityajain2309_nextjs-mongodb-nodejs-activity-7323348242681815040-7Lq9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD813ckBAQwRvN7yqZp0eT52nZKBfwsN3cA))

---

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/chai-express.git
cd chai-express


You have to also add this 


# MongoDB Connection
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/chai-express

# GitHub OAuth for NextAuth
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# Razorpay Keys
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# NextAuth Config
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_BASE_URL=http://localhost:3000
