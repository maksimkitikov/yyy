/**
 * Тип данных для лекции. Каждая лекция содержит уникальный
 * идентификатор, название, описание и ссылку на видео или файл.
 */
export interface Lecture {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}