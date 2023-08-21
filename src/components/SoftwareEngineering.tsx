import Link from "next/link";
import SectionLayout from "./SectionTitle";
import books from "@/db/software-engineering/books.json";
import ytChannels from "@/db/software-engineering/ytChannels.json";
import websites from "@/db/software-engineering/websites.json";

export default function SoftwareEngineering() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <SectionLayout title="Software Engineering" />
        <div className="grid xs:px-4 xs:grid-cols-1 lg:grid-cols-2 lgl:grid-cols-3 gap-6 py-12">
          <div className="flex flex-col gap-2 text-center">
            <h3 className="px-4 py-2 bg-blue-700 rounded-lg mb-4 text-2xl font-bold">
              Books
            </h3>
            {books &&
              books.map((book, index) => {
                return (
                  <Link
                    href={book.url}
                    key={index}
                    className="px-4 py-2 my-1 bg-lightWhite text-bodyColor rounded-lg hover:bg-yellow-500 transition-all"
                    target="_blank"
                  >
                    {book.bookName}
                  </Link>
                );
              })}
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h3 className="px-4 py-2 bg-blue-700 rounded-lg mb-4 text-2xl font-bold">
              YouTube Channels
            </h3>
            {ytChannels &&
              ytChannels.map((yt, index) => {
                return (
                  <Link
                    href={yt.url}
                    key={index}
                    className="px-4 py-2 my-1 bg-lightWhite text-bodyColor rounded-lg hover:bg-yellow-500 transition-all"
                    target="_blank"
                  >
                    {yt.name}
                  </Link>
                );
              })}
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h3 className="px-4 py-2 bg-blue-700 rounded-lg mb-4 text-2xl font-bold">
              Websites
            </h3>
            {websites &&
              websites.map((website, index) => {
                return (
                  <Link
                    href={website.url}
                    key={index}
                    className="px-4 py-2 my-1 bg-lightWhite text-bodyColor rounded-lg hover:bg-yellow-500 transition-all"
                  >
                    {website.name}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
