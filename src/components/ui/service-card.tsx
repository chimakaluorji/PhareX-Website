import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        className="group cursor-pointer transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-card border-border"
        onClick={() => setIsOpen(true)}
      >
        <CardContent className="p-6 text-center">
          <div className="mb-4 flex justify-center text-primary group-hover:text-accent transition-colors">
            {icon}
          </div>
          <h3 className="font-semibold text-lg text-card-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">
            Click to learn more
          </p>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-primary">
              {icon}
              {title}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-foreground leading-relaxed">{description}</p>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            variant="outline"
            className="w-full"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}