import { testClient } from 'hono/testing'
import { expect, test } from 'bun:test'
import app from '../src/index.js'
import { userRepo } from '../src/repo.js'

const tc = testClient<typeof app>(app)

test('test get all user', async () => {
    const res = await tc.index.$get()
    expect(await res.json()).toEqual(userRepo.all())
})

test('test get one user', async () => {
    const res = await tc[':email'].$get({param: {email: 'fajar@mail.com'}})
    console.log(res)
    expect(await res.json()).toEqual(userRepo.getByEmail('fajar@mail.com'))
})