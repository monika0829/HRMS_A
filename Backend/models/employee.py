# from uuid import uuid4

# def employee_model(data: dict):
#     return {
#         "employee_id": str(uuid4()),
#         "name": data["name"],
#         "email": data["email"],
#         "department": data["department"]
        
#     }
# from sqlalchemy import Column, String, TIMESTAMP
# from sqlalchemy.dialects.postgresql import UUID
# from database import Base
# import uuid

# class Employee(Base):
#     __tablename__ = "employees"

#     id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
#     name = Column(String, nullable=False)
#     email = Column(String, unique=True, nullable=False)
#     department = Column(String,index=True)
# import uuid
# from sqlalchemy import Column, Integer, String
# from sqlalchemy.dialects.postgresql import UUID
# from database import Base  # import Base from database.py

# class Employee(Base):
#     __tablename__ = "employees"
#     id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, index=True)
#     name = Column(String, index=True)
#     email = Column(String, unique=True, index=True)
#     department = Column(String, index=True)
import uuid
from sqlalchemy import Column, String
from sqlalchemy.dialects.postgresql import UUID
from database import Base

class Employee(Base):
    __tablename__ = "employees"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    department = Column(String, index=True)
