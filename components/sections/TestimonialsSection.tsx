import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Interior Designer',
      content: 'The quality and uniqueness of each piece I\'ve purchased has been outstanding. It\'s refreshing to find a marketplace that truly values craftsmanship.',
      rating: 5,
      initials: 'SM',
    },
    {
      name: 'James Chen',
      role: 'Collector',
      content: 'I love knowing that my purchases directly support independent artists. The stories behind each piece make them even more special.',
      rating: 5,
      initials: 'JC',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Home Owner',
      content: 'Artisan Lane has transformed my home with beautiful, meaningful pieces. The customer service is exceptional too!',
      rating: 5,
      initials: 'ER',
    },
  ]

  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            {'Loved by our community'}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {'See what our customers have to say about their experience'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-none shadow-sm">
              <CardContent className="p-8 space-y-6">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed">
                  {`"${testimonial.content}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Avatar>
                    <AvatarFallback className="bg-accent/10 text-accent">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
