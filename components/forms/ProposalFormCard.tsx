import { ArrowUpRight } from "lucide-react";
import { TrackedAnchor } from "@/components/analytics/TrackedAnchor";
import { siteConfig } from "@/config/site";

export function ProposalFormCard() {
  const href = siteConfig.proposalFormUrl || "/contact?interest=proposal";
  const isExternal = href.startsWith("http");

  return (
    <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-2xl font-bold text-slate-900">Request a Proposal</h3>
      <p className="mt-2 mb-6 text-sm leading-6 text-slate-600">
        Tell us about your training or consultancy needs using our quick
        enquiry form.
      </p>
      <TrackedAnchor
        href={href}
        eventName="proposal_click"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0d1b3d] px-6 py-4 text-base font-semibold text-white transition-all hover:bg-[#08172f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] focus-visible:ring-offset-2"
      >
        {isExternal ? "Open the Request Form" : "Contact our team"}
        <ArrowUpRight className="h-4 w-4" />
      </TrackedAnchor>
      {isExternal && (
        <p className="mt-4 text-xs leading-5 text-slate-500">
          Opens in a new tab so you can keep this page handy.
        </p>
      )}
    </div>
  );
}