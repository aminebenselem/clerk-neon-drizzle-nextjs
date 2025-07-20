
"use server"
import { getData } from "@/actions/todoAction";
import Todos from "@/components/todos";
export default async function Home() {
  const data = await getData();

  return <div>
    <Todos todos={data} user={{id:1}} />;

  </div>
}
