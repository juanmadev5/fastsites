export default function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 md:px-20 text-center border-t border-[var(--outlineVariant)] text-[var(--secondary)]">
      <p>
        © {new Date().getFullYear()} JM Dev. Todos los derechos reservados.
      </p>
    </footer>
  );
}
