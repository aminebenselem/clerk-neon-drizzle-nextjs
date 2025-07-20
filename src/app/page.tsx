
"use server"
import { currentUser } from "@clerk/nextjs/server";
import { getData } from "@/actions/todoAction";
import { getUserById } from "@/actions/userAction";
import Todos from "@/components/todos";
export default async function Home() {
const user:any = await currentUser()
if (!user) return;

const current= await getUserById(user?.id)
  const data = await getData(current[0]?.id);


  return <div>
    <Todos todos={data} user={current[0]} />;

  </div>
}
