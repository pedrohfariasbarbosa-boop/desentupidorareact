import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyUs from "../components/WhyUs";
import AreasSection from "../components/AreasSection";
import ReviewsSection from "../components/ReviewsSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";

const css = `
  .urgency-banner {
    background: var(--orange); padding: 10px 0;
    text-align: center; font-family: var(--font-cond);
    font-size: 14px; font-weight: 700;
    letter-spacing: 1px; text-transform: uppercase;
  }
  .urgency-banner a { color: white; text-decoration: underline; margin-left: 12px; }
`;

export default function HomePage({ onNavigate, scrollTarget }) {
  return (
    <>
      <style>{css}</style>
      <div className="urgency-banner">
        🚨 EMERGÊNCIA?
        <a href="tel:+5551985402617">📞 Ligar Agora</a>
      </div>
      <Hero onNavigate={onNavigate} scrollTarget={scrollTarget} />
      <ServicesSection onNavigate={onNavigate} />
      <WhyUs />
      <AreasSection />
      <ContactSection />
    </>
  );
}
