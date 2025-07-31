"use client";

import { Lecture } from '../types/lecture';

/**
 * Компонент списка лекций. Для каждой лекции отображается заголовок,
 * краткое описание и ссылка на видео. Если лекций нет, выводится
 * сообщение об отсутствии данных. Список стилизован с использованием
 * Tailwind CSS.
 */
export default function LectureList({ lectures }: { lectures: Lecture[] }) {
  if (!lectures || lectures.length === 0) {
    return <p className="text-gray-500">Лекции отсутствуют.</p>;
  }

  return (
    <div className="space-y-4">
      {lectures.map(lecture => (
        <div key={lecture.id} className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-semibold">{lecture.title}</h3>
          <p className="text-sm text-gray-700 mt-1">{lecture.description}</p>
          <a
            href={lecture.videoUrl}
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