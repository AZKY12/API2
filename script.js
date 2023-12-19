
        function getWeatherAndSendSMS() {
            const apiKey = '389680d1693cb1f260d79d3c4c9924a7'; // Replace with your OpenWeatherMap API key
            const location = document.getElementById('locationInput').value;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

            fetch(url)
            .then(response => response.json())
            .then(data => {
                const weatherDisplay = document.getElementById('weatherDisplay');
                const weatherContent = document.getElementById('weatherContent');
                weatherContent.innerHTML = `
                Weather Forecast for ${data.name}, ${data.sys.country}:
                Temperature: ${data.main.temp} °C
                Humidity: ${data.main.humidity} %
                Weather: ${data.weather[0].description}
                `;

                weatherDisplay.style.display = 'block';
                weatherDisplay.scrollIntoView({ behavior: 'smooth' });

                const forecastButton = document.querySelector('.btn-secondary');
                forecastButton.style.animation = 'shake 0.5s ease-in-out';
                forecastButton.addEventListener('animationend', () => {
                    forecastButton.style.animation = '';
                });

                sendMessage();
                displayWindyMap(data.coord.lat, data.coord.lon);
            })
            .catch(error => console.log('Error:', error));
        }

        function sendMessage() {
            const weatherContent = document.getElementById('weatherContent').innerText;
            const phoneNumber = +94768809150; // Replace with the desired phone number

            const username = 'azkysarafath';
            const password = 'yJZVqHb@5ypguB6';
            const apiKey = 'a50432bc1a6eaecd73f2f3071beb144c-942a3b5f-cb90-4f33-950d-467ebeac6b89';

            fetch('https://dk9mp1.api.infobip.com/sms/2/text/single', {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa(`${username}:${password}`),
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey
                },
                body: JSON.stringify({
                    from: 'Alert',
                    to: phoneNumber,
                    text: weatherContent
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Message sent successfully!', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }

        function displayWindyMap(latitude, longitude) {
            const windyApiKey = 'Sz4sfdPLH87TpflvjmYmgjq7ypsA017V';
            const windyMap = document.getElementById('windyMap');
            windyMap.innerHTML = `
                <iframe
                    width="100%"
                    height="100%"
                    frameborder="0"
                    src="https://embed.windy.com/embed2.html?lat=${latitude}&lon=${longitude}&detailLat=${latitude}&detailLon=${longitude}&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
                ></iframe>
            `;
        }
    