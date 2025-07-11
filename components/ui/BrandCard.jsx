import { ChevronRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const BrandCard1 = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-[90px] py-12 md:py-28 rounded-[80px] bg-[#141414]">
        <div className="flex flex-col gap-4 justify-between">
          <div className="text-xl md:text-2xl font-bold"> logo Better Report</div>
          <h2 className="text-3xl md:text-5xl font-bold">Elevate your
            ‍everyday</h2>
            <div className="justify-end items-end md:hidden">
          <Image src="/st-images/wereach1.webp" alt="Brand Card 1" width={500} height={500} className="w-[180px] " />
        </div>
          <p className="text-base text-white/50">Launched in August 2023, Better Report provides the practical tips and expert advice you need to pare down the complexities of everyday living. Subscribe and save time, effort, and money.</p>
         <Button
            href="/brands"
            text="OUR BRANDS"
         />
        </div>
        <div className="justify-end items-end hidden md:flex">
          <Image src="/st-images/wereach1.webp" alt="Brand Card 1" width={500} height={500} className="w-[220px] " />
        </div>
      </div>
    </div>
  )
}



const BrandCard2 = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-[90px] py-12 md:py-28 rounded-[80px] bg-[#141414]">
        <div className=" justify-start items-start hidden md:flex">
          <Image src="/st-images/wereach1.webp" alt="Brand Card 1" width={500} height={500} className="w-[220px]" />
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <div className="text-xl md:text-2xl font-bold"> logo Better Report</div>
          <h2 className="text-3xl md:text-5xl font-bold">Elevate your
            ‍everyday</h2>
            <div className="items-end flex justify-end md:hidden ">
          <Image src="/st-images/wereach1.webp" alt="Brand Card 1" width={500} height={500} className="w-[180px] " />
        </div>
          <p className="text-base text-white/50">Launched in August 2023, Better Report provides the practical tips and expert advice you need to pare down the complexities of everyday living. Subscribe and save time, effort, and money.</p>
          <Button
            href="/brands"
            text="OUR BRANDS"
         />
        </div>
      </div>
    </div>
  )
}

const BrandCard3 = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className=" px-12 py-16 grid grid-cols-2 rounded-[40px] bg-[#141414]">
        <div className="flex flex-col gap-4 justify-between">
          <div className="text-2xl font-bold"> logo Better Report</div>
          <h2 className="text-3xl font-bold">Elevate your
            ‍everyday</h2>
          <Button
            href="/brands"
            text="OUR BRANDS"
         />
        </div>
      </div>
    </div>
  )
}

export { BrandCard1, BrandCard2, BrandCard3 }