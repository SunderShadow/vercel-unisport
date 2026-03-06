export namespace Auth {
	export type UserData = {
		id: string
		imgUrl: string
		name: string
		subscription: {
			active: boolean
			type: string
			period: string
			nextPayment: Date
		}
	}
}
