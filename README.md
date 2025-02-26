# Engineering Manager Test

## Welcome to the Engineering Manager Test

This test is designed to evaluate your technical skills, problem-solving abilities, and critical thinking as an engineering manager at Fliplet. You will be working on a series of tasks that cover both backend and frontend development, as well as reviewing product requirements and providing written explanations for various scenarios.

The tasks are intended to simulate real-world challenges you might face in this role. We encourage you to demonstrate your expertise, creativity, and efficiency in solving these problems. Remember to document your thought process and any AI tools you use during the test.

Good luck, and we look forward to reviewing your submission!


## 📜 Instructions

### **How to Take the Test**
1. **Fork this repository** (do NOT submit a PR).
2. Complete the tasks in the appropriate files.
3. **Commit & push your changes** to your forked repo.
4. **Share GitHub access** with `@fliplet.com`.
5. **Log AI usage:**  
   - **Provide all AI prompts used** (copy-paste them into `ai-prompts.md`).  
   - **Summarize AI impact** (write about it in your README summary).  
   - **List any AI-powered IDE tools used** (e.g., GitHub Copilot, Cursor, ChatGPT in VS Code).  

---

## 📂 Repository Structure
```
/engineering-manager-test/
│── README.md  # Instructions & submission process
│── ai-prompts.md  # All AI prompts used
│── /backend/  # Backend coding tasks (Node.js, Express.js, AWS, Terraform)
│── /frontend/  # Frontend Vue.js tasks
│── /docs/  # PRD review & tech specs
│── /solutions/  # Written explanations (AWS debugging, security, scaling)
```

## ✅ Evaluation Criteria
Your submission will be judged on:
1. **Technical Depth** – Demonstrates strong knowledge & reasoning.
2. **Code Quality** – Readability, efficiency, maintainability.
3. **AI Usage** – Allowed, but critical thinking must be evident.
4. **AI Prompting Skill** – Ability to craft meaningful prompts and refine AI outputs.
5. **Time Management** – Prioritization of effort within the given timeframe.

---

# 🛠️ Engineering Manager Tasks

## **1️⃣ JavaScript/TypeScript Performance Task (20 min)**
### **Task:**  
Optimize the function below for handling large datasets **efficiently**.

### **Scenario:**  
Your company processes user records but must:
- Deduplicate users.
- Enrich missing email data asynchronously via an API.
- Optimize performance when handling **1 million+ users**.

### **File to Edit:**  
`/backend/data-processor.js`

```js
// Sample dataset (users.json)
const users = [
  { id: 1, name: "Alice", email: "alice@email.com" },
  { id: 2, name: "Bob", email: null },
  { id: 3, name: "Alice", email: "alice@email.com" },
];

// Mock API to fetch missing data
async function fetchUserData(id) {
  return { email: `user${id}@email.com` };
}

// Optimize this function:
async function processUsers(users) {
  let results = [];
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (!user.email) {
      let enriched = await fetchUserData(user.id);
      user.email = enriched.email;
    }
    results.push(user);
  }
  return results;
}

module.exports = processUsers;
```

---

## **2️⃣ Express.js Rate Limiter Middleware (20 min)**
### **Task:**  
Implement a middleware to **limit API requests per tenant (organization).**

### **Scenario:**  
Your SaaS product allows **100 requests per minute per tenant**.

### **File to Edit:**  
`/backend/rate-limiter.js`  

```js
const rateLimit = {}; // Object to track requests per tenant

function rateLimiter(req, res, next) {
  const tenant = req.headers["x-tenant-id"];
  if (!tenant) return res.status(400).json({ error: "Missing tenant ID" });

  if (!rateLimit[tenant]) {
    rateLimit[tenant] = { count: 1, startTime: Date.now() };
  } else {
    let elapsed = Date.now() - rateLimit[tenant].startTime;
    if (elapsed > 60000) { // Reset every minute
      rateLimit[tenant] = { count: 1, startTime: Date.now() };
    } else {
      rateLimit[tenant].count++;
      if (rateLimit[tenant].count > 100) {
        return res.status(429).json({ error: "Rate limit exceeded" });
      }
    }
  }
  next();
}

module.exports = rateLimiter;
```

---

## **3️⃣ Vue.js Drag-and-Drop Component (25 min)**
### **Task:**  
Implement a **drag-and-drop UI** that allows users to add UI components to a web page preview.

### **File to Edit:**  
`/frontend/drag-drop.vue`  

```vue
<template>
  <div>
    <h3>Drag & Drop Components</h3>
    <div class="library">
      <button draggable="true" @dragstart="dragStart('Text')">Text</button>
      <button draggable="true" @dragstart="dragStart('Button')">Button</button>
    </div>
    <div class="preview" @drop="drop" @dragover.prevent>
      <p v-for="item in items" :key="item">{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { items: [] };
  },
  methods: {
    dragStart(type) {
      event.dataTransfer.setData("text/plain", type);
    },
    drop(event) {
      let type = event.dataTransfer.getData("text/plain");
      this.items.push(type);
    }
  }
};
</script>

<style>
.library { margin-bottom: 10px; }
.preview { min-height: 100px; border: 1px dashed black; padding: 10px; }
</style>
```

---

## **4️⃣ Infrastructure as Code (Terraform) (25 min)**
### **Scenario:**  
You need to deploy an **ECS Fargate cluster** with a **load balancer**.

### **File to Edit:**  
`/backend/infra.tf`  

```hcl
provider "aws" {
  region = "us-east-1"
}

resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_ecs_cluster" "main" {
  name = "ecs-cluster"
}

resource "aws_lb" "main" {
  name               = "ecs-load-balancer"
  internal           = false
  load_balancer_type = "application"
}

resource "aws_ecs_service" "service" {
  name            = "app-service"
  cluster         = aws_ecs_cluster.main.id
  desired_count   = 2
  launch_type     = "FARGATE"
}
```

---

## **7️⃣ PRD Review & Critique (15 min)**
### **Scenario:**  
Your product team wrote a **bad PRD**. Find **3 critical issues**.

### **File to Edit:**  
`/solutions/prd-review.md`  

```md
# PRD Review

## 📝 Instructions
Review the following PRD and identify **3 critical issues**.

## Example PRD
### Feature: User Profile Management
1. Users should be able to update their name and email.
2. There is no authentication mechanism specified.
3. No mention of error handling.

## ✏️ Your Review
- Issue 1:
- Issue 2:
- Issue 3:
```

---

## **8️⃣ AWS Debugging Scenario (20 min)**
### **Scenario:**  
You upgraded **Aurora Serverless Postgres v13 to v14**, but the cluster fails with:
```
ERROR: Extension incompatible: some_extension v1.3 not compatible with Postgres v14
```
### **Task:**  
- Identify **potential reasons for failure**.
- Provide **a step-by-step debugging process**.
- **Ensure minimal downtime** for production users.

📄 **File to edit:** `/solutions/aws-debugging.md`

---

## **9️⃣ Scalability Strategy (20 min)**
### **Scenario:**  
Your application needs to **process and serve 10M+ images per day**.

### **Task:**  
- Design a **highly scalable architecture** on AWS.
- Optimize **for cost-efficiency** (consider AWS Lambda, S3, Step Functions).
- **Ensure smooth delivery** over weak mobile connections.

📄 **File to edit:** `/solutions/scalability-plan.md`

---

## **🔟 Security Strategy: JWT Expiry Fix (20 min)**
### **Scenario:**  
Your security team found that **JWT access tokens never expire**, leaving the system vulnerable.

### **Task:**  
- Design a **secure authentication flow** using **access & refresh tokens**.
- Propose a **gradual rollout strategy** to prevent breaking existing users.
- Identify **potential risks** and how to mitigate them.

📄 **File to edit:** `/solutions/security-strategy.md`

---

## 🎯 **Final Submission Notes**
✔️ **Fork this repo** (DO NOT create a public PR).  
✔️ **Implement solutions in the designated files.**  
✔️ **Commit & push your work.**  
✔️ **Share GitHub access with `@fliplet.com`.**  

🚀 **Good luck!**

---
