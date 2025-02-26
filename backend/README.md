# Project Overview

This project provides a scalable Node.js backend with an optimised user data processing pipeline, a rate-limiting middleware, and an Express server. The infrastructure is provisioned using Terraform to deploy the service on AWS ECS with an ALB.

## Installation & Setup

### Prerequisites
- Node.js (v14 or later)
- AWS CLI (configured with appropriate permissions)
- Terraform (v1.0 or later)

### Install Dependencies
```sh
npm install
```

## Project Structure

```
.
├── data-processor.js           # Optimised user data processor
├── data-processor.test.js      # Tests for user data processor
├── rate-limiter.js             # Rate-limiting middleware
├── rate-limiter.test.js        # Tests for rate limiter
├── server.js                   # Express server with API endpoints
├── infra.tf                    # Terraform configuration for AWS infrastructure
└── package.json                # Project dependencies and scripts
```

## Usage

### Running the Server
```sh
node server.js
```
The server starts on `http://localhost:3000/`.

### API Endpoints

#### Process Users
- **Endpoint:** `POST /process-users`
- **Headers:**
  ```json
  {
    "x-tenant-id": "tenant_123",
    "Content-Type": "application/json"
  }
  ```
- **Request Body:**
  ```json
  {
    "users": [
      { "id": 1, "name": "Alice", "email": "alice@email.com" },
      { "id": 2, "name": "Bob", "email": null }
    ]
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "data": [
      { "id": 1, "name": "Alice", "email": "alice@email.com" },
      { "id": 2, "name": "Bob", "email": "user2@email.com" }
    ]
  }
  ```

#### Health Check
- **Endpoint:** `GET /`
- **Response:** `Server is running...`

## Testing

To run tests:
```sh
npm test
```

## Infrastructure Deployment

### Deploying with Terraform
```sh
terraform init
terraform apply
```
This deploys the application on AWS ECS with an Application Load Balancer. The ALB's DNS name is output after deployment.

## Environment Variables

- `PORT` (optional, defaults to `3000`)
- AWS credentials must be configured using `aws configure`.

## Notes

- The rate limiter allows 100 requests per tenant per minute.
- The user processor optimises duplicate removal and missing email enrichment.
- The Terraform script provisions networking, security groups, ECS cluster, and auto-scaling configurations.



