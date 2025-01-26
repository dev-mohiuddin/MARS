import { Card, CardTitle, CardContent } from '@/components/ui/card'
import ImageUploader from '@/components/platform/gallery/image-upload'
import ImageTable from '@/components/platform/gallery/image-table'
import { air1, air2, air3, air4, air5 } from '@/assets'

function Upload () {
    const images = [
        { id: 1, src: air1, alt: 'Aircraft 1', size: '300 KB', fileName: 'aircraft1.jpg' },
        { id: 2, src: air2, alt: 'Aircraft 2', size: '320 KB', fileName: 'aircraft2.jpg' },
        { id: 3, src: air3, alt: 'Aircraft 3', size: '350 KB', fileName: 'aircraft3.jpg' },
        { id: 4, src: air4, alt: 'Aircraft 4', size: '400 KB', fileName: 'aircraft4.jpg' },
        { id: 5, src: air5, alt: 'Aircraft 5', size: '450 KB', fileName: 'aircraft5.jpg' },
    ]

    return (
        <div>
            <CardTitle className='text-3xl font-semibold mb-6'>Images</CardTitle>

            <Card className='w-full'>
                <CardContent>
                    <ImageUploader isCustomStyling={true} />
                </CardContent>
            </Card>
            <div className='mt-6'>
                <ImageTable images={images} />
            </div>
        </div>
    )
}
export default Upload
