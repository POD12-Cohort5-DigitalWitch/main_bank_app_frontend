import { useState } from "react";

const contactInfo = [
  { icon: "🌐", label: "Website", value: "bank.cohort5pod12.site", link: "https://bank.cohort5pod12.site" },
  { icon: "📧", label: "Email", value: "pod12@cohort5digitalwitch.com", link: "mailto:pod12@cohort5digitalwitch.com" },
  { icon: "📍", label: "Location", value: "Nigeria (Remote Team)", link: null },
];

const teamContacts = [
  { name: "Engr Olatoro Laura Essien", position: "Team Lead", phone: "+2348145551205", initials: "OLE", color: "#8B1A1A" },
  { name: "Engr Ruth Otinomo Braimoh", position: "Assistant Team Lead", phone: "+2347010321361", initials: "ROB", color: "#1A3A4A" },
  { name: "Engr Noble-Gold", position: "Coordinator & Admin Lead", phone: "+2348064246830", initials: "NG", color: "#4A235A" },
  { name: "Engr Akabuogu Paschal Chukwuka", position: "Infrastructure Team Lead", phone: "+2348034130723", initials: "APC", color: "#2C3E50" },
  { name: "Engr Stanley Oluebube", position: "Backend & Frontend Team Lead", phone: "+2348152523447", initials: "SO", color: "#2E4057" },
  { name: "Engr Adeboye Oluwatoyin", position: "Admin Lead", phone: "+2348068225515", initials: "AO", color: "#5C3D2E" },
  { name: "Engr Jideofor Chika Agatha", position: "Architectural Lead", phone: "+2349042320096", initials: "JCA", color: "#145A32" },
  { name: "Engr Kalu Emeka", position: "Monitoring Team Member", phone: "+2349072605054", initials: "KE", color: "#6E2F14" },
  { name: "Enge Aluma Ogbonnaya Sunday", position: "Security Team", phone: "+2347038483683", initials: "AOS", color: "#2C2C54" },
  { name: "Engr Victory Umashichi Ohia", position: "Customer Service", phone: "+2348169262769", initials: "VUO", color: "#1C3A2A" },
  { name: "Engr Uzordi Gideon Osinachi", position: "Team Member", phone: "+2349011365264", initials: "UGO", color: "#3B1F14" },
  { name: "Engr Eno Edet John", position: "Team Member", phone: "+2347064551872", initials: "EEJ", color: "#145270" },
  { name: "Engr Ogbonna Rita Tobechukwu", position: "Team Member", phone: "+234 800 000 0013", initials: "ORT", color: "#784212" },
  { name: "Engr Celestina Zubairu", position: "Team Member", phone: "+234 800 000 0014", initials: "CZ", color: "#1A5276" },
];

function ContactCard({ member }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "12px",
        border: `1px solid ${hovered ? member.color + "55" : "#e8ddd0"}`,
        padding: "18px 20px",
        display: "flex",
        alignItems: "center",
        gap: "14px",
        boxShadow: hovered ? `0 8px 24px ${member.color}22` : "0 2px 8px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.2s ease",
      }}
    >
      <div style={{
        width: "48px", height: "48px", borderRadius: "50%", flexShrink: 0,
        background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}99 100%)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff", fontSize: "0.8rem", fontWeight: "700", letterSpacing: "0.5px",
      }}>
        {member.initials}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: "700", fontSize: "0.9rem", color: "#1a1a2e", marginBottom: "2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {member.name}
        </div>
        <div style={{ fontSize: "0.72rem", color: member.color, fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
          {member.position}
        </div>
        <a href={`tel:${member.phone}`} style={{
          fontSize: "0.82rem", color: "#555", textDecoration: "none", fontWeight: "500",
          display: "flex", alignItems: "center", gap: "5px",
        }}>
          📞 {member.phone}
        </a>
      </div>
    </div>
  );
}

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", backgroundColor: "#fdf8f0", minHeight: "100vh", color: "#1a1a2e" }}>

      {/* HERO */}
      <div style={{
        background: "linear-gradient(140deg, #0d0d1a 0%, #1a1a2e 45%, #6b1010 100%)",
        padding: "80px 40px 60px", textAlign: "center", position: "relative",
      }}>
        <div style={{
          display: "inline-block", background: "rgba(245,197,24,0.12)",
          border: "1px solid rgba(245,197,24,0.35)", color: "#f5c518",
          fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase",
          padding: "6px 20px", borderRadius: "20px", marginBottom: "22px",
        }}>
          POD12 · Cohort 5 · DigitalWitch
        </div>
        <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: "700", marginBottom: "0", lineHeight: "1.2" }}>
          Get In Touch
        </h1>
        <div style={{ width: "56px", height: "3px", background: "#f5c518", margin: "20px auto", borderRadius: "2px" }} />
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", margin: "0", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
          Have questions about our banking platform? We're always here to help.
        </p>
      </div>

      {/* QUICK CONTACT INFO */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 32px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "48px" }}>
          {contactInfo.map((item) => (
            <div key={item.label} style={{
              background: "#fff", borderRadius: "12px", border: "1px solid #e8ddd0",
              padding: "20px 24px", display: "flex", alignItems: "center", gap: "14px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}>
              <span style={{ fontSize: "1.6rem" }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: "0.7rem", color: "#8B1A1A", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "4px" }}>{item.label}</div>
                {item.link ? (
                  <a href={item.link} style={{ fontSize: "0.88rem", color: "#1a1a2e", fontWeight: "600", textDecoration: "none" }}>{item.value}</a>
                ) : (
                  <div style={{ fontSize: "0.88rem", color: "#1a1a2e", fontWeight: "600" }}>{item.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* SEND MESSAGE FORM */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start", marginBottom: "64px" }}>
          <div>
            <p style={{ fontSize: "0.72rem", color: "#8B1A1A", fontWeight: "700", textTransform: "uppercase", letterSpacing: "3px", marginBottom: "10px" }}>Send A Message</p>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: "700", color: "#1a1a2e", marginBottom: "8px" }}>We'd Love To Hear From You</h2>
            <div style={{ width: "40px", height: "3px", background: "#8B1A1A", borderRadius: "2px", marginBottom: "24px" }} />

            {submitted && (
              <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", borderRadius: "8px", padding: "12px 16px", marginBottom: "20px", color: "#155724", fontSize: "0.9rem" }}>
                ✅ Message sent! We'll get back to you shortly.
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                { key: "subject", label: "Subject", type: "text", placeholder: "How can we help?" },
              ].map((field) => (
                <div key={field.key}>
                  <label style={{ fontSize: "0.78rem", fontWeight: "700", color: "#555", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "6px" }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.key]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    style={{
                      width: "100%", padding: "10px 14px", borderRadius: "8px",
                      border: "1px solid #e8ddd0", fontSize: "0.9rem", outline: "none",
                      fontFamily: "Georgia, serif", background: "#fff", boxSizing: "border-box",
                    }}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontSize: "0.78rem", fontWeight: "700", color: "#555", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "6px" }}>
                  Message
                </label>
                <textarea
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%", padding: "10px 14px", borderRadius: "8px",
                    border: "1px solid #e8ddd0", fontSize: "0.9rem", outline: "none",
                    fontFamily: "Georgia, serif", resize: "vertical", background: "#fff", boxSizing: "border-box",
                  }}
                />
              </div>
              <button
                onClick={handleSubmit}
                style={{
                  background: "linear-gradient(135deg, #8B1A1A 0%, #6b1010 100%)",
                  color: "#fff", border: "none", borderRadius: "8px",
                  padding: "12px 28px", fontSize: "0.9rem", fontWeight: "700",
                  cursor: "pointer", letterSpacing: "1px", textTransform: "uppercase",
                  transition: "opacity 0.2s", alignSelf: "flex-start",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Send Message →
              </button>
            </div>
          </div>

          {/* MAP / INFO SIDE */}
          <div style={{ background: "#fff", borderRadius: "16px", border: "1px solid #e8ddd0", padding: "32px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#1a1a2e", marginBottom: "16px" }}>Why Contact Us?</h3>
            {[
              { icon: "🏦", title: "Account Support", desc: "Help with account opening, management, and transactions." },
              { icon: "🔒", title: "Security Concerns", desc: "Report suspicious activity or get help securing your account." },
              { icon: "💡", title: "Technical Issues", desc: "Platform bugs, login issues, or feature requests." },
              { icon: "🤝", title: "Partnerships", desc: "Business inquiries and collaboration opportunities." },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", gap: "14px", marginBottom: "20px" }}>
                <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: "700", fontSize: "0.9rem", color: "#1a1a2e", marginBottom: "3px" }}>{item.title}</div>
                  <div style={{ fontSize: "0.82rem", color: "#888", lineHeight: "1.5" }}>{item.desc}</div>
                </div>
              </div>
            ))}
            <div style={{ background: "#fdf8f0", borderRadius: "10px", padding: "16px", marginTop: "8px", borderLeft: "3px solid #f5c518" }}>
              <div style={{ fontSize: "0.78rem", color: "#8B1A1A", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>Response Time</div>
              <div style={{ fontSize: "0.88rem", color: "#555" }}>We typically respond within <strong>24 hours</strong> on business days.</div>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #e8ddd0", margin: "0 32px" }} />

      {/* TEAM CONTACTS */}
      <div style={{ background: "#f9f4ee", padding: "64px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.72rem", color: "#8B1A1A", fontWeight: "700", textTransform: "uppercase", letterSpacing: "3px", marginBottom: "10px" }}>Direct Contact</p>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: "700", color: "#1a1a2e", marginBottom: "8px" }}>Reach Our Team Directly</h2>
          <div style={{ width: "40px", height: "3px", background: "#8B1A1A", borderRadius: "2px", marginBottom: "12px" }} />
          <p style={{ color: "#888", fontSize: "0.93rem", marginBottom: "36px" }}>Call any team member directly — we're always available to help.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {teamContacts.map((member) => (
              <ContactCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%)", color: "#fff", textAlign: "center", padding: "48px 30px" }}>
        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>POD12 · Cohort 5 · DigitalWitch</p>
        <p style={{ fontSize: "1.15rem", color: "#f5c518", fontWeight: "600", margin: 0 }}>A Team You Can Bank On — Where Technology Meets Financial Trust.</p>
      </div>
    </div>
  );
}
