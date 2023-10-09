function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        height: "80px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>
        @
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://github.com/hyunique"
        >
          hyunique
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
