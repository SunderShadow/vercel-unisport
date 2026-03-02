<script lang="ts">
	import Event from './Event.svelte'
	import GymIcon from '$lib/components/icons/Gym.svelte'
	import Gymnastics from '$lib/components/icons/Gymnastics.svelte'
	import Swim from '$lib/components/icons/Swim.svelte'
	import Timetable from '$lib/components/Timetable/Timetable.svelte'
	import { DateTime } from '$lib/dateTime/date'

	let currentDate = $state(new DateTime())
</script>

<div class="wrapper">
	<button id="add" class="icon">
		<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M13.5 9.74854H9.75V13.4985C9.75 13.6974 9.67098 13.8882 9.53033 14.0289C9.38968 14.1695 9.19891 14.2485 9 14.2485C8.80109 14.2485 8.61032 14.1695 8.46967 14.0289C8.32902 13.8882 8.25 13.6974 8.25 13.4985V9.74854H4.5C4.30109 9.74854 4.11032 9.66952 3.96967 9.52886C3.82902 9.38821 3.75 9.19745 3.75 8.99854C3.75 8.79962 3.82902 8.60886 3.96967 8.46821C4.11032 8.32755 4.30109 8.24854 4.5 8.24854H8.25V4.49854C8.25 4.29962 8.32902 4.10886 8.46967 3.9682C8.61032 3.82755 8.80109 3.74854 9 3.74854C9.19891 3.74854 9.38968 3.82755 9.53033 3.9682C9.67098 4.10886 9.75 4.29962 9.75 4.49854V8.24854H13.5C13.6989 8.24854 13.8897 8.32755 14.0303 8.46821C14.171 8.60886 14.25 8.79962 14.25 8.99854C14.25 9.19745 14.171 9.38821 14.0303 9.52886C13.8897 9.66952 13.6989 9.74854 13.5 9.74854Z"
				fill="#272327" />
		</svg>
	</button>

	<div class="title">
		<h1>Расписание</h1>
		<p>Планируйте и просматривайте расписание тренировок и мероприятий</p>
	</div>

	<Timetable totalViewCount={11} bind:currentDate />

	<Event period={[new Date(0, 0, 0, 12, 0), new Date(0, 0, 0, 14, 55)]} complete={true} />
	<Event period={[new Date(0, 0, 0, 16, 0), new Date(0, 0, 0, 17, 0)]} icon={GymIcon} />
	<Event period={[new Date(0, 0, 0, 18, 0), new Date(0, 0, 0, 18, 45)]} icon={Gymnastics} />
	<Event period={[new Date(0, 0, 0, 19, 0), new Date(0, 0, 0, 20, 10)]} icon={Swim} />
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 20px;
		position: relative;
	}

	#add {
		position: absolute;
		top: 0;
		right: 0;
		width: 32px;
		height: 32px;
	}
</style>
