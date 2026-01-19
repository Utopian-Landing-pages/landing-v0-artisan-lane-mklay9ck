import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Shield, Sparkles } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Heart,
      title: 'Support Independent Artists',
      description: 'Every purchase directly supports talented creators and their craft, helping them continue doing what they love.',
      image: '/feature-1.jpg',
    },
    {
      icon: Sparkles,
      title: 'Unique & Authentic',
      description: 'Find one-of-a-kind pieces you won\'t see anywhere else. Each item is handmade with care and attention to detail.',
      image: '/feature-2.jpg',
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'We carefully curate our marketplace to ensure every product meets our high standards of craftsmanship.',
      image: '/feature-3.jpg',
    },
  ]

  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            {'Why choose Artisan Lane'}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {'We\'re more than a marketplace—we\'re a community celebrating craftsmanship and creativity'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
