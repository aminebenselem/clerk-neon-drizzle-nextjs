import { relations } from "drizzle-orm";
import { integer, text, boolean, pgTable ,serial,timestamp,bigint} from "drizzle-orm/pg-core";

export const users = pgTable("users",{
  id:serial("id").primaryKey(),
  username:text("username").notNull(),
  clerkId:text("clerkId").notNull(),
  firstName:text("firstName").notNull(),
  lastName:text("lastName").notNull(),
  photo:text("photo").notNull(),
  email:text("email").notNull().unique(),
  createdAt:timestamp("created_at").notNull().defaultNow(),
  updatedAt:timestamp("updated_at").notNull().defaultNow(),
    

})
export const todo = pgTable("todo", {
  id: bigint("id",{mode:'number'}).primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
  userId:integer("user_id").notNull().references(()=>users.id)
});
export const todoRelation= relations(todo   ,   ({one}) =>({
  user:one(users,{fields:[todo.userId], references:[users.id]}),
}))

export const userRelation =relations(users,  ({many}) =>({
  todo:many(todo)
}))

