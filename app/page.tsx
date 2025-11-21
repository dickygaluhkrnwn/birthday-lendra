import OpeningGate from "./components/birthday/OpeningGate";

export default function Home() {
  return (
    // Tidak perlu class h-screen/overflow-hidden di sini karena OpeningGate menggunakan fixed inset-0
    // yang akan menimpa segalanya. Cukup fragment atau main kosong.
    <main>
      <OpeningGate />
    </main>
  );
}