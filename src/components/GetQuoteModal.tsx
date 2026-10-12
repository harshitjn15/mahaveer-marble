"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

const quoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  product: z.string().min(2, "Product of interest is required"),
  message: z.string().optional(),
})

type QuoteFormValues = z.infer<typeof quoteSchema>

export function GetQuoteModal({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
  })

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true)
    // Here you would typically send data to your backend API
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Reset and close after a moment
    setTimeout(() => {
      setOpen(false)
      setTimeout(() => {
        setIsSuccess(false)
        reset()
      }, 500)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || <Button variant="default">Get a Quote</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>
            Fill out your details below and our team will get back to you with a customized quote shortly.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center">
              <span className="text-gold-500 text-3xl">✓</span>
            </div>
            <h3 className="text-xl font-medium text-white">Quote Request Sent!</h3>
            <p className="text-gray-400">We will contact you via WhatsApp/Phone soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4 pb-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" {...register("name")} error={errors.name?.message} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone / WhatsApp</Label>
                <Input id="phone" type="tel" placeholder="+91 9876543210" {...register("phone")} error={errors.phone?.message} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product">Product of Interest</Label>
                <Input id="product" placeholder="e.g. Sparkle Black Marble" {...register("product")} error={errors.product?.message} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Additional Requirements (Optional)</Label>
                <Textarea 
                  id="message" 
                  placeholder="Need 500 sq ft for flooring..." 
                  {...register("message")} 
                  error={errors.message?.message} 
                />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit Request"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
