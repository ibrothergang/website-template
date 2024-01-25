import Image from "next/image";


export default function Page() {
    return (
        <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
            <div className="flex-col flex items-center">
                <a href="#" className="mb-8 inline-block max-w-full text-black">
                </a>
                <div className="text-center font-semibold max-[991px]: max-[991px]:py-1">
                    <a href="#" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]">About</a>
                    <a href="#" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]">Features</a>
                    <a href="#" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]">Works</a>
                    <a href="#" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]">Support</a>
                    <a href="#" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]">Help</a>
                </div>
                <div className="mb-8 mt-8 [border-bottom:1px_solid_rgb(0,_0,_0)] w-48">
                </div>
                <div className="mb-12 grid-cols-4 grid-flow-col grid w-full max-w-[208px] gap-3">
                    <a href="#" className="mx-auto flex-col flex max-w-[24px] items-center justify-center text-black">
                        <Image src="/icon/icon_facebook.svg" width={24} height={24} alt="" className="inline-block" />
                    </a>
                    <a href="#" className="mx-auto flex-col flex max-w-[24px] items-center justify-center text-black">
                        <Image src="/icon/icon_instagram.svg" width={24} height={24} alt="" className="inline-block" />
                    </a>
                    <a href="#" className="mx-auto flex-col flex max-w-[24px] items-center justify-center text-black">
                        <Image src="/icon/icon_twitter.svg" width={24} height={24} alt="" className="inline-block" />
                    </a>
                </div>
                <p className="max-[479px]:text-sm">© Copyright 2021. All rights reserved.</p>
            </div>
        </div>
    );
}