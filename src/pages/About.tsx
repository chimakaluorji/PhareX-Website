import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { Play, Heart, Shield, Users, Target, CheckCircle } from "lucide-react";
import founderImage from "@/assets/founder-image.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="text-accent" size={32} />,
      title: "Clarity",
      description: "We provide clear, actionable guidance to eliminate confusion and uncertainty."
    },
    {
      icon: <Shield className="text-accent" size={32} />,
      title: "Trust",
      description: "We build relationships based on honesty, reliability, and proven expertise."
    },
    {
      icon: <CheckCircle className="text-accent" size={32} />,
      title: "Practicality",
      description: "Our advice is realistic, achievable, and tailored to your specific situation."
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: "Community",
      description: "We foster connections and support networks to help you feel at home."
    },
    {
      icon: <Heart className="text-accent" size={32} />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our interactions and referrals."
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
              Meet the Founder
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover the personal journey and vision behind PhareX
            </p>
          </div>
        </div>
      </section>

      {/* Founder Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                From Student to Guide
              </h2>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Like many international students, I arrived in the UK feeling overwhelmed 
                  and uncertain. The excitement of starting a new chapter was quickly 
                  overshadowed by the reality of navigating housing, healthcare, employment 
                  rules, and cultural differences.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  After months of trial and error, countless mistakes, and eventually 
                  finding my footing, I realized that this struggle was shared by 
                  thousands of students each year. The information existed, but it was 
                  scattered, confusing, and often outdated.
                </p>
                <p className="text-lg leading-relaxed">
                  That's when PhareX was born – from a deep understanding of what 
                  international students really need: clear, practical guidance from 
                  someone who has walked the same path.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src={founderImage} 
                  alt="PhareX Founder" 
                  className="w-full rounded-2xl shadow-card"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Video */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              Why PhareX Was Created
            </h2>
            
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <Play size={64} className="mx-auto mb-4 text-primary opacity-70" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Founder's Story</h3>
                  <p className="text-muted-foreground">5-8 minute video coming soon</p>
                </div>
              </div>
              <p className="text-foreground text-lg">
                Watch the full story of how PhareX came to life and the mission 
                that drives us every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                  <p className="text-foreground text-lg leading-relaxed">
                    A world where every international student arrives in the UK feeling 
                    confident, prepared, and supported throughout their journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-foreground text-lg leading-relaxed">
                    To provide clear, practical orientation support that empowers 
                    international students to make informed decisions and thrive in the UK.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
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
              {values.map((value, index) => (
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

      {/* Founder's Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-hero text-white rounded-2xl p-12 shadow-card">
              <h2 className="text-3xl font-bold mb-6">A Personal Message</h2>
              <blockquote className="text-xl leading-relaxed mb-8 italic">
                "You don't have to figure this out alone. PhareX is here to guide you 
                through every step of your UK journey, just as I wish someone had been 
                there for me when I first arrived."
              </blockquote>
              <p className="text-lg">— Founder, PhareX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Feedback */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              Student Feedback
            </h2>
            
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <Play size={64} className="mx-auto mb-4 text-primary opacity-70" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Student Testimonial</h3>
                  <p className="text-muted-foreground">30-60 second feedback video coming soon</p>
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