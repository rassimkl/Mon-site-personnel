"use client";

import Link from "next/link";

export default function ReseauxPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        padding: "140px 80px",
        color: "white",
        backgroundImage: "url('/images/network-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(10,30,40,0.92), rgba(20,60,80,0.9))",
        }}
      />

      {/* LOGO RETOUR ACCUEIL */}
      <Link
        href="/"
        style={{
          position: "absolute",
          top: "40px",
          left: "60px",
          zIndex: 1000,
        }}
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{
            width: "70px",
            borderRadius: "18px",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        />
      </Link>

      <div style={{ position: "relative", zIndex: 2 }}>

        {/* RETOUR */}
        <div style={{ marginBottom: "40px" }}>
          <Link
            href="/portfolio"
            style={{
              color: "white",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.4)",
              padding: "8px 20px",
              borderRadius: "20px",
              backdropFilter: "blur(8px)",
            }}
          >
            ← Retour
          </Link>
        </div>

        {/* HEADER */}
        <div style={{ maxWidth: "900px", marginBottom: "80px" }}>
          <h1 style={{ fontSize: "52px", marginBottom: "25px" }}>
            Ingénieur Réseau
          </h1>

          <p style={{ opacity: 0.9, fontSize: "18px", lineHeight: "1.7" }}>
          Ingénieur Réseau avec une expertise en conception, déploiement et sécurisation d’infrastructures réseau, incluant routage avancé, VoIP, analyse protocolaire et administration Linux. <br/> <br/>

              • Maîtrise des modèles OSI et TCP/IP et compréhension des mécanismes internes TCP/UDP <br/>
              • Configuration et administration de routeurs et commutateurs Cisco <br/>
              • Segmentation réseau : VLAN, inter-VLAN routing, plan d’adressage IPv4/IPv6 (FLSM/VLSM) <br/>
              • Routage statique et dynamique : RIP v2, OSPF <br/>
              • Configuration NAT statique, dynamique et PAT <br/>
              • Simulation et conception de topologies réseau multi-sites (Packet Tracer, GNS3) <br/>
              • Déploiement d’infrastructures VoIP avec Cisco CallManager Express (CCME) <br/>
              • Configuration SCCP (Skinny), interconnexion SIP (Asterisk) <br/>
              • Analyse des flux RTP/RTCP (latence, jitter, QoS) avec Wireshark <br/>
              • Programmation réseau bas niveau : sockets TCP/UDP en C <br/>
              • Administration système Linux : DHCP, DNS, LDAP, NFS, Apache, Postfix <br/>
              • Sécurisation réseau : pare-feu, VPN, ACL, audit sécurité (tcpdump) <br/>
              • Virtualisation et environnements multi-serveurs (VirtualBox, VMware)
          </p>
        </div>

        {/* PROJETS */}
        <h2 style={{ marginBottom: "30px" }}>
          Mes projets
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "30px",
    
          }}
        >

            <div
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
              padding: "30px",
              borderRadius: "25px",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>
              Administration Système Linux – Infrastructure multi-serveurs
            </h3>

            <p style={{ opacity: 0.85 }}>
              • Installation et configuration d’un système Debian sous VirtualBox <br/>
              • Conception et simulation d’un réseau multi-machines avec Marionnet <br/>
              • Mise en place d’un serveur DHCP et DNS (primaire / secondaire) <br/>
              • Déploiement d’un annuaire LDAP (serveur + clients PAM) <br/>
              • Configuration NFS pour partage réseau <br/>
              • Installation et configuration serveur Web Apache <br/>
              • Mise en place d’un serveur mail Postfix <br/>
              • Scripts Bash d’automatisation (création massive utilisateurs, sauvegardes) <br/>
              • Planification de tâches avec cron <br/>
              • Sécurisation via tcpd (hosts.allow / hosts.deny) <br/>
              • Configuration SSH et firewall <br/>
              • Audit sécurité (tcpdump, traceroute, john the ripper) <br/>
              • Sauvegarde et restauration complète de l’infrastructure <br/>
            </p>
          </div>

            <div
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
              padding: "30px",
              borderRadius: "25px",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>
              Programmation Réseau – Sockets TCP/UDP (C)
            </h3>

            <p style={{ opacity: 0.85 }}>
              • Développement d’applications client/serveur en langage C <br/>
              • Implémentation communication UDP (mode DATAGRAM – SOCK_DGRAM) <br/>
              • Implémentation communication TCP (mode STREAM – SOCK_STREAM) <br/>
              • Utilisation des appels systèmes : socket(), bind(), connect(), listen(), accept() <br/>
              • Gestion des échanges via send(), sendto(), recv(), recvfrom(), read(), write() <br/>
              • Manipulation des structures réseau (sockaddr_in, in_addr, hostent) <br/>
              • Résolution DNS avec gethostbyname() <br/>
              • Gestion des connexions itératives et parallèles (fork) <br/>
              • Compréhension du fonctionnement interne TCP/IP
            </p>
          </div>

          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
              padding: "30px",
              borderRadius: "25px",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>
              Téléphonie sur IP – Cisco CallManager
            </h3>

            <p style={{ opacity: 0.85 }}>
              • Déploiement et configuration d’une infrastructure ToIP avec Cisco CallManager Express <br/>
              • Configuration VLAN voix et adressage IP des téléphones via DHCP (Option 150 – TFTP) <br/>
              • Mise en place du service téléphonique (extensions, ephone-dn, ephone) <br/>
              • Enregistrement et gestion des téléphones IP Cisco <br/>
              • Configuration du protocole SCCP (Skinny – TCP port 2000) <br/>
              • Analyse des messages de signalisation (OffHookMessage, StartToneMessage, KeypadButtonMessage) <br/>
              • Capture et analyse Wireshark du processus d’établissement d’appel <br/>
              • Mise en place de dial-peer VoIP pour interconnexion entre CallManagers <br/>
              • Interopérabilité SIP avec Asterisk (configuration sip.conf et extensions.conf) <br/>
              • Analyse RTP/RTCP : mesure délai, jitter, bande passante et impact des codecs G711 / G723 <br/>
              • Étude QoS : impact de la réduction de bande passante (clock rate) sur la qualité voix 
            </p>
          </div>

          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
              padding: "30px",
              borderRadius: "25px",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>
              Simulation Réseaux – Cisco Packet Tracer
            </h3>

            <p style={{ opacity: 0.85 }}>
              • Conception et simulation de topologies réseau multi-sites <br/>
              • Configuration du routage statique et dynamique (RIP v2, OSPF) <br/>
              • Mise en place de NAT statique, NAT dynamique et PAT <br/>
              • Configuration et validation du service DHCP <br/>
              • Segmentation réseau avec VLAN et inter-VLAN routing <br/>
              • Plan d’adressage IPv4 et découpage en sous-réseaux (FLSM / VLSM) <br/>
              • Tests de connectivité et validation des flux (ping, traceroute, show commands) <br/>
              • Analyse des tables de routage et résolution de problèmes réseau
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}
