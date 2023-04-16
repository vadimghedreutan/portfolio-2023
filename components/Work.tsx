"use client"
import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"

interface Props {
	title: string
	image: string
	description: string
	link: string
	publishedAt: string
}

const variants = {
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			duration: 1,
			stiffness: 50,
		},
	},
	hidden: { opacity: 0, y: 20 },
	exit: { opacity: 0, y: 20 },
}

const Work = ({ image, title, link }: Props) => {
	const [isLoading, setLoading] = useState(true)
	const controls = useAnimation()
	const [ref, inView] = useInView()
	useEffect(() => {
		if (inView) {
			controls.start("visible")
		}
	}, [controls, inView])
	return (
		<motion.div
			className="border rounded-lg border-[#E9E9E9]"
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={variants}
		>
			<Link href={link} target="_blank" className="mx-auto flex flex-col">
				<div className="relative aspect-video w-full overflow-hidden shadow-sm bg-gray-200 rounded-lg">
					<Image
						src={image}
						alt={title}
						fill
						sizes="100"
						priority
						className={clsx(
							"object-cover",
							isLoading ? "grayscale" : "grayscale-0"
						)}
						onLoadingComplete={() => setLoading(false)}
					/>
				</div>
			</Link>
		</motion.div>
	)
}
export default Work
