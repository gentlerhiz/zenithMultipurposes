"use client";

import { useState } from "react";
import TermsModal from "./TermsModal";

export default function TermsTrigger() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-6 flex justify-center">
      <button onClick={() => setOpen(true)} className="text-sm font-semibold underline decoration-dark-green/30">View Website Design and App Development terms</button>
      <TermsModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
