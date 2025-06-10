from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Creator Compass API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/ping", tags=["health"])
def ping():
    return {"status": "ok"}



from .supa import get_supabase

@app.get("/tables", tags=["debug"])
def list_tables(sb = Depends(get_supabase)):
    # returns ['users', 'workspaces', 'social_accounts', ...]
    return sb.table("users").schema

