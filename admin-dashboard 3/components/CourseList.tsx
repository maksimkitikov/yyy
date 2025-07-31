"use client";

import { Course } from '../types/course';

/**
 * Компонент списка курсов. Для каждого курса отображается заголовок,
 * краткое описание и ссылка на видео. В случае отсутствия курсов
 * выводится соответствующее сообщение. Компонент стилизован с
 * использованием Tailwind CSS.
 */
export default function CourseList({ courses }: { courses: Course[] }) {
  if (!courses || courses.length === 0) {
    return <p className="text-gray-500">Курсы отсутствуют.</p>;
  }

  return (
    <div className="space-y-4">
      {courses.map(course => (
        <div key={course.id} className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <p className="text-sm text-gray-700 mt-1">{course.description}</p>
          <a
            href={course.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm mt-2 block"
          >
            Ссылка на видео
          </a>
        </div>
      ))}
    </div>
  );
}