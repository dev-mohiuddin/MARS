import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

function Profile () {
    const user = {
        userName: 'GSutton',
        email: 'gord@suttonintegrated.com',
        password: '',
        confirmPassword: '',
        firstName: 'Gord',
        lastName: 'Sutton',
        mobile: '',
        home: '',
        office: '',
        countryRegion: 'U.S.A.',
        city: 'Hemet',
        gender: 'Male',
        birthdate: '1 Jan 1960',
        language: 'English',
    }

    return (
        <div className='h-[calc(100vh-90px)] justify-center items-center flex'>
            <Card className='p-6 w-full max-w-lg mx-auto '>
                <CardHeader className='flex items-center space-x-4 border-b pb-4'>
                    <Avatar className='w-16 h-16'>
                        <AvatarImage src='' alt={user?.firstName || user?.userName} />
                        <AvatarFallback>
                            {user?.firstName?.charAt(0) || user?.userName?.charAt(0) || 'U'}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className='text-2xl font-bold'>
                            {user?.firstName || 'First Name'} {user?.lastName || 'Last Name'}
                        </CardTitle>
                        <CardDescription className='text-sm '>{user?.email || 'Email not provided'}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className='space-y-6 mt-4'>
                    <div className='flex items-center gap-5'>
                        <span className='text-sm font-semibold '>Gender</span>
                        <Badge>{user?.gender || 'N/A'}</Badge>
                    </div>
                    <Separator />

                    <div className='flex flex-col space-y-2'>
                        <div className='flex justify-between items-center'>
                            <span className='text-sm font-semibold '>Username</span>
                            <span className='text-base text-muted-foreground'>{user?.userName || 'Not Provided'}</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-sm font-semibold '>Mobile</span>
                            <span className='text-base text-muted-foreground'>{user?.mobile || 'Not Provided'}</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-sm font-semibold '>Birthday</span>
                            <span className='text-base text-muted-foreground'>{user?.birthdate || 'Not Provided'}</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-sm font-semibold '>Home</span>
                            <span className='text-base text-muted-foreground'>{user?.home || 'Not Provided'}</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-sm font-semibold '>Office</span>
                            <span className='text-base text-muted-foreground'>{user?.office || 'Not Provided'}</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-sm font-semibold '>Country/Region</span>
                            <span className='text-base text-muted-foreground'>{user?.countryRegion}</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-sm font-semibold '>City</span>
                            <span className='text-base text-muted-foreground'>{user?.city}</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-sm font-semibold '>Preferred Language</span>
                            <span className='text-base text-muted-foreground'>{user?.language}</span>
                        </div>
                    </div>
                    <Separator />
                    <Link to={'/dashboard/update-profile'}>
                        <Button variant='default' className='w-full'>
                            Update Profile
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}

export default Profile
