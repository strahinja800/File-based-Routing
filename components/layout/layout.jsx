import MainHeader from './main-header'

export default function Layout({ children }) {
  return (
    <>
      {/* Add header here */}
      <MainHeader />
      <main>{children}</main>
    </>
  )
}
