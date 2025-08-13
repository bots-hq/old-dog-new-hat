import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRunware } from "@/hooks/useRunware";

const HeroSection = () => {
  const { generateImage, isGenerating, generatedImages } = useRunware();
  const [heroImage, setHeroImage] = useState<string>("");

  useEffect(() => {
    const generateHeroImage = async () => {
      const imageUrl = await generateImage({
        positivePrompt: "A distinguished old golden retriever dog wearing a vintage brown fedora hat, sitting proudly with a wise expression, golden hour lighting, meme style, cartoon-like, vibrant colors, wearing sunglasses, cryptocurrency coins floating around, 'OG vibes' text overlay",
        width: 512,
        height: 512,
      }, "hero-dog");
      
      if (imageUrl) {
        setHeroImage(imageUrl);
      }
    };

    generateHeroImage();
  }, [generateImage]);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-primary/10">
      {/* Floating elements */}
      <div className="absolute top-20 left-20 text-6xl animate-bounce opacity-50">🎩</div>
      <div className="absolute top-40 right-20 text-4xl bounce-slow opacity-30">🐕</div>
      <div className="absolute bottom-40 left-40 text-5xl wiggle opacity-40">👴</div>
      <div className="absolute bottom-20 right-40 text-3xl animate-pulse opacity-50">💰</div>
      
      <div className="text-center space-y-8 px-4 max-w-6xl mx-auto z-10">
        <Badge variant="secondary" className="text-lg px-6 py-2 animate-pulse">
          🚀 THE OLF HAT REVOLUTION IS HERE 🚀
        </Badge>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Image */}
          <div className="lg:w-1/2 flex justify-center">
            {heroImage ? (
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="OWIF Hero Dog with Hat" 
                  className="rounded-2xl shadow-2xl glow max-w-full h-auto wiggle hover:scale-105 transition-transform duration-300"
                  style={{ maxHeight: '400px' }}
                />
                <div className="absolute -top-4 -right-4 text-4xl animate-bounce">👑</div>
                <div className="absolute -bottom-4 -left-4 text-3xl animate-pulse">💎</div>
              </div>
            ) : (
              <div className="w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/30 rounded-2xl flex items-center justify-center">
                {isGenerating ? (
                  <div className="text-center">
                    <div className="text-6xl animate-spin mb-4">🎩</div>
                    <p className="text-lg">Generating epic olf dog...</p>
                  </div>
                ) : (
                  <div className="text-6xl wiggle">🐕</div>
                )}
              </div>
            )}
          </div>
          
          {/* Hero Text */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-gradient leading-tight">
              $OWIF
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground/90">
              Wif Dogs Only <span className="text-primary wiggle inline-block">Olf</span> Hat
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              When new hats get old, we keep the <strong>olf hat</strong> vibes alive! 
              The original wif dogs deserve the <strong>original hat</strong>. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8">
              <Button size="lg" className="text-xl px-8 py-6 glow hover:scale-105 transition-transform">
                🎩 Buy $OWIF Now
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-8 py-6 hover:scale-105 transition-transform">
                📊 View Chart
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center">
          <p className="text-lg text-muted-foreground mb-4">Contract Address:</p>
          <div className="bg-card p-4 rounded-lg border-2 border-primary/20 max-w-md mx-auto">
            <code className="text-sm font-mono break-all">Coming Soon...</code>
            <Button variant="ghost" size="sm" className="ml-2">📋 Copy</Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-2xl">👇</div>
        <p className="text-sm text-muted-foreground">Keep scrolling for the memes</p>
      </div>
    </section>
  );
};

export default HeroSection;