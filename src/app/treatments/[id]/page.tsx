import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

// Treatment Database
const TREATMENT_DETAILS: Record<string, {
  title: string;
  sub: string;
  largeDesc: string;
  img: string;
  alt: string;
  indications: string[];
  duration: string;
  stages: { title: string; desc: string }[];
}> = {
  acupuncture: {
    title: 'Acupuncture Protocol',
    sub: 'Biological Meridian Stimulation & Neural Regulation',
    largeDesc: 'At Sushrutha Nature Cure, our clinical acupuncture sessions leverage ancestral knowledge of biological energy meridians to relieve pain, balance bodily functions, and optimize organ system pathways. By introducing micro-needling protocols at highly precise anatomical points, Dr. Mohan Rao stimulates the nervous system to release natural regulatory agents, reduce localized inflammation, and restore authentic metabolic equilibrium.',
    img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80',
    alt: 'Acupuncture treatment at Sushrutha',
    indications: [
      'Chronic Back, Neck & Joint Pain',
      'Sciatica & Radiating Neuropathy',
      'Migraines & Chronic Tension Headaches',
      'Digestive Imbalances & Acid Reflux',
      'Insomnia & Autonomic Nervous Exhaustion',
      'Allergies & Chronic Sinusitis'
    ],
    duration: '45 - 60 Minutes per session',
    stages: [
      { title: 'Nadi Pariksha Diagnostics', desc: 'A meticulous constitution pulse assessment by Dr. Mohan Rao to diagnose specific meridian blockages and systemic imbalances.' },
      { title: 'Anatomical Meridian Mapping', desc: 'Locating and sanitizing the precise neural trigger points on the hands, legs, or back matching your diagnostic blueprint.' },
      { title: 'Micro-Needle Stimulation', desc: 'Insertion of sterile, ultra-fine, single-use regulatory needles to target active nervous system pathways.' },
      { title: 'Somatic Induction Rest', desc: 'Resting in a tranquil room under soothing natural lighting to allow the nervous system to adapt, integrate, and realign.' }
    ]
  },
  reflexology: {
    title: 'Reflex Zone Activation',
    sub: 'Therapeutic Pressure Point Therapy & Nervous Decompression',
    largeDesc: 'Our advanced foot and hand reflexology treatments are rooted in precise zone therapy protocols. By stimulating specific micro-receptors on the feet and hands that correspond directly to your internal organ systems, this treatment restores physiological function, enhances micro-vascular blood circulation, and induces a deep state of somatic relaxation, melting away deep-seated stress.',
    img: 'https://images.unsplash.com/photo-1519415510236-8559b1985a2b?auto=format&fit=crop&q=80',
    alt: 'Reflexology session at Sushrutha',
    indications: [
      'Systemic Blood Circulation Deficits',
      'Severe Physical Stress & Chronic Fatigue',
      'Digestive sluggishness & Lymphatic Stagnation',
      'Plantar Fasciitis & Chronic Foot Strain',
      'Hormonal Imbalances & Adrenal Overload',
      'Nervous Tension & Anxiety Disorders'
    ],
    duration: '40 - 50 Minutes per session',
    stages: [
      { title: 'Herbal Infusion Soak', desc: 'Immersing the feet and lower limbs in warm, salt-mineralized herbal water to cleanse and soften primary sensory receptors.' },
      { title: 'Sensory Zone Diagnosis', desc: 'Applying gentle diagnostic pressure across the zones to locate points of severe organic congestion or tenderness.' },
      { title: 'Therapeutic Thumb-Walking', desc: 'Applying targeted compression and sweeping strokes using traditional tools to release congested pathways.' },
      { title: 'Restorative Warm Wrap', desc: 'Wrapping the extremities in heated organic linen to stimulate blood perfusion and lock in neural relaxation.' }
    ]
  },
  moxa: {
    title: 'Thermal Moxibustion',
    sub: 'Thermotherapy with Aged Mugwort & Meridian Warmth',
    largeDesc: 'Thermal Moxibustion is an ancient heat therapy that uses burning aged organic Mugwort wool (Moxa) held near specific meridian pathways. This slow-burning somatic thermal technique generates deep infrared penetrative heat that warms cold constitution channels, dispels systemic blood stagnation, improves lymphatic circulation, and activates robust natural immune responses.',
    img: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80',
    alt: 'Thermal Moxa treatment at Sushrutha',
    indications: [
      'Osteoarthritis & Severe Joint Stiffness',
      'Cold Digestion & Sluggish Metabolism',
      'Chronic Low Back Ache & Muscle Weakness',
      'Menstrual Spasms & Dysmenorrhea',
      'Chronic Winter Congestion & Weak Bronchial Defenses',
      'Low Biological Energy & General Exhaustion'
    ],
    duration: '30 - 45 Minutes per session',
    stages: [
      { title: 'Thermal Point Selection', desc: 'Selecting core points (such as the lower back or abdomen) that require active thermal energy and restoration.' },
      { title: 'Moxa Heat Induction', desc: 'Suspending or sliding slow-burning moxa rolls above target spots to allow therapeutic heat to penetrate deep into soft tissues.' },
      { title: 'Herb Oil Infusion', desc: 'Gently massaging the heated pores with warm, cold-pressed sesame oil to amplify herbal absorption.' },
      { title: 'Systemic Heat Integration', desc: 'Resting under warm thermal organic sheets to stabilize metabolic temperatures.' }
    ]
  },
  cupping: {
    title: 'Decompression Hijama & Cupping',
    sub: 'Vacuum Therapy, Deep Fascial Decompression & Detoxification',
    largeDesc: 'A powerful combination of traditional wet (Hijama) and dry cupping. Utilizing specialized biological glass and silicone cups, this therapy creates a localized vacuum suction on the skin\'s surface. This decompression acts to release deep myofascial tightness, draw stale toxic fluids out of soft tissues, and flush clean, oxygen-rich blood into targeted healing areas.',
    img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80',
    alt: 'Cupping Hijama treatment at Sushrutha',
    indications: [
      'Chronic Muscle Strains, Tension & Knots',
      'Blood Impurities & Environmental Stagnant Toxins',
      'Congested Lymphatic Drainage & Swelling',
      'Myofascial Pain Syndromes & Post-workout Recovery',
      'Athletic Muscle Recovery & Flexibility Restraints',
      'Lethargy & Slow Biological Regeneration'
    ],
    duration: '45 - 60 Minutes per session',
    stages: [
      { title: 'Aseptic Preparation', desc: 'Carefully cleansing and sterilizing the target dermal areas using natural antiseptic extracts.' },
      { title: 'Vacuum Suction Placement', desc: 'Applying vacuum cups to create gentle decompression, stretching tight muscle fascial layers.' },
      { title: 'Hijama Extraction (Wet Option)', desc: 'Administering micro-punctures to release stagnant toxic blood from congested areas safely and painlessly.' },
      { title: 'Turmeric-Sesame Dressing', desc: 'Applying a soothing organic sesame and raw turmeric balm to promote skin cell healing and calm receptors.' }
    ]
  },
  spine: {
    title: 'Spine Alignment & Adjustments',
    sub: 'Ancestral Bone Setting, Postural Restructuring & Nerve Decompression',
    largeDesc: 'Our signature spine setting treatment blends ancestral bone setting maneuvers with somatic alignment practices. Dr. Mohan Rao gently corrects structural subluxations, realigns the spinal column, and releases tension around the central nervous system. This immediately relieves pinched nerve roots, aligns postural gravity centers, and restores long-term mobility.',
    img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80',
    alt: 'Spine setting and postural adjustment at Sushrutha',
    indications: [
      'Herniated or Pinched Nerve Roots',
      'Postural Degeneration & Curvature Deficits',
      'Sciatic Back, Hip & Leg Radiations',
      'Chronic Neck Stiffness & Cervical Strain',
      'Workstation Slouching & Rounded Shoulders',
      'Chronic Lower Back Instability'
    ],
    duration: '35 - 50 Minutes per session',
    stages: [
      { title: 'Postural Curvature Assessment', desc: 'A thorough visual and palpation analysis of spinal alignments, pelvic levels, and shoulder symmetry.' },
      { title: 'Myofascial Softening Massage', desc: 'Applying warm organic herbal oils to relax and loosen stiff spinal muscles and ligaments.' },
      { title: 'Ancestral Spine Correction', desc: 'Gentle, structured structural alignment locks to release trapped nerve channels and realign spinal columns.' },
      { title: 'Neuromuscular Memory Resting', desc: 'Lying completely flat in a relaxed somatic posture to allow back muscles to memorize the aligned position.' }
    ]
  }
};

type Params = Promise<{ id: string }>;

export default async function TreatmentPage({ params }: { params: Params }) {
  const { id } = await params;
  const data = TREATMENT_DETAILS[id];

  if (!data) {
    notFound();
  }

  // Get other treatments to suggest
  const otherTreatments = Object.entries(TREATMENT_DETAILS)
    .filter(([key]) => key !== id)
    .map(([key, item]) => ({ id: key, ...item }));

  return (
    <main style={{ background: 'var(--color-background)', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* ── BREADCRUMB HEADER ──────────────────────── */}
      <section
        style={{
          width: '100%',
          padding: '12rem 5% 4rem',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '2.5rem' }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'var(--color-on-surface-variant)', fontSize: '13px', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Home</Link>
            <span style={{ color: 'var(--color-outline)', fontSize: '12px' }}>/</span>
            <Link href="/treatments" style={{ textDecoration: 'none', color: 'var(--color-on-surface-variant)', fontSize: '13px', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Treatments</Link>
            <span style={{ color: 'var(--color-outline)', fontSize: '12px' }}>/</span>
            <span style={{ color: 'var(--color-secondary)', fontSize: '13px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{data.title}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }} className="meet-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <span 
                style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '11px', 
                  fontWeight: 700, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.15em', 
                  color: 'var(--color-secondary)',
                  background: 'var(--color-secondary-container)',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  alignSelf: 'flex-start'
                }}
              >
                {data.sub}
              </span>
              <h1 
                style={{ 
                  fontFamily: 'var(--font-garamond)', 
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                  fontWeight: 400, 
                  color: 'var(--color-primary)', 
                  margin: 0,
                  lineHeight: 1.1 
                }}
              >
                {data.title}
              </h1>
              <p 
                style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '17px', 
                  color: 'var(--color-on-surface-variant)', 
                  lineHeight: '1.8',
                  margin: 0 
                }}
              >
                {data.largeDesc}
              </p>
            </div>

            {/* Asymmetric Vault Dome Image Container */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: '100%',
                  maxWidth: '420px',
                  aspectRatio: '1/1.25',
                  borderRadius: '260px 260px 40px 40px', // Vaulted Dome
                  overflow: 'hidden',
                  border: '1.5px solid rgba(17, 36, 28, 0.05)',
                  boxShadow: '0 25px 50px rgba(17, 36, 28, 0.04)',
                }}
              >
                <img
                  src={data.img}
                  alt={data.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DETAIL SECTION ────────────────────────── */}
      <section
        style={{
          width: '100%',
          padding: '8rem 5%',
          background: 'var(--color-primary-container)',
          borderTopLeftRadius: '3.5rem',
          borderTopRightRadius: '3.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          color: 'var(--color-on-primary)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '6rem' }} className="meet-grid">
            
            {/* Left: Step-by-Step Clinical Protocol */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-primary-fixed)' }}>The Protocol</span>
                <h2 style={{ fontFamily: 'var(--font-garamond)', fontSize: '2.5rem', fontWeight: 500, color: '#ffffff', margin: 0 }}>
                  Clinical <span className="italic" style={{ color: 'var(--color-secondary)' }}>Workflow.</span>
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'rgba(255,255,255,0.7)', margin: 0, marginTop: '0.5rem' }}>
                  What to expect during a specialized clinical treatment session at our Kakinada sanctuary.
                </p>
              </div>

              {/* Protocol timeline stages */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {data.stages.map((stage, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'var(--color-secondary)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '14px',
                        flexShrink: 0,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-garamond)', fontSize: '1.5rem', fontWeight: 500, color: '#ffffff', margin: 0 }}>{stage.title}</h3>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14.5px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: 0 }}>{stage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Primary Indications Sticky Card */}
            <div>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '2.5rem',
                  padding: '3.5rem 3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  position: 'sticky',
                  top: '120px',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-secondary)' }}>Clinical Benefits</span>
                  <h3 style={{ fontFamily: 'var(--font-garamond)', fontSize: '2rem', fontWeight: 500, color: '#ffffff', margin: 0 }}>Primary Indications</h3>
                </div>

                <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {data.indications.map((ind, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <span className="material-icons" style={{ color: 'var(--color-secondary)', fontSize: '18px' }}>check_circle_outline</span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)' }}>{ind}</span>
                    </div>
                  ))}
                </div>

                <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span className="material-icons" style={{ color: 'var(--color-primary-fixed)', fontSize: '20px' }}>schedule</span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 700, letterSpacing: '0.05em' }}>Duration</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14.5px', color: '#ffffff', fontWeight: 500 }}>{data.duration}</span>
                  </div>
                </div>

                <Link
                  href="/consultation"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textAlign: 'center',
                    background: 'var(--color-secondary)',
                    color: 'var(--color-primary)',
                    padding: '16px',
                    borderRadius: '100px',
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                  }}
                  className="hover:opacity-95"
                >
                  Schedule Treatment
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── EXPLORE OTHER TREATMENTS ──────────────── */}
      <section
        style={{
          width: '100%',
          padding: '8rem 5% 10rem',
          background: 'var(--color-surface-container)',
          borderTop: '1.5px solid rgba(17, 36, 28, 0.05)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }} className="catalog-header">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-secondary)' }}>More Offerings</span>
              <h2 style={{ fontFamily: 'var(--font-garamond)', fontSize: '2.75rem', fontWeight: 500, color: 'var(--color-primary)', margin: 0 }}>
                Explore Other <span className="italic" style={{ color: 'var(--color-secondary)' }}>Treatments.</span>
              </h2>
            </div>
            <Link
              href="/treatments"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--color-primary)',
                textDecoration: 'none',
                borderBottom: '1.5px solid var(--color-secondary)',
                paddingBottom: '4px',
                transition: 'opacity 0.3s ease'
              }}
              className="hover:opacity-80"
            >
              View Full Menu
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="treatments-grid">
            {otherTreatments.slice(0, 4).map((t) => (
              <Link
                key={t.id}
                href={`/treatments/${t.id}`}
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--color-background)',
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(17, 36, 28, 0.04)',
                  boxShadow: '0 8px 24px rgba(17, 36, 28, 0.02)',
                  transition: 'transform 0.4s ease, border-color 0.4s ease',
                }}
                className="hover:-translate-y-1 hover:border-[rgba(17,36,28,0.1)]"
              >
                <div style={{ width: '100%', aspectRatio: '1.2/1', overflow: 'hidden' }}>
                  <img src={t.img} alt={t.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-secondary)' }}>{t.sub}</span>
                  <h3 style={{ fontFamily: 'var(--font-garamond)', fontSize: '1.4rem', fontWeight: 500, color: 'var(--color-primary)', margin: 0, lineHeight: 1.2 }}>{t.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
