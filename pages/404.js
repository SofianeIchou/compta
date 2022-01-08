import Link from "next/link";

const MyCustom404Page = (props) => {
  return (
    <div
      style={{
        marginTop: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>404</h1>
      <h2>
        <Link href="/">
          <a style={{ color: "blue", textDecoration: "underline" }}>
            Page bienvenue
          </a>
        </Link>
      </h2>
      <p>Désolé page introuvable</p>
    </div>
  );
};

export default MyCustom404Page;
