import React, { useEffect, useState, useRef } from 'react'
import StreamingAvatar, { AvatarQuality, StreamingEvents } from '@heygen/streaming-avatar'
import { BotMessageSquare, X, LoaderCircle, Mic, Pen, SendHorizonal } from 'lucide-react'
import { botBg } from '@/assets'

const Bot = () => {
    const [mode, setMode] = useState('text')
    const [showBot, setShowBot] = useState(false)
    const [loading, setLoading] = useState(false)
    const [sessionActive, setSessionActive] = useState(false)
    const [voiceStatus, setVoiceStatus] = useState('')
    const avatarRef = useRef(null)
    const videoRef = useRef(null)
    const [userInput, setUserInput] = useState('')

    console.log('show bot', showBot)
    console.log('session active', sessionActive)
    console.log(loading)

    const fetchAccessToken = async () => {
        try {
            const response = await fetch('https://api.heygen.com/v1/streaming.create_token', {
                method: 'POST',
                headers: {
                    'x-api-key': 'NzYyMGU0YmRlMzcxNDAxMjk4MTI3OTQxYjA0OTEyOWUtMTczNjk5MjY0Mw==',
                },
            })
            const data = await response.json()
            return data.data.token
        } catch (error) {
            console.error('Error fetching access token:', error)
            return null
        }
    }

    const initializeSession = async () => {
        setShowBot(true)
        setLoading(true)
        const token = await fetchAccessToken()
        if (!token) return

        const avatar = new StreamingAvatar({ token })
        avatarRef.current = avatar

        const sessionData = await avatar.createStartAvatar({
            quality: AvatarQuality.High,
            avatarName: 'Dexter_Lawyer_Sitting_public',
            disableIdleTimeout: true,
            language: 'en',
        })

        console.log('Session initialized:', sessionData)

        avatar.on(StreamingEvents.STREAM_READY, event => {
            setLoading(false)
            setSessionActive(true)
            if (event.detail && videoRef.current) {
                videoRef.current.srcObject = event.detail
                videoRef.current.play().catch(console.error)
            }
        })

        avatar.on(StreamingEvents.STREAM_DISCONNECTED, () => {
            console.log('Stream disconnected')
            if (videoRef.current) videoRef.current.srcObject = null
            setSessionActive(false)
        })

        avatar.on(StreamingEvents.USER_START, () => setVoiceStatus('Listening...'))
        avatar.on(StreamingEvents.USER_STOP, () => setVoiceStatus('Processing...'))
        avatar.on(StreamingEvents.AVATAR_START_TALKING, () => setVoiceStatus('Avatar is speaking...'))
        avatar.on(StreamingEvents.AVATAR_STOP_TALKING, () => setVoiceStatus('Waiting for you to speak...'))
    }

    const terminateSession = async () => {
        setShowBot(false)
        if (avatarRef.current) {
            await avatarRef.current.stopAvatar()
            avatarRef.current = null
            setSessionActive(false)
        }
    }

    const startVoiceChat = async () => {
        if (!avatarRef.current) return

        try {
            await avatarRef.current.startVoiceChat({ useSilencePrompt: false })
            setVoiceStatus('Waiting for you to speak...')
        } catch (error) {
            console.error('Error starting voice chat:', error)
            setVoiceStatus('Error starting voice chat')
        }
    }

    const handleSpeak = async () => {
        if (avatarRef.current && userInput) {
            await avatarRef.current.speak({ text: userInput })
            setUserInput('')
        }
    }

    const switchMode = async newMode => {
        if (mode === newMode) return
        setMode(newMode)

        if (newMode === 'text') {
            if (avatarRef.current) await avatarRef.current.closeVoiceChat()
        } else {
            await startVoiceChat()
        }
    }

    useEffect(() => {
        return () => {
            terminateSession()
        }
    }, [])

    return (
        <div className='z-50 bg-black'>
            {showBot ? (
                <div className='z-50 absolute right-10 bottom-[90px] w-[500px] rounded-md overflow-hidden'>
                    <div className='relative'>
                        <video ref={videoRef} autoPlay playsInline style={{ width: '100%', height: 'auto' }} />

                        <video
                            className={`${sessionActive ? 'block' : 'hidden'} rounded-md `}
                            ref={videoRef}
                            autoPlay
                            playsInline
                            style={{ width: '100%', height: 'auto' }}
                        />

                        <div className={`${sessionActive ? 'hidden' : 'block'}`}>
                            <img src={botBg} className='h-full w-full object-cover rounded-md' alt='Bot' srcset='' />
                        </div>

                        <div className='chat-modes absolute bottom-2 w-full flex justify-center gap-5 ' role='group'>
                            <button
                                className={`${
                                    mode === 'text' ? 'active' : ''
                                } p-2 bg-primary/70 text-white rounded-full  `}
                                onClick={() => switchMode('text')}
                                disabled={!sessionActive}
                            >
                                <Pen size={20} />
                            </button>
                            <button
                                className={`${
                                    mode === 'voice' ? 'active' : ''
                                } p-2 bg-primary/70 text-white rounded-full`}
                                onClick={() => switchMode('voice')}
                                disabled={!sessionActive}
                            >
                                <Mic size={20} />
                            </button>
                        </div>
                    </div>

                    <div className='mt-2 w-full flex '>
                        {mode === 'text' && (
                            <div className='w-full flex items-center ' id='textModeControls'>
                                <input
                                    type='text'
                                    value={userInput}
                                    className="w-full h-10 rounded-l-md px-3 outline-none  "
                                    onChange={e => setUserInput(e.target.value)}
                                    placeholder='Type something to talk to the avatar...'
                                />
                                <button className='p-2 justify-center items-center bg-primary rounded-r-md' onClick={handleSpeak}>
                                    <SendHorizonal className='text-white ' size={20} />
                                </button>
                            </div>
                        )}
                    </div>

                    {mode === 'voice' && (
                        <div id='voiceModeControls' className='mt-1'>
                            <div id='voiceStatus'>{voiceStatus}</div>
                        </div>
                    )}
                </div>
            ) : null}

            <div className={` ${loading ? 'hidden' : 'flex'} absolute right-5 md:right-10 bottom-10`}>
                {sessionActive ? (
                    <button onClick={terminateSession} disabled={!sessionActive}>
                        <X className='text-destructive' size={35} />
                    </button>
                ) : (
                    <button onClick={initializeSession} disabled={sessionActive}>
                        <BotMessageSquare className='text-primary' size={35} />
                    </button>
                )}
            </div>
            {loading && (
                <div className='absolute right-5 md:right-10 bottom-10'>
                    <LoaderCircle className='animate-spin' size={35} />
                </div>
            )}
        </div>
    )
}

export default Bot
