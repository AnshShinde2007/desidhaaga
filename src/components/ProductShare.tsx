"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { buildWhatsappShareUrl, openShareWindow, WhatsappIcon } from "react-share";

export default function ProductShare({ handle, title }: { handle: string; title: string }) {
  const shareUrls = useMemo(() => {
    if (typeof window === "undefined") return undefined;
    const taggedUrl = (source: "copy" | "whatsapp" | "instagram") => {
      const url = new URL(`/products/${handle}`, window.location.origin);
      url.searchParams.set("source", source);
      return url.toString();
    };
    return { copy: taggedUrl("copy"), whatsapp: taggedUrl("whatsapp"), instagram: taggedUrl("instagram") };
  }, [handle]);
  const [status, setStatus] = useState("");

  async function copyInstagramLink() {
    const url = shareUrls?.instagram;
    if (!url) return;
    window.open("https://www.instagram.com/desidhaaga_bysheetal/", "_blank", "noopener,noreferrer");
    try {
      await navigator.clipboard.writeText(url);
      setStatus("Instagram link copied");
    } catch {
      setStatus("Could not copy Instagram link");
    }
  }

  async function copyLink() {
    const url = shareUrls?.copy;
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setStatus("Link copied");
    } catch {
      setStatus("Could not copy link");
    }
  }

  function shareOnWhatsApp() {
    if (!shareUrls) return;
    openShareWindow(buildWhatsappShareUrl(shareUrls.whatsapp, { message: title }), { newTab: true });
  }

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#254c38]/15 pt-5">
      <Button
        variant="outline"
        onClick={() => void copyLink()}
      >
        {status || "Copy link"}
      </Button>
      <Button variant="outline" onClick={shareOnWhatsApp} aria-label="Share on WhatsApp">
        <WhatsappIcon size={20} />
        WhatsApp
      </Button>
      <Button
        variant="outline"
        onClick={() => void copyInstagramLink()}
      >
        Instagram
      </Button>
      <span aria-live="polite" className="sr-only">{status}</span>
    </div>
  );
}
