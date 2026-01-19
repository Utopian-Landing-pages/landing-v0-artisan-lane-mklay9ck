import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              {'Handcrafted with care'}
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight text-balance">
              {'Discover unique pieces made by hand'}
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty">
              {'Connect with independent artists and bring home one-of-a-kind creations that tell a story. Each piece is crafted with passion and authenticity.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                {'Explore Collection'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                {'Meet the Artists'}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">{'500+'}</div>
                <div className="text-sm text-muted-foreground">{'Artists'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{'10k+'}</div>
                <div className="text-sm text-muted-foreground">{'Products'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{'50k+'}</div>
                <div className="text-sm text-muted-foreground">{'Happy Customers'}</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/hero-image.jpg"
              alt="Artisan crafting pottery"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
