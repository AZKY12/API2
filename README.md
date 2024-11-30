# Weather Forecast & SMS Notifier

## Overview
This web application provides weather forecasts for any location and sends the details via SMS. Users can enter a location, and the app fetches real-time weather data from the OpenWeatherMap API, displays it on the screen, and sends an SMS with the forecast details using the Infobip API.

## Features
- Enter location to get the current weather forecast.
- Displays weather information including temperature, humidity, and weather description.
- Sends weather details as an SMS to a specified phone number.
- Displays a weather map using Windy API for visual reference.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Weather Data**: OpenWeatherMap API
- **SMS Service**: Infobip API
- **Weather Map**: Windy API

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/AZKY12/API2.git
    ```

2. Replace placeholders in the JavaScript code with your own API keys:
    - OpenWeatherMap API key
    - Infobip API credentials (username, password, and API key)

3. Open `index.html` in a web browser to use the app.

## How to Use

1. Enter a location in the input field.
2. Click the "Get Forecast and Send SMS" button.
3. The app fetches the weather data and displays it on the screen.
4. The weather details will also be sent as an SMS to the specified phone number.


## Acknowledgements
- [OpenWeatherMap API](https://openweathermap.org/)
- [Infobip API](https://www.infobip.com/)
- [Windy API](https://www.windy.com/)
