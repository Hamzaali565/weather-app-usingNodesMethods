        //step#0

        let heading = document.createTextNode("Weather App")
        document.querySelector("#heading").appendChild(heading)

        // inputHTML
        let inpDiv = document.createElement("div");
        let input = document.createElement("input");
        input.setAttribute("id", "input1");
        input.setAttribute("class", "input");
        inpDiv.appendChild(input);

        // buttonHTML
        let butDiv = document.createElement("div")
        let button = document.createElement("button");
        let inButton = document.createTextNode("Submit");
        button.setAttribute("onClick", "null1()");
        button.setAttribute("class", "button")
        button.appendChild(inButton)
        butDiv.appendChild(button)

        // print on screen
        document.querySelector("#call").appendChild(inpDiv);
        document.querySelector("#call").appendChild(butDiv);



        function null1() {

            let input = document.querySelector("#input1").value;


            axios.get(`https://api.weatherapi.com/v1/current.json?key=ecfc6eab7b3c493a9a1194300223006&q=${input}`)
                .then(function (response) {
                    // handle success
                    console.log(response.data);


                    //step#1
                    let q = document.createTextNode(`${response.data.current.temp_c}°C`)
                    document.querySelector("#degree").appendChild(q);


                    //step#2

                    // HTML<for CITYNAME
                    let divA = document.createElement("div");
                    divA.setAttribute("class", "city")
                    let textA = document.createTextNode(`${response.data.location.name}`);
                    divA.appendChild(textA);

                    // HTML for Weather condition 
                    let divB = document.createElement("div");
                    divB.setAttribute("class", "condition")
                    let textB = document.createTextNode(`${response.data.current.condition.text}`);
                    divB.appendChild(textB);
                    document.querySelector("#cityName").appendChild(divA);
                    document.querySelector("#cityName").appendChild(divB);



                    //Step#3 precipitation
                    let inside = document.createTextNode(`Precipitation:  ${response.data.current.precip_in}%`);
                    document.querySelector("#precipitation").appendChild(inside);

                    //step#4 Humidity
                    let div4 = document.createElement("div");
                    let inside1 = document.createTextNode(`Humidity:   ${response.data.current.humidity}%`);
                    document.querySelector("#humidity").appendChild(inside1);

                    //step#5 Wind

                    let inside2 = document.createTextNode(`Wind:   ${response.data.current.wind_kph}km/h`);
                    document.querySelector("#wind").appendChild(inside2);

                    //step#6 Visibility

                    let inside3 = document.createTextNode(`Visibility:  ${response.data.current.vis_km} km`);
                    document.querySelector("#visibility").appendChild(inside3);


                });
        }
        null1();

