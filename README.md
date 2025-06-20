# Alafia Backend API

> Backend service for Alafia Oasis senior living facility dashboard

[![CI/CD Pipeline](https://github.com/<your-username>/alafia-backend/actions/workflows/ci.yml/badge.svg)](https://github.com/<your-username>/alafia-backend/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/<your-username>/alafia-backend/badge.svg)](https://coveralls.io/github/<your-username>/alafia-backend)

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [CI/CD](#cicd)
- [Contributing](#contributing)
- [License](#license)

## Features
- Resident management (CRUD operations)
- Data validation with Zod schemas
- Comprehensive logging
- Error handling middleware
- Health check endpoints
- JWT authentication
- Dockerized environment

## Technologies
- **Runtime**: Node.js 18
- **Framework**: Express
- **Database**: MongoDB
- **Validation**: Zod
- **Logging**: Winston
- **Testing**: Jest, Supertest
- **Containerization**: Docker
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB 6+
- Docker 20+

### Installation
```bash
# Clone repository
git clone https://github.com/Dev-Faith/Alafia-dashboard-BE.git
cd alafia-backend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
