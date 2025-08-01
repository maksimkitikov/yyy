# Admin Dashboard and API

This repository contains a simple Next.js admin dashboard inside the `admin-dashboard 3` folder and a FastAPI backend located in the `backend` directory.

## Backend

The backend uses FastAPI with SQLAlchemy. By default it will create a SQLite database, but you can provide a PostgreSQL connection string via the `DATABASE_URL` environment variable.

### Setup

```bash
python -m venv venv
source venv/bin/activate
pip install -r backend/requirements.txt
uvicorn backend.main:app --reload
```

### File uploads

Courses and lectures can be added either by specifying a video URL or by
uploading a video file. The `/courses/upload` and `/lectures/upload`
endpoints accept multipart form data with optional `file` and
`video_url` fields alongside `title` and `description`.

## Frontend

To start the Next.js application run:

```bash
cd "admin-dashboard 3"
npm install
npm run dev
```

If your environment blocks access to the npm registry you will need to
preinstall the dependencies manually or use an offline mirror.
Otherwise commands like `npm run build` will fail when Next.js tries
to download missing TypeScript packages.
