import Database from 'better-sqlite3';
import path from 'path';

// Chemin absolu vers ton fichier SQLite
const dbPath = path.resolve('../Db/footixdb.db');

// Connexion à la DB
const db = new Database(dbPath, { verbose: console.log });

export default db;