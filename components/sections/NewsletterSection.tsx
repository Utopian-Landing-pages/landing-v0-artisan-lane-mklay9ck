'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Newsletter signup:', { email, agreed })
    // Handle newsletter signup
  }

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-accent/5 rounded-2xl p-8 sm:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4 text-balance">
                {'Join our community'}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {'Get exclusive access to new artist collections, special offers, and stories from the makers behind your favorite pieces.'}
              </p>
            </div>

            {/* Right Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{'Email address'}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    required
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    {'I agree to receive marketing communications and understand I can unsubscribe at any time.'}
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {'Subscribe'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
