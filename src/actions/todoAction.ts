"use server";
import { eq, not } from "drizzle-orm";
import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";



export const getData = async (userId: number) => {
  const data = await db.select().from(todo).where(eq(todo.userId, userId));
  return data;
};


export const addTodo = async (id: number, text: string ,userId:any) => {
  await db.insert(todo).values({
    id: id,
    text: text,
    userId:userId
  });
};

export const deleteTodo = async (id: number) => {
  await db.delete(todo).where(eq(todo.id, id));

};

export const toggleTodo = async (id: number) => {
  await db
    .update(todo)
    .set({
      done: not(todo.done),
    })
    .where(eq(todo.id, id));

};

export const editTodo = async (id: number, text: string) => {
  await db
    .update(todo)
    .set({
      text: text,
    })
    .where(eq(todo.id, id));

};
