// updated
import { useState } from "react";

import imgOlatoro from "../images/Team/Engr Olatoro Laura Essien.jpeg";
import imgRuth from "../images/Team/Engr Ruth Otinomo Braimoh.jpeg";
import imgNoble from "../images/Team/Engr Noble-Gold.jpeg";
import imgAkabuogu from "../images/Team/Engr Akabuogu Paschal Chukwuka.jpeg";
import imgStanley from "../images/Team/Engr Stanley Oluebube.jpeg";
import imgAdeboye from "../images/Team/Engr Adeboye Oluwatoyin.jpeg";
import imgJideofor from "../images/Team/Engr Jideofor Chika Agatha.jpg";
import imgKalu from "../images/Team/Engr Kalu Emeka.jpeg";
import imgAluma from "../images/Team/Enge Aluma Ogbonnaya Sunday.jpeg";
import imgVictory from "../images/Team/Engr Victory Umashichi Ohia.jpeg";
import imgUzordi from "../images/Team/Engr Uzordi Gideon Osinachi.jpeg";
import imgEno from "../images/Team/Engr Eno Edet John.jpeg";
import imgOgbonna from "../images/Team/Engr Ogbonna Rita Tobechukwu.jpeg";
import imgCelestina from "../images/Team/Engr Celestina Zubairu.jpeg";

const teamMembers = [
  {
    id: 1,
    name: "Engr Olatoro Laura Essien",
    position: "Team Lead",
    role: "Overall Team Leadership & Strategy",
    phone: "+2348145551205",
    initials: "OLE",
    color: "#8B1A1A",
    isLead: true,
    photo: imgOlatoro,
  },
  {
    id: 2,
    name: "Engr Ruth Otinomo Braimoh",
    position: "Assistant Team Lead",
    role: "Team Coordination & Support",
    phone: "+2347010321361",
    initials: "ROB",
    color: "#1A3A4A",
    photo: imgRuth,
  },
  {
    id: 3,
    name: "Engr Noble-Gold",
    position: "Coordinator & Admin Lead",
    role: "Administration & Project Coordination",
    phone: "+2348064246830",
    initials: "NG",
    color: "#4A235A",
    photo: imgNoble,
  },
  {
    id: 4,
    name: "Engr Akabuogu Paschal Chukwuka",
    position: "Infrastructure Team Lead",
    role: "Cloud Infrastructure & DevOps",
    phone: "+2348034130723",
    initials: "APC",
    color: "#2C3E50",
    photo: imgAkabuogu,
  },
  {
    id: 5,
    name: "Engr Stanley Oluebube",
    position: "Backend & Frontend Team Lead",
    role: "Full Stack Engineering Leadership",
    phone: "+2348152523447",
    initials: "SO",
    color: "#2E4057",
    photo: imgStanley,
  },
  {
    id: 6,
    name: "Engr Adeboye Oluwatoyin",
    position: "Admin Lead",
    role: "Administrative Operations",
    phone: "+2348068225515",
    initials: "AO",
    color: "#5C3D2E",
    photo: imgAdeboye,
  },
  {
    id: 7,
    name: "Engr Jideofor Chika Agatha",
    position: "Architectural Lead",
    role: "System Architecture & Design",
    phone: "+2349042320096",
    initials: "JCA",
    color: "#145A32",
    photo: imgJideofor,
  },
  {
    id: 8,
    name: "Engr Kalu Emeka",
    position: "Monitoring Team Member",
    role: "System Monitoring & Observability",
    phone: "+2349072605054",
    initials: "KE",
    color: "#6E2F14",
    photo: imgKalu,
  },
  {
    id: 9,
    name: "Enge Aluma Ogbonnaya Sunday",
    position: "Security Team",
    role: "Cybersecurity & Compliance",
    phone: "+2347038483683",
    initials: "AOS",
    color: "#2C2C54",
    photo: imgAluma,
  },
  {
    id: 10,
    name: "Engr Victory Umashichi Ohia",
    position: "Customer Service",
    role: "Client Relations & Support",
    phone: "+2348169262769",
    initials: "VUO",
    color: "#1C3A2A",
    photo: imgVictory,
  },
  {
    id: 11,
    name: "Engr Uzordi Gideon Osinachi",
    position: "Team Member",
    role: "Engineering & Development",
    phone: "+2349011365264",
    initials: "UGO",
    color: "#3B1F14",
    photo: imgUzordi,
  },
  {
    id: 12,
    name: "Engr Eno Edet John",
    position: "Team Member",
    role: "Engineering & Development",
    phone: "+2347064551872",
    initials: "EEJ",
    color: "#145270",
    photo: imgEno,
  },
  {
    id: 13,
    name: "Engr Ogbonna Rita Tobechukwu",
    position: "Team Member",
    role: "Engineering & Development",
    phone: "+234 800 000 0013",
    initials: "ORT",
    color: "#784212",
    photo: imgOgbonna,
  },
  {
    id: 14,
    name: "Engr Celestina Zubairu",
    position: "Team Member",
    role: "Engineering & Development",
    phone: "+234 800 000 0014",
    initials: "CZ",
    color: "#1A5276",
    photo: imgCelestina,
  },
];

function TeamCard({ member, index }) {
  const [hovered, setHovered] = useState(false);

  const badgeLabel =
    index === 0
      ? "★ Team Lead"
      : index === 1
      ? "Assistant Lead"
      : null;

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        border: `1px solid ${hovered ? member.color + "55" : "#e8ddd0"}`,
        overflow: "hidden",
        boxShadow: hovered
          ? `0 16px 40px ${member.color}33`
          : "0 2px 16px rgba(0,0,0,0.07)",
        transform: hovered ? "translateY(-7px)" : "translateY(0)",
        transition: "all 0.28s cubic-bezier(.4,0,.2,1)",
        cursor: "default",
        position: "relative",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Colored top banner */}
      <div
        style={{
          height: "80px",
          background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}aa 100%)`,
          position: "relative",
        }}
      >
        {badgeLabel && (
          <span
            style={{
              position: "absolute",
              top: "10px",
              right: "12px",
              background: index === 0 ? "#f5c518" : "rgba(255,255,255,0.25)",
              color: index === 0 ? "#1a1a2e" : "#fff",
              fontSize: "0.6rem",
              fontWeight: "800",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "3px 9px",
              borderRadius: "10px",
            }}
          >
            {badgeLabel}
          </span>
        )}
      </div>

      {/* Avatar — real photo or initials fallback */}
      <div
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          border: "3px solid #fff",
          overflow: "hidden",
          position: "absolute",
          top: "44px",
          left: "20px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
          background: member.color,
        }}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontSize: "1rem", fontWeight: "700",
          }}>
            {member.initials}
          </div>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: "48px 20px 20px" }}>
        <div style={{
          fontSize: "0.72rem", color: member.color, fontWeight: "700",
          textTransform: "uppercase", letterSpacing: "1.2px", marginBottom: "4px",
        }}>
          {member.position}
        </div>
        <div style={{
          fontWeight: "700", fontSize: "0.95rem", color: "#1a1a2e",
          lineHeight: "1.35", marginBottom: "4px", fontFamily: "Georgia, serif",
        }}>
          {member.name}
        </div>
        <div style={{ fontSize: "0.8rem", color: "#999", marginBottom: "14px" }}>
          {member.role}
        </div>
        <a
          href={`tel:${member.phone}`}
          style={{
            display: "flex", alignItems: "center", gap: "6px",
            fontSize: "0.82rem", color: "#555", background: "#f7f2eb",
            borderRadius: "8px", padding: "7px 12px", textDecoration: "none",
            transition: "background 0.2s", fontWeight: "500",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#ede5d8")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#f7f2eb")}
        >
          <span>📞</span> {member.phone}
        </a>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", backgroundColor: "#fdf8f0", minHeight: "100vh", color: "#1a1a2e" }}>
      {/* HERO */}
      <div style={{
        background: "linear-gradient(140deg, #0d0d1a 0%, #1a1a2e 45%, #6b1010 100%)",
        padding: "90px 40px 70px", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(139,26,26,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(245,197,24,0.08) 0%, transparent 50%)",
          pointerEvents: "none",
        }} />
        <div style={{
          display: "inline-block", background: "rgba(245,197,24,0.12)",
          border: "1px solid rgba(245,197,24,0.35)", color: "#f5c518",
          fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase",
          padding: "6px 20px", borderRadius: "20px", marginBottom: "22px",
        }}>
          POD12 · Cohort 5 · DigitalWitch
        </div>
        <h1 style={{
          color: "#ffffff", fontSize: "clamp(2rem, 5vw, 3.4rem)",
          fontWeight: "700", marginBottom: "0", lineHeight: "1.2", letterSpacing: "-0.5px",
        }}>
          A Team You Can Bank On
        </h1>
        <div style={{ width: "56px", height: "3px", background: "#f5c518", margin: "22px auto", borderRadius: "2px" }} />
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", letterSpacing: "1.5px", textTransform: "uppercase", margin: "0" }}>
          Where Technology Meets Financial Trust
        </p>
      </div>

      {/* WHO WE ARE */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 32px 48px" }}>
        <p style={{ fontSize: "0.72rem", color: "#8B1A1A", fontWeight: "700", textTransform: "uppercase", letterSpacing: "3px", marginBottom: "10px" }}>About Us</p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: "700", color: "#1a1a2e", marginBottom: "20px", lineHeight: "1.25" }}>Who We Are</h2>
        <div style={{ width: "40px", height: "3px", background: "#8B1A1A", borderRadius: "2px", marginBottom: "24px" }} />
        <p style={{ color: "#444", lineHeight: "1.9", fontSize: "1.05rem", maxWidth: "780px", marginBottom: "12px" }}>
          <strong>POD12-Cohort 5, DigitalWitch</strong> is a team of passionate skilled engineers on a mission to break down barriers in financial services through innovative technology. From pixel-perfect interfaces to scalable cloud infrastructure, we combine our diverse expertise to deliver banking solutions that are powerful, intuitive, and built for everyone.
        </p>
        <p style={{ color: "#8B1A1A", fontWeight: "600", fontSize: "1.05rem", fontStyle: "italic", borderLeft: "3px solid #f5c518", paddingLeft: "16px", maxWidth: "500px" }}>
          A Team You Can Bank On — Where Technology Meets Financial Trust.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "22px", marginTop: "48px" }}>
          {[
            { icon: "🎯", title: "Our Mission", text: "To deliver a secure, accessible, and seamless digital banking experience — empowering individuals and businesses to manage finances with confidence." },
            { icon: "🔭", title: "Our Vision", text: "To become the most trusted digital financial services platform, setting a new standard for engineering excellence and customer-first design." },
            { icon: "⚙️", title: "Our Approach", text: "We build with agility and precision — leveraging modern cloud infrastructure, rigorous testing, and collaborative engineering to ship fast without compromising quality." },
            { icon: "🤝", title: "Our Values", text: "Integrity, innovation, and inclusion guide everything we do. Diverse perspectives and deep collaboration produce better products for every user." },
          ].map((p) => (
            <div key={p.title} style={{ background: "#fff", border: "1px solid #e8ddd0", borderRadius: "14px", padding: "28px 24px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "1.9rem", marginBottom: "12px" }}>{p.icon}</div>
              <div style={{ fontWeight: "700", color: "#8B1A1A", fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>{p.title}</div>
              <p style={{ color: "#555", fontSize: "0.91rem", lineHeight: "1.65", margin: 0 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #e8ddd0", margin: "0 32px" }} />

      {/* TEAM */}
      <div style={{ background: "#f9f4ee", padding: "64px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.72rem", color: "#8B1A1A", fontWeight: "700", textTransform: "uppercase", letterSpacing: "3px", marginBottom: "10px" }}>The People</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: "700", color: "#1a1a2e", marginBottom: "8px" }}>Our Engineering Team</h2>
          <div style={{ width: "40px", height: "3px", background: "#8B1A1A", borderRadius: "2px", marginBottom: "12px" }} />
          <p style={{ color: "#888", fontSize: "0.93rem", marginBottom: "36px" }}>14 engineers. One mission. Tap any card to call directly.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "22px" }}>
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%)", color: "#fff", textAlign: "center", padding: "48px 30px" }}>
        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>Get In Touch</p>
        <p style={{ fontSize: "1.15rem", color: "#f5c518", fontWeight: "600", margin: 0 }}>Every team member is one call away — we're always here to help.</p>
      </div>
    </div>
  );
}
