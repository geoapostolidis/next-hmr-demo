import { useTranslation } from "next-i18next"
import { useEffect } from "react"

export const useHMR = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("i18next-hmr/client").then(({ applyClientHMR }) => {
        applyClientHMR(i18n)
      })
    }
  }, [i18n])
}