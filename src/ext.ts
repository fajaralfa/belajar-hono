import { Database } from 'bun:sqlite'

let singleton: Database | null = null

export const db = () => {
    if (singleton) return singleton
    return singleton = new Database(Bun.env.DB_NAME ?? './storage/db.sqlite')
}
