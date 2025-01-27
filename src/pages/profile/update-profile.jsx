import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

function UpdateProfile ({ onSave }) {
    const user = {
        userName: 'GSutton',
        email: 'gord@suttonintegrated.com',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        mobile: '',
        home: '',
        office: '',
        countryRegion: 'U.S.A.',
        city: 'Hemet',
        gender: 'Male',
        birthdate: '',
        language: 'English',
    }

    const [formData, setFormData] = useState({
        userName: user.userName || '',
        email: user.email || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        mobile: user.mobile || '',
        home: user.home || '',
        office: user.office || '',
        countryRegion: user.countryRegion || '',
        city: user.city || '',
        language: user.language || '',
        gender: user.gender || '',
        password: '',
        confirmPassword: '',
    })

    const [avatar, setAvatar] = useState('/path/to/avatar.jpg')
    const [showAvatarDialog, setShowAvatarDialog] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSave = () => {
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match')
            return
        }
        onSave(formData)
    }

    const handleAvatarChange = e => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setAvatar(reader.result)
                setShowAvatarDialog(false)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className='h-[calc(100vh-90px)] justify-center items-center flex'>
            <Card className='p-6 max-w-4xl mx-auto w-full'>
                <CardTitle className='text-2xl font-bold my-2 ml-6'>Update Profile</CardTitle>
                <CardHeader className='flex flex-col items-center'>
                    <Avatar className='w-24 h-24 mb-4'>
                        <AvatarImage src={avatar} alt='User Avatar' />
                        <AvatarFallback>{user.firstName?.charAt(0) || 'U'}</AvatarFallback>
                    </Avatar>
                    <Dialog open={showAvatarDialog} onOpenChange={setShowAvatarDialog}>
                        <DialogTrigger asChild>
                            <Button variant='outline' size='sm' className='mt-2'>
                                Change Avatar
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <input type='file' accept='image/*' onChange={handleAvatarChange} />
                        </DialogContent>
                    </Dialog>
                    <CardDescription className='text-sm text-gray-500'>
                        Update your personal information below
                    </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4 mt-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Input
                            label='First Name'
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder='Enter your first name'
                        />
                        <Input
                            label='Last Name'
                            name='lastName'
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder='Enter your last name'
                        />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Input
                            label='Email'
                            name='email'
                            type='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter your email'
                        />
                        <Input
                            label='Mobile'
                            name='mobile'
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder='Enter your mobile number'
                        />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Input
                            label='Home'
                            name='home'
                            value={formData.home}
                            onChange={handleChange}
                            placeholder='Enter your home number'
                        />
                        <Input
                            label='Office'
                            name='office'
                            value={formData.office}
                            onChange={handleChange}
                            placeholder='Enter your office number'
                        />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Input
                            label='Country/Region'
                            name='countryRegion'
                            value={formData.countryRegion}
                            onChange={handleChange}
                            placeholder='Enter your country or region'
                        />
                        <Input
                            label='City'
                            name='city'
                            value={formData.city}
                            onChange={handleChange}
                            placeholder='Enter your city'
                        />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Input
                            label='Preferred Language'
                            name='language'
                            value={formData.language}
                            onChange={handleChange}
                            placeholder='Enter your preferred language'
                        />
                        <Input
                            label='Gender'
                            name='gender'
                            value={formData.gender}
                            onChange={handleChange}
                            placeholder='Enter your gender'
                        />
                    </div>
                    <Separator />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Input
                            label='New Password'
                            name='password'
                            type='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Enter a new password'
                        />
                        <Input
                            label='Confirm Password'
                            name='confirmPassword'
                            type='password'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder='Confirm your new password'
                        />
                    </div>
                    <Button onClick={handleSave} className='w-full mt-4'>
                        Save Changes
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default UpdateProfile
