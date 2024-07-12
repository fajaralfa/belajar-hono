import { db } from "./ext.js"

export type User = {
    id: number,
    name: string,
    email: string,
    password: string,
}

export const userRepo = {
    all(): [User] {
        const result: [User] = db().query('SELECT * FROM users').all() as [User]
        return result
    },

    insert(user: Omit<User, 'id'>) {
        return db()
            .query("INSERT INTO users (name, email, password) VALUES (?,?,?)")
            .all(user.name, user.email, user.password)
    },

    get(id: string): User {
        return db().query("SELECT * FROM users WHERE id = ?").get(id) as User
    },

    getByEmail(email: string): User {
        return db().query("SELECT * FROM users WHERE email = ?").get(email) as User
    }
}