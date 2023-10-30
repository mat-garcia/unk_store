"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  const {data} = useSession();
  return (
    <div className="">
      {data?.user?.name}
    </div>
  )
}
