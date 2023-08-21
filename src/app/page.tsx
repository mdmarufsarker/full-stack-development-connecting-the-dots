import Home from "@/components/Home";

export default function page() {
  return (
    <div>
      <div className="my-8 px-4">
        <img
          src="book.jpg"
          className="rounded-lg lgl:w-92 lgl:h-[500px] lgl:bg-cover lgl:mx-auto"
        />
      </div>
      <Home />
    </div>
  );
}
