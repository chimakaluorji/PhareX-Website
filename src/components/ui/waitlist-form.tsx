import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    country: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Please fill in required fields",
        description: "Name and email are required to join the waitlist.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Welcome to the PhareX waitlist!",
        description: "We'll notify you when our platform launches.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        university: "",
        country: ""
      });
    }, 1000);
  };

  return (
    <Card className="max-w-lg mx-auto shadow-card">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-primary">Join the Waitlist</CardTitle>
        <p className="text-muted-foreground">
          Be the first to try the PhareX platform. Limited pilot for 100 students.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="border-input"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="border-input"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="university">University (Optional)</Label>
            <Input
              id="university"
              type="text"
              placeholder="e.g., University of Wolverhampton"
              value={formData.university}
              onChange={(e) => setFormData(prev => ({ ...prev, university: e.target.value }))}
              className="border-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}>
              <SelectTrigger className="border-input">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="nigeria">Nigeria</SelectItem>
                <SelectItem value="pakistan">Pakistan</SelectItem>
                <SelectItem value="bangladesh">Bangladesh</SelectItem>
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="ghana">Ghana</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-primary hover:opacity-90 shadow-button"
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}