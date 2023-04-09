import { db } from "$lib/database";
import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "../$types";
import bcrypt from 'bcrypt'

enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export const load: PageServerLoad = async (event) => {
  console.log(event)

}

const register: Action = async ({ request }) => {
  const data = await request.formData();
  const username = data.get('username');
  const password = data.get('password');

  if (typeof username !== 'string' || typeof password !== 'string') {
    return fail(400, { invalid: true });
  }

  const user = await db.user.findUnique({
    where: { username: username }
  })

  if (user) {
    return fail(400, { user: true })
  }

  await db.user.create({
    data: {
      username: username,
      password: await bcrypt.hash(password, 10),
      userAuthToken: crypto.randomUUID(),
      role: { connect: { name: Roles.USER } }
    }
  })

  throw redirect(303, '/login');

}



export const actions: Actions = { register }
