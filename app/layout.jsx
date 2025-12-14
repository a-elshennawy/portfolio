import Nav from "@/components/Nav/Nav";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClickSpark from "@/components/UI/ClickSpark/ClickSpark";

export const metadata = {
  title: "Ahmed El-Shennawy",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Nav />
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
