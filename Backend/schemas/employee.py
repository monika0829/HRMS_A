from pydantic import BaseModel

class EmployeeBase(BaseModel):
    name: str
    email: str
    department: str

class EmployeeCreate(EmployeeBase):
    pass

class Employee(EmployeeBase):
    id: str

    class Config:
        from_attributes = True
