import { Taskcolumns } from "@/components/Taskcolumns";
import { Form } from "../components/Form";

export default function Home() {
  return (
    <div className="Wrapper flex">
      <Taskcolumns />
      <Form />
    </div>
  );
}
