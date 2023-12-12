# kubernetes-calc-back

This is the backend for the **Kubernetes Calculator** application. It makes queries to the AWS Pricing API and cache the EC2 pricing and specs locally.

## How to run

To run, install the dependencies described in `requirements.txt` file and run the flask server locally:

```bash
flask --app app.py --debug run --port 5000
```

After, you will be able to reach the backend locally in the specified port. Also, it will reload the application whenever any changes were made.