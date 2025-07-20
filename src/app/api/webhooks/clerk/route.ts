import { addUser } from '@/actions/userAction'
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data
    const eventType = evt.type
   if (eventType ==='user.created'){
  const {id, email_addresses,image_url,first_name,last_name ,username} = evt.data

  const user = {
    lastName:last_name,
    username:username,
    firstName:first_name,
    email:email_addresses[0].email_address,
    clerkId:id,
    photo:image_url

  }
await addUser(user)
return NextResponse.json({message:"user created",user:user})
   }
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}