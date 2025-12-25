import Nav from "@/components/Nav/Nav";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLines from "@/components/UI/FloatingLines/FloatingLines";
import CustomContextMenu from "@/components/CustomeContextMenu/CustomeContextMenu";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Ahmed El-Shennawy",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <CustomContextMenu />
          <Nav />
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: -1,
            }}
          >
            <FloatingLines
              enabledWaves={["top", "middle", "bottom"]}
              lineCount={[3, 2, 1]}
              lineDistance={[8, 6, 4]}
              bendRadius={5.0}
              bendStrength={-0.5}
              interactive={false}
              parallax={true}
            />
          </div>
          {children}
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
