import Image from "next/image"
import Link from "next/link"
import { sidebarData } from "./sidebardata"

export default function Leftbar() {
  return (
    <div className="flex flex-col items-start items-center">
    <div className="flex flex-col ">
      {sidebarData.map((item) => (
        <Link key={item.title} href={item.link} passHref>
          <div className="flex gap-x-4 mb-6 text-white ">
          <Image alt="icon" width={20} height={20} src={item.icon} />
          <p>{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
   
  </div>
  )
}
