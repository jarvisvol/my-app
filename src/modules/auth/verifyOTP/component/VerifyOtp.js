import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Label } from 'semantic-ui-react'

export default function VerifyOtp({status, verifyOtp, resendOtp, email}) {
    const navigate = useNavigate();

    const [formObj, setformObj] = useState({
        email: email ? email : '',
        otp:''
    })

    useEffect(() => {
        switch (status) {
            case 'OTP_VERIFY_SUCCESS':
                navigate('/login');
                break;
            default:
                break;
        }

    },[status]) 

    useEffect(() => {
        setformObj({
            ...formObj,
            email: email ? email : ''
        })
    }, [email])

    const verifyHandler = () => {
        verifyOtp(formObj)
    }

    const resendOtpHandler = () => {
        resendOtp({email: email});
    }


  return (
    <div>
        <div>
            <Label>Email</Label>
            <Input type='text' value={email  ? email :''} disabled/>
        </div>
        <div>
            <Label>OTP</Label>
            <Input onChange={(e) => setformObj({...formObj, otp:e.target.value})} type='number' />
        </div>
        <div>
            <Button onClick={() => verifyHandler()}>Verify</Button>
        </div>
        <div>
            <Button onClick={() => resendOtpHandler()}>Resend</Button>
        </div>
    </div>
  )
}
