'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, TrendingUp, Brain, Users, Rocket, Clock3, ArrowRight } from 'lucide-react';

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
      <nav className="bg-white py-4 px-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto flex items-center">
          <a href="https://saadiq.xyz" className="text-xl font-bold text-slate-900 mr-8">Saadiq: Progress Over Perfection</a>
          
          <div className="flex items-center space-x-6">
            <a href="https://saadiq.xyz" className="uppercase text-sm font-medium text-slate-700 hover:text-slate-900">Home</a>
            <a href="https://saadiq.xyz/about/" className="uppercase text-sm font-medium text-slate-700 hover:text-slate-900">About</a>
            <a href="#" className="uppercase text-sm font-medium text-pink-500 hover:text-pink-600">AI Coach</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Updated with a cleaner background */}
      <header className="py-24 px-4 text-center bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-8">
            Harness AI to Lead the Future
          </h1>
          <p className="text-2xl text-slate-700 mb-12 leading-relaxed">
            Future-Proof Your Career and Company: Master AI and Stay Ahead of the Curve
          </p>
          <Button 
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg rounded-md"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'conversion', { send_to: 'G-PQMVFLNMB6' });
              }
              window.open('https://cal.com/saadiq/free-ai-consultation', '_blank');
            }}
          >
            Book Your Free Intro Session
          </Button>
        </div>
      </header>

      {/* Value Proposition Section - Adjusted to a more subtle blue */}
      <section className="py-20 px-4 bg-slate-800 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            <span className="text-pink-400">For Organizations:</span> Partner with an AI expert who understands your organizational challenges and opportunities.
          </h2>

          <p className="text-xl font-medium mb-6">By working together, you will gain:</p>
          
          <ul className="space-y-4 text-lg mb-10">
            <li className="flex items-start">
              <ArrowRight className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-pink-400" />
              <span>A competitive edge through strategic AI implementation, eliminating costly trial and error</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-pink-400" />
              <span>Custom workflows that enhance productivity across your entire organization</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-pink-400" />
              <span>A trusted advisor who keeps your team ahead of AI developments</span>
            </li>
          </ul>

          <p className="text-xl leading-relaxed font-medium mb-10">
            Don&apos;t just adapt to the future - position your company at the forefront of innovation.
          </p>

          <div className="text-center">
            <Button 
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg rounded-md"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'conversion', { send_to: 'G-PQMVFLNMB6' });
                }
                window.open('https://cal.com/saadiq/free-ai-consultation', '_blank');
              }}
            >
              Schedule a Company Strategy Session
            </Button>
          </div>
        </div>
      </section>

      {/* Common Concerns Section - Updated with cleaner styling */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl font-semibold text-center mb-4 text-slate-900">
            Common Concerns About AI
          </h2>
          <p className="text-xl text-slate-700 text-center mb-12 max-w-4xl mx-auto">
            Whether you&apos;re a professional or an organization leader, you&apos;re not alone in your concerns:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border border-slate-200 shadow-sm">
              <CardContent className="space-y-4">
                <ShieldCheck className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold">Job Security</h3>
                <span className="inline-block py-1 px-2 bg-slate-100 text-slate-700 text-sm rounded mb-2">For Professionals</span>
                <p className="text-slate-600">
                  69% of professionals worry about AI replacement. My coaching helps you become 
                  irreplaceable by mastering AI as a tool for enhancement, not replacement.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border border-slate-200 shadow-sm">
              <CardContent className="space-y-4">
                <TrendingUp className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold">Rapid Change</h3>
                <span className="inline-block py-1 px-2 bg-slate-100 text-slate-700 text-sm rounded mb-2">For Everyone</span>
                <p className="text-slate-600">
                  93% of professionals are concerned about keeping pace with AI developments. 
                  I help you stay current without overwhelming your schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border border-slate-200 shadow-sm">
              <CardContent className="space-y-4">
                <Brain className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold">Skills Gap</h3>
                <span className="inline-block py-1 px-2 bg-slate-100 text-slate-700 text-sm rounded mb-2">For Organizations</span>
                <p className="text-slate-600">
                  Only 12% of professionals have significant AI experience. My coaching bridges 
                  this gap with practical, role-specific guidance for your team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section - Updated to a lighter blue - MOVED HERE FROM ABOVE */}
      <section className="py-16 px-4 bg-pink-500 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            The AI Revolution Is Here
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">74%</p>
              <p className="text-lg">of professionals worry AI will make their skills obsolete</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">30%</p>
              <p className="text-lg">of work hours could be enhanced by AI by 2030</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">96%</p>
              <p className="text-lg">of professionals are prioritizing AI skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Bootcamps Value Proposition Section */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-slate-900">
            <span className="text-pink-500">For Organizations:</span> The Value of My Company Workshops
          </h2>
          <p className="text-xl text-slate-700 text-center mb-12 max-w-4xl mx-auto">
            I deliver transformative AI workshops for organizations that provide five core benefits:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border border-slate-200 shadow-sm">
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold text-pink-500">Creating &quot;Aha&quot; Moments</h3>
                <p className="text-slate-600">
                  I help each team member experience that pivotal moment when they successfully use AI and witness its 
                  capabilities firsthand, expanding their understanding of what&apos;s possible.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border border-slate-200 shadow-sm">
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold text-pink-500">Building Practical Skills</h3>
                <p className="text-slate-600">
                  I provide hands-on training in essential AI applications including data analysis, image generation, 
                  content creation, and knowledge management, giving participants immediately usable tools.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border border-slate-200 shadow-sm">
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold text-pink-500">Optimizing Workflows</h3>
                <p className="text-slate-600">
                  I help identify opportunities to enhance existing processes through AI automation and synthesis—eliminating 
                  redundant meetings, automatically generating reports, and creating new capabilities previously out of reach.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border border-slate-200 shadow-sm">
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold text-pink-500">Establishing Organizational Systems</h3>
                <p className="text-slate-600">
                  I implement frameworks that transform individual AI usage into organization-wide adoption, creating 
                  processes that enable continuous improvement and knowledge sharing.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border border-slate-200 shadow-sm">
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold text-pink-500">Serving as Your AI Navigator</h3>
                <p className="text-slate-600">
                  I stay at the forefront of AI developments, testing new technologies and providing ongoing guidance, 
                  updates, and coaching—saving your team valuable time they can dedicate to their primary responsibilities.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border border-slate-200 shadow-sm flex items-center justify-center">
              <CardContent className="text-center">
                <p className="text-slate-800 font-medium text-lg">
                  My workshops bridge the gap between individual AI experimentation and true organizational transformation, 
                  ensuring your investment in AI technology translates to tangible business results.
                </p>
                <Button 
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 mt-6 rounded-md"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'conversion', { send_to: 'G-PQMVFLNMB6' });
                    }
                    window.open('https://cal.com/saadiq/free-ai-consultation', '_blank');
                  }}
                >
                  Schedule a Workshop Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Advantage Section - UPDATED TO FOCUS ON PERSONAL BENEFITS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-slate-900">
            <span className="text-pink-500">For Professionals:</span> Personal AI Advantage
          </h2>
          <p className="text-xl text-slate-700 text-center mb-12 max-w-4xl mx-auto">
            While organizations benefit from systematic AI adoption, individuals gain powerful personal advantages:
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <Brain className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold">Enhanced Decision-Making</h3>
                <p className="text-slate-600">
                  Access powerful insights and tools that boost your confidence and competence in key decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <Rocket className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold">Greater Autonomy</h3>
                <p className="text-slate-600">
                  Gain independence through AI-powered tools that help you learn and improve continuously.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <Users className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold">Stronger Relationships</h3>
                <p className="text-slate-600">
                  Focus on meaningful interactions while AI handles routine tasks.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <Clock3 className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold">Time Freedom</h3>
                <p className="text-slate-600">
                  Reclaim 5+ hours weekly as AI automates research, content creation, and administrative tasks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section - Updated with cleaner styling */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl font-semibold text-center mb-12 text-slate-900">
            Your Path to AI Mastery
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col border border-slate-200 shadow-sm">
              <CardContent className="space-y-4 flex-1">
                <h3 className="text-xl font-semibold">Hourly Coaching</h3>
                <span className="inline-block py-1 px-2 bg-slate-100 text-slate-700 text-sm rounded mb-2">For Individuals</span>
                <p className="text-slate-600 mb-4">
                  Flexible, one-on-one sessions tailored to your immediate needs and questions.
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>• Focused problem-solving</li>
                  <li>• Quick skill development</li>
                  <li>• Immediate guidance</li>
                </ul>
              </CardContent>
              <Button 
                className="w-full bg-pink-500 hover:bg-pink-600 mt-6 rounded-md"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'conversion', { send_to: 'G-PQMVFLNMB6' });
                  }
                  window.open('https://cal.com/saadiq/free-ai-consultation', '_blank');
                }}
              >
                Book Coaching Intro
              </Button>
            </Card>

            <Card className="p-6 flex flex-col border border-slate-200 shadow-sm">
              <CardContent className="space-y-4 flex-1">
                <h3 className="text-xl font-semibold">Workshops</h3>
                <span className="inline-block py-1 px-2 bg-slate-100 text-slate-700 text-sm rounded mb-2">For Teams</span>
                <p className="text-slate-600 mb-4">
                  Intensive learning experiences available in half-day, full-day, or multi-week formats.
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>• Deep dive into specific topics</li>
                  <li>• Hands-on practice</li>
                  <li>• Team-based learning</li>
                </ul>
              </CardContent>
              <Button 
                className="w-full bg-pink-500 hover:bg-pink-600 mt-6 rounded-md"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'conversion', { send_to: 'G-PQMVFLNMB6' });
                  }
                  window.open('https://cal.com/saadiq/free-ai-consultation', '_blank');
                }}
              >
                Inquire About Workshops
              </Button>
            </Card>

            <Card className="p-6 flex flex-col border border-slate-200 shadow-sm">
              <CardContent className="space-y-4 flex-1">
                <h3 className="text-xl font-semibold">Ongoing Retainer</h3>
                <span className="inline-block py-1 px-2 bg-slate-100 text-slate-700 text-sm rounded mb-2">For Organizations</span>
                <p className="text-slate-600 mb-4">
                  Comprehensive support package for continuous AI growth and implementation.
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>• Regular coaching sessions</li>
                  <li>• Initiative support</li>
                  <li>• AI trend monitoring</li>
                  <li>• Strategic guidance</li>
                </ul>
              </CardContent>
              <Button 
                className="w-full bg-pink-500 hover:bg-pink-600 mt-6 rounded-md"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'conversion', { send_to: 'G-PQMVFLNMB6' });
                  }
                  window.open('https://cal.com/saadiq/free-ai-consultation', '_blank');
                }}
              >
                Discuss Retainer Options
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Mental Health & Success Stories - UPDATED TO FOCUS ON POSITIVE OUTCOMES */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-slate-900">
            Transform Potential into Results
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Forward-thinking organizations are realizing significant returns by strategically implementing AI. 
            Meanwhile, professionals who master these tools are finding themselves more productive, more valuable to employers, 
            and better positioned for advancement. Join the leaders who are turning AI capabilities 
            into competitive advantage and career growth.
          </p>
        </div>
      </section>

      {/* CTA Section - Updated to match blog&apos;s blue */}
      <section className="py-16 px-4 bg-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            The Future Is AI-Enabled
          </h2>
          <p className="text-xl mb-8">
            Join the 96% of professionals prioritizing AI skills. Transform challenges into 
            opportunities with personalized AI coaching.
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
            Start Your AI Journey Today
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
              <a href="https://saadiq.xyz" className="text-slate-600 hover:text-pink-600">Home</a>
              <a href="#" className="text-slate-600 hover:text-pink-600">AI Coach</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
