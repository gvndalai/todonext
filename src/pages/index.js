import { Taskcolumns } from "@/components/Taskcolumns";
import { Form } from "../components/Form";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo</title>
      </Head>
      <div className="Wrapper flex">
        <Taskcolumns />
      </div>
    </>
  );
}
