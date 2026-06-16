const Footer = () => {
  return (
    <footer className="mt-20 px-4 pb-8">
      <div className="mx-auto max-w-4xl text-center">
        <p
          className="font-carlito text-sm md:text-base"
          style={{ color: "rgba(231,237,200,0.78)" }}
        >
          © 2026 Tanim Bin Aziz. All rights reserved.
        </p>

        <p
          className="mt-2 font-carlito text-sm md:text-base"
          style={{ color: "rgba(231,237,200,0.58)" }}
        >
          Built with Next.Js & Framer Motion - Designed by Tanim Bin Aziz
        </p>

        <div
          className="mx-auto mt-6 h-px w-full max-w-3xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(195,204,155,0.22), transparent)",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
