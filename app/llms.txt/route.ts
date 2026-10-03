import { siteConfig } from "@/config/site";

export function GET() {
  const baseUrl = siteConfig.productionUrl;
  const content = [
    `# ${siteConfig.brandName}`,
    "",
    siteConfig.defaultDescription,
    "",
    `Services: ${siteConfig.summaryServices.join(", ")}.`,
    `Location: ${siteConfig.contact.addressLocality}, Kenya.`,
    `Contact: ${siteConfig.contact.email} | ${siteConfig.contact.phone}.`,
    "",
    "## Key pages",
    `- Home: ${baseUrl}/`,
    `- About: ${baseUrl}/about`,
    `- Services: ${baseUrl}/services`,
    `- Events: ${baseUrl}/events`,
    `- Contact: ${baseUrl}/contact`,
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}