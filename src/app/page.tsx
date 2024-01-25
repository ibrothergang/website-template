import Image from "next/image";
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <header>
        {/* <!-- Hero Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Component --> */}
          <div className="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            {/* <!-- Hero Content --> */}
            <div className="flex flex-col">
              {/* <!-- Hero Title --> */}
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">第一个页面元素「h1」这里再次写清楚你要优化的词 </h1>
              <p className="mb-6 max-w-lg text-base text-[#636262] md:mb-10 lg:mb-12"> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus </p>
              {/* <!-- Hero Button --> */}
              <div className="flex items-center">
                <a href="/page1"
                  className="mr-5 flex items-center bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] md:mr-6 lg:mr-8">
                  <p className="mr-6 font-bold">Let's Talk</p>
                  <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 flex-none">
                    <title>Arrow Right</title>
                    <polygon
                      points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9">
                    </polygon>
                  </svg>
                </a>
                <a href="#" className="flex font-bold">
                  <p className="text-black">View Showreel</p>
                  <Image src="/arrow.svg"
                    width={20}
                    height={20}
                    alt="" className="ml-2 inline-block" />
                </a>
              </div>
            </div>
            {/* <!-- Hero Image --> */}
            <Image src="/dashboard.jpg"
              width={781}
              height={843}
              alt="" className="inline-block h-full w-full max-w-[640px]" />
          </div>
        </div>
      </header>
      <Footer />
    </main>
  );
}
