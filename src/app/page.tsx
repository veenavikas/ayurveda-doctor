import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import OfferingsGrid from '@/components/OfferingsGrid';
import Footer from '@/components/Footer';
import FaqItem from '@/components/FaqItem';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Sushrutha Nature Cure | Ancestral Wisdom. Modern Equilibrium.',
  description:
    'A peaceful Ayurvedic somatic healing sanctuary rooted in ancestral wisdom and nature cure. Restoring biological equilibrium through touch, breath, and presence.',
};

export default function HomePage() {
  return (
    <main style={{ background: 'var(--color-background)', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* ── 1. HERO SECTION ──────────────────────── */}
      <HeroSection />

      {/* ── 2. ABOUT & PRACTICES SECTION ─────────── */}
      <section 
        id="about"
        style={{ 
          padding: '8rem 5%', 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '5rem'
        }}
      >
        {/* Intro Copy */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'flex-start' }} className="about-intro-grid">
          <span 
            style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: '12px', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              color: 'var(--color-secondary)' 
            }}
          >
            About the practice
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 
              style={{ 
                fontFamily: 'var(--font-garamond)', 
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                fontWeight: 500, 
                color: 'var(--color-primary)',
                lineHeight: 1.2,
                margin: 0
              }}
            >
              There’s nothing you need to prepare. In your first session, we’ll start gently — softening the body, calming the breath, and arriving in presence together.
            </h2>
          </div>
        </div>

        {/* Practices Cards Grid (OfferingsGrid) */}
        <OfferingsGrid />

        {/* Benefits Breakdown List */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1.2fr', 
            gap: '4rem', 
            alignItems: 'center',
            marginTop: '2rem'
          }} 
          className="about-benefits-grid"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span 
              style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '11px', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                letterSpacing: '0.15em', 
                color: 'var(--color-secondary)' 
              }}
            >
              What to expect
            </span>
            <h3 
              style={{ 
                fontFamily: 'var(--font-garamond)', 
                fontSize: '2.5rem', 
                fontWeight: 400, 
                color: 'var(--color-primary)',
                margin: 0
              }}
            >
              Healing outcomes
            </h3>
          </div>

          {/* checklist column */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.5rem' 
            }}
          >
            {[
              'Deep nervous system relaxation',
              'Relief from tension & stress',
              'A sense of biological clarity',
              'More emotional spaciousness',
              'Greater connection to your body',
              'Release of chronic physical patterns'
            ].map((benefit) => (
              <div key={benefit} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="material-icons" style={{ color: 'var(--color-secondary)', fontSize: '18px' }}>
                  check_circle_outline
                </span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--color-on-surface-variant)' }}>
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MEET DR. MOHAN RAO SECTION ────────────── */}
      <section
        style={{
          background: 'var(--color-primary-container)',
          color: 'var(--color-on-primary)',
          padding: '10rem 5%',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'center',
          }}
          className="meet-grid"
        >
          {/* Circular Cropped Photo */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '1/1',
                borderRadius: '50%', // Circle Crop
                overflow: 'hidden',
                border: '4px solid rgba(226, 214, 197, 0.15)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
                alt="Dr. Mohan Rao, Ayurvedic doctor and somatic guide"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Guide Biography & Quote */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: 'var(--color-primary-fixed)',
                }}
              >
                Your guide
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: '3rem',
                  fontWeight: 500,
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                Meet Dr. Mohan Rao
              </h2>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.8)',
                margin: 0,
              }}
            >
              Hi, I’m Dr. Mohan Rao — a somatic Ayurvedic practitioner and bodyworker dedicated to creating gentle spaces for transformation. My work blends deep pulse reading (Nadi Pariksha), intuitive warm oil touch, and the healing presence of nature cure.
            </p>

            <blockquote
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: '1.75rem',
                fontStyle: 'italic',
                color: 'var(--color-primary-fixed)',
                lineHeight: 1.4,
                borderLeft: '2.5px solid var(--color-primary-fixed)',
                paddingLeft: '1.5rem',
                margin: 0,
              }}
            >
              "Each session is an invitation to return. <br />
              To yourself, to your breath, to what's real underneath it all."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── 4. HOW WE WORK TOGETHER (PROCESS) ────── */}
      <section
        style={{
          padding: '8rem 5%',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '4rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-secondary)',
            }}
          >
            How we'll work together
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-garamond)',
              fontSize: '3rem',
              fontWeight: 500,
              color: 'var(--color-primary)',
              margin: 0,
            }}
          >
            From intention to healing
          </h2>
        </div>

        {/* Process Steps Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
          }}
        >
          {[
            {
              num: '1',
              title: 'Discovery Call',
              desc: 'A short 15-minute conversation to get to know each other, feel into the connection, and see if this somatic experience is the right fit for your body.',
            },
            {
              num: '2',
              title: 'Prakriti Guidance',
              desc: 'Before your retreat or treatment, we will perform a constitution analysis. You’ll receive simple dietary guidelines to help you prepare your system.',
            },
            {
              num: '3',
              title: 'The Session',
              desc: 'Held in a peaceful nature sanctuary, each session blends warm oil touch, breathwork, and deep alignment, guided by your body’s unique rhythm.',
            },
            {
              num: '4',
              title: 'Integration',
              desc: 'After your session, you will rest with quiet herbal tea. We stay in touch to integrate clean home routines, letting the healing settle in your system.',
            },
          ].map((step) => (
            <div
              key={step.num}
              style={{
                background: 'var(--color-surface-container-low)',
                border: '1px solid rgba(17, 36, 28, 0.05)',
                borderRadius: '2rem',
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                boxShadow: '0 4px 20px rgba(17, 36, 28, 0.01)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: '2.5rem',
                  fontWeight: 500,
                  color: 'var(--color-secondary)',
                  opacity: 0.6,
                }}
              >
                {step.num}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-garamond)',
                  fontSize: '1.75rem',
                  fontWeight: 500,
                  color: 'var(--color-primary)',
                  margin: 0,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14.5px',
                  lineHeight: 1.7,
                  color: 'var(--color-on-surface-variant)',
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. THE SPACE SECTION ─────────────────── */}
      <section
        style={{
          background: 'var(--color-surface-container)',
          borderTop: '1px solid rgba(17, 36, 28, 0.06)',
          borderBottom: '1px solid rgba(17, 36, 28, 0.06)',
          padding: '8rem 5%',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'center',
          }}
          className="space-grid"
        >
          {/* Space copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--color-secondary)',
              }}
            >
              The Space
            </span>
            
            <h2
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: '3rem',
                fontWeight: 500,
                color: 'var(--color-primary)',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Deep in nature
            </h2>
            
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                lineHeight: 1.8,
                color: 'var(--color-on-surface-variant)',
                margin: 0,
              }}
            >
              Nestled in the quiet, wooded outskirts near Kakinada, our nature sanctuary is surrounded by lush trees, biological silence, and therapeutic simplicity. The space is warm and grounding — meticulously designed to support nervous system rest and deep biological alignment through organic care. Whether you’re here for a private healing session or staying for standard daily treatment, the natural stillness invites you fully back to yourself.
            </p>

            <Link
              href="/about"
              className="location-hover-link"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--color-secondary)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '0.5rem',
                borderBottom: '1px solid rgba(139, 90, 43, 0.3)',
                paddingBottom: '4px',
                transition: 'gap 0.3s ease',
              }}
            >
              See the location <span className="material-icons" style={{ fontSize: '16px' }}>arrow_forward</span>
            </Link>

            {/* Checklist tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
              {[
                'No disruptions',
                'Surrounded by woods',
                'Total privacy',
                '32 min from the city',
                'Biological silence',
              ].map((highlight) => (
                <span
                  key={highlight}
                  style={{
                    background: 'var(--color-background)',
                    border: '1px solid rgba(17, 36, 28, 0.06)',
                    borderRadius: '100px',
                    padding: '6px 14px',
                    fontSize: '13px',
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-primary)',
                  }}
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Simple Image Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div
              style={{
                borderRadius: '2rem',
                overflow: 'hidden',
                aspectRatio: '0.75/1',
                boxShadow: '0 15px 35px rgba(17, 36, 28, 0.05)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1519415510236-8559b1985a2b?auto=format&fit=crop&q=80"
                alt="Therapy space interior with wooden elements"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div
              style={{
                borderRadius: '2rem',
                overflow: 'hidden',
                aspectRatio: '0.75/1',
                marginTop: '3rem',
                boxShadow: '0 15px 35px rgba(17, 36, 28, 0.05)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
                alt="Nature herbs treatment bath"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PACKAGES & PRICING SECTION ───────── */}
      <section
        style={{
          padding: '10rem 5% 8rem',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '5rem',
        }}
      >
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-secondary)',
            }}
          >
            Pricing
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-garamond)',
              fontSize: '3.5rem',
              fontWeight: 500,
              color: 'var(--color-primary)',
              margin: 0,
            }}
          >
            Packages & Pricing
          </h2>
        </div>

        {/* Pricing Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Card 1: Core Session */}
          <div
            style={{
              background: 'var(--color-surface-container)',
              border: '1.5px solid rgba(17, 36, 28, 0.05)',
              borderRadius: '2.5rem',
              padding: '4rem 3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '3rem',
              boxShadow: '0 8px 30px rgba(17, 36, 28, 0.02)',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-garamond)', fontSize: '2rem', fontWeight: 500, color: 'var(--color-primary)', margin: 0 }}>
                  Core Session
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>
                  A gentle one-day healing experience in nature
                </p>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(17, 36, 28, 0.08)' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary)' }}>
                  What's included:
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {['Prakriti assessment by email', '120 min customized therapy', 'Silent organic tea & reflection', 'Integration post support'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>
                      <span className="material-icons" style={{ fontSize: '16px', color: 'var(--color-secondary)' }}>done</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span style={{ fontFamily: 'var(--font-garamond)', fontSize: '3rem', fontWeight: 500, color: 'var(--color-primary)' }}>$220</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>/ session</span>
              </div>
              <Link
                href="/consultation"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 600,
                  textAlign: 'center',
                  background: 'var(--color-background)',
                  border: '1.5px solid rgba(17, 36, 28, 0.08)',
                  color: 'var(--color-primary)',
                  padding: '14px 0',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                className="btn-hover-dark"
              >
                Book Core Session
              </Link>
            </div>
          </div>

          {/* Card 2: Overnight Sanctuary - Popular */}
          <div
            style={{
              background: 'var(--color-surface-container)',
              border: '2px solid var(--color-secondary)',
              borderRadius: '2.5rem',
              padding: '4rem 3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '3rem',
              boxShadow: '0 15px 40px rgba(139, 90, 43, 0.08)',
              position: 'relative',
            }}
          >
            {/* POPULAR BADGE */}
            <span
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'var(--color-secondary)',
                color: 'var(--color-on-primary)',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                padding: '4px 12px',
                borderRadius: '100px',
              }}
            >
              Popular
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-garamond)', fontSize: '2rem', fontWeight: 500, color: 'var(--color-primary)', margin: 0 }}>
                  Overnight Sanctuary
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>
                  Arrive in the morning, receive deep healing, and stay overnight to let it land fully.
                </p>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(17, 36, 28, 0.08)' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary)' }}>
                  What's included:
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {['Everything from core package', 'Private overnight cabin stay', 'Organic customized dinner & breakfast', 'Morning dinacharya practice'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>
                      <span className="material-icons" style={{ fontSize: '16px', color: 'var(--color-secondary)' }}>done</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span style={{ fontFamily: 'var(--font-garamond)', fontSize: '3rem', fontWeight: 500, color: 'var(--color-primary)' }}>$480</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>/ stay</span>
              </div>
              <Link
                href="/consultation"
                className="btn-hover-gold"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 600,
                  textAlign: 'center',
                  background: 'var(--color-primary)',
                  color: 'var(--color-on-primary)',
                  padding: '14px 0',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(17, 36, 28, 0.15)',
                }}
              >
                Book Overnight Sanctuary
              </Link>
            </div>
          </div>

          {/* Card 3: Deep Retreat */}
          <div
            style={{
              background: 'var(--color-surface-container)',
              border: '1.5px solid rgba(17, 36, 28, 0.05)',
              borderRadius: '2.5rem',
              padding: '4rem 3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '3rem',
              boxShadow: '0 8px 30px rgba(17, 36, 28, 0.02)',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-garamond)', fontSize: '2rem', fontWeight: 500, color: 'var(--color-primary)', margin: 0 }}>
                  Deep Retreat
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>
                  A 2–5 day solo or small-group nature retreat to soften, reset, and reconnect fully.
                </p>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(17, 36, 28, 0.08)' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary)' }}>
                  What's included:
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {['Daily customized physical treatments', 'Somatic rituals & silent walks', 'All organic dosha-specific meals', 'Pre + post integration coaching'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>
                      <span className="material-icons" style={{ fontSize: '16px', color: 'var(--color-secondary)' }}>done</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span style={{ fontFamily: 'var(--font-garamond)', fontSize: '2.5rem', fontWeight: 500, color: 'var(--color-primary)' }}>Custom</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>/ schedule</span>
              </div>
              <Link
                href="/consultation"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 600,
                  textAlign: 'center',
                  background: 'var(--color-background)',
                  border: '1.5px solid rgba(17, 36, 28, 0.08)',
                  color: 'var(--color-primary)',
                  padding: '14px 0',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                className="btn-hover-dark"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>

        {/* Free Consultation Call Notice */}
        <div
          style={{
            background: 'var(--color-surface-container-lowest)',
            border: '1px solid rgba(17, 36, 28, 0.05)',
            borderRadius: '2rem',
            padding: '2.5rem 3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            marginTop: '2rem',
          }}
          className="pricing-consult-card"
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              color: 'var(--color-on-surface-variant)',
              maxWidth: '620px',
              margin: 0,
            }}
          >
            If you are unsure which suits you best, book a free 15-minute consultation call with me. I’ll walk you through all your questions and check dates.
          </p>
          <Link
            href="/consultation"
            className="btn-hover-gold"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--color-on-primary)',
              background: 'var(--color-primary)',
              padding: '14px 28px',
              borderRadius: '100px',
              textDecoration: 'none',
              transition: 'background 0.3s ease',
            }}
          >
            Book a 15-minute call
          </Link>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS SECTION ──────────────── */}
      <section
        style={{
          background: 'var(--color-primary-container)',
          color: 'var(--color-on-primary)',
          padding: '8rem 5%',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '5rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--color-primary-fixed)',
              }}
            >
              Testimonials
            </span>
            <h2 style={{ fontFamily: 'var(--font-garamond)', fontSize: '3rem', fontWeight: 500, margin: 0 }}>
              What Clients Are Saying
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>
              Real words from people who experienced deep rest, clarity, and renewal.
            </p>
          </div>

          {/* Testimonial Cards Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {[
              {
                text: '“Every part of the retreat felt intentional — from the silence to the tea. It gave me space to breathe, release physical tension, and reset.”',
                author: 'Sophia Lee',
              },
              {
                text: '“It wasn’t just a treatment. It was a complete return — to nature, to organic stillness, to myself. I’m carrying that grounded feeling with me.”',
                author: 'Olivia S.',
              },
              {
                text: '“I didn’t expect something so simple to feel so powerful. The bone setting and warm oil massage helped me pause and truly reconnect.”',
                author: 'David R.',
              },
              {
                text: '“It felt like time completely slowed down. I left feeling lighter, clearer, and deeply in touch with my body and what matters.”',
                author: 'Mona S.',
              },
            ].map((review, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '2rem',
                  padding: '3rem 2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '2.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: '1.4rem',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                    color: 'rgba(255, 255, 255, 0.9)',
                    margin: 0,
                  }}
                >
                  {review.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="material-icons" style={{ color: 'var(--color-primary-fixed)', fontSize: '16px' }}>spa</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>
                    {review.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. NATURE CURE JOURNALS (BLOG SECTION) ──────── */}
      <section
        style={{
          padding: '8rem 5%',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '4rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-secondary)',
            }}
          >
            our blog
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-garamond)',
              fontSize: '3rem',
              fontWeight: 500,
              color: 'var(--color-primary)',
              margin: 0,
            }}
          >
            Nature Cure Journals
          </h2>
        </div>

        {/* Blog Post cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {[
            {
              title: 'Awakening the Senses',
              desc: 'A quiet walk through morning light. Nature breathing with you - slow, soft, alive.',
              img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop',
            },
            {
              title: 'Hands and presence',
              desc: 'Inside a somatic healing session: soft oil touch, and the psychological safety to feel what’s ready to unfold.',
              img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop',
            },
            {
              title: 'Silence Under Starlight',
              desc: 'How nature shifts under starlight and what it teaches our nervous systems about silence.',
              img: 'https://images.unsplash.com/photo-1519415510236-8559b1985a2b?auto=format&fit=crop&q=80',
            },
          ].map((post, i) => (
            <div
              key={i}
              style={{
                background: 'var(--color-surface-container)',
                border: '1.5px solid rgba(17, 36, 28, 0.05)',
                borderRadius: '2rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 8px 24px rgba(17, 36, 28, 0.01)',
              }}
            >
              {/* Image dome clip top */}
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <img
                  src={post.img}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Text context padding */}
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', flexGrow: 1, justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-garamond)',
                      fontSize: '1.75rem',
                      fontWeight: 500,
                      color: 'var(--color-primary)',
                      margin: 0,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14.5px',
                      lineHeight: 1.6,
                      color: 'var(--color-on-surface-variant)',
                      margin: 0,
                    }}
                  >
                    {post.desc}
                  </p>
                </div>

                <Link
                  href="/philosophy"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-secondary)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    borderBottom: '1px solid rgba(139, 90, 43, 0.2)',
                    paddingBottom: '2px',
                    alignSelf: 'flex-start',
                  }}
                >
                  Read story
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 9. FAQS ACCORDION SECTION ────────────── */}
      <section
        style={{
          background: 'var(--color-surface-container)',
          borderTop: '1px solid rgba(17, 36, 28, 0.06)',
          padding: '8rem 5%',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem',
          }}
        >
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--color-secondary)',
              }}
            >
              FAQ
            </span>
            <h2 style={{ fontFamily: 'var(--font-garamond)', fontSize: '3rem', fontWeight: 500, color: 'var(--color-primary)', margin: 0 }}>
              Still wondering something?
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--color-on-surface-variant)', margin: 0 }}>
              Just <Link href="/consultation" style={{ color: 'var(--color-secondary)', textDecoration: 'none', fontWeight: 600 }}>message us</Link> — we’re always happy to help!
            </p>
          </div>

          {/* Accordion List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              {
                q: 'What should I bring?',
                a: 'We suggest comfortable loose-fitting clothing, comfortable walking shoes for our outdoor elements, and an open heart. All towels, herbal robes, organic linens, and treatments are provided by our sanctuary.',
              },
              {
                q: 'Can I stay for multiple days?',
                a: 'Yes, our Deep Retreat package supports private sanctuary stays ranging from 2 to 5 days. We fully customize your therapies, dietary requirements, and biological consultations daily for an immersive reset.',
              },
              {
                q: 'What is your cancellation policy?',
                a: 'We request 48 hours notice for any session cancellation to allow us to offer the opening to other patients on our waitlist. Cancellations made within 48 hours are subject to a nominal fee.',
              },
              {
                q: 'Do you accommodate dietary restrictions?',
                a: 'Absolutely. All meals are prepared organically on-site in alignment with your personal Ayurvedic constitution assessment (Prakriti / Doshas) and dietary needs.',
              },
            ].map((faq, idx) => (
              <FaqItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────── */}
      <Footer />

      <style>{`
        .btn-hover-dark:hover {
          background: var(--color-primary) !important;
          color: var(--color-on-primary) !important;
          border-color: var(--color-primary) !important;
        }
        .btn-hover-gold:hover {
          background: var(--color-secondary) !important;
        }
        .location-hover-link:hover {
          gap: 12px !important;
        }
        @media (max-width: 900px) {
          .about-intro-grid, .about-benefits-grid, .meet-grid, .space-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .meet-grid {
            direction: rtl; /* Puts photo on top on mobile */
          }
          .meet-grid > div {
            direction: ltr; /* Keeps text writing normal */
          }
          .pricing-consult-card {
            padding: 2rem !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </main>
  );
}
