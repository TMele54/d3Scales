function easeExamples(selector){

    var easing = [
        "easeElastic - Elastic",
        "easeBounce - Bouncing",
        "easeLinear - Linear",
        "easeSin - Sinusoidal",
        "easeQuad - Quadratic",
        "easeCubic - Cubic",
        "easePoly - Polynomial",
        "easeCircle - Circle",
        "easeExp - Exponential",
        "easeBack - Overshoot"
        ];

    var svg = d3.select("#"+selector)
                            .append("svg")
                            .attr("width", 960)
                            .attr("height", 500);

    function circleTransition(easement,yPos){

        var timeCircle = svg.append("circle")
            .attr("fill", "steelblue")
            .attr("r", 20);
        repeat();

        function repeat() {
          timeCircle
            .attr('cx', 210)          // position the circle at 40 on the x axis
            .attr('cy', (yPos*45)+25) // position the circle at 250 on the y axis
            .transition()             // apply a transition
            .ease(easement)           // control the speed of the transition
            .duration(4000)           // apply it over 2000 milliseconds
            .attr('cx', 720)          // move the circle to 920 on the x axis
            .transition()             // apply a transition
            .ease(easement)           // control the speed of the transition
            .duration(4000)           // apply it over 2000 milliseconds
            .attr('cx', 210)          // return the circle to 40 on the x axis
            .on("end", repeat);       // when the transition finishes start again
        };

        var easeType = svg.append("text")
            .attr("dy", ".35em") // set offset y position
            .attr("x", 475)
          .attr("text-anchor", "middle") // set anchor x justification
            .attr("y", (yPos*45)+25)
            .text(easing[yPos]);
    };

    circleTransition(d3.easeElastic,0);
    circleTransition(d3.easeBounce,1);
    circleTransition(d3.easeLinear,2);
    circleTransition(d3.easeSin,3);
    circleTransition(d3.easeQuad,4);
    circleTransition(d3.easeCubic,5);
    circleTransition(d3.easePoly,6);
    circleTransition(d3.easeCircle,7);
    circleTransition(d3.easeExp,8);
    circleTransition(d3.easeBack,9);

}

easeExamples("ease");