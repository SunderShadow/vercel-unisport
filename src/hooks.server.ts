import type { Handle } from '@sveltejs/kit'
import avatar from '$lib/assets/img/avatar.jpg'

export const handle: Handle = ({ event, resolve }) => {
	event.locals.user = {
		id: '1337sonyericson',
		name: 'Пыво',
		imgUrl: avatar,
		subscription: {
			active: true,
			type: 'Премиум на год',
			nextPayment: new Date(Date.parse('01-02-2026')),
		}
	}

	return resolve(event)
}
