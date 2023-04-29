import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
import README from '@/README.md'

function BlogPost() {
    const router = useRouter();
    //const { title } = router.query;

    let [content, setContent] = useState({ md: "" });
    useEffect(() => {
        fetch(README)
            .then((res) => res.text())
            .then((md) => {
                setContent({ md })
            })
    }, [])

    const title = "# How are you";
    return (
        <main className="bg-c-base w-screen h-screen">
            <div className='px-[26%] w-full h-full'>
                <Markdown children={content.md} />
            </div>
        </main>
    );
}

export default BlogPost;
