# Kubernetes Calculator

Welcome to the **Kubernetes Calculator** application! 

This tool helps you calculate Kubernetes resources efficiently. Below are the prerequisites, setup, and run instructions for both the frontend and backend components.

## Prerequisites
Before getting started, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) for the frontend.
- [Python](https://www.python.org/) and [virtualenv](https://pypi.org/project/virtualenv/) for the backend.

## Frontend

### Setup and Run

```bash
# Install the dependecies
npm install

# Run the React app
npm run dev
```

Access the application locally at http://localhost:5173/kubernetes-calculator/. It automatically reloads when you make changes.

### Deploy

If you wish to deploy locally, start by building the project and then running the ``deploy`` script:

```bash
# Build the project
npm run build

# Deploy
npm run deploy
```

Alternatively, deployment is a breeze. Just push changes to the `main` branch, and the [frontend deploy workflow](./.github/workflows/frontend-deploy.yml) will automatically run.

## Backend

### Setup and Run

To start off, you'll need to create a virtual environment and install the necessary dependencies:

```bash
# Create and activate the virtual environment
python -m venv venv
source venv/bin/activate

# Install the required dependencies
pip install -r requirements.txt
```

Next, run the Flask server locally:

```bash
# Run the Flask server
flask run --debug --port 5000
```

The backend will be accessible locally at http://localhost:5000. The ``--debug`` flag enables automatic reloading whenever changes are made to the backend code.

### Deploy

The deploy will be automatically done when you update the `main` branch.