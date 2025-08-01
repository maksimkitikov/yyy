"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lecture } from '../types/lecture';

/**
 * Форма добавления лекции. Позволяет модератору указать название,
 * описание и ссылку на видео или файл. После отправки вызывается
 * callback для добавления лекции в список и происходит перенаправление
 * пользователя обратно на дашборд. Этот компонент подготовлен к
 * замене на реальный API‑вызов в будущем.
 */
export default function LectureForm({ onSubmit }: { onSubmit: (lecture: Lecture) => void }) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newLecture: Lecture = {
      id: Date.now().toString(),
      title,
      description,
      videoUrl,
    };
    onSubmit(newLecture);
    router.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Название</label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded border-gray-300 shadow-sm"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Описание</label>
        <textarea
          required
          className="mt-1 block w-full rounded border-gray-300 shadow-sm"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Ссылка на видео или файл</label>
        <input
          type="url"
          required
          className="mt-1 block w-full rounded border-gray-300 shadow-sm"
          value={videoUrl}
          onChange={e => setVideoUrl(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Добавить лекцию
      </button>
    </form>
  );
}