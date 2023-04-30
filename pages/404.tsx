import Head from "next/head";
import Custom404 from "@/components/404Error";

export default function Home() {
    return (
        <>
            <Head>
                <title>404 Not Found</title>
            </Head>
            <main className="Main404 w-screen h-screen">
                <Custom404 />
            </main>
        </>
    )
}
