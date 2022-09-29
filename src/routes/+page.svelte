<script lang="ts">
    import { Avatar } from '@brainandbones/skeleton'
</script>

<div>

	<div class="container max-w-[1200px] mx-auto px-4 py-10 md:py-20 space-y-20">
		<!-- Hero -->
		<header>
			<div class="space-y-6">
				<h1 class="text-3xl md:text-5xl lg:text-6xl">
					<span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Hoshana Events</span>
				</h1>
				<h2 class="text-4xl md:text-6xl lg:text-8xl">We cater to all Occasions for decor and Event management.</h2>
				<p class="text-xl">
					We are a One Stop Shop. Be it weddings, Anniversaries, Birthdays etc. We are ever delighted to bring each Clients dreams to reality. 
				</p>
			</div>
		</header>

		<!-- Team -->
		<section class="text-center space-y-6">
			<h2>Meet The Team</h2>
			<ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<li class="card card-body space-y-2 text-center">
					<Avatar src="/deepa.png" background="bg-transparent" width="w-24" shadow="shadow-xl" class="mx-auto" />
					<h4>Deepa Ben</h4>
					<p>Co-founder & Director</p>
				</li>
				<li class="card card-body space-y-2 text-center">
					<Avatar src="" width="w-24" shadow="shadow-xl" class="mx-auto" />
					<h4>Vivek Ben</h4>
					<p>Co-founder</p>
				</li>
			</ul>
		</section>
	</div>
</div>