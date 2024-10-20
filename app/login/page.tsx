// Form using react-hook-forms + zod
import LogInForm from "@/components/ui/LogInForm"
import DarkModeButton from "@/components/ui/DarkModeButton"

export default function login() {
  return <>
    <DarkModeButton />
    <LogInForm />
  </>
}