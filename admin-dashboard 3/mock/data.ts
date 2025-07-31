import { Course } from '../types/course';
import { Lecture } from '../types/lecture';

/**
 * Мок‑данные для курсов. Пока backend не готов, эти данные
 * отображаются на дашборде. При подключении API содержимое
 * заменяется на результаты вызовов сервера.
 */
export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Курс по фронтенду',
    description: 'Изучаем базовые навыки разработки фронтенда',
    videoUrl: 'https://example.com/video1',
  },
  {
    id: '2',
    title: 'Курс по backend',
    description: 'Погружаемся в мир серверной разработки',
    videoUrl: 'https://example.com/video2',
  },
];

/**
 * Мок‑данные для лекций. Эти записи демонстрируют, как будет
 * выглядеть список лекций до подключения реального API.
 */
export const mockLectures: Lecture[] = [
  {
    id: '1',
    title: 'Введение в React',
    description: 'Основы библиотеки React и создание компонентов',
    videoUrl: 'https://example.com/lecture1',
  },
  {
    id: '2',
    title: 'TypeScript для начинающих',
    description: 'Типизация и базовые концепции TypeScript',
    videoUrl: 'https://example.com/lecture2',
  },
];