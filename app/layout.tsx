import type { Metadata } from "next";
import { title, text } from "./fonts";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { I18nProvider } from "@/components/providers/i18n-provider";
import { AccessibilityProvider } from "@/components/providers/accessibility-provider";
import { AccessibilityToolbar } from "@/components/features/accessibility/accessibility-toolbar";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Labviromol",
  description: "Laboratório de virologia molecular",
};

/**
 * Inline script injected before paint to avoid a flash of unstyled content
 * when the user's saved accessibility preferences are applied.
 * Reads from localStorage and immediately adds classes to <html>.
 */
const A11Y_INIT_SCRIPT = `
try {
  var hc = localStorage.getItem('a11y-high-contrast') === 'true';
  var fs = localStorage.getItem('a11y-font-size') || 'normal';
  if (hc) document.documentElement.classList.add('high-contrast');
  if (fs === 'large')  document.documentElement.classList.add('font-scale-lg');
  if (fs === 'xlarge') document.documentElement.classList.add('font-scale-xl');
} catch(e) {}
`.trim();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={cn(
        "h-full",
        "antialiased",
        "bg-neutral-50",
        title.variable,
        text.variable,
        "font-sans",
        geist.variable
      )}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flash: apply saved a11y preferences before first paint */}
        <script dangerouslySetInnerHTML={{ __html: A11Y_INIT_SCRIPT }} />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Skip-to-content link — first focusable element on the page */}
        <a href="#main-content" className="skip-link">
          Ir para o conteúdo principal
        </a>

        <I18nProvider>
          <AccessibilityProvider>
            <Header />
            <main id="main-content" className="flex-1" tabIndex={-1}>
              {children}
            </main>
            <Footer />
            <AccessibilityToolbar />
          </AccessibilityProvider>
        </I18nProvider>
      </body>
    </html>
  );
}