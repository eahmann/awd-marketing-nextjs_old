import { useState } from "react"

import { signIn } from "next-auth/client"
import { useRouter } from "next/router"
//import styles from "../../styles/Login.module.css"

export default function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [loginError, setError] = useState("")
  const router = useRouter()

  function handleUpdate(update) {
    setCredentials({ ...credentials, ...update })
  }

  return (
    <div className="bg-gray-25">
      <div className="relative flex flex-col justify-center h-screen max-w-sm mx-auto">
        <div className="mt-6">
          <label className="text-gray-900" htmlFor="username">
            Email
          </label>
          <input
            className="w-full pl-4 bg-gray-100 border-0 rounded-2xl"
            name="username"
            type="email"
            onChange={(e) => handleUpdate({ username: e.target.value })}
          />
        </div>
        <div className="mt-6">
          <label className="text-gray-900" htmlFor="password">
            Password
          </label>
          <input
            className="w-full pl-4 bg-gray-100 border-0 rounded-2xl"
            name="password"
            type="password"
            onChange={(e) => handleUpdate({ password: e.target.value })}
          />
        </div>
        <span className={"styles.error"}>{loginError}</span>
        <button
          className="p-2 mt-12 text-xl font-bold bg-gray-900 rounded-2xl text-gray-50 leading-7"
          onClick={async () => {
            const response = await signIn("credentials", {
              redirect: false,
              ...credentials,
            })

            if (response.error) {
              setError(response.error)
            } else if (response.ok) {
              router.push("/admin")
            }
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  )
}
