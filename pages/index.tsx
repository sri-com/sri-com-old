import Head from "next/head";
import HomePage from "@/components/HomePage";
import { Main } from "next/document";

export default function Home() {
    return (
        <>
            <Head>
                <title>Srivarshan | HomePage</title>
            </Head>
            <main>
                <HomePage />
            </main>
        </>
    )
}
