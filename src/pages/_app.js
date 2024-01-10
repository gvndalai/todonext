import { ArrayProvider } from "@/components/context/arrayContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ArrayProvider>
      <Component {...pageProps} />
    </ArrayProvider>
  );
}
