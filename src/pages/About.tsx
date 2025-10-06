import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { Compass, Heart, Shield, Users, Target, TrendingUp } from "lucide-react";
import salomeFounder from "@/assets/salome-founder.jpg";

const About = () => {
  const values = [
    {
      icon: <Compass className="text-accent" size={32} />,
      title: "Clarity",
      description: "Providing simple, reliable information"
    },
    {
      icon: <Shield className="text-accent" size={32} />,
      title: "Integrity",
      description: "Being transparent and honest in all support we provide"
    },
    {
      icon: <Target className="text-accent" size={32} />,
      title: "Direction",
      description: "Guiding students towards the right steps for their journey"
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: "Community",
      description: "Building spaces where students feel they belong"
    },
    {
      icon: <TrendingUp className="text-accent" size={32} />,
      title: "Growth",
      description: "Helping students unlock opportunities for their future"
    }
  ];

  const reasons = [
    "Tailored one-to-one support alongside workshops and community events",
    "Clear guidance on essential areas like housing, jobs, and healthcare",
    "Referrals to trusted professionals for regulated immigration and other specialist services",
    "A student-first approach that continues beyond arrival"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              PhareX — Let us be your beacon
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Guiding international students to thrive in the UK
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                At PhareX, we believe every international student deserves to feel prepared, 
                supported, and confident from the moment they begin their journey to the UK. 
                Moving to a new country can be exciting, but it can also be overwhelming. 
                That's where we come in.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Founded in February 2025, launched August, PhareX was created to guide students 
                beyond general online information by offering practical, tailored advice and 
                trusted referrals. Our core service, Orientation, brings together everything 
                students need to start strong and settle quickly: pre-arrival preparation, 
                accommodation support, job readiness, healthcare registration, immigration 
                signposting, budgeting, and community integration.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                We combine first-hand experience, professional knowledge, and a growing network 
                of trusted partners to ensure students receive the right guidance at the right time. 
                Our services are designed to complement, not replace, the support offered by 
                universities and other providers, giving students an extra layer of personalised care.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                At PhareX, we don't just provide guidance — we walk with students on their journey, 
                helping them prepare today so they can thrive tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-foreground text-lg leading-relaxed">
                  To guide international students step by step, helping them navigate challenges 
                  with clarity and confidence, and empowering them to thrive in their academic, 
                  social, and professional lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do at PhareX
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.slice(0, 3).map((value, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                    <p className="text-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
              {values.slice(3, 5).map((value, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                    <p className="text-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose PhareX */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Why Choose PhareX?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="text-foreground leading-relaxed">{reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              A Message from Our Founder
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src={salomeFounder} 
                  alt="Salome Madubuko, Founder & Director of PhareX"
                  className="w-full h-auto rounded-lg shadow-card"
                />
              </div>
              
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Salome Madubuko, Founder & Director
                </h3>
                
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    I came to the UK from Nigeria with my family as an immigrant and later experienced 
                    first-hand the struggles of navigating life as a student. From understanding the 
                    education system to finding housing, balancing work rules, and adapting to a new 
                    culture, I know how overwhelming the journey can feel.
                  </p>
                  
                  <p>
                    PhareX was born from that experience, to be the support system I wished I had. 
                    My goal is to provide international students with clear guidance, practical tools, 
                    and a trusted community so they don't have to face the same challenges alone.
                  </p>
                  
                  <p className="font-semibold text-primary">
                    At PhareX, our mission is simple: to be a beacon of direction, clarity, and 
                    support for every student who chooses to study in the UK.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the waitlist or book a consultation to get started
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-accent hover:opacity-90 text-accent-foreground shadow-accent"
                onClick={() => window.location.href = "/#waitlist"}
              >
                Join Waitlist
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.location.href = "/#pricing"}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;