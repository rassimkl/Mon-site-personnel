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
            <span>OSI / TCP-IP</span>
            <span>VLAN</span>
            <span>OSPF</span>
            <span>NAT / PAT</span>
            <span>Wireshark</span>
            <span>Linux</span>
            <span>CCME</span>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes projets</h2>

        <div className={styles.projectsGrid}>
          {/* Linux multi-serveurs */}
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>
              Administration Système Linux — Infrastructure multi-serveurs
            </h3>

            <ul className={styles.projectList}>
              <li>Installation Debian sous VirtualBox / VMware</li>
              <li>Mise en place DHCP & DNS (primaire / secondaire)</li>
              <li>Déploiement d’un annuaire LDAP (serveur + clients PAM)</li>
              <li>Partage NFS, serveur Web Apache, serveur Mail Postfix</li>
              <li>Automatisation Bash (utilisateurs, sauvegardes) + planification cron</li>
              <li>Sécurisation : SSH, firewall, règles hosts.allow / hosts.deny</li>
            </ul>

            <div className={styles.tags}>
              <span>Debian</span>
              <span>DHCP</span>
              <span>DNS</span>
              <span>LDAP</span>
              <span>NFS</span>
              <span>Bash</span>
            </div>

            {/* Optionnel : lien vers PDF si tu en as un */}
            {/* <a href="/documents/rapport-linux.pdf" target="_blank" className={styles.projectLink}>Voir le rapport (PDF) →</a> */}
          </div>

          {/* Sockets C */}
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>
              Programmation Réseau — Sockets TCP/UDP (C)
            </h3>

            <ul className={styles.projectList}>
              <li>Applications client/serveur en C</li>
              <li>Communication UDP (SOCK_DGRAM) & TCP (SOCK_STREAM)</li>
              <li>Appels systèmes : socket(), bind(), connect(), listen(), accept()</li>
              <li>Échanges : send(), recv(), sendto(), recvfrom(), read(), write()</li>
              <li>Résolution DNS : gethostbyname()</li>
              <li>Gestion des connexions itératives/parallèles (fork)</li>
            </ul>

            <div className={styles.tags}>
              <span>C</span>
              <span>TCP</span>
              <span>UDP</span>
              <span>Client/Serveur</span>
              <span>DNS</span>
            </div>
          </div>

          {/* VoIP CCME */}
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>
              Téléphonie sur IP — Cisco CallManager Express (CCME)
            </h3>

            <ul className={styles.projectList}>
              <li>Installation & configuration CCME (VoIP Cisco)</li>
              <li>VLAN voix + adressage IP des téléphones via DHCP (Option 150 / TFTP)</li>
              <li>Extensions & configuration téléphonique (ephone-dn, ephone)</li>
              <li>SCCP (Skinny) & analyse de signalisation via Wireshark</li>
              <li>Interconnexion SIP avec Asterisk</li>
              <li>Analyse RTP/RTCP : latence, jitter, QoS</li>
            </ul>

            <div className={styles.tags}>
              <span>CCME</span>
              <span>VoIP</span>
              <span>SCCP</span>
              <span>SIP</span>
              <span>Wireshark</span>
              <span>QoS</span>
            </div>
          </div>

          {/* Packet Tracer */}
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>
              Simulation Réseaux — Cisco Packet Tracer
            </h3>

            <ul className={styles.projectList}>
              <li>Topologies multi-sites (LAN/WAN) & segmentation réseau</li>
              <li>Routage statique et dynamique (RIPv2, OSPF)</li>
              <li>DHCP (dont relais), NAT statique/dynamique & PAT</li>
              <li>VLAN + inter-VLAN routing</li>
              <li>Plan d’adressage IPv4 et découpage (FLSM / VLSM)</li>
              <li>Validation des flux : ping, traceroute, commandes “show”</li>
            </ul>

            <div className={styles.tags}>
              <span>Packet Tracer</span>
              <span>OSPF</span>
              <span>RIPv2</span>
              <span>VLAN</span>
              <span>NAT/PAT</span>
              <span>DHCP</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}