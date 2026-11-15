"use client";

import { Instagram } from "lucide-react";
import { useMemo, useState } from "react";
import { WhatsappIcon, WhatsappShareButton } from "react-share";

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

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#254c38]/15 pt-5">
      <button
        type="button"
        onClick={() => void copyLink()}
        className="inline-flex items-center gap-2 font-label-sm uppercase tracking-widest text-primary underline underline-offset-4"
      >
        Copy link
      </button>
      <WhatsappShareButton
        url={shareUrls?.whatsapp ?? ""}
        message={title}
        aria-label="Share on WhatsApp"
        className="inline-flex items-center gap-2 font-label-sm uppercase tracking-widest text-primary"
      >
        <WhatsappIcon size={20} round />
        WhatsApp
      </WhatsappShareButton>
      <button
        type="button"
        onClick={() => void copyInstagramLink()}
        className="inline-flex items-center gap-2 font-label-sm uppercase tracking-widest text-primary"
      >
        <Instagram size={18} aria-hidden="true" />
        Instagram
      </button>
      <span aria-live="polite" className="sr-only">{status}</span>
    </div>
  );
}
