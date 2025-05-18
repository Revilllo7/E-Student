from fastapi import FastAPI, Depends
from .auth import verify_token

app = FastAPI()

@app.get("/secure-data")
def get_secure_data(user=Depends(verify_token)):
    return {"message": f"Hello, {user['preferred_username']}!"}
