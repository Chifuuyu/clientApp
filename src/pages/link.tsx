import Link from 'next/link';
import { useRouter } from 'next/router';

export default function HomePath() {
const router = useRouter();
const currentRoute = router.pathname;
return(
<h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
<Link href="/">
    <a className={currentRoute == "" ? "active" : "non-active"}>
    <span className="text-purple-300 active:text-gray-700">New Listing </span></a>
    </Link>or 
    <Link href="/">
        <a className={currentRoute == "/" ? "active" : "non-active"}>
            <span className="text-orange-300 active:text-gray-700"> Under Contract</span></a>
            </Link>
</h1>
);
}