import React from "react";

interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-3xl text-white font-bold">{title}</h1>
      </div>
    </>
  );
}
