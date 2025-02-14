'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, TrendingUp, Brain, Users, Rocket, Clock3, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <header className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-slate-900 mb-8">
            Don&apos;t Let AI Leave You Behind
          </h1>
          <p className="text-2xl text-slate-800 mb-12 leading-relaxed">
            Future-Proof Your Career: Master AI and Stay Ahead of the Curve
          </p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg"
            onClick={() => window.open('https://cal.com/saadiq/free-20-min-ai-consultation', '_blank')}
          >
            Book Your Free Intro Session
          </Button>
        </div>
      </header>

      {/* Value Proposition Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
          Partner with an AI expert who understands your professional demands.
          </h2>

          <p className="text-xl font-medium mb-6">By working together, you'll gain:</p>
          
          <ul className="space-y-4 text-lg mb-10">
            <li className="flex items-start">
              <ArrowRight className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-blue-400" />
              <span>Strategic confidence with AI tools, eliminating costly trial and error</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-blue-400" />
              <span>Custom workflows that fit your industry and style</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-6 w-6 mr-4 mt-1 flex-shrink-0 text-blue-400" />
              <span>A trusted advisor who keeps you ahead of AI developments</span>
            </li>
          </ul>

          <p className="text-xl leading-relaxed font-medium mb-10">
          Don't just adapt to the future - get ahead of it.
          </p>

          <div className="text-center">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg"
              onClick={() => window.open('https://cal.com/saadiq/free-20-min-ai-consultation', '_blank')}
            >
              Book Your Free Intro Session
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
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

      {/* Common Concerns Section */}
      <section className="py-16 px-4 bg-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -left-4 -top-4 w-32 h-32 transform rotate-45 bg-blue-600"/>
          <div className="absolute -right-4 -bottom-4 w-32 h-32 transform rotate-45 bg-blue-600"/>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl font-semibold text-center mb-12 text-slate-900">
            You&apos;re Not Alone in Your Concerns
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold">Job Security</h3>
                <p className="text-slate-600">
                  69% of professionals worry about AI replacement. Our coaching helps you become 
                  irreplaceable by mastering AI as a tool for enhancement, not replacement.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold">Rapid Change</h3>
                <p className="text-slate-600">
                  93% of professionals are concerned about keeping pace with AI developments. 
                  We help you stay current without overwhelming your schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <Brain className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold">Skills Gap</h3>
                <p className="text-slate-600">
                  Only 12% of professionals have significant AI experience. Our coaching bridges 
                  this gap with practical, role-specific guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Advantage Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-slate-900">
            The AI Advantage
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <Brain className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold">Enhanced Decision-Making</h3>
                <p className="text-slate-600">
                  Access powerful insights and tools that boost your confidence and competence in key decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <Rocket className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold">Greater Autonomy</h3>
                <p className="text-slate-600">
                  Gain independence through AI-powered tools that help you learn and improve continuously.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold">Stronger Relationships</h3>
                <p className="text-slate-600">
                  Focus on meaningful interactions while AI handles routine tasks.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <Clock3 className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold">Time Freedom</h3>
                <p className="text-slate-600">
                  Reclaim your time for high-value work and personal development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent"/>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent"/>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl font-semibold text-center mb-12 text-slate-900">
            Your Path to AI Mastery
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col">
              <CardContent className="space-y-4 flex-1">
                <h3 className="text-xl font-semibold">Free Intro Session</h3>
                <p className="text-slate-600 mb-4">
                  Free 20-minute consultation to explore how AI can enhance your specific role and career path.
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>• Opportunity assessment</li>
                  <li>• Personalized AI roadmap</li>
                  <li>• Quick-win identification</li>
                </ul>
              </CardContent>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 mt-6"
                onClick={() => window.open('https://cal.com/saadiq/free-20-min-ai-consultation', '_blank')}
              >
                Book Your Free Intro Session
              </Button>
            </Card>

            <Card className="p-6 flex flex-col">
              <CardContent className="space-y-4 flex-1">
                <h3 className="text-xl font-semibold">Skill Enhancement</h3>
                <p className="text-slate-600 mb-4">
                  One-on-one coaching to master AI tools and techniques relevant to your work.
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>• Practical AI applications</li>
                  <li>• Customized learning path</li>
                  <li>• Real-world practice</li>
                </ul>
              </CardContent>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 mt-6"
                onClick={() => window.open('https://cal.com/saadiq/free-20-min-ai-consultation', '_blank')}
              >
                Book Your Free Intro Session
              </Button>
            </Card>

            <Card className="p-6 flex flex-col">
              <CardContent className="space-y-4 flex-1">
                <h3 className="text-xl font-semibold">AI Leadership Track</h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive program to become an AI-enabled leader in your field.
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>• Strategic AI implementation</li>
                  <li>• Team enablement skills</li>
                  <li>• Future-ready leadership</li>
                </ul>
              </CardContent>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 mt-6"
                onClick={() => window.open('https://cal.com/saadiq/free-20-min-ai-consultation', '_blank')}
              >
                Book Your Free Intro Session
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Mental Health & Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-slate-900">
            Transform Anxiety into Achievement
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            51% of workers worried about AI report negative impacts on their mental health. 
            Our coaching doesn&apos;t just build skills - it builds confidence and peace of mind 
            in the AI era. Join professionals who have transformed their careers by embracing AI.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            The Future Is AI-Enabled
          </h2>
          <p className="text-xl mb-8">
            Join the 96% of professionals prioritizing AI skills. Transform challenges into 
            opportunities with personalized AI coaching.
          </p>
          <Button 
            className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-6 text-lg rounded-lg"
            onClick={() => window.open('https://cal.com/saadiq/free-20-min-ai-consultation', '_blank')}
          >
            Book Your Free Intro Session
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2025 AI Career Coaching. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
