from sqlalchemy.orm import Session
from . import models, schemas
from typing import List

# Courses

def get_courses(db: Session, skip: int = 0, limit: int = 100) -> List[models.Course]:
    return db.query(models.Course).offset(skip).limit(limit).all()


def create_course(db: Session, course: schemas.CourseCreate) -> models.Course:
    db_course = models.Course(**course.dict())
    db.add(db_course)
    db.commit()
    db.refresh(db_course)
    return db_course

# Lectures

def get_lectures(db: Session, skip: int = 0, limit: int = 100) -> List[models.Lecture]:
    return db.query(models.Lecture).offset(skip).limit(limit).all()


def create_lecture(db: Session, lecture: schemas.LectureCreate) -> models.Lecture:
    db_lecture = models.Lecture(**lecture.dict())
    db.add(db_lecture)
    db.commit()
    db.refresh(db_lecture)
    return db_lecture

# Users

def create_user(db: Session, user: schemas.UserCreate, hashed_password: str) -> models.User:
    db_user = models.User(email=user.email, hashed_password=hashed_password, role=user.role)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()
