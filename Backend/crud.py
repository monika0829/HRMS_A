from sqlalchemy.orm import Session
import models.employee as emp_models, schemas.employee as emp_schemas
import models.attendance as att_models, schemas.attendance as att_schemas

# Employees
def get_employees(db: Session):
    return db.query(emp_models.Employee).all()

def get_employee(db: Session, employee_id: int):
    return db.query(emp_models.Employee).filter(emp_models.Employee.id == employee_id).first()

def create_employee(db: Session, employee: emp_schemas.EmployeeCreate):
    db_employee = emp_models.Employee(
        name=employee.name,
        email=employee.email,
        department=employee.department
    )
    db.add(db_employee)
    db.commit()
    db.refresh(db_employee)
    return db_employee

# Attendance
def get_attendance(db: Session):
    return db.query(att_models.Attendance).all()

def get_attendance_by_employee(db: Session, employee_id: str):
    return db.query(att_models.Attendance).filter(att_models.Attendance.employee_id == employee_id).all()

def create_attendance(db: Session, attendance: att_schemas.AttendanceCreate):
    db_att = att_models.Attendance(
        employee_id=attendance.employee_id,
        date=attendance.date,
        status=attendance.status
    )
    db.add(db_att)
    db.commit()
    db.refresh(db_att)
    return db_att

