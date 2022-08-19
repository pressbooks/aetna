let mix = require( 'laravel-mix' );

mix.sass( 'assets/styles/aetna.scss', 'public/styles', {
	sassOptions: {
		outputStyle: 'expanded',
	},
} );
