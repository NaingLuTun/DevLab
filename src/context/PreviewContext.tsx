import {createContext, ReactNode, useState } from "react";

import React from 'react'

interface PreviewContextType {
    viewPreview: boolean,
    setViewPreview: React.Dispatch<React.SetStateAction<boolean>>,
    previewHeader: string | null,
    setPreviewHeader: React.Dispatch<React.SetStateAction<string | null>>,
    previewImage: string | null,
    setPreviewImage: React.Dispatch<React.SetStateAction<string | null>>,
    previewBgColor: string | null,
    setPreviewBgColor: React.Dispatch<React.SetStateAction<string | null>>,
    previewText: string | null,
    setPreviewText: React.Dispatch<React.SetStateAction<string | null>>,
    previewType: string | null,
    setPreviewType : React.Dispatch<React.SetStateAction<string | null>>,
    previewDate: string | null,
    setPreviewDate: React.Dispatch<React.SetStateAction<string | null>>,
    previewCategorisation: string | null,
    setPreviewCategorisation: React.Dispatch<React.SetStateAction<string | null>>,
    previewDuration: string | null,
    setPreviewDuration: React.Dispatch<React.SetStateAction<string | null>>,
    previewNumberOfListener: number | null,
    setPreviewNumberOfListeners: React.Dispatch<React.SetStateAction<number | null>>
}

interface PreviewContextProviderPropType {
    children: ReactNode,
}

const PreviewContext = createContext<PreviewContextType | undefined>(undefined)

const PreviewContextProvider = ({children}: PreviewContextProviderPropType) => {
    const [viewPreview, setViewPreview] = useState(false)
    const [previewHeader, setPreviewHeader] = useState<string | null>(null)
    const [previewImage, setPreviewImage] = useState<string | null>(null)
    const [previewBgColor, setPreviewBgColor] = useState<string | null>(null)
    const [previewText, setPreviewText] = useState<string | null>(null)
    const [previewType, setPreviewType] = useState<string | null>(null)

    /* optional (for podcasts and articles) */
    const [previewDate, setPreviewDate] = useState<string | null>(null)
    const [previewCategorisation, setPreviewCategorisation] = useState<string | null>(null)
    const [previewDuration, setPreviewDuration] = useState<string | null>(null)
    const [previewNumberOfListeners, setPreviewNumberOfListeners] = useState<number | null>(null)
    

    const contextValue:PreviewContextType = 
    {
        viewPreview: viewPreview,
        setViewPreview: setViewPreview,
        previewHeader: previewHeader,
        setPreviewHeader: setPreviewHeader,
        previewImage: previewImage,
        setPreviewImage: setPreviewImage,
        previewBgColor: previewBgColor,
        setPreviewBgColor: setPreviewBgColor,
        previewText: previewText,
        setPreviewText: setPreviewText,
        previewType: previewType,
        setPreviewType: setPreviewType,
        previewDate: previewDate,
        setPreviewDate: setPreviewDate,
        previewCategorisation: previewCategorisation,
        setPreviewCategorisation: setPreviewCategorisation,
        previewDuration: previewDuration,
        setPreviewDuration: setPreviewDuration,
        previewNumberOfListener: previewNumberOfListeners,
        setPreviewNumberOfListeners: setPreviewNumberOfListeners
    }
  return (
    <PreviewContext.Provider value={contextValue}>
        {children}
    </PreviewContext.Provider>
  )
}

export {PreviewContextProvider, PreviewContext}