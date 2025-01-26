import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
  } from '@/components/ui/table'
  import { Trash2 } from 'lucide-react'
  import { Card } from '@/components/ui/card'
  import { Button } from '@/components/ui/button'
  
  function ImageTable ({ images }) {
  
    return (
      <Card className='p-4'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image ID</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>File Name</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {images.map((image, index) => (
              <TableRow key={index}>
                <TableCell>{image.id}</TableCell>
                <TableCell>
                  <img src={image.src} alt={image.alt} className="w-20 h-20 rounded-md object-cover" />
                </TableCell>
                <TableCell>{image.alt}</TableCell>
                <TableCell>{image.size}</TableCell>
                <TableCell>{image.fileName}</TableCell>
                <TableCell>
                  <Button size="icon" variant='destructive'>
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Card>
    )
  }
  
  export default ImageTable
  