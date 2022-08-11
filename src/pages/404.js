import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p style={{ margin: "10px 0" }}>Parece que esta página não existe.</p>

      <div style={{ marginBottom: 10 }}>
        <Link href={"/home"}>Voltar</Link>
      </div>
    </>
  );
}
