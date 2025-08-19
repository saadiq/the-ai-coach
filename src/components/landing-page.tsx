'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Rocket, Clock3, ArrowRight } from 'lucide-react';

// Add this TypeScript declaration to fix linter errors for window.gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar - Updated to match screenshot styling without sign in/subscribe */}
      <nav className="bg-white py-5 px-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto flex items-center">
          <a href="https://saadiq.xyz" className="text-2xl font-bold text-slate-900 mr-12">Progress Over Perfection</a>
          
          <div className="flex items-center space-x-8">
            <a href="https://saadiq.xyz" className="text-sm font-normal uppercase tracking-wide text-slate-600 hover:text-slate-900 transition-colors">Home</a>
            <a href="https://saadiq.xyz/about/" className="text-sm font-normal uppercase tracking-wide text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <a href="#" className="text-sm font-normal uppercase tracking-wide text-[#FF1A75] hover:text-[#E5156A] transition-colors">AI Transformation</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Updated with a cleaner background */}
      <header className="py-24 px-4 text-center bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-8">
            AI Transformation That Delivers Results
          </h1>
          <p className="text-2xl text-slate-700 mb-12 leading-relaxed">
            From 40-minute manual processes to instant automation. From weeks of development to 3-hour prototypes. 
            From traditional tech stacks to AI-native strategic positioning.
            I help organizations implement AI that creates measurable impact.
          </p>
          <Button 
            className="bg-[#FF1A75] hover:bg-[#E5156A] text-white px-8 py-6 text-lg rounded-md"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'conversion', { send_to: 'G-PQMVFLNMB6' });
              }
              window.open('https://cal.com/saadiq/free-ai-consultation', '_blank');
            }}
          >
            Book Strategic Consultation
          </Button>
        </div>
      </header>

      {/* Value Proposition Section - Adjusted to a more subtle blue */}
      <section className="py-20 px-4 bg-slate-800 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            Strategic AI Implementation for Measurable Business Impact
          </h2>

          <p className="text-xl font-medium mb-6">My transformation approach delivers:</p>
          
          <ul className="space-y-4 text-lg mb-10">
            <li className="flex items-start">
              <ArrowRight className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-[#FF1A75]/60" />
              <span>Process automation that eliminates hours of manual work daily</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-[#FF1A75]/60" />
              <span>Rapid prototyping capabilities - validate ideas in hours, not weeks</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-[#FF1A75]/60" />
              <span>AI visibility optimization to capture emerging market opportunities</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-[#FF1A75]/60" />
              <span>90-day roadmaps with clear milestones and ROI targets</span>
            </li>
          </ul>

          <p className="text-xl leading-relaxed font-medium mb-10">
            Every engagement starts with data, not assumptions. I audit your current state, identify high-impact opportunities, and implement practical solutions.
          </p>

          <div className="text-center">
            <Button 
              className="bg-[#FF1A75] hover:bg-[#E5156A] text-white px-8 py-6 text-lg rounded-md"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'conversion', { send_to: 'G-PQMVFLNMB6' });
                }
                window.open('https://cal.com/saadiq/free-ai-consultation', '_blank');
              }}
            >
              Book Strategic Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Transformation Opportunities Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl font-semibold text-center mb-4 text-slate-900">
            Recent Transformation Results
          </h2>
          <p className="text-xl text-slate-700 text-center mb-12 max-w-4xl mx-auto">
            Real outcomes from strategic AI implementation:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border border-slate-200 shadow-sm">
              <CardContent className="space-y-4">
                <Clock3 className="h-12 w-12 text-[#FF1A75] mb-4" />
                <h3 className="text-xl font-semibold">Enterprise Automation</h3>
                <p className="text-slate-600">
                  Replaced 40-minute manual property searches with intelligent voice agents and automated email triage for a B2B platform.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border border-slate-200 shadow-sm">
              <CardContent className="space-y-4">
                <Rocket className="h-12 w-12 text-[#FF1A75] mb-4" />
                <h3 className="text-xl font-semibold">Development Acceleration</h3>
                <p className="text-slate-600">
                  Enabled a sports tech startup to create functional prototypes in 3 hours versus previous multi-week cycles.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border border-slate-200 shadow-sm">
              <CardContent className="space-y-4">
                <TrendingUp className="h-12 w-12 text-[#FF1A75] mb-4" />
                <h3 className="text-xl font-semibold">AI-Native Strategy</h3>
                <p className="text-slate-600">
                  Advised technology companies on positioning for an AI-first future - from optimizing for LLM discovery to reimagining developer experiences in the age of AI agents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section - Updated to a lighter blue - MOVED HERE FROM ABOVE */}
      <section className="py-16 px-4 bg-[#FF1A75] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            The AI Transformation Opportunity
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">10x</p>
              <p className="text-lg">Typical ROI within 12 months of strategic AI implementation</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">90 days</p>
              <p className="text-lg">From audit to production deployment with clear milestones</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">93%</p>
              <p className="text-lg">Reduction in prototype development time using AI-native tools</p>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section - Updated with actual engagement model */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl font-semibold text-center mb-12 text-slate-900">
            How I Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col border border-slate-200 shadow-sm">
              <CardContent className="space-y-4 flex-1">
                <h3 className="text-xl font-semibold">Discovery Engagement</h3>
                <span className="inline-block py-1 px-2 bg-slate-100 text-slate-700 text-sm rounded mb-2">2 Weeks</span>
                <p className="text-slate-600 mb-4">
                  Comprehensive audit to identify transformation opportunities.
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>• AI visibility analysis</li>
                  <li>• Process mapping</li>
                  <li>• Opportunity identification</li>
                  <li>• Strategic roadmap</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 flex flex-col border border-slate-200 shadow-sm">
              <CardContent className="space-y-4 flex-1">
                <h3 className="text-xl font-semibold">90-Day Transformation</h3>
                <span className="inline-block py-1 px-2 bg-slate-100 text-slate-700 text-sm rounded mb-2">Implementation</span>
                <p className="text-slate-600 mb-4">
                  From audit to production with clear milestones and ROI targets.
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>• Rapid prototyping</li>
                  <li>• Process automation</li>
                  <li>• Team enablement</li>
                  <li>• Measurable outcomes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 flex flex-col border border-slate-200 shadow-sm">
              <CardContent className="space-y-4 flex-1">
                <h3 className="text-xl font-semibold">Strategic Advisory</h3>
                <span className="inline-block py-1 px-2 bg-slate-100 text-slate-700 text-sm rounded mb-2">Ongoing</span>
                <p className="text-slate-600 mb-4">
                  Continuous optimization and scaling of AI capabilities.
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>• Quarterly reviews</li>
                  <li>• Emerging tech guidance</li>
                  <li>• Scaling strategies</li>
                  <li>• ROI optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="bg-[#FF1A75] hover:bg-[#E5156A] text-white px-8 py-6 text-lg rounded-md"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'conversion', { send_to: 'G-PQMVFLNMB6' });
                }
                window.open('https://cal.com/saadiq/free-ai-consultation', '_blank');
              }}
            >
              Book Strategic Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8 text-slate-900">
            About
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Saadiq Rodgers-King is an AI Transformation Consultant based in Brooklyn, NY. 
            With a Computer Science degree from Princeton and MBA from MIT Sloan, he brings 
            both technical depth and strategic insight to every engagement. After 20+ years 
            building products across fintech (Fabric, acquired by Gerber Life), Web3 
            (PROOF Holdings, acquired by Yuga Labs), and enterprise SaaS, Saadiq now focuses 
            on helping organizations navigate AI transformation with practical, measurable approaches.
          </p>
        </div>
      </section>

      {/* Transform Potential Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-slate-900">
            The Gap Is Widening
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Organizations implementing strategic AI are seeing 10x returns within 12 months. 
            Those hesitating are falling behind daily. The difference isn&apos;t access to technology - 
            it&apos;s having the right approach to implementation. I help you bridge that gap with 
            practical, measurable transformation that delivers results.
          </p>
        </div>
      </section>

      {/* CTA Section - Updated to match blog&apos;s blue */}
      <section className="py-16 px-4 bg-[#FF1A75] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl mb-8">
            Let&apos;s discuss your AI transformation opportunity. Book a strategic consultation 
            to explore what&apos;s possible for your organization.
          </p>
          <Button 
            className="bg-slate-800 text-white hover:bg-slate-700 px-8 py-6 text-lg rounded-md"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'conversion', { send_to: 'G-PQMVFLNMB6' });
              }
              window.open('https://cal.com/saadiq/free-ai-consultation', '_blank');
            }}
          >
            Book Strategic Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white text-slate-600 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-bold">Saadiq: Progress Over Perfection © 2025</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://saadiq.xyz" className="text-slate-600 hover:text-[#FF1A75]">Home</a>
              <a href="#" className="text-slate-600 hover:text-[#FF1A75]">AI Transformation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
