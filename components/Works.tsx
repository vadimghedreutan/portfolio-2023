import Work from "./Work"
import { items } from "./info"

const Works = () => {
	return (
		<section className="sm:py-8 py-6 w-full relative">
			<div className="px-5 sm:px-2 max-w-2xl mx-auto">
				<h1 className="font-thunder_hc text-4xl font-medium pb-6">
					What I've been working on the past few years
					<span className="text-primary"> .</span>
				</h1>
				<div>
					<div className="relative grid sm:grid-cols-2 sm:gap-4 gap-2">
						{items &&
							items
								.sort((a, b) => {
									if (
										new Date(a.publishedAt) >
										new Date(b.publishedAt)
									) {
										return -1
									}
									return 1
								})
								.slice(0, 4)
								.map((work, index) => (
									<Work key={index} {...work} />
								))}
					</div>
				</div>
			</div>
		</section>
	)
}
export default Works
