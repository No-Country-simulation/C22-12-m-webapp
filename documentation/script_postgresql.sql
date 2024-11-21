
-- Tabla: Usuarios
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    user_name VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

-- Tabla: Estados de ánimo
CREATE TABLE moods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- Tabla: Playlists
CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: Canciones
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    album VARCHAR(255),
    duration INT, -- En segundos
    url TEXT -- URL de streaming o recurso
);

-- Tabla intermedia: Playlists-Canciones
CREATE TABLE playlist_songs (
    playlist_id INT NOT NULL REFERENCES playlists(id) ON DELETE CASCADE,
    song_id INT NOT NULL REFERENCES songs(id) ON DELETE CASCADE,
    PRIMARY KEY (playlist_id, song_id)
);

-- Tabla intermedia: Playlists-Estados de ánimo
CREATE TABLE playlist_moods (
    playlist_id INT NOT NULL REFERENCES playlists(id) ON DELETE CASCADE,
    mood_id INT NOT NULL REFERENCES moods(id) ON DELETE CASCADE,
    PRIMARY KEY (playlist_id, mood_id)
);

-- Tabla: Tokens para autenticación (opcional)
CREATE TABLE tokens (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL
);

-- Insertar estados de ánimo iniciales
INSERT INTO moods (name) VALUES
('Alegre'),
('Reflexivo'),
('Relajado'),
('Eufórico'),
('Romántico');
