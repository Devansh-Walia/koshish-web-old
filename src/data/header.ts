import PageRoutes from "./route"

export const navigation = [
	{
		label: "home",
		href: PageRoutes.HOME,
	},
	{
		label: "about us",
		href: PageRoutes.ABOUT,
	},
	{
		label: "contact",
		href: PageRoutes.CONTACT,
	},
	{
		label: "forms",
		href: "#",
		items: [
			{
				label: "join us",
				href: PageRoutes.JOIN_US,
			},
			{
				label: "donation",
				href: PageRoutes.DONATION,
			},
		],
	},
]
