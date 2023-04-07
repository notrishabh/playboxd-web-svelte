import { db } from "$lib/database";
import type { Action, Actions } from "../$types";

enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

const register: Action = async ({ request }) => {
  const data = await request.formData();
  console.log(data)

}

export function myServerFunction() {
  // Server-side function logic here
  return "Hello from server!";
}

export const actions: Actions = { register }
