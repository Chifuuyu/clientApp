import Link from "next/link";
import { useRouter } from "next/router";

export default function HomePath() {
  const router = useRouter();
  const currentRoute = router.pathname;
  console.log(currentRoute == "/new-listing" ? "active" : "");
  return (
    <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
      <Link href="/new-listing">
        <a className={currentRoute == "/new-listing" ? "active" : ""}>
          <span
            className={
              currentRoute == "/new-listing"
                ? "text-gray-600 border-b border-gray-600 py-2"
                : "text-purple-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
            }
          >
            New Listing{" "}
          </span>
        </a>
      </Link>
      or
      <Link href="/">
        <a className={currentRoute == "/" ? "active" : ""}>
          <span
            className={
              currentRoute == "/"
                ? "text-gray-600 border-b border-gray-600 py-2"
                : "text-orange-300 hover:text-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
            }
          >
            {" "}
            Under Contract
          </span>
        </a>
      </Link>
    </h1>
  );
}
