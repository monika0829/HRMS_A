from pydantic import BaseModel
from datetime import date

class AttendanceBase(BaseModel):
    employee_id: int
    date: date
    status: str

class AttendanceCreate(AttendanceBase):
    pass

class Attendance(AttendanceBase):
    id: str

    class Config:
        from_attributes = True
