import { Hono } from 'hono'
import { userRepo } from './repo.js'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

const app = new Hono()
    .get('/', (c) => {
        return c.json(userRepo.all())
    })
    .get('/:email', (c) => {
        return c.json(userRepo.getByEmail(c.req.param('email')))
    })
    .post(
        '/users',
        zValidator(
            'json',
            z.object({
                name: z.string(),
                email: z.string(),
                password: z.string(),
            })
        ),
        async (c) => {
            const body = await c.req.json()
            userRepo.insert(body)
        }
    )

export default app
