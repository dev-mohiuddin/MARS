import React, { useState } from 'react'
import { Card, CardTitle, CardHeader } from '@/components/ui/card'
import { air1, air2, air3, air4, air5 } from '@/assets'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// Example Image Data
const images = [
  { id: 1, src: air1, alt: 'Aircraft 1' },
  { id: 2, src: air2, alt: 'Aircraft 2' },
  { id: 3, src: air3, alt: 'Aircraft 3' },
  { id: 4, src: air4, alt: 'Aircraft 4' },
  { id: 5, src: air5, alt: 'Aircraft 5' }
]

function View () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div>
      <CardTitle className='text-3xl font-semibold mb-6'>
        Image Gallery
      </CardTitle>

      <Dialog>
        <DialogTrigger asChild>
          <Card>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-2'>
              {images.map(image => (
                <div
                  key={image.id}
                  className=' cursor-pointer'
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className='w-full h-[240px] rounded-md object-cover'
                  />
                  <p className='text-center mt-2'>{image.alt}</p>
                </div>
              ))}
            </div>
          </Card>
        </DialogTrigger>
        <DialogContent >
          <DialogHeader>
            <DialogTitle>{selectedImage?.alt}</DialogTitle>
          </DialogHeader>
          <div className='w-full'>
              <img className='w-full h-full object-cover' src={selectedImage?.src} alt="img" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default View
