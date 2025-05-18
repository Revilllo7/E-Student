from fastapi import Depends, HTTPException, Header
import httpx

KEYCLOAK_URL = "http://keycloak:8080"
REALM = "edziennik"

async def verify_token(authorization: str = Header(...)):
    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid auth header")
    token = authorization.split()[1]

    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{KEYCLOAK_URL}/realms/{REALM}/protocol/openid-connect/userinfo",
            headers={"Authorization": f"Bearer {token}"}
        )
        if response.status_code != 200:
            raise HTTPException(status_code=401, detail="Invalid token")

    return response.json()
