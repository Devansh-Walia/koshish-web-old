import React, { useState } from "react"
import type { TimeLineDataType } from "./data"

const TimelineItem = ({
	date,
	title,
	children,
	left = false,
}: {
	date: number
	title: string
	children: React.ReactNode
	left?: boolean
}) => {
	const [show, setShow] = useState(false)

	return (
		<>
			<li
				className={`mb-10 md:flex gap-1 cursor-pointer h-full group md:items-start md:justify-between ${
					left ? "flex-row-reverse" : ""
				}`}
				onClick={() => setShow(!show)}
			>
				<div className="w-full md:w-1/2 text-right hidden md:block pr-4 md:pr-8 mb-4 md:mb-0">
					<span className="uppercase text-sm font-bold tracking-wider">{date}</span>
				</div>
				<div className="h-full flex flex-col justify-center items-center">
					<div className="md:relative group-hover:bg-white md:mx-auto w-3 h-3 border-2 border-red-500 bg-red-500 rounded-full"></div>
					<span className="uppercase text-sm font-bold tracking-wider md:hidden">{date}</span>
					<div className="md:h-12 w-[1px] bg-grey-200 "></div>
				</div>
				<div className="w-full md:w-1/2 pl-4 md:pl-8">
					<h3 className="font-bold">{title}</h3>
					<p className="text-gray-400">{children}</p>
				</div>
			</li>
			{show ? (
				<img
					src={"/timeline/" + date + ".jpg"}
					alt="image"
					className={`max-w-[300px] w-9/10 mx-auto bg-white pl-4 pr-4 pb-16 pt-4 border-2 border-gray-300 shadow-md`}
				/>
			) : null}
		</>
	)
}

const Timeline = ({ data }: { data: TimeLineDataType[] }) => {
	return (
		<div className="container-fluid px-4 sm:px-8 lg:px-16 xl:px-32">
			<header className="bg-gray-800 text-white font-light p-12 text-center">
				<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-5">Simple Responsive Timeline</h1>
				<p className="text-xs uppercase tracking-wide font-bold">
					Handcrafted by{" "}
					<a
						href="http://overflowdg.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-red-500 hover:text-red-700 no-underline"
					>
						Overflow
					</a>
				</p>
			</header>
			<div className="py-16 even:bg-gray-100">
				<div className="mx-auto md:w-8/12 lg:w-6/12">
					<ul className="space-y-5">
						{data.map((item, index) => (
							<TimelineItem key={index} left={index % 2 === 0} date={item.year} title="Event Title">
								{item.details}
							</TimelineItem>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Timeline
