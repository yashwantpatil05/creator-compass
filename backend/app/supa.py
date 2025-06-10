from functools import lru_cache
from supabase import create_client
import os
from dotenv import load_dotenv

load_dotenv()  # picks up .env.dev in dev mode

@lru_cache
def get_supabase():
    url: str = os.getenv("SUPABASE_URL")
    key: str = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
    return create_client(url, key)
