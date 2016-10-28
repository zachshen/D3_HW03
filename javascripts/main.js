  <script>
              for (var i = 0; i < 20; i++) {
                    var thisNum = random(20, 300);
                    d3.select("svg")
                        .append("rect")
                        .attr({
                            x: 10,
                            y: 10 + 12 * i,
                            width: thisNum,
                            height: 10,
                            fill: "lightgreen"
                        });
                    d3.select("svg")
                        .append("text")
                        .attr({
                            x: thisNum + 15,
                            y: 20 + 12 * i,
                            "font-size": 12
                        }).text(thisNum);
                }

                function random(n, m) {
                    return Math.ceil(Math.random() * (m - n) + n);
                }
            </script>