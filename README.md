# Weather Notification Microservices System

This project demonstrates a basic microservices architecture consisting of two services: a Weather Service and a Notification Service. The services communicate with each other to provide weather updates to users.

## System Architecture

The system consists of two microservices:
1. Weather Service (Port 4000) - Provides weather data
2. Notification Service (Port 5000) - Delivers weather notifications

See `architecture.mmd` for a visual representation of the system flow.

## Services Overview

### Weather Service
- Provides weather data through REST API
- Endpoint: `/api/weather`
- Returns: Current weather for New York City

### Notification Service
- Delivers weather notifications to clients
- Endpoint: `/api/notify`
- Fetches data from Weather Service and formats notifications

## Technical Stack
- Node.js + Express.js
- REST APIs for communication
- Axios for HTTP requests
