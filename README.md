# Task 1: Automate Code Deployment Using CI/CD Pipeline

**Objective:** Set up a CI/CD pipeline to build and deploy a web app.

**Tools Used:** GitHub, GitHub Actions, Node.js, Docker, DockerHub

### What I Did:
1. Created a sample Node.js app with Dockerfile
2. Created `.github/workflows/main.yml` to define pipeline
3. Pipeline triggers on push to main branch
4. Steps automated: test -> build -> push to DockerHub
5. Used GitHub Secrets `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` for security
6. Successfully pushed image to DockerHub: `soundhar2003/cicd-node-app:latest`

### Pipeline Flow:
`git push` -> GitHub Actions Runner -> Checkout -> Setup Node.js -> npm test -> Docker Login -> Build & Push to DockerHub

### Proof:
- GitHub Actions shows Status: Success (1m 2s)
- DockerHub shows Last Pushed: 2 minutes ago

Repo: https://github.com/soundhararajan-S/cicd-node-app
DockerHub: https://hub.docker.com/r/soundhar2003/cicd-node-app
