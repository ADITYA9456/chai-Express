import PaymentPage from '@/app/components/PaymentPage'
import User from '@/app/models/User'
import connectDb from '@/public/db/connectDb'
import { notFound } from "next/navigation"
const Username = async ({ params }) => {

  // If the username is not present in the database, show a 404 page
  const checkUser = async () => {
    await connectDb()
    let u = await User.findOne({ username: params.username })
    if (!u) {
      return notFound()
    }
  }
  await checkUser()



  return (
    <>
      <PaymentPage username={params.username} />
    </>
  )
}

export default Username
 
export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} - Chai Express`,
  }
}