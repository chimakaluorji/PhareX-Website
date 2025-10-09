import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export const CollaborationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    serviceType: "",
    collaboration: "",
    contactInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.serviceType || !formData.contactInfo) {
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
        description: "We'll be in touch to discuss collaboration opportunities.",
      });

      // Reset form
      setFormData({
        name: "",
        serviceType: "",
        collaboration: "",
        contactInfo: "",
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
        <CardTitle>Collaboration Request Form</CardTitle>
        <CardDescription>
          Partner with PhareX to support international students
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name / Organisation <span className="text-destructive">*</span>
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Your name or organisation name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium mb-2">
              Type of Service <span className="text-destructive">*</span>
            </label>
            <Select
              value={formData.serviceType}
              onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="training">Training Provider</SelectItem>
                <SelectItem value="housing">Housing/Accommodation</SelectItem>
                <SelectItem value="immigration">Immigration Services</SelectItem>
                <SelectItem value="employment">Employment/Recruitment</SelectItem>
                <SelectItem value="mental-health">Mental Health Support</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="collaboration" className="block text-sm font-medium mb-2">
              How would you like to collaborate?
            </label>
            <Textarea
              id="collaboration"
              placeholder="Tell us about your collaboration ideas..."
              value={formData.collaboration}
              onChange={(e) => setFormData({ ...formData, collaboration: e.target.value })}
              rows={4}
            />
          </div>

          <div>
            <label htmlFor="contactInfo" className="block text-sm font-medium mb-2">
              Contact Information <span className="text-destructive">*</span>
            </label>
            <Input
              id="contactInfo"
              type="text"
              placeholder="Email or phone number"
              value={formData.contactInfo}
              onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-accent hover:opacity-90 text-accent-foreground shadow-accent"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Collaboration Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
