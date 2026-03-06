export class DateTime extends Date {
	settings = {
		fullWeekDaysNames: [
			'Понедельник',
			'Вторник',
			'Среда',
			'Четверг',
			'Пятница',
			'Суббота',
			'Воскресенье'
		],
		shortWeekDaysNames: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
		fullMonthsNames: [
			'Январь',
			'Февраль',
			'Март',
			'Апрель',
			'Май',
			'Июнь',
			'Июль',
			'Август',
			'Сентябрь',
			'Октябрь',
			'Ноябрь',
			'Декабрь'
		]
	}

	get month() {
		const date = this
		return {
			get fullName() {
				return date.settings.fullMonthsNames[date.getMonth()]
			}
		}
	}

	get maxMonthDay() {
		return new Date(this.getFullYear(), this.getMonth() + 1, 0).getUTCDate()
	}

	get weekDay() {
		const date = this
		return {
			get fullName() {
				return date.settings.fullWeekDaysNames[date.getDay()]
			},
			get shortName() {
				return date.settings.shortWeekDaysNames[date.getDay()]
			},
			get isHoliday() {
				return [6, 0].includes(date.getDay())
			}
		}
	}
}
