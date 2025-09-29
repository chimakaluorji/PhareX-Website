import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { PricingCard } from "@/components/ui/pricing-card";
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
  ChevronRight,
  CheckCircle2
} from "lucide-react";

const Services = () => {
  const [activeStep, setActiveStep] = useState(1);

  const detailedServices = [
    {
      icon: <FileText size={32} className="text-primary" />,
      title: "Pre-arrival & On-arrival Guidance",
      description: "Comprehensive preparation support to ensure you're ready for your UK journey from day one.",
      details: [
        "Complete document checklist and preparation guide",
        "Strategic packing lists tailored to UK weather and lifestyle",
        "SIM card and mobile plan recommendations",
        "Banking setup guidance for international students",
        "Transport options and Oyster card information",
        "First-week essentials and survival kit recommendations",
        "Airport arrival and initial settlement support"
      ]
    },
    {
      icon: <Home size={32} className="text-primary" />,
      title: "Accommodation Support & Referrals",
      description: "Navigate the UK housing market with confidence using our comprehensive accommodation guidance.",
      details: [
        "Understanding tenant rights and responsibilities",
        "Complete 'How to Rent' guide breakdown",
        "Trusted letting agent network and referrals",
        "Purpose Built Student Accommodation (PBSA) options",
        "Rental agreement review guidance",
        "Deposit protection scheme information",
        "Housing maintenance and utilities setup"
      ]
    },
    {
      icon: <Briefcase size={32} className="text-primary" />,
      title: "Employment Preparation",
      description: "Develop professional skills and understand UK employment regulations for student workers.",
      details: [
        "CV writing and formatting for UK employers",
        "Part-time job search strategies and platforms",
        "Interview preparation and practice sessions",
        "Understanding student visa work restrictions",
        "Workplace culture and professional etiquette",
        "Tax and National Insurance guidance",
        "Building professional networks in the UK"
      ]
    },
    {
      icon: <Calculator size={32} className="text-primary" />,
      title: "Budget Planning & Cost of Living",
      description: "Master your finances with realistic budgeting tools and cost-of-living guidance.",
      details: [
        "City-specific cost of living breakdowns",
        "Monthly budget planning templates",
        "Student discount and savings strategies",
        "Banking and financial services for students",
        "Emergency fund planning",
        "Currency exchange and money transfer advice",
        "Advanced calculator access in our platform"
      ]
    },
    {
      icon: <Heart size={32} className="text-primary" />,
      title: "Healthcare Guidance",
      description: "Understand the NHS system and ensure you have access to essential healthcare services.",
      details: [
        "NHS registration process and requirements",
        "Finding and registering with a GP practice",
        "Dental care access and registration",
        "Mental health support services",
        "Emergency healthcare procedures",
        "Prescription and pharmacy guidance",
        "Student health insurance considerations"
      ]
    },
    {
      icon: <Users size={32} className="text-primary" />,
      title: "Integration & Community Support",
      description: "Build meaningful connections and integrate into UK culture and communities.",
      details: [
        "Cultural adaptation strategies",
        "Local community groups and activities",
        "Student society participation",
        "Language exchange opportunities",
        "Cultural events and festivals",
        "Building social networks",
        "Overcoming homesickness and isolation"
      ]
    },
    {
      icon: <UserCheck size={32} className="text-primary" />,
      title: "Trusted Referrals",
      description: "Connect with verified professionals for immigration, training, and mental health support.",
      details: [
        "Regulated immigration adviser network",
        "Accredited training provider connections",
        "Mental health and counseling services",
        "Legal support and advice services",
        "Professional development opportunities",
        "Specialist consultation services",
        "Quality-assured service providers only"
      ]
    },
    {
      icon: <GraduationCap size={32} className="text-primary" />,
      title: "University Guidance",
      description: "Maximize your university experience with comprehensive institutional support guidance.",
      details: [
        "Student Union services and benefits",
        "Academic support and tutoring resources",
        "Student societies and clubs directory",
        "Campus facilities and services guide",
        "Academic calendar and key dates",
        "Student support services navigation",
        "University-specific guidance (starting with Wolverhampton)"
      ]
    },
    {
      icon: <MessageCircle size={32} className="text-primary" />,
      title: "1-to-1 Consultation",
      description: "Receive personalized, focused support tailored to your specific needs and circumstances.",
      details: [
        "Personalized needs assessment",
        "Customized action plan development",
        "Priority area deep-dive sessions",
        "Resource and template provision",
        "Follow-up accountability checks",
        "Progress tracking and adjustments",
        "Direct access to expert guidance"
      ]
    },
    {
      icon: <Calendar size={32} className="text-primary" />,
      title: "Meet & Greets / Workshops",
      description: "Connect with fellow students through social events and practical learning workshops.",
      details: [
        "Regular social meet and greet events",
        "Practical skills workshops",
        "Networking opportunities",
        "Cultural celebration events",
        "Educational seminar series",
        "Peer support group sessions",
        "New dates announced regularly"
      ]
    }
  ];

  const consultationSteps = [
    {
      step: 1,
      title: "Book Free 15-min Discovery Call",
      description: "We'll understand your specific needs and explain how we can support your UK journey.",
      icon: <MessageCircle size={24} className="text-accent" />
    },
    {
      step: 2,
      title: "Choose Your Package",
      description: "Select from Starter, Value, or Premium packages based on your requirements and budget.",
      icon: <CheckCircle2 size={24} className="text-accent" />
    },
    {
      step: 3,
      title: "Sign Consultation Agreement",
      description: "Review and sign our terms and conditions to ensure clarity and transparency.",
      icon: <FileText size={24} className="text-accent" />
    },
    {
      step: 4,
      title: "Make Secure Payment",
      description: "Complete your booking with our secure payment system to confirm your consultation.",
      icon: <Calculator size={24} className="text-accent" />
    },
    {
      step: 5,
      title: "Receive Tailored Support",
      description: "Get personalized guidance, resources, and referrals specific to your chosen areas.",
      icon: <UserCheck size={24} className="text-accent" />
    },
    {
      step: 6,
      title: "Follow-up & Accountability",
      description: "Ongoing check-ins to ensure you stay on track and achieve your goals.",
      icon: <ChevronRight size={24} className="text-accent" />
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

  const faqs = [
    {
      question: "What happens after I book a consultation?",
      answer: "After booking, you'll receive a confirmation email with your consultation details, a pre-session questionnaire to help us understand your needs, and access to relevant preparation materials."
    },
    {
      question: "How do I make payment?",
      answer: "We accept secure online payments via credit/debit cards and PayPal. All transactions are processed through our encrypted payment system for your security."
    },
    {
      question: "Do you guarantee housing or job outcomes?",
      answer: "No, PhareX provides guidance, support, and referrals only. We do not guarantee employment, accommodation, or immigration outcomes. We focus on empowering you with knowledge and connections."
    },
    {
      question: "Can I cancel or reschedule my consultation?",
      answer: "Yes, you can cancel or reschedule up to 24 hours before your consultation time. Please contact us as soon as possible to make changes to your booking."
    },
    {
      question: "What materials will I receive?",
      answer: "Depending on your package, you'll receive customized templates, checklists, resource lists, and action plans tailored to your specific needs and areas of focus."
    },
    {
      question: "How long do I have access to follow-up support?",
      answer: "Follow-up support duration varies by package. Value packages include one follow-up check-in within 2 weeks, while Premium packages include ongoing support for up to 4 weeks post-consultation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Orientation Services
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-4">
              How We Support You
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              We cover every stage of your journey, from preparing before you arrive 
              to finding housing, jobs, healthcare, and community once you're here.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Comprehensive Support Areas
              </h2>
              <p className="text-xl text-muted-foreground">
                Detailed breakdown of each service area and how we help
              </p>
            </div>

            <div className="grid gap-8">
              {detailedServices.map((service, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-xl">
                      {service.icon}
                      <div>
                        <h3 className="text-primary">{service.title}</h3>
                        <p className="text-muted-foreground text-base font-normal mt-1">
                          {service.description}
                        </p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Consultation Process
              </h2>
              <p className="text-xl text-muted-foreground">
                A clear, step-by-step journey from booking to ongoing support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultationSteps.map((step, index) => (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all duration-300 shadow-card hover:shadow-lg ${
                    activeStep === step.step ? 'ring-2 ring-accent shadow-accent' : ''
                  }`}
                  onClick={() => setActiveStep(step.step)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold text-lg">{step.step}</span>
                    </div>
                    <div className="mb-3 flex justify-center">
                      {step.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonial Video */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Why Students Choose 1-to-1 Consultations
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Hear directly from students about their experience with our 
                  personalized consultation services.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-accent hover:opacity-90 text-accent-foreground shadow-accent"
                >
                  Book Your Consultation
                </Button>
              </div>
              
              <div className="bg-muted/50 rounded-2xl p-8">
                <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Play size={64} className="mx-auto mb-4 text-primary opacity-70" />
                    <h3 className="text-lg font-semibold text-primary mb-2">Student Testimonial</h3>
                    <p className="text-muted-foreground text-sm">Video coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Consultation Packages
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the level of support that fits your needs and budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  {...plan}
                  onSelect={() => {
                    console.log(`Selected ${plan.title} plan`);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Get answers to common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-primary mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your consultation today and take the first step toward a confident UK journey
            </p>
            
            <Button 
              size="lg"
              className="bg-gradient-accent hover:opacity-90 text-accent-foreground shadow-accent text-lg px-8 py-4"
            >
              Book via Calendly
            </Button>
            
            <div className="mt-8 text-sm text-white/70 max-w-3xl mx-auto bg-white/10 p-4 rounded-lg">
              <p>
                <strong>Disclaimer:</strong> PhareX provides guidance, support and referrals only. 
                We do not guarantee employment, accommodation, or immigration outcomes. 
                Always verify providers' credentials and terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;