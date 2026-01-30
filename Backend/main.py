from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import engine, Base, get_db
import crud
import models.employee as emp_models
import models.attendance as att_models
import schemas.employee as emp_schemas
import schemas.attendance as att_schemas

# Create tables in DB
Base.metadata.create_all(bind=engine)

app = FastAPI(title="HRMS Lite Backend")

# --- Employee Routes ---
@app.get("/employees", response_model=list[emp_schemas.Employee])
def read_employees(db: Session = Depends(get_db)):
    return crud.get_employees(db)

@app.get("/employees/{employee_id}", response_model=emp_schemas.Employee)
def read_employee(employee_id: str, db: Session = Depends(get_db)):
    db_employee = crud.get_employee(db, employee_id)
    if not db_employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    return db_employee

@app.post("/employees", response_model=emp_schemas.Employee)
def create_employee(employee: emp_schemas.EmployeeCreate, db: Session = Depends(get_db)):
    return crud.create_employee(db, employee)

# --- Attendance Routes ---
@app.get("/attendance", response_model=list[att_schemas.Attendance])
def read_attendance(db: Session = Depends(get_db)):
    return crud.get_attendance(db)

@app.get("/attendance/employee/{employee_id}", response_model=list[att_schemas.Attendance])
def read_attendance_by_employee(employee_id: str, db: Session = Depends(get_db)):
    return crud.get_attendance_by_employee(db, employee_id)

@app.post("/attendance", response_model=att_schemas.Attendance)
def create_attendance(attendance: att_schemas.AttendanceCreate, db: Session = Depends(get_db)):
    return crud.create_attendance(db, attendance)
