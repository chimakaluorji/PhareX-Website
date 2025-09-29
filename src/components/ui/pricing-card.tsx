import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  onSelect?: () => void;
}

export function PricingCard({
  title,
  price,
  duration,
  description,
  features,
  isPopular = false,
  onSelect
}: PricingCardProps) {
  return (
    <Card
      className={`relative transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
        isPopular
          ? "border-accent shadow-accent ring-2 ring-accent/20"
          : "border-border"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium shadow-accent">
            Most Popular
          </span>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl text-card-foreground">{title}</CardTitle>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-3xl font-bold text-primary">{price}</span>
          <span className="text-muted-foreground">{duration}</span>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check size={16} className="text-success mt-0.5 flex-shrink-0" />
              <span className="text-sm text-card-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          onClick={onSelect}
          variant={isPopular ? "default" : "outline"}
          className={`w-full mt-6 ${
            isPopular
              ? "bg-gradient-primary hover:opacity-90 shadow-button"
              : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          {title === "Free" ? "Book Discovery Call" : "Choose Plan"}
        </Button>
      </CardContent>
    </Card>
  );
}