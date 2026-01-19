import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

export function CategorySection() {
  const categories = [
    { name: 'Pottery & Ceramics', count: '2,400+ items', color: 'bg-accent/10' },
    { name: 'Textiles & Fabrics', count: '1,800+ items', color: 'bg-secondary/30' },
    { name: 'Jewelry & Accessories', count: '3,200+ items', color: 'bg-accent/20' },
    { name: 'Home Decor', count: '1,500+ items', color: 'bg-secondary/20' },
    { name: 'Art & Prints', count: '2,100+ items', color: 'bg-accent/15' },
    { name: 'Woodwork', count: '900+ items', color: 'bg-secondary/25' },
  ]

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-2 text-balance">
              {'Shop by category'}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {'Explore handcrafted items across different mediums'}
            </p>
          </div>
          <Button variant="outline" className="shrink-0 bg-transparent">
            {'View all'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.name}
              className={`${category.color} border-none p-8 cursor-pointer hover:scale-105 transition-transform duration-200`}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {category.name}
              </h3>
              <p className="text-muted-foreground">{category.count}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
