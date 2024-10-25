import { useContext } from "react"
import { PreviewContext } from "../context/PreviewContext"
import PreviewModal from "./PreviewModal"


const PreviewDisplayer = () => {

    const previewContext = useContext(PreviewContext)
    if(!previewContext) {
        throw new Error("PreviewContext must be used within PreviewContextProvider")
    }

    const {viewPreview, previewHeader, previewImage, previewBgColor, previewCategorisation, previewDate, previewDuration, previewText, previewType, previewNumberOfListeners} = previewContext
  return (
    <>
        {viewPreview && <PreviewModal previewHeader={previewHeader} previewBgColor={previewBgColor} previewImage={previewImage} previewCategorisation={previewCategorisation} previewText={previewText} previewType={previewType} previewDate={previewDate} previewDuration={previewDuration} previewNumberOfListeners={previewNumberOfListeners} />}
    </>
  )
}

export default PreviewDisplayer