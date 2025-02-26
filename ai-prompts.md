# AI Prompt Logging

## 📝 AI Usage Summary
- **Did AI help you solve any problems? If so, how?** No, I was able to solve the problems myself however writing the code and doucmentation that I needed based on my instructions increased my productivity.
- **What parts were 100% human-driven?** The problem solving
- **Did AI generate incorrect/misleading answers? How did you correct them?** - Yes, through considered desicions as to what was pragmatic and practcal during the time frame
- **Which AI-powered IDE tools did you use?** ChatGPT and ChatGPT in VS Code

---

## 📜 AI Prompts Used
Task 1
- Prompt 1:Optimise a function that deduplicates users and enriches missing emails asynchronously. Improve performance for large datasets (1M+ records).
- Prompt 2: consider api rate limits for promise.all
- Prompt 3: consider writing tests for 1 million+ users using jest

Task 2
- Prompt 1: "Implement a middleware to limit API requests per tenant (organization).""
- Prompt 2: "consider writing tests for 1 million+ users using jest"
- Prompt 3: "create a Node.js Express server file, I have created an API."
- Prompt 4: "create JSON data of users with id, name, and email, where some emails are null."
- Prompt 5: "I need to call this function through Postman, prepare for me the request to processUsers."

Task 3


Task4
- Prompt 1: "I need to deploy a nodejs server on ECS Fargate cluster with a load balancer. Give me step by step instructions."
- Prompt 2: "Use Terraform for better automation go with that option."
- Prompt 3: "I’m getting a 403 Unauthorized error when trying to create an ECS Fargate cluster with Terraform. How do I fix this?"
- Prompt 4: "create a readme file for the backend development files"

Task 7 ## **7️⃣ PRD Review & Critique (15 min)**
- Prompt 1: "Review the PRD and suggest 3 critical improvements"
- Prompt 2: "Base improvements on what a typical PRD should include:

Objective – The purpose and goals of the product or feature.
User Stories/Use Cases – How users will interact with the product.
Features & Requirements – A detailed list of functionalities, constraints, and non-functional requirements.
Wireframes & UX Considerations – Visual representations of the product flow.
Technical Considerations – Any backend, API, or system dependencies.
Success Metrics – How success will be measured (e.g., KPIs, adoption rates).
Timeline & Milestones – Expected delivery dates and key phases."

Task 8 ## **8️⃣ AWS Debugging Scenario (20 min)**
- Prompt 1: "I have upgraded Aurora Serverless Postgres v13 to v14, but the cluster fails with:
ERROR: Extension incompatible: some_extension v1.3 not compatible with Postgres v14 
    •	Identify potential reasons for failure.
	•	Provide a step-by-step debugging process.
	•	Ensure minimal downtime for production users."
- Prompt 2: "base answer on AWS best practices
- Prompt 3:  "create a markdown file with the overall solution"

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Upgrading.ExtensionUpgrades.html"

Task 9 ## **9️⃣ Scalability Strategy (20 min)**
- Prompt 1: "Your application needs to process and serve 10M+ images per day.
 
- Design a highly scalable architecture on AWS.
- Optimize for cost-efficiency (consider AWS Lambda, S3, Step Functions).
- Ensure smooth delivery over weak mobile connections.
design the solution based on the AWS Well Architected framework"
- Prompt 2: "Detail the functional, Non-fuctional, capacity estamiation, database design, API design and high levele system design "
- Prompt 3: "should all images be in the CDN? Maybe only regularly accesses images?"
- Prompt 4:  "create a markdown file with the overall solution"

Task 10 **🔟 Security Strategy: JWT Expiry Fix (20 min)**
- Prompt 1: "Design a secure authentication flow using access & refresh tokens, propose a gradual rollout strategy, and identify potential risks while following AWS security best practices"
- Prompt 2: "how can I improve a JWT authentication flow with AWS best practices, including token expiration, refresh token rotation, and security measures"
- Prompt 3: "what security risks exist with JWTs, and how can I mitigate them following OWASP, NIST, and CIS AWS security standards?"
 Prompt 4:  "create a markdown file with the overall solution"