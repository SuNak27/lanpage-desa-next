import Hero from "./hero"
import Navbar from "./navbar"
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Hero />
      <main>{children}</main>
    </>
  )
}