"use client";

import React, { createContext, useContext, useState } from 'react';
import { Course } from '../types/course';
import { Lecture } from '../types/lecture';
import { mockCourses, mockLectures } from '../mock/data';

/**
 * Интерфейс контекста данных определяет, какие данные и действия
 * доступны для потребителей. В данном случае это списки курсов и
 * лекций, а также функции для их добавления.
 */
interface DataContextProps {
  courses: Course[];
  lectures: Lecture[];
  addCourse: (course: Course) => void;
  addLecture: (lecture: Lecture) => void;
}

// Создаём контекст с неопределённым значением по умолчанию. Тип
// необходм для того, чтобы useContext знал, какие данные возвращать.
const DataContext = createContext<DataContextProps | undefined>(undefined);

/**
 * Провайдер данных. Содержит мок‑данные и функции для их модификации.
 * В реальном приложении здесь можно организовать загрузку данных
 * через API и обновление стейта в соответствии с ответами сервера.
 */
export function DataProvider({ children }: { children: any }) {
  // Инициализируем состояние списков курсов и лекций
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [lectures, setLectures] = useState<Lecture[]>(mockLectures);

  // Добавить курс в конец списка
  const addCourse = (course: Course) => {
    setCourses(prev => [...prev, course]);
  };

  // Добавить лекцию в конец списка
  const addLecture = (lecture: Lecture) => {
    setLectures(prev => [...prev, lecture]);
  };

  return (
    <DataContext.Provider value={{ courses, lectures, addCourse, addLecture }}>
      {children}
    </DataContext.Provider>
  );
}

/**
 * Пользовательский хук для получения данных из контекста. Бросает ошибку,
 * если вызывается вне провайдера, что облегчает отладку.
 */
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData должен использоваться внутри DataProvider');
  }
  return context;
}