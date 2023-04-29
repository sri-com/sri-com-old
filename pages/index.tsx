import Head from "next/head";
import HomePage from "@/components/HomePage";

export default function Home() {
    return (
        <>
            <Head>
                <title>Srivarshan | HomePage</title>
            </Head>
            <main className="w-[100vw] h-[550vh]">
                <HomePage />
            </main>
        </>
    )
}
