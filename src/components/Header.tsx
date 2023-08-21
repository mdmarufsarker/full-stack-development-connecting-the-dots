interface HeaderProps {
    title: string;
}

export default function Header({title}: HeaderProps) {
  return (
    <>
        <header className="text-center text-3xl lgl:text-5xl py-8 font-bold border-b-2 mb-4">{title}</header>
    </>
  )
}
