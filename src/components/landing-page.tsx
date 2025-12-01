'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const trackConversion = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', { send_to: 'G-PQMVFLNMB6' });
  }
  window.open('https://cal.com/saadiq/free-ai-consultation', '_blank');
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white py-6 border-b border-[#E5E5E5]">
        <div className="swiss-container flex justify-between items-center">
          <a
            href="https://saadiq.xyz"
            className="text-base md:text-lg font-bold text-ink tracking-tight"
          >
            PROGRESS OVER PERFECTION
          </a>

          <div className="flex items-center gap-6 md:gap-8">
            <a
              href="https://saadiq.xyz"
              className="type-label text-muted-text hover:text-ink transition-colors"
            >
              Home
            </a>
            <a
              href="https://saadiq.xyz/about/"
              className="type-label text-muted-text hover:text-ink transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="type-label text-accent"
            >
              AI Transformation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-paper py-24 md:py-32 lg:py-40">
        <div className="swiss-container">
          <div className="swiss-grid items-end">
            <div className="col-span-12 lg:col-span-8 mb-12 lg:mb-0">
              <h1 className="type-hero text-ink">
                AI Transformation<br />
                That Delivers<br />
                <span className="text-accent">Results.</span>
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:pb-4">
              <p className="type-body-lg text-muted-text mb-8 max-w-md">
                From 40-minute manual processes to instant automation.
                From weeks of development to 3-hour prototypes.
              </p>
              <Button
                variant="swiss"
                size="swiss"
                onClick={trackConversion}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Value Proposition - Numbered List */}
      <section className="py-20 md:py-28 bg-white">
        <div className="swiss-container">
          <h2 className="type-section text-ink mb-16">
            Strategic AI<br />Implementation
          </h2>

          <div className="space-y-0">
            {[
              {
                num: '01',
                title: 'Process Automation',
                desc: 'Eliminates hours of manual work daily through intelligent agents and automated workflows.'
              },
              {
                num: '02',
                title: 'Rapid Prototyping',
                desc: 'Validate ideas in hours, not weeks. Transform development cycles with AI-native tools.'
              },
              {
                num: '03',
                title: 'AI Visibility',
                desc: 'Optimize for emerging market opportunities. Position your business for LLM discovery.'
              },
              {
                num: '04',
                title: 'Clear Roadmaps',
                desc: '90-day implementation plans with defined milestones and measurable ROI targets.'
              }
            ].map((item) => (
              <div key={item.num} className="border-t border-[#E5E5E5] py-8 md:py-10">
                <div className="swiss-grid items-start">
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-4xl md:text-5xl font-bold text-accent leading-none">
                      {item.num}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-11">
                    <h3 className="type-subsection text-ink mb-2">{item.title}</h3>
                    <p className="type-body-lg text-muted-text max-w-2xl">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Dark */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="swiss-container">
          <div className="swiss-grid">
            {[
              { value: '10x', label: 'Typical ROI within 12 months of strategic AI implementation', accent: true },
              { value: '90 days', label: 'From audit to production deployment with clear milestones', accent: false },
              { value: '93%', label: 'Reduction in prototype development time using AI-native tools', accent: true }
            ].map((stat, i) => (
              <div key={i} className="col-span-12 md:col-span-4 text-center md:text-left mb-12 md:mb-0">
                <p className={`text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none mb-4 ${stat.accent ? 'text-accent' : 'text-white'}`}>
                  {stat.value}
                </p>
                <div className="w-12 h-px bg-white/30 mb-4 mx-auto md:mx-0" />
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section - Asymmetric Blocks */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="swiss-container">
          <h2 className="type-section text-ink mb-16">
            Recent<br />Transformations
          </h2>

          <div className="swiss-grid">
            {/* First block */}
            <div className="col-span-12 md:col-span-6 mb-8 md:mb-0">
              <div className="bg-white p-8 md:p-12 border border-[#E5E5E5]">
                <p className="type-label text-accent mb-4">Enterprise Automation</p>
                <h3 className="type-subsection text-ink mb-4">40-Minute to Instant</h3>
                <p className="type-body-lg text-muted-text">
                  Replaced manual property searches with intelligent voice agents
                  and automated email triage for a B2B platform.
                </p>
              </div>
            </div>

            {/* Second block - offset */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 md:mt-16">
              <div className="bg-ink p-8 md:p-12 text-white">
                <p className="type-label text-accent mb-4">Development Acceleration</p>
                <h3 className="type-subsection mb-4">Weeks to Hours</h3>
                <p className="type-body-lg text-white/70">
                  Enabled a sports tech startup to create functional prototypes
                  in 3 hours versus previous multi-week cycles.
                </p>
              </div>
            </div>

            {/* Third block */}
            <div className="col-span-12 md:col-span-6 md:col-start-3 mt-8">
              <div className="bg-white p-8 md:p-12 border border-[#E5E5E5]">
                <p className="type-label text-accent mb-4">AI-Native Strategy</p>
                <h3 className="type-subsection text-ink mb-4">Future-Ready Positioning</h3>
                <p className="type-body-lg text-muted-text">
                  Advised technology companies on positioning for an AI-first future —
                  from LLM discovery optimization to reimagining developer experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="swiss-container">
          <h2 className="type-section text-ink mb-16">
            How I Work
          </h2>

          <div className="space-y-0">
            {[
              {
                num: '01',
                title: 'Discovery Engagement',
                duration: '2 Weeks',
                desc: 'Comprehensive audit to identify transformation opportunities. AI visibility analysis, process mapping, opportunity identification, and strategic roadmap.'
              },
              {
                num: '02',
                title: '90-Day Transformation',
                duration: 'Implementation',
                desc: 'From audit to production with clear milestones and ROI targets. Rapid prototyping, process automation, team enablement, and measurable outcomes.'
              },
              {
                num: '03',
                title: 'Strategic Advisory',
                duration: 'Ongoing',
                desc: 'Continuous optimization and scaling of AI capabilities. Quarterly reviews, emerging tech guidance, scaling strategies, and ROI optimization.'
              }
            ].map((item) => (
              <div key={item.num} className="border-t border-[#E5E5E5] py-8 md:py-10">
                <div className="swiss-grid items-start">
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-4xl md:text-5xl font-bold text-accent leading-none">
                      {item.num}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="type-subsection text-ink mb-1">{item.title}</h3>
                    <p className="type-label text-muted-text">{item.duration}</p>
                  </div>
                  <div className="col-span-10 col-start-3 md:col-span-6 md:col-start-auto mt-4 md:mt-0">
                    <p className="type-body-lg text-muted-text">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Button
              variant="swiss"
              size="swiss"
              onClick={trackConversion}
            >
              Book Strategic Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="swiss-container">
          <div className="swiss-grid">
            <div className="col-span-12 md:col-span-2">
              <h2 className="type-label text-muted-text mb-8 md:mb-0">About</h2>
            </div>
            <div className="col-span-12 md:col-span-7">
              <p className="type-body-lg text-ink leading-relaxed">
                <span className="text-5xl md:text-6xl font-bold text-accent float-left mr-4 leading-none">S</span>
                aadiq Rodgers-King is an AI Transformation Consultant based in Brooklyn, NY.
                With a Computer Science degree from Princeton and MBA from MIT Sloan, he brings
                both technical depth and strategic insight to every engagement.
              </p>
              <p className="type-body-lg text-muted-text mt-6">
                After 20+ years building products across consumer internet (Hot Potato, acquired by Facebook),
                fintech (Fabric, acquired by Gerber Life), Web3 (PROOF Holdings, acquired by Yuga Labs),
                and enterprise SaaS, Saadiq now focuses on helping organizations navigate AI transformation
                with practical, measurable approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="swiss-container">
          <div className="swiss-grid items-center">
            <div className="col-span-12 lg:col-span-8 mb-12 lg:mb-0">
              <h2 className="type-section text-white">
                The Gap Is<br />
                <span className="text-accent">Widening.</span>
              </h2>
              <p className="type-body-lg text-white/60 mt-6 max-w-xl">
                Organizations implementing strategic AI are seeing 10x returns within 12 months.
                Those hesitating are falling behind daily.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <Button
                variant="swiss"
                size="swiss"
                className="w-full lg:w-auto"
                onClick={trackConversion}
              >
                Book Strategic Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-[#E5E5E5]">
        <div className="swiss-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-text">
              Saadiq: Progress Over Perfection © 2025
            </p>
            <div className="flex gap-6">
              <a href="https://saadiq.xyz" className="type-label text-muted-text hover:text-ink transition-colors">
                Home
              </a>
              <a href="#" className="type-label text-muted-text hover:text-accent transition-colors">
                AI Transformation
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
