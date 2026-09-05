import type { ReactNode } from "react";

const controlClassName =
  "w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-500 shadow-sm focus:border-[#0d1b3d] focus:ring-[#0d1b3d]";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  children: ReactNode;
}

export function FormField({ label, htmlFor, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1 block text-sm font-medium text-slate-700">
        {label}
      </label>
      {children}
    </div>
  );
}

export function getControlClassName(className = "") {
  return `${controlClassName} ${className}`.trim();
}