"use client";

import Button from "./ui-components/Button";

export default function Home() {
  const handleOnButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <main className="text-sm flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => handleOnButtonClick()}>My Name</Button>
    </main>
  );
}
