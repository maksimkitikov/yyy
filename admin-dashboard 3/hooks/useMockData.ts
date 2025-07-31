"use client";

import { useState } from 'react';
import { Course } from '../types/course';
import { Lecture } from '../types/lecture';
import { mockCourses, mockLectures } from '../mock/data';

/**
 * Хук, который предоставляет локальное состояние для мок‑данных курсов
 * и лекций. Он позволяет добавлять новые элементы. Этот хук
 * можно использовать в изолированных сценариях или тестировании.
 * В основном приложении предпочтительнее использовать контекст
 * (см. DataProvider), чтобы состояние было доступно между страницами.
 */
export function useMockData() {
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [lectures, setLectures] = useState<Lecture[]>(mockLectures);

  const addCourse = (course: Course) => {
    setCourses(prev => [...prev, course]);
  };

  const addLecture = (lecture: Lecture) => {
    setLectures(prev => [...prev, lecture]);
  };

  return { courses, lectures, addCourse, addLecture };
}