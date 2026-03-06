<script>
	import Label from '$lib/components/Form/Label.svelte'
	import Input from '$lib/components/Form/Input.svelte'
	import Switch from '$lib/components/Switch/Switch.svelte'
</script>

<h1>Настройки профиля</h1>

<div>
	<!--	<label for="">Фото профиля</label>-->
	<!--	<img src="" alt="">-->
</div>

<div>
	<Label>Имя:</Label>
	<Input placeholder="Сэргеев">
		{#snippet post()}
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M3 13.5C3 12.7044 3.31607 11.9413 3.87868 11.3787C4.44129 10.8161 5.20435 10.5 6 10.5H12C12.7956 10.5 13.5587 10.8161 14.1213 11.3787C14.6839 11.9413 15 12.7044 15 13.5C15 13.8978 14.842 14.2794 14.5607 14.5607C14.2794 14.842 13.8978 15 13.5 15H4.5C4.10218 15 3.72064 14.842 3.43934 14.5607C3.15804 14.2794 3 13.8978 3 13.5Z"
					stroke="#272327"
					stroke-width="1.5"
					stroke-linejoin="round" />
				<path
					d="M9 7.5C10.2426 7.5 11.25 6.49264 11.25 5.25C11.25 4.00736 10.2426 3 9 3C7.75736 3 6.75 4.00736 6.75 5.25C6.75 6.49264 7.75736 7.5 9 7.5Z"
					stroke="#272327"
					stroke-width="1.5" />
			</svg>
		{/snippet}
	</Input>
</div>

<div>
	<Label>Фамилия:</Label>
	<Input placeholder="Вячеслэйвович">
		{#snippet post()}
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M3 13.5C3 12.7044 3.31607 11.9413 3.87868 11.3787C4.44129 10.8161 5.20435 10.5 6 10.5H12C12.7956 10.5 13.5587 10.8161 14.1213 11.3787C14.6839 11.9413 15 12.7044 15 13.5C15 13.8978 14.842 14.2794 14.5607 14.5607C14.2794 14.842 13.8978 15 13.5 15H4.5C4.10218 15 3.72064 14.842 3.43934 14.5607C3.15804 14.2794 3 13.8978 3 13.5Z"
					stroke="#272327"
					stroke-width="1.5"
					stroke-linejoin="round" />
				<path
					d="M9 7.5C10.2426 7.5 11.25 6.49264 11.25 5.25C11.25 4.00736 10.2426 3 9 3C7.75736 3 6.75 4.00736 6.75 5.25C6.75 6.49264 7.75736 7.5 9 7.5Z"
					stroke="#272327"
					stroke-width="1.5" />
			</svg>
		{/snippet}
	</Input>
</div>

<div>
	<Label>Номер телефона:</Label>
	<Input placeholder="+7 (999) 999-99-99">
		{#snippet post()}
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M4.965 8.0925C6.045 10.215 7.785 11.9475 9.9075 13.035L11.5575 11.385C11.76 11.1825 12.06 11.115 12.3225 11.205C13.1625 11.4825 14.07 11.6325 15 11.6325C15.4125 11.6325 15.75 11.97 15.75 12.3825V15C15.75 15.4125 15.4125 15.75 15 15.75C7.9575 15.75 2.25 10.0425 2.25 3C2.25 2.5875 2.5875 2.25 3 2.25H5.625C6.0375 2.25 6.375 2.5875 6.375 3C6.375 3.9375 6.525 4.8375 6.8025 5.6775C6.885 5.94 6.825 6.2325 6.615 6.4425L4.965 8.0925Z"
					fill="#272327" />
			</svg>
		{/snippet}
	</Input>
</div>

<div>
	<Label>Email:</Label>
	<Input placeholder="mail@yandex.ru">
		{#snippet post()}
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M16.5 4.5C16.5 3.675 15.825 3 15 3H3C2.175 3 1.5 3.675 1.5 4.5V13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V4.5ZM15 4.5L9 8.25L3 4.5H15ZM15 13.5H3V6L9 9.75L15 6V13.5Z"
					fill="#272327" />
			</svg>
		{/snippet}
	</Input>
</div>

<div>
	<Label>Дата рождения:</Label>
	<Input placeholder="12.12.2000">
		{#snippet post()}
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M9 9H12.75V12.75H9V9ZM14.25 2.25H13.5V0.75H12V2.25H6V0.75H4.5V2.25H3.75C2.925 2.25 2.25 2.925 2.25 3.75V14.25C2.25 15.075 2.925 15.75 3.75 15.75H14.25C15.075 15.75 15.75 15.075 15.75 14.25V3.75C15.75 2.925 15.075 2.25 14.25 2.25ZM14.25 3.75V5.25H3.75V3.75H14.25ZM3.75 14.25V6.75H14.25V14.25H3.75Z"
					fill="#272327" />
			</svg>
		{/snippet}
	</Input>
</div>

<div>
	<Label>Пароль:</Label>
	<div class="input password">
		<Input placeholder="****" readonly>
			{#snippet post()}
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M9 12.75C8.60218 12.75 8.22064 12.592 7.93934 12.3107C7.65804 12.0294 7.5 11.6478 7.5 11.25C7.5 10.4175 8.1675 9.75 9 9.75C9.39782 9.75 9.77936 9.90804 10.0607 10.1893C10.342 10.4706 10.5 10.8522 10.5 11.25C10.5 11.6478 10.342 12.0294 10.0607 12.3107C9.77936 12.592 9.39782 12.75 9 12.75ZM13.5 15V7.5H4.5V15H13.5ZM13.5 6C13.8978 6 14.2794 6.15804 14.5607 6.43934C14.842 6.72064 15 7.10218 15 7.5V15C15 15.3978 14.842 15.7794 14.5607 16.0607C14.2794 16.342 13.8978 16.5 13.5 16.5H4.5C4.10218 16.5 3.72064 16.342 3.43934 16.0607C3.15804 15.7794 3 15.3978 3 15V7.5C3 6.6675 3.6675 6 4.5 6H5.25V4.5C5.25 3.50544 5.64509 2.55161 6.34835 1.84835C7.05161 1.14509 8.00544 0.75 9 0.75C9.49246 0.75 9.98009 0.846997 10.4351 1.03545C10.89 1.22391 11.3034 1.50013 11.6517 1.84835C11.9999 2.19657 12.2761 2.60997 12.4645 3.06494C12.653 3.51991 12.75 4.00754 12.75 4.5V6H13.5ZM9 2.25C8.40326 2.25 7.83097 2.48705 7.40901 2.90901C6.98705 3.33097 6.75 3.90326 6.75 4.5V6H11.25V4.5C11.25 3.90326 11.0129 3.33097 10.591 2.90901C10.169 2.48705 9.59674 2.25 9 2.25Z"
						fill="#272327" />
				</svg>
			{/snippet}
		</Input>
		<button class="button">Сменить пароль</button>
	</div>
</div>

<div>
	<Label>Сторонние сервисы</Label>
	<div class="input services">
		<div class="service">
			<div>Подключен Яндекс ID</div>
			<Switch />
		</div>
	</div>
</div>

<a class="exit">Выйти из аккаунта</a>

<style lang="scss">
	@use '$scss/mixins/scr';

	.password {
		display: flex;
		gap: 20px;

		@include scr.tablet {
			button {
				display: none;
			}
		}
		:global {
			> * {
				flex-grow: 1;
			}
		}
	}

	.services {
		.service + .service {
			margin-top: 10px;
		}
	}
	.service {
		display: flex;
		gap: 20px;
		padding: 16px 25px;
		border: 1px solid #d8dadc;
		border-radius: 14px;
		justify-content: space-between;
		align-items: center;
	}

	.exit {
		color: #ff4040;
		font-weight: 600;
	}
</style>
