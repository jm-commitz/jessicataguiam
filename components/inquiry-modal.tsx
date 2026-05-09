"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  open: boolean;
  onClose: () => void;
}

const projectTypes = [
  "As-Built Documentation",
  "Floor Plan Drafting",
  "3D Modeling / Rendering",
  "Elevation & Section Drawing",
  "Construction Drawings",
  "Other",
];

const inputCls =
  "rounded-none bg-background/10 border-background/30 text-background placeholder:text-background/50 focus-visible:ring-0 focus-visible:border-background";

export function InquiryModal({ open, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
    }
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "ca909b4b-df80-41a8-8b43-ccba08db526c",
          subject: `New Project Inquiry — ${form.projectType || "General"} from ${form.name}`,
          from_name: form.name,
          replyto: form.email,
          phone: form.phone || "—",
          project_type: form.projectType || "—",
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-lg rounded-none p-0 gap-0 bg-foreground dark:bg-zinc-200 text-background border-background/20 [&>button]:text-background/70 [&>button]:hover:text-background">
        <DialogHeader className="px-6 py-4 border-b border-background/20">
          <p className="text-[10px] tracking-[0.3em] uppercase text-background/70">
            JESS_WORKS
          </p>
          <DialogTitle className="font-heading text-xl font-bold tracking-wide text-background">
            Project Inquiry
          </DialogTitle>
          <DialogDescription className="text-sm text-background/75">
            Fill out the form and I&apos;ll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        {status === "sent" ? (
          <div className="px-6 py-12 text-center flex flex-col items-center gap-4">
            <p className="font-heading text-2xl font-bold text-background">Received.</p>
            <p className="text-sm text-background/80">
              Thank you for reaching out. I&apos;ll get back to you shortly.
            </p>
            <Button
              variant="outline"
              onClick={onClose}
              className="mt-2 rounded-none tracking-widest uppercase text-xs border-background/40 text-background hover:bg-background/10 hover:text-background"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-[10px] tracking-widest uppercase text-background/80">Name *</Label>
                <Input
                  required
                  placeholder="Jessica Taguiam"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className={inputCls}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-[10px] tracking-widest uppercase text-background/80">Email *</Label>
                <Input
                  required
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={inputCls}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-[10px] tracking-widest uppercase text-background/80">Phone</Label>
                <Input
                  placeholder="+63 900 000 0000"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className={inputCls}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-[10px] tracking-widest uppercase text-background/80">Project Type</Label>
                <Select
                  value={form.projectType}
                  onValueChange={(v) => setForm((f) => ({ ...f, projectType: v }))}
                >
                  <SelectTrigger className={`${inputCls} [&>span]:text-background`}>
                    <SelectValue placeholder="Select type..." />
                  </SelectTrigger>
                  <SelectContent className="rounded-none bg-foreground dark:bg-zinc-200 border-background/30">
                    {projectTypes.map((t) => (
                      <SelectItem
                        key={t}
                        value={t}
                        className="rounded-none text-background focus:bg-background/15 focus:text-background"
                      >
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-[10px] tracking-widest uppercase text-background/80">Message *</Label>
              <Textarea
                required
                rows={4}
                placeholder="Describe your project..."
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className={`${inputCls} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="text-xs text-red-400 dark:text-red-600">Something went wrong. Please try again.</p>
            )}

            <Button
              type="submit"
              disabled={status === "sending"}
              className="rounded-none tracking-widest uppercase text-xs mt-1 bg-background text-foreground hover:bg-background/85 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Inquiry"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
