"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Toaster, toast } from "sonner";
import { Input, Button, useDisclosure } from "@heroui/react";
import UrlModal from "@/components/UrlModal";
import { useUrlStore } from "@/store";

export default function Home() {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  const dbStatus = useUrlStore((state) => state.dbStatus);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main className="flex flex-col items-center justify-center gap-y-6 py-30 md:py-64">
      <h1 className=" md:text-3xl font-bold text-white">URL Shortener</h1>
      <form className="flex flex-col gap-y-4 w-full md:w-2/6 justify-center items-center">
        <Input
          type="url"
          placeholder="Enter url"
          id="url"
          ref={inputRef}
          label="URL"
        />
        <Button
          className="w-full bg-green-700 text-white py-2 px-4"
          disabled={dbStatus !== "on"}
          onPress={() => {
            if (
              inputRef.current !== null &&
              inputRef.current.value.length > 0
            ) {
              onOpen();
            } else {
              toast.error("Please enter a url");
            }
          }}
        >
          Shorten
        </Button>
        <Link href="/already-use" className="underline text-blue-400">
          see urls already in use
        </Link>
      </form>
      <UrlModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        url={inputRef.current?.value}
      />
      <Toaster position="top-center" richColors />
    </main>
  );
}
