import { getWeatherIcon } from "@/services/weatherService"
import { weatherCardStyles } from "@/styles/weathercard.styles"
import { WeatherData } from "@/types/weather"
import { Image, Text, View } from "react-native"
import { getTemperatureColor } from "@/components/ColorTemperature"


interface WeatherProps {
    weather: WeatherData
}

export default function WeatherCard({ weather }: WeatherProps) {
    const temp = Math.round(weather.main.temp)
    const tempColor = getTemperatureColor(temp)

    return (

        <View style={weatherCardStyles.card}>
            <Text style={weatherCardStyles.cityName}>{weather.name}</Text>

            {weather.weather[0] && <Image
                source={{ uri: getWeatherIcon(weather.weather[0].icon) }}
                style={weatherCardStyles.weatherIcon}

            />}

            <Text style={[weatherCardStyles.temperature, { color: tempColor }]}>
                {Math.round(weather.main.temp)} °C
            </Text>

            {weather.weather[0] && <Text style={weatherCardStyles.description}>
                {weather.weather[0]?.description}
            </Text>}

            <View style={weatherCardStyles.detailsContainer}>
                <View style={weatherCardStyles.detailItems}>
                    <Text style={weatherCardStyles.detailLabel}>Sensação Térmica:</Text>
                    <Text style={weatherCardStyles.detailValue}>{Math.round(weather.main.feels_like)} °C</Text>
                </View>

                <View style={weatherCardStyles.detailItems}>
                    <Text style={weatherCardStyles.detailLabel}>Umidade:</Text>
                    <Text style={weatherCardStyles.detailValue}>{weather.main.humidity}%</Text>
                </View>

                <View style={weatherCardStyles.detailItems}>
                    <Text style={weatherCardStyles.detailLabel}>Vento:</Text>
                    <Text style={weatherCardStyles.detailValue}>{weather.wind.speed} m/s</Text>
                </View>
            </View>
        </View>
    )
}