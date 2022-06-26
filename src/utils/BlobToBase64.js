export const BlobToBase64 = async (blobUrl) => {
  const res = await fetch(blobUrl)
  const blob = await res.blob()
  const reader = new FileReader()
  reader.readAsDataURL(blob)
  const base64 = await new Promise((res, _rej) => {
    reader.onload = (e) => res(e.target.result)
  })
  return base64
}
