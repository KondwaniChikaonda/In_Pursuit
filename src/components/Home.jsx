import Image from "next/image"

export default function HomePage() {
  return (
    <div className=" flex flex-row">
      <div className="">
      <Image
          className="rounded-lg bg-gray-400"
            src="/home.png"
            alt="Logo"
            height={30}
            width={30}
          />
      </div>
      <div>
        <h1 className="font-serif text-4xl">Introduction</h1>
        <p>
        A little over two years ago, I used to write devotionals. I took a hiatus, but at some point, I felt the Lord urging me to write again, specifically about my story. My hope is not that you see my story, but rather the God whose hand is all over it. Life constantly teaches me that it is hard. Pain and suffering can, in insidious ways, make us forget the goodness of God. Yet, I find encouragement each time I read the Word and witness His faithfulness in others' lives. 

I do not know your story, struggles, pains, hopes, or disappointments in life. But I wrote this with the hope that you see the kind of God we serve. The God who chooses us when no one else does. The God who fiercely fights for and protects us. The God who heals our wounds, no matter how deep. The God who holds us tight, even on days we cannot look at ourselves. The God who gives us beauty for our ashes. The God who calls us home, no matter how far we go. The God who loves us beyond our understanding. The God who died for you and me. The God who, if He does not today, will make it all right one day.

May the good Lord bless you.
        </p>
      </div>
    </div>
  )
}