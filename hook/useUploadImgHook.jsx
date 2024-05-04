'use client'

import { useState } from 'react'
import app from '@/firebase'
import {ref , getDownloadURL , getStorage , uploadBytes} from 'firebase/storage'
import { v4 } from 'uuid'
const imgDB = getStorage(app)

const useUploadImgHook = () => {
    const [itsUploaded , setItsUploaded] = useState(false)
    const [imgUrl , setImgUrl] = useState(null)
    const handleImgUpload = (img) => {
        const imgs = ref(imgDB , `Img/${v4()}`)
        setItsUploaded(true)
        uploadBytes(imgs , img)
        .then(d => {
            getDownloadURL(d.ref)
            .then(url => {
                setImgUrl(url)
            })
            .finally(() => {
                setItsUploaded(false)
            })
        })
    }

    return [handleImgUpload , imgUrl , itsUploaded]
}

export default useUploadImgHook