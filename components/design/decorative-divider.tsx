"use client"
import { ReactNode, useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    wrap
} from "framer-motion";

interface ParallaxProps {
    children: ReactNode;
    baseVelocity: number;
}

const spanStyle = `text-2xl md:text-4xl font-serif italic mx-4 md:mx-8`;

function ParallaxText({ children, baseVelocity = 25 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-25, 25, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 3500);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <div className="parallax bg-light-green p-4 md:p-8 ">
            <motion.div className="scroller flex whitespace-nowrap" style={{ x }}>

                <h5>{children}</h5>
                <h5>{children}</h5>
                <h5>{children}</h5>
                <h5>{children}</h5>
            </motion.div>
        </div>
    );
}

export default function App() {
    return (
        <section>
            <ParallaxText baseVelocity={-5} ><div className="text-xl md:text-2xl">Timeless Design <span className={spanStyle}>/</span> Inspired by Nature <span className={spanStyle}>/</span> Natural Harmony <span className={spanStyle}>/</span> Guided by Craft <span className={spanStyle}>/</span> Sustainable Design <span className={spanStyle}>/ </span> </div></ParallaxText>
        </section>
    );
}
