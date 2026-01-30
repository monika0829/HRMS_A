# from fastapi import APIRouter, HTTPException
# from database import attendance_collection, employees_collection
# from models.attendance import attendance_model
# from schemas.attendance import AttendanceCreate

# router = APIRouter(prefix="/attendance", tags=["Attendance"])

# @router.post("")
# def mark_attendance(payload: AttendanceCreate):
#     if not employees_collection.find_one({"employee_id": payload.employee_id}):
#         raise HTTPException(status_code=404, detail="Employee not found")

#     if attendance_collection.find_one({
#         "employee_id": payload.employee_id,
#         "date": str(payload.date)
#     }):
#         raise HTTPException(
#             status_code=409,
#             detail="Attendance already marked for this date"
#         )

#     attendance_collection.insert_one(
#         attendance_model({
#             "employee_id": payload.employee_id,
#             "date": str(payload.date),
#             "status": payload.status
#         })
#     )

#     return {"message": "Attendance marked successfully"}

# @router.get("")
# def get_attendance(employee_id: str | None = None):
#     query = {}
#     if employee_id:
#         query["employee_id"] = employee_id

#     return list(attendance_collection.find(query, {"_id": 0}))
from fastapi import APIRouter, HTTPException
from database import get_db

router = APIRouter(prefix="/attendance", tags=["Attendance"])

@router.post("/")
def mark_attendance(data: dict):
    db = get_db()
    cur = db.cursor()

    try:
        cur.execute(
            """
            INSERT INTO attendance (employee_id, date, status)
            VALUES (%s, %s, %s)
            """,
            (data["employee_id"], data["date"], data["status"]),
        )
        db.commit()
        return {"message": "Attendance marked"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=400, detail=str(e))
@router.get("/")
def get_attendance():
    db = get_db()
    cur = db.cursor()
    cur.execute("""
        SELECT a.id, e.name, a.date, a.status
        FROM attendance a
        JOIN employees e ON a.employee_id = e.id
        ORDER BY a.date DESC
    """)
    rows = cur.fetchall()

    return [
        {
            "id": r[0],
            "employee": r[1],
            "date": r[2],
            "status": r[3],
        }
        for r in rows
    ]
