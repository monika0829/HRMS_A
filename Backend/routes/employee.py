from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models.employee import Employee
from schemas.employee import EmployeeCreate

router = APIRouter(prefix="/employees", tags=["Employees"])

@router.post("/")
def add_employee(payload: EmployeeCreate, db: Session = Depends(get_db)):
    print("PAYLOAD:", payload.dict())

    emp = Employee(
        name=payload.name,
        email=payload.email,
        department=payload.department
    )

    db.add(emp)
    db.commit()
    db.refresh(emp)

    print("INSERTED ID:", emp.id)

    return emp
