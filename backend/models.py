from sqlalchemy import Column, Integer, String, Text, Enum as SqlEnum
import enum
from .database import Base

class Role(str, enum.Enum):
    admin = "admin"
    moderator = "moderator"
    author = "author"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(SqlEnum(Role), nullable=False)

class Course(Base):
    __tablename__ = "courses"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(Text)
    video_url = Column(String)
    video_path = Column(String)

class Lecture(Base):
    __tablename__ = "lectures"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(Text)
    video_url = Column(String)
    video_path = Column(String)
