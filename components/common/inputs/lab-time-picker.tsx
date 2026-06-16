"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

/** Generates "HH:MM" slots between open and close (inclusive) every `stepMinutes`. */
function generateSlots(
  open: string,
  close: string,
  stepMinutes = 30
): string[] {
  const [openH, openM]   = open.split(":").map(Number);
  const [closeH, closeM] = close.split(":").map(Number);

  const slots: string[] = [];
  let totalMinutes = openH * 60 + openM;
  const endMinutes = closeH * 60 + closeM;

  while (totalMinutes <= endMinutes) {
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    totalMinutes += stepMinutes;
  }

  return slots;
}

export type LabTimePickerProps = {
  value: string;
  onChange: (value: string) => void;
  open?: string;       // default "09:00"
  close?: string;      // default "16:00"
  step?: number;       // minutes, default 30
  placeholder?: string;
  disabled?: boolean;
  "aria-invalid"?: boolean;
  className?: string;
  id?: string;
};

export function LabTimePicker({
  value,
  onChange,
  open = "09:00",
  close = "16:00",
  step = 30,
  placeholder = "Selecione",
  disabled,
  className,
  id,
  ...rest
}: LabTimePickerProps) {
  const slots = generateSlots(open, close, step);

  return (
    <Select value={value || ""} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger
        id={id}
        aria-invalid={rest["aria-invalid"]}
        className={cn("w-full border-primary/20 border-2", className)}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent className="bg-card border border-primary/20 shadow-md z-50 max-h-60">
        {slots.map((slot) => (
          <SelectItem key={slot} value={slot}>
            {slot}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}