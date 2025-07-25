import SplitText from "../reactbits/SplitText/SplitText"

const ChaoticCards = ({title, para, imgpath}) => {
  return (
    <div className="first p-8 mt-8 flex flex-col items-center text-center">
            <div className="flex flex-col gap-0 ">
            <SplitText
            text={title}
            className="text-2xl font-semibold md:text-3xl"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
            <SplitText
            text={para}
            className="text-3xl tracking-tighter md:text-4xl leading-none italic font-[roman]"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
            </div>
            <img className="md:w-[80%] lg:w-1/2" src={imgpath} alt="" />
    </div>
  )
}

export default ChaoticCards
