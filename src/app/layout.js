import "./globals.css";
import Header from "../components/header/header";
import Banner from "@/components/banner/banner";

export const metadata = {
  title: "Academia Moni",
  description: "Academia de ciencias médicas de Mónica Anriquez, website creado por Mauricio Strang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">

          <Banner />
          <div className="header">
              <Header />
            </div>
          {children}
        </div>
      </body>
    </html>
  );
}
