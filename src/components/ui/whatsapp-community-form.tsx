import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export const WhatsAppCommunityForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    university: "",
    email: "",
    whatsappNumber: "",
    emailOptIn: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.whatsappNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Request Submitted! 🎉",
        description: "We'll review your request and get back to you soon.",
      });

      // Reset form
      setFormData({
        fullName: "",
        university: "",
        email: "",
        whatsappNumber: "",
        emailOptIn: false,
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Request to Join WhatsApp Community</CardTitle>
        <CardDescription>
          Connect with verified students and stay updated on events
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-2">
              Full Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="university" className="block text-sm font-medium mb-2">
              University / Student Status
            </label>
            <Input
              id="university"
              type="text"
              placeholder="e.g., University of Wolverhampton - MSc Student"
              value={formData.university}
              onChange={(e) => setFormData({ ...formData, university: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-destructive">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="whatsappNumber" className="block text-sm font-medium mb-2">
              WhatsApp Number <span className="text-destructive">*</span>
            </label>
            <Input
              id="whatsappNumber"
              type="tel"
              placeholder="+44 1234 567890"
              value={formData.whatsappNumber}
              onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
              required
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="emailOptIn"
              checked={formData.emailOptIn}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, emailOptIn: checked as boolean })
              }
            />
            <label
              htmlFor="emailOptIn"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Yes, I'd like to receive email notifications about events and updates.
            </label>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:opacity-90 shadow-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "👉 Request to Join"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
