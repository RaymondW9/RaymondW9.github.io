window.onload = function() {
	Particles.init({
		selector: '.particles',
		color: ['#54dee3', '#4589ff'],
		connectParticles: true,
		maxParticles: 200,
		responsive: [
		    {
			    breakpoint: 768,
			    options: {
					connectParticles: false,
					maxParticles: 150
			    }
		    }, {
		    	breakpoint: 320,
		    	options: {
		        	maxParticles: 100,
		        	connectParticles: false
		    	}
			}
		]
	});
};