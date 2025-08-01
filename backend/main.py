from fastapi import FastAPI, Depends, HTTPException, UploadFile, File, Form
from pathlib import Path
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm

from . import models, schemas, crud, auth
from .database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(title="CRM API")

@app.post("/token", response_model=schemas.Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(auth.get_db)):
    user = auth.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    access_token = auth.create_access_token(data={"sub": str(user.id)})
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/users/", response_model=schemas.UserRead)
def create_user(user: schemas.UserCreate, db: Session = Depends(auth.get_db)):
    if crud.get_user_by_email(db, user.email):
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_password = auth.get_password_hash(user.password)
    return crud.create_user(db, user, hashed_password)

@app.get("/courses/", response_model=list[schemas.CourseRead])
def read_courses(db: Session = Depends(auth.get_db)):
    return crud.get_courses(db)

@app.post(
    "/courses/",
    response_model=schemas.CourseRead,
    dependencies=[Depends(auth.require_roles(models.Role.admin, models.Role.moderator))],
)
def create_course(course: schemas.CourseCreate, db: Session = Depends(auth.get_db)):
    return crud.create_course(db, course)


@app.post(
    "/courses/upload",
    response_model=schemas.CourseRead,
    dependencies=[Depends(auth.require_roles(models.Role.admin, models.Role.moderator))],
)
async def upload_course(
    title: str = Form(...),
    description: str | None = Form(None),
    video_url: str | None = Form(None),
    file: UploadFile | None = File(None),
    db: Session = Depends(auth.get_db),
):
    video_path = None
    if file is not None:
        upload_dir = Path("uploads/courses")
        upload_dir.mkdir(parents=True, exist_ok=True)
        file_path = upload_dir / file.filename
        with open(file_path, "wb") as f:
            f.write(await file.read())
        video_path = str(file_path)
    course = schemas.CourseCreate(
        title=title,
        description=description,
        video_url=video_url,
        video_path=video_path,
    )
    return crud.create_course(db, course)

@app.get("/lectures/", response_model=list[schemas.LectureRead])
def read_lectures(db: Session = Depends(auth.get_db)):
    return crud.get_lectures(db)

@app.post(
    "/lectures/",
    response_model=schemas.LectureRead,
    dependencies=[Depends(auth.require_roles(models.Role.admin, models.Role.moderator))],
)
def create_lecture(lecture: schemas.LectureCreate, db: Session = Depends(auth.get_db)):
    return crud.create_lecture(db, lecture)


@app.post(
    "/lectures/upload",
    response_model=schemas.LectureRead,
    dependencies=[Depends(auth.require_roles(models.Role.admin, models.Role.moderator))],
)
async def upload_lecture(
    title: str = Form(...),
    description: str | None = Form(None),
    video_url: str | None = Form(None),
    file: UploadFile | None = File(None),
    db: Session = Depends(auth.get_db),
):
    video_path = None
    if file is not None:
        upload_dir = Path("uploads/lectures")
        upload_dir.mkdir(parents=True, exist_ok=True)
        file_path = upload_dir / file.filename
        with open(file_path, "wb") as f:
            f.write(await file.read())
        video_path = str(file_path)
    lecture = schemas.LectureCreate(
        title=title,
        description=description,
        video_url=video_url,
        video_path=video_path,
    )
    return crud.create_lecture(db, lecture)
