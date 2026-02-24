"use client";

import styles from "../../../styles/ReseauxPage.module.css";

export default function Reseau() {
  return (
    
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Mes travaux en réseau</h1>
        <p>
          Conception, simulation et sécurisation d’infrastructures réseau :
          routage, VoIP, analyse protocolaire et administration Linux.
        </p>
      </section>

      {/* COMPETENCES */}
      <section className={styles.section}>
        <div className={styles.skillsCard}>
          <p className={styles.skillsIntro}>
            Ingénieur Réseau avec une expertise en conception, déploiement et
            sécurisation d’infrastructures réseau, incluant routage avancé,
            VoIP, analyse protocolaire et administration Linux.
          </p>

          <ul className={styles.skillsList}>
            <li>Modèles OSI & TCP/IP (DNS, DHCP, HTTP/HTTPS, TCP/UDP, ARP, Ethernet)</li>
            <li>Routeurs & commutateurs Cisco, VLAN, inter-VLAN routing, STP</li>
            <li>Adressage IPv4/IPv6, sous-réseaux (FLSM/VLSM), NAT / PAT</li>
            <li>Routage statique & dynamique (RIPv2, OSPF)</li>
            <li>VoIP : Cisco CallManager Express (CCME), SCCP, SIP (Asterisk), QoS</li>
            <li>Analyse & diagnostic : Wireshark, tests de flux (ping, traceroute, show)</li>
            <li>Linux : services réseau & scripts Shell/Bash</li>
            <li>Sécurité : pare-feu, VPN, ACL, notions de cryptographie</li>
          </ul>

          <div className={styles.tags}>
            <span>OSI</span>
            <span>TCP/IP</span>
            <span>IPv4 / IPv6</span>
            <span>VLAN</span>
            <span>Inter-VLAN</span>
            <span>OSPF</span>
            <span>RIPv2</span>
            <span>NAT / PAT</span>
            <span>DHCP</span>
            <span>DNS</span>
            <span>LAN / WAN</span>
            <span>Cisco</span>
            <span>Cisco Packet Tracer</span>
            <span>GNS3</span>
            <span>CCME</span>
            <span>VoIP</span>
            <span>SIP / SCCP</span>
            <span>QoS</span>
            <span>Wireshark</span>
            <span>LDAP</span>
            <span>NFS</span>
            <span>Bash / shell</span>
            <span>SSH</span>
            <span>Firewall</span>
          </div>
        </div>
      </section>

      {/* PROJETS */}
<section className={styles.section}>
  <h2 className={styles.sectionTitle}>Mes projets</h2>

  <div className={styles.projectsGrid}>

    {/* VoIP CCME */}
    <div className={styles.projectCard}>
      <h3 className={styles.projectTitle}>
        Déploiement d’une infrastructure VoIP Cisco (CCME)
      </h3>

      <ul className={styles.projectList}>
        <li>Installation et configuration de Cisco CallManager Express</li>
        <li>Mise en place d’un VLAN voix et attribution IP via DHCP (Option 150)</li>
        <li>Configuration des téléphones IP (ephone-dn / ephone)</li>
        <li>Interconnexion SIP avec Asterisk</li>
        <li>Analyse des flux SCCP / RTP via Wireshark</li>
        <li>Mise en place de mécanismes QoS pour la priorisation du trafic VoIP</li>
      </ul>

      <div className={styles.tags}>
        <span>CCME</span>
        <span>VoIP</span>
        <span>SIP</span>
        <span>SCCP</span>
        <span>QoS</span>
        <span>Wireshark</span>
      </div>
    </div>

    {/* Réseau multi-sites */}
    <div className={styles.projectCard}>
      <h3 className={styles.projectTitle}>
        Conception et simulation d’un réseau multi-sites (Cisco)
      </h3>

      <ul className={styles.projectList}>
        <li>Conception d’une topologie LAN/WAN segmentée</li>
        <li>Configuration VLAN & inter-VLAN routing</li>
        <li>Routage statique et dynamique (OSPF, RIPv2)</li>
        <li>Mise en place DHCP avec relais</li>
        <li>Configuration NAT statique/dynamique & PAT</li>
        <li>Plan d’adressage IPv4 (FLSM / VLSM)</li>
        <li>Validation des flux (ping, traceroute, commandes show)</li>
      </ul>

      <div className={styles.tags}>
        <span>IPv4</span>
        <span>OSPF</span>
        <span>RIPv2</span>
        <span>DHCP</span>
        <span>VLAN</span>
        <span>NAT / PAT</span>
        <span>FLSM / VLSM</span>
      </div>
    </div>

    {/* Linux multi-serveurs */}
    <div className={styles.projectCard}>
      <h3 className={styles.projectTitle}>
        Administration d’une infrastructure Linux multi-serveurs
      </h3>

      <ul className={styles.projectList}>
        <li>Déploiement Debian sous VirtualBox / VMware</li>
        <li>Configuration services réseau : DHCP, DNS</li>
        <li>Mise en place d’un annuaire LDAP</li>
        <li>Partage réseau NFS</li>
        <li>Sécurisation SSH et règles firewall</li>
        <li>Automatisation via scripts Bash</li>
      </ul>

      <div className={styles.tags}>
        <span>Debian</span>
        <span>DNS</span>
        <span>DHCP</span>
        <span>LDAP</span>
        <span>NFS</span>
        <span>Bash</span>
        <span>SSH / Firewall</span>
      </div>
    </div>

    {/* Sockets C */}
    <div className={styles.projectCard}>
      <h3 className={styles.projectTitle}>
        Implémentation d’une architecture client/serveur en C (TCP/UDP)
      </h3>

      <ul className={styles.projectList}>
        <li>Gestion des connexions via socket(), bind(), listen(), accept()</li>
        <li>Communication TCP (SOCK_STREAM) & UDP (SOCK_DGRAM)</li>
        <li>Échanges via send(), recv(), read(), write()</li>
        <li>Résolution DNS (gethostbyname())</li>
        <li>Gestion de connexions concurrentes avec fork()</li>
        <li>Analyse du comportement TCP/UDP au niveau transport</li>
      </ul>

      <div className={styles.tags}>
        <span>C</span>
        <span>TCP</span>
        <span>UDP</span>
        <span>Client/Serveur</span>
      </div>
    </div>

  </div>
</section>
    </div>
  );
}