import Nav from "@/components/Nav/Nav";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLines from "@/components/UI/FloatingLines/FloatingLines";
import CustomContextMenu from "@/components/CustomeContextMenu/CustomeContextMenu";

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
        {/* <CustomContextMenu />*/}

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
            // Array - specify line count per wave; Number - same count for all waves
            lineCount={[3, 2, 1]}
            // Array - specify line distance per wave; Number - same distance for all waves
            lineDistance={[8, 6, 4]}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={false}
            parallax={true}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
