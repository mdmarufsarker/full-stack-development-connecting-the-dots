interface FooterProps {
  title: string;
}

const currentYear = new Date().getFullYear();

export default function Footer({ title }: FooterProps) {
  return (
    <>
      <footer className="py-4">
        <h1 className="text-center text-xl lgl:text-3xl pt-8 font-bold">
          {currentYear} © <span className="text-red-500">Stack Learner </span>
          {title}
        </h1>
        <p className="text-center text-xl">
          Contact:{" "}
          <a href="mailto:support@stacklearner.com" className="cursor-pointer">
            support@stacklearner.com
          </a>
        </p>
      </footer>
    </>
  );
}
