<script>
	import '@brainandbones/skeleton/themes/theme-vintage.css';
	import '@brainandbones/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppBar, AppShell, GradientHeading, LightSwitch } from '@brainandbones/skeleton';

</script>



<div class="bg-hero-topography">
	<AppShell>
		<svelte:fragment slot="pageHeader">
			<AppBar>
				<svelte:fragment slot="lead">
					<GradientHeading tag="h1" class="text-3xl font-bold" direction="bg-gradient-to-r" from="from-primary-500" to="to-accent-500">Hoshana Events</GradientHeading>
				</svelte:fragment>

				<svelte:fragment slot="trail">
					<LightSwitch />
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<!-- Router Slot -->
		<slot />
	
	</AppShell>
</div>
