import uuid
from sqlalchemy import Column, String, Date, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from database import Base

class Attendance(Base):
    __tablename__ = "attendance"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, index=True)
    employee_id = Column(UUID(as_uuid=True), ForeignKey("employees.id"))  # matches Employee.id
    date = Column(Date)
    status = Column(String)  # e.g., Present, Absent, Leave
