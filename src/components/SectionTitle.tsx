import React from "react";

interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-3xl text-red-500">{title}</h1>
      </div>
    </>
  );
}
