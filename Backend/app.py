from fastapi import FastAPI
from routes import employee, attendance

app = FastAPI()

app.include_router(employee.router)
app.include_router(attendance.router)
