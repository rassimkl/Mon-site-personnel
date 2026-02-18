"use client";

import Link from "next/link";

export default function Navbar({ onAdminClick, isAdmin, onLogout }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 80px",

        background: "transparent",
        backdropFilter: "blur(6px)",

        backdropFilter: "blur(10px)", // effet glass plus doux
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* LOGO */}
      <Link href="/">
        <img
          src="/images/logo.png"
          alt="logo"
          style={{
            width: "70px",
            borderRadius: "18px",
            cursor: "pointer",
          }}
        />
      </Link>

      {/* MENU */}
      <div
        style={{
          display: "flex",
          gap: "180px",
          alignItems: "center",
        }}
      >
        {[
          { label: "Mon portfolio", href: "/portfolio" },
          { label: "Mes documents", href: "/documents" },
          { label: "Me contacter", href: "/contact" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            {item.label}
          </Link>
        ))}

        {isAdmin && (
        <Link href="/admin" style={{ color: "white" }}>
          Stats
        </Link>
      )}

      </div>
      

      {/* ADMIN */}
      <div>
        {!isAdmin ? (
          <button
            onClick={onAdminClick}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid white",
              background: "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            ⚙
          </button>
        ) : (
          <button
            onClick={onLogout}
            style={{
              padding: "8px 20px",
              borderRadius: "25px",
              border: "none",
              background: "white",
              color: "#ff0055",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Déconnexion
          </button>
        )}
      </div>
    </nav>
  );
}
