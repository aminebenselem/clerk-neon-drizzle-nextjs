import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";


export const getAllusers = async () => {
  const data = await db.select().from(users);
  return data;
};

export const getUserById = async (id:number)=> {
const data = await db.select().from(users).where(eq(users.id,id))
return data;
}

export const addUser = async (user:any)=>{
  await db.insert(users).values({
    clerkId:user?.clerkId,
    email:user?.email,
    firstName:user?.firstName,
    username:user?.username,
    lastName:user?.lastName,
    photo:user?.photo
  })
  .returning({clerkId:users?.clerkId})

}