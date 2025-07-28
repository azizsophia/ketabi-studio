import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Palette, User, Eye, Sparkles } from "lucide-react";

const CustomizationSection = () => {
  const [childName, setChildName] = useState("Ahmad");
  const [selectedSkinTone, setSelectedSkinTone] = useState(2);
  const [selectedHairColor, setSelectedHairColor] = useState(1);
  const [selectedEyeColor, setSelectedEyeColor] = useState(0);

  const skinTones = ["#F4D3C1", "#E8B896", "#D4A574", "#C4955C", "#8B6914"];
  const hairColors = ["#2C1810", "#4A2C17", "#8B4513", "#654321"];
  const eyeColors = ["#8B4513", "#228B22", "#4682B4", "#2F4F4F"];

  return (
    <section id="customize" className="py-20 bg-nature-mist">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Personalization Magic
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Make It <span className="text-primary">Uniquely Theirs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every child is special. Customize your book to reflect your child's unique appearance and make them the hero of their own Islamic adventure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Customization Controls */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Palette className="w-6 h-6 text-primary" />
              Customize Your Child
            </h3>

            {/* Name Input */}
            <div className="mb-6">
              <Label htmlFor="child-name" className="text-sm font-medium mb-2 block flex items-center gap-2">
                <User className="w-4 h-4" />
                Child's Name
              </Label>
              <Input
                id="child-name"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                placeholder="Enter your child's name"
                className="text-lg"
              />
            </div>

            {/* Skin Tone */}
            <div className="mb-6">
              <Label className="text-sm font-medium mb-3 block">Skin Tone</Label>
              <div className="flex gap-3">
                {skinTones.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSkinTone(index)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedSkinTone === index 
                        ? 'border-primary shadow-lg scale-110' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Hair Color */}
            <div className="mb-6">
              <Label className="text-sm font-medium mb-3 block">Hair Color</Label>
              <div className="flex gap-3">
                {hairColors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedHairColor(index)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedHairColor === index 
                        ? 'border-primary shadow-lg scale-110' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Eye Color */}
            <div className="mb-8">
              <Label className="text-sm font-medium mb-3 block flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Eye Color
              </Label>
              <div className="flex gap-3">
                {eyeColors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedEyeColor(index)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedEyeColor === index 
                        ? 'border-primary shadow-lg scale-110' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <Button variant="magical" size="lg" className="w-full">
              Create {childName}'s Book - $24.99
            </Button>
          </Card>

          {/* Preview */}
          <div className="relative">
            <Card className="p-6 bg-gradient-soft">
              <div className="text-center mb-4">
                <Badge variant="secondary">Live Preview</Badge>
              </div>
              
              {/* Book Cover Preview */}
              <div className="relative bg-card rounded-lg p-6 shadow-story">
                <img 
                  src="/lovable-uploads/3af88225-a3d6-48ff-9a3c-1222d270e83c.png"
                  alt="Book preview"
                  className="w-full rounded-lg mb-4"
                />
                <div className="text-center">
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {childName}'s Islamic Adventure
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    A personalized story just for {childName}
                  </p>
                </div>
              </div>

              {/* Character Preview */}
              <div className="mt-6 p-4 bg-golden-light rounded-lg">
                <p className="text-sm text-center text-foreground">
                  <strong>{childName}</strong> will appear throughout the story with the selected appearance, learning about Islamic values in beautiful, illustrated scenes.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;