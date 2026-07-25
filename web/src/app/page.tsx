import Footer from "@/widgets/footer";

export default function Home() {
  return (
    <>
      <main>
        <h1>Ash</h1>
        <nav>
          <ul>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
          </ul>
        </nav>
      </main>

      <Footer />
    </>
  );
}
