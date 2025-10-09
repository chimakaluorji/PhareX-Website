import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { ServiceCard } from "@/components/ui/service-card";
import { PricingCard } from "@/components/ui/pricing-card";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { WhatsAppCommunityForm } from "@/components/ui/whatsapp-community-form";
import { CollaborationForm } from "@/components/ui/collaboration-form";
import { 
  FileText, 
  Home, 
  Briefcase, 
  Calculator, 
  Heart, 
  Users, 
  UserCheck, 
  GraduationCap, 
  MessageCircle, 
  Calendar,
  Play,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Linkedin
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import pharexLogo from "@/assets/pharex-logo.png";

const Index = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const waitlistRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionId: string) => {
    let targetRef;
    switch (sectionId) {
      case "services":
        targetRef = servicesRef;
        break;
      case "contact":
        targetRef = contactRef;
        break;
      case "waitlist":
        targetRef = waitlistRef;
        break;
      default:
        return;
    }

    targetRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  const services = [
    {
      icon: <FileText size={32} />,
      title: "Pre-arrival & On-arrival Guidance",
      description: "Checklists and step-by-step planning for documents, packing, SIM, banking, transport and first-week essentials."
    },
    {
      icon: <Home size={32} />,
      title: "Accommodation Support & Referrals",
      description: "Summary of tenant rights and the 'How to Rent' guide, plus links to trusted letting agents and PBSA. Referrals are informational only."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Employment Preparation",
      description: "CV help, where to find part-time roles, interview prep, and work rules. No job outcomes are guaranteed."
    },
    {
      icon: <Calculator size={32} />,
      title: "Budget Planning & Cost of Living",
      description: "Use realistic monthly estimates and tips to plan by city. Advanced calculator is included in our platform."
    },
    {
      icon: <Heart size={32} />,
      title: "Healthcare Guidance",
      description: "How to register with an NHS GP and dentist, and what services are available to students."
    },
    {
      icon: <Users size={32} />,
      title: "Integration & Community Support",
      description: "Cultural tips, local groups, and community events so you don't feel alone."
    },
    {
      icon: <UserCheck size={32} />,
      title: "Trusted Referrals (Immigration, Training, Mental Health)",
      description: "Signposting to regulated immigration advisers, accredited training providers, and mental health support."
    },
    {
      icon: <GraduationCap size={32} />,
      title: "University Guidance",
      description: "Links to Student Union, societies and support services (starting with Wolverhampton)."
    },
    {
      icon: <MessageCircle size={32} />,
      title: "1-to-1 Consultation",
      description: "Personalised, focused support across your chosen areas with clear next steps."
    },
    {
      icon: <Calendar size={32} />,
      title: "Meet & Greets / Workshops",
      description: "Socials and practical sessions. New dates announced regularly."
    }
  ];

  const pricingPlans = [
    {
      title: "Free",
      price: "£0",
      duration: "",
      description: "15-min Discovery Call",
      features: [
        "15-minute consultation",
        "Initial needs assessment",
        "Basic guidance overview",
        "Next steps recommendation"
      ]
    },
    {
      title: "Starter",
      price: "£40",
      duration: "/session",
      description: "1 hour, focus on one key area",
      features: [
        "1 hour focused session",
        "Single area deep dive",
        "Actionable next steps",
        "Resource recommendations"
      ]
    },
    {
      title: "Value",
      price: "£65",
      duration: "/package",
      description: "2 hours, covers 2–3 areas",
      features: [
        "2 hour comprehensive session",
        "2-3 area coverage",
        "Personalised templates",
        "Custom action plan",
        "Follow-up check-in"
      ],
      isPopular: true
    },
    {
      title: "Premium",
      price: "£95",
      duration: "/package",
      description: "3 hours split sessions",
      features: [
        "3 hours across multiple sessions",
        "Comprehensive coverage",
        "Trusted referrals included",
        "Step-by-step implementation plan",
        "Ongoing accountability support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onScrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Your Beacon for Orientation in the UK
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Helping international students make confident decisions before and after arrival.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button 
              size="lg"
              className="bg-gradient-accent hover:opacity-90 text-accent-foreground shadow-accent font-semibold"
              onClick={() => window.open('https://calendly.com/pharex/15-minutes-discovery-call', '_blank')}
            >
              <Phone className="mr-2" size={20} />
              Book Free 15-min Call
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("waitlist")}
              className="border-white text-primary bg-white hover:bg-white/90 font-semibold"
            >
              Join Waitlist
            </Button>
          </div>

          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center text-white">
                  <Play size={64} className="mx-auto mb-4 opacity-70" />
                  <h3 className="text-xl font-semibold mb-2">What is PhareX?</h3>
                  <p className="text-white/80">Welcome video coming soon</p>
                </div>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                PhareX provides clear orientation support in housing, employment, budgeting, 
                healthcare, and more so you can start your UK journey with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Orientation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support across every aspect of your UK student journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Consultation Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the level of support that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                {...plan}
                onSelect={() => {
                  // Handle booking logic here
                  console.log(`Selected ${plan.title} plan`);
                }}
              />
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground max-w-4xl mx-auto">
            <p className="bg-muted/50 p-4 rounded-lg">
              <strong>Disclaimer:</strong> PhareX provides guidance, support and referrals only. 
              We do not guarantee employment, accommodation, or immigration outcomes. 
              Always verify providers' credentials and terms.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section ref={waitlistRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <WaitlistForm />
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Didn't join yet? The form is above.
            </p>
          </div>
        </div>
      </section>

      {/* Events & Community */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Events & Community
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our Meet & Greets, practical workshops, and verified student community.
            </p>
          </div>
          <WhatsAppCommunityForm />
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Partners & Collaborators
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Are you a training provider, employer, housing service, or immigration adviser? 
              Let's collaborate.
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mb-8"
              onClick={() => window.open('https://calendly.com/pharex/15-minutes-discovery-call', '_blank')}
            >
              <Phone className="mr-2" size={20} />
              Book 15-min Call
            </Button>
          </div>
          <CollaborationForm />
        </div>
      </section>

      {/* Student Feedback Video */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              What Students Say
            </h2>
            
            <div className="bg-muted/50 rounded-2xl p-8">
              <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <Play size={64} className="mx-auto mb-4 text-primary opacity-70" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Student Testimonial</h3>
                  <p className="text-muted-foreground">Video testimonial coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={contactRef} className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={pharexLogo} alt="PhareX" className="h-16 w-auto mb-4" />
              <p className="text-primary-foreground/80">
                Your beacon for orientation in the UK
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-start gap-2">
                  <Mail size={16} className="mt-1 flex-shrink-0" />
                  <span>info@phare-x.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone size={16} className="mt-1 flex-shrink-0" />
                  <span>+44 7448 326317</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>4th floor, 84 Salop Street, Wolverhampton, WV3 03R</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/pharexstudents?igsh=Y283eTU0bmlveW0y&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="hover:text-accent cursor-pointer transition-colors" size={24} />
                </a>
                <a 
                  href="https://www.tiktok.com/@pharexstudents?_t=ZN-8zy4e6xqzJu&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <svg className="hover:text-accent cursor-pointer transition-colors" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/pharexstudents/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="hover:text-accent cursor-pointer transition-colors" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 PhareX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;