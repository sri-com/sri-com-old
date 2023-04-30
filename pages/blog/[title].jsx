import { useRouter } from 'next/router';

function BlogPost() {
    const router = useRouter();
    const { title } = router.query;


    return (
        <main className="bg-c-base w-screen h-screen">
            <div className='px-[26%] w-full h-full'>
            </div>
        </main>
    );
}

export default BlogPost;
