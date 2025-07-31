/**
 * Тип данных для курса. Каждому курсу назначается строковый
 * идентификатор, название, описание и ссылка на видео или файл.
 */
export interface Course {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}