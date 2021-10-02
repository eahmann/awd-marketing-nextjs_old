import { useRouter } from "next/router"

const PreviewBanner = ({}) => {
  const router = useRouter()
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
    router.asPath
  )}`

  return (
    <div className="py-4 font-semibold tracking-wide text-center text-red-100 bg-red-600">
      <div className="container">
        Preview mode is on.{" "}
        <a className="underline" href={exitURL}>
          Turn off
        </a>
      </div>
    </div>
  )
}

export default PreviewBanner
