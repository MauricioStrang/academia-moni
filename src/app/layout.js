import "./globals.css";
import Header from "../components/header/header";

export const metadata = {
  title: "Academia Moni",
  description: "Academia de ciencias médicas de Mónica Anriquez, website creado por Mauricio Strang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header/>
          {children}
        </div>
      </body>
    </html>
  );
}
