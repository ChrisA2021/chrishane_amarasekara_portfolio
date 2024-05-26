import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye } from "lucide-react";
import Image from 'next/image';

type Props = {
	project: Project;
	views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
	return (
		<Link href={`/projects/${project.slug}`}>
			<article className="p-4 md:p-8 flex flex-col lg:flex-row items-center lg:items-center gap-4">
				<div className="flex-1">
					<div className="flex justify-between gap-2 items-center">
						<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
							{project.date ? (
								<time dateTime={new Date(project.date).toISOString()}>
									{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
										new Date(project.date),
									)}
								</time>
							) : (
								<span>SOON</span>
							)}
						</span>
						<span className="text-zinc-500 text-xs flex items-center gap-1">
							<Eye className="w-4 h-4" />{" "}
							{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
						</span>
					</div>
					<h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
						{project.title}
					</h2>
					<p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
						{project.description}
					</p>
				</div>
				<div className="flex-shrink-0">
					<Image
						src={project.image}
						width={project.imageWidth}
						height={project.imageHeight}
						alt={`Picture of ${project.title}`}
						className="object-cover"
					/>
				</div>
			</article>
		</Link>
	);
};
