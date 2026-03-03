<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte'
</script>

<article>
	<div class="content">
		<h3>Первый триатлон в Ростове-на-Дону</h3>
		<time datetime="1/1/2025">
			<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16.625 16.625H4.375V7H16.625M14 0.875V2.625H7V0.875H5.25V2.625H4.375C3.40375 2.625 2.625 3.40375 2.625 4.375V16.625C2.625 17.0891 2.80937 17.5342 3.13756 17.8624C3.46575 18.1906 3.91087 18.375 4.375 18.375H16.625C17.0891 18.375 17.5342 18.1906 17.8624 17.8624C18.1906 17.5342 18.375 17.0891 18.375 16.625V4.375C18.375 3.91087 18.1906 3.46575 17.8624 3.13756C17.5342 2.80937 17.0891 2.625 16.625 2.625H15.75V0.875M14.875 10.5H10.5V14.875H14.875V10.5Z" fill="#F43F5E"/>
			</svg>
			<span>1 января</span>
		</time>
		<address>
			<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5801 18.8198L10.5819 18.819L10.5862 18.8159L10.5994 18.8058L10.651 18.7687C10.6953 18.7363 10.758 18.689 10.8391 18.6269C11.0001 18.5035 11.2285 18.322 11.5011 18.0888C12.2166 17.4772 12.8856 16.8133 13.5026 16.1025C14.9499 14.4287 16.4531 12.0399 16.4531 9.30815C16.4531 7.67628 15.8083 6.11003 14.6603 4.95503C14.0929 4.38335 13.418 3.92954 12.6745 3.61974C11.931 3.30994 11.1336 3.15026 10.3281 3.1499C9.5227 3.15021 8.72529 3.30982 7.98181 3.61954C7.23832 3.92927 6.56343 4.38299 5.996 4.95459C4.84699 6.11231 4.2025 7.67748 4.20313 9.30859C4.20313 12.0399 5.70638 14.4287 7.15363 16.1025C7.77066 16.8133 8.43969 17.4772 9.15519 18.0888C9.42819 18.322 9.65613 18.5035 9.81713 18.6269C9.89611 18.6877 9.97588 18.7475 10.0564 18.8063L10.0704 18.8159L10.0744 18.819L10.0761 18.8198C10.2271 18.9262 10.4292 18.9262 10.5801 18.8198ZM12.5156 9.2749C12.5156 9.85506 12.2852 10.4115 11.8749 10.8217C11.4647 11.2319 10.9083 11.4624 10.3281 11.4624C9.74796 11.4624 9.19157 11.2319 8.78133 10.8217C8.37109 10.4115 8.14063 9.85506 8.14063 9.2749C8.14063 8.69474 8.37109 8.13834 8.78133 7.72811C9.19157 7.31787 9.74796 7.0874 10.3281 7.0874C10.9083 7.0874 11.4647 7.31787 11.8749 7.72811C12.2852 8.13834 12.5156 8.69474 12.5156 9.2749Z" fill="#F43F5E"/>
			</svg>
			<span>Ростов-на-Дону, ул. Пушкинская, д. 131</span>
		</address>
	</div>
	<div class="go_to">
		<Button accent href="#">Посмотреть</Button>
		<Button accent round href="#">
			<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</Button>
	</div>
</article>

<style lang="scss">
	@use '$scss/mixins/scr';
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px;

    border: 1px solid #E5E7EB;
    border-radius: 14px;

    box-shadow: 0 1px 2px 0 #0000000D;
  }

  .content > * + * {
    margin-top: 10px;
  }

  time, address {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-content-color);
    font-style: normal;
  }

  h3 {
    font-size: 1.15em;
    font-weight: 600;

    margin: 0;
  }

	.go_to :global {
    @include scr.higher_than_tablet {
      .button:last-child {
        display: none;
      }
    }

		@include scr.tablet {
			.button:first-child {
        display: none;
			}
		}
	}

</style>