from pydantic import BaseModel, EmailStr
from typing import Optional
from enum import Enum

class Role(str, Enum):
    admin = "admin"
    moderator = "moderator"
    author = "author"

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    role: Role

class UserRead(BaseModel):
    id: int
    email: EmailStr
    role: Role

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

class CourseBase(BaseModel):
    title: str
    description: Optional[str] = None
    video_url: Optional[str] = None
    video_path: Optional[str] = None

class CourseCreate(CourseBase):
    pass

class CourseRead(CourseBase):
    id: int

    class Config:
        orm_mode = True

class LectureBase(BaseModel):
    title: str
    description: Optional[str] = None
    video_url: Optional[str] = None
    video_path: Optional[str] = None

class LectureCreate(LectureBase):
    pass

class LectureRead(LectureBase):
    id: int

    class Config:
        orm_mode = True
